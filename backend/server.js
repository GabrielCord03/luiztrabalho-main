import express from "express";
import cors from "cors";
import crypto from "crypto";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

// 🧱 Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// 🔐 Usuário e senha esperados
const EXPECTED_USER = "osgiliath";

// Senha verdadeira: Saruman!Faramir?
// Hash SHA256 gerado a partir dela:
const EXPECTED_PASS_HASH =
  "70f4d28be43f37f7da901b6b2060d9a65e391518a362eb8b44cf32a3852f4fd3";

// 🧮 Função pra gerar hash SHA256
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

// 🌐 Endpoint de teste
app.get("/", (req, res) => {
  res.json({
    msg: "Servidor ativo nas Terras Médias 🌍",
    endpoints: ["/login"],
  });
});

// 🔑 Endpoint de login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ ok: false, msg: "Campos obrigatórios vazios." });
  }

  const hashed = hashPassword(password);

  if (
    username.trim().toLowerCase() === EXPECTED_USER &&
    hashed === EXPECTED_PASS_HASH
  ) {
    console.log(`✅ Login bem-sucedido de ${username}`);
    return res.json({ ok: true, msg: "Bem-vindo à Terra Média!" });
  } else {
    console.log(`❌ Tentativa de login falhou: ${username}`);
    return res.status(401).json({ ok: false, msg: "Usuário ou senha incorretos." });
  }
});

// 🚀 Inicialização
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Servidor rodando na porta ${PORT}`)
);
