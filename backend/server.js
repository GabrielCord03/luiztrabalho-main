import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

// 🧱 Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// 🔐 Usuário e senha esperados
const EXPECTED_USER = process.env.EXPECTED_USER || "Osgiliath";
const EXPECTED_PASS = process.env.EXPECTED_PASS || "Saruman!Faramir?";

// 🧩 Controle de tentativas por IP
const attemptsByIP = new Map(); // Ex: { "127.0.0.1": { attempts: 3, cooldownUntil: 1700000000000 } }

// 🌐 Endpoint de teste
app.get("/", (req, res) => {
  res.json({
    msg: "Servidor ativo nas Terras Médias 🌍",
    endpoints: ["/login"],
  });
});

// 🔑 Endpoint de login com controle de tentativas
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // 📊 Pega registro do IP
  let record = attemptsByIP.get(ip) || { attempts: 0, cooldownUntil: null };

  // 🕓 Verifica cooldown ativo
  if (record.cooldownUntil && Date.now() < record.cooldownUntil) {
    const secondsLeft = Math.ceil((record.cooldownUntil - Date.now()) / 1000);
    return res.status(429).json({
      ok: false,
      msg: `Muitas tentativas! Espere ${secondsLeft}s para tentar novamente.`,
    });
  }

  // 🚫 Campos obrigatórios
  if (!username || !password) {
    return res
      .status(400)
      .json({ ok: false, msg: "Campos obrigatórios vazios." });
  }

  // ✅ Verificação correta
  if (
    username.trim().toLowerCase() === EXPECTED_USER.toLowerCase() &&
    password === EXPECTED_PASS
  ) {
    attemptsByIP.delete(ip); // limpa tentativas do IP
    console.log(`✅ Login bem-sucedido de ${username} (${ip})`);
    return res.json({ ok: true, msg: "Bem-vindo à Terra Média!" });
  }

  // ❌ Falha
  record.attempts++;
  console.log(`❌ Tentativa ${record.attempts}/5 falhou de ${ip}`);

  // 🧊 Se atingiu 5 tentativas -> ativa cooldown
  if (record.attempts >= 5) {
    record.cooldownUntil = Date.now() + 60 * 1000; // 1 minuto de bloqueio
    record.attempts = 0;
    console.log(`⏳ IP ${ip} bloqueado por 1 minuto`);
    attemptsByIP.set(ip, record);
    return res.status(429).json({
      ok: false,
      msg: "Muitas tentativas incorretas. Aguarde 1 minuto para tentar novamente.",
    });
  }

  // 🔁 Atualiza registro
  attemptsByIP.set(ip, record);
  return res.status(401).json({
    ok: false,
    msg: "Usuário ou senha incorretos.",
  });
});

// 🚀 Inicialização
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Servidor rodando na porta ${PORT}`)
);
