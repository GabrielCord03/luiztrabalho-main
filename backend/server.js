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
    return res
      .status(400)
      .json({ ok: false, msg: "Campos obrigatórios vazios." });
  }

  if (
    username.trim().toLowerCase() === EXPECTED_USER.toLowerCase() &&
    password === EXPECTED_PASS
  ) {
    console.log(`✅ Login bem-sucedido de ${username}`);
    return res.json({ ok: true, msg: "Bem-vindo à Terra Média!" });
  } else {
    console.log(`❌ Tentativa de login falhou: ${username}`);
    return res
      .status(401)
      .json({ ok: false, msg: "Usuário ou senha incorretos." });
  }
});

// 🚀 Inicialização
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Servidor rodando na porta ${PORT}`)
);
