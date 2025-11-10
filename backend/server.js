// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// permitir requests do frontend (Vite default: http://localhost:5173)
app.use(cors());

// limiter para evitar brute-force
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 10,
  message: { ok: false, msg: 'Muitas tentativas. Tente novamente mais tarde.' }
});
app.use('/login', limiter);

// credencial (somente o username é plain)
const USERNAME = 'Osgiliath';
// coloque aqui o hash gerado (veja abaixo como gerar). NÃO commit o .env com senha real.
const PASSWORD_HASH = process.env.PASSWORD_HASH || '$2a$10$EXEMPLO_HASH_SUBSTITUA'; 

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Usuário e senha fixos para o trabalho
  const VALID_USER = 'Osgiliath';
  const VALID_PASS = 'Saruman!Faramir?';

  if (username === VALID_USER && password === VALID_PASS) {
    return res.json({ ok: true, msg: 'Bem-vindo, Osgiliath!' });
  } else {
    return res.status(401).json({ ok: false, msg: 'Usuário ou senha incorretos.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Auth server rodando na porta ${PORT}`));
