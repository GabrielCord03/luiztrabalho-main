(() => {
  // Decodificação do usuário esperado
  const _key = ('S'.charCodeAt(0) ^ 26) ^ ('x'.charCodeAt(0) & 0x7f);
  const _encUser = [94,66,86,88,93,88,80,69,89];

  function _decode(arr, key){
    let out = '';
    for(let i=0;i<arr.length;i++) out += String.fromCharCode(arr[i] ^ key);
    return out;
  }

  const EXPECTED_USER = (_decode(_encUser, _key) || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  
  
  let EXPECTED_PASS_HASH_HEX = '';

  const MAX_ATTEMPTS = 5;
  const COOLDOWN_SECONDS = 60;
  const LS_KEY = 'terramedia_login_state_v1';
  const normalize = s => s ? s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim() : '';

  // Elementos da interface
  const entrarBtn = document.getElementById("entrarBtn");
  const modalBg = document.getElementById("loginModal");
  const modalInner = modalBg ? (modalBg.querySelector('.modal') || modalBg) : null;
  const userInput = document.getElementById("user");
  const passInput = document.getElementById("pass");
  const tryBtn = document.getElementById("tryBtn");
  
  // Elemento de mensagem
  let msgEl = modalInner ? modalInner.querySelector('#loginMsg') : null;
  if(modalInner && !msgEl){
    msgEl = document.createElement('div');
    msgEl.id = 'loginMsg';
    msgEl.style.marginTop = '10px';
    msgEl.style.fontWeight = '700';
    modalInner.appendChild(msgEl);
  }

  // Função para calcular hash SHA-256
  async function sha256Hex(str){
    const enc = new TextEncoder().encode(str);
    const hashBuf = await crypto.subtle.digest('SHA-256', enc);
    
    const bytes = new Uint8Array(hashBuf);
    return Array.from(bytes).map(b => b.toString(16).padStart(2,'0')).join('');
  }

  // Função para inicializar o hash da senha
  async function initializePasswordHash() {
    try {
      
      const hash = await sha256Hex("SarumanFaramir");
      EXPECTED_PASS_HASH_HEX = hash;
      console.log('Hash da senha inicializado:', EXPECTED_PASS_HASH_HEX);
    } catch (error) {
      console.error('Erro ao inicializar hash da senha:', error);
      // Fallback caso haja erro
      EXPECTED_PASS_HASH_HEX = '89c7a6c70e1e4c2d4f4a4b4e4d4a4c7b1e2d3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b';
    }
  }

  // Gerenciamento de estado
  function readState(){ try{ const r = localStorage.getItem(LS_KEY); return r ? JSON.parse(r) : null;}catch(e){return null;} }
  function writeState(s){ try{ localStorage.setItem(LS_KEY, JSON.stringify(s)); }catch(e){} }
  let state = readState() || { attemptsLeft: MAX_ATTEMPTS, lockedUntil: 0 };

  // Funções auxiliares da UI
  const setMsg = (t,c) => { if(msgEl){ msgEl.textContent = t || ''; msgEl.style.color = c || '#fff'; } };
  const disableInputs = reason => {
    if(userInput) userInput.disabled = true;
    if(passInput) passInput.disabled = true;
    if(tryBtn) tryBtn.disabled = true;
    setMsg(reason || 'Bloqueado', '#ffd27a');
  };
  const enableInputs = hint => {
    if(userInput) userInput.disabled = false;
    if(passInput) passInput.disabled = false;
    if(tryBtn) tryBtn.disabled = false;
    setMsg(hint || '', '#fff');
  };

  // Sistema de cooldown
  let cooldownTimer = null;
  function startCooldown(ms){
    disableInputs('Bloqueado. Aguardando...');
    if(cooldownTimer) clearInterval(cooldownTimer);
    state.lockedUntil = Date.now() + ms;
    writeState(state);
    cooldownTimer = setInterval(()=> {
      const leftMs = state.lockedUntil - Date.now();
      if(leftMs <= 0){
        clearInterval(cooldownTimer);
        state.lockedUntil = 0;
        state.attemptsLeft = MAX_ATTEMPTS;
        writeState(state);
        enableInputs(`Proteção liberada. Tentativas: ${state.attemptsLeft}`);
      } else {
        const secs = Math.ceil(leftMs/1000);
        setMsg(`Bloqueado. Tente novamente em ${secs}s`, '#ffd27a');
      }
    }, 500);
  }

  // Registro de tentativas falhas
  function registerFailedAttempt(){
    state.attemptsLeft = Math.max(0, (state.attemptsLeft || MAX_ATTEMPTS) - 1);
    if(state.attemptsLeft <= 0){
      const ms = COOLDOWN_SECONDS * 1000;
      state.lockedUntil = Date.now() + ms;
      writeState(state);
      startCooldown(ms);
    } else {
      writeState(state);
      setMsg(`Usuário ou senha incorretos. Tentativas restantes: ${state.attemptsLeft}`, '#ffd27a');
    }
  }

  // Registro de sucesso
  function registerSuccess(displayName){
    state.attemptsLeft = MAX_ATTEMPTS;
    state.lockedUntil = 0;
    writeState(state);
    setMsg(`✔️ Bem-vindo, ${displayName || 'editor'}.`, '#8ef58e');
    setTimeout(()=> {
      if(modalBg.classList) modalBg.classList.remove('active'); else modalBg.style.display = 'none';
    }, 900);
  }

  // Atualização do estado da UI
  function refreshUIState(){
    const now = Date.now();
    if(state.lockedUntil && state.lockedUntil > now){
      startCooldown(state.lockedUntil - now);
    } else {
      if(state.lockedUntil && state.lockedUntil <= now){
        state.lockedUntil = 0;
        state.attemptsLeft = MAX_ATTEMPTS;
        writeState(state);
      }
      enableInputs(`Tentativas restantes: ${state.attemptsLeft}`);
    }
  }

  // Processamento do login
  async function handleLoginAttempt(){
    // Verifica se o hash já foi inicializado
    if (!EXPECTED_PASS_HASH_HEX) {
      setMsg('Sistema não inicializado. Aguarde...', '#ffd27a');
      return;
    }

    const rawUser = userInput ? userInput.value.trim() : '';
    const rawPass = passInput ? passInput.value : '';

    if(!rawUser || !rawPass){
      setMsg('Preencha usuário e senha.', '#ffd27a');
      return;
    }

    const inputUserNorm = normalize(rawUser);
    if(inputUserNorm !== EXPECTED_USER){
      registerFailedAttempt();
      return;
    }

    try{
      const h = await sha256Hex(rawPass);
      if(h === EXPECTED_PASS_HASH_HEX){
        registerSuccess('Osgiliath'); 
      } else {
        registerFailedAttempt();
      }
    }catch(e){
      console.error('Erro ao calcular hash:', e);
      setMsg('Erro interno. Veja console.', '#ffd27a');
    }
  }

  // Event Listeners
  if(entrarBtn){
    entrarBtn.addEventListener('click', (e)=>{
      e && e.preventDefault && e.preventDefault();
      if(modalBg.classList) modalBg.classList.add('active'); else modalBg.style.display = 'flex';
      setTimeout(()=> userInput && userInput.focus(), 120);
      refreshUIState();
    });
  }

  if(modalBg){
    modalBg.addEventListener('click', (e)=>{ 
      if(e.target === modalBg){ 
        modalBg.classList.remove ? modalBg.classList.remove('active') : modalBg.style.display='none'; 
      } 
    });
  }

  if(tryBtn){
    tryBtn.addEventListener('click', (e)=>{ 
      e && e.preventDefault && e.preventDefault(); 
      if(state.lockedUntil && state.lockedUntil > Date.now()){
        const left = Math.ceil((state.lockedUntil - Date.now())/1000);
        setMsg(`Bloqueado. Tente novamente em ${left}s`, '#ffd27a');
        return;
      }
      handleLoginAttempt();
    });
  }

  if(passInput){
    passInput.addEventListener('keydown', (ev)=>{
      if(ev.key === 'Enter'){ ev.preventDefault(); tryBtn && tryBtn.click(); }
    });
  }

  // Inicialização
  async function initialize() {
    await initializePasswordHash();
    refreshUIState();
  }

  // Inicia o sistema
  initialize();

  // Interface para debug
  window.__terramedia_login = {
    EXPECTED_USER,
    getExpectedPassHash: () => EXPECTED_PASS_HASH_HEX,
    state: ()=> readState() || state,
    reset: ()=> { state = { attemptsLeft: MAX_ATTEMPTS, lockedUntil: 0 }; writeState(state); refreshUIState(); }
  };

})();