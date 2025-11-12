import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [cooldown, setCooldown] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<number>(0);
  const { toast } = useToast();

  const MAX_ATTEMPTS = 5;
  const COOLDOWN_SECONDS = 60;
  const STORAGE_KEY = "terramedia_login_cooldown";

  // 🔁 Carrega cooldown salvo ao abrir
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const endTime = parseInt(saved, 10);
      const now = Date.now();
      if (now < endTime) {
        setCooldown(Math.ceil((endTime - now) / 1000));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // 🕒 Atualiza o contador
  useEffect(() => {
    if (cooldown === null) return;
    if (cooldown <= 0) {
      setCooldown(null);
      localStorage.removeItem(STORAGE_KEY);
      setAttempts(0);
      return;
    }

    const timer = setInterval(() => {
      setCooldown((prev) => (prev ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  const handleLogin = async () => {
    if (!username || !password) {
      toast({
        title: "Campos vazios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://luiztrabalho-main.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.ok) {
        setSuccessOpen(true);
        onOpenChange(false);
        setTimeout(() => setSuccessOpen(false), 3000);
        setAttempts(0);
        localStorage.removeItem(STORAGE_KEY);
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts >= MAX_ATTEMPTS) {
          const endTime = Date.now() + COOLDOWN_SECONDS * 1000;
          localStorage.setItem(STORAGE_KEY, endTime.toString());
          setCooldown(COOLDOWN_SECONDS);
          setAttempts(0);

          toast({
            title: "⏳ Espere um pouco...",
            description: `Muitas tentativas incorretas. Aguarde ${COOLDOWN_SECONDS}s.`,
            variant: "destructive",
          });
        } else {
          toast({
            title: "❌ Falha no login",
            description: `Usuário ou senha incorretos. Tentativas restantes: ${
              MAX_ATTEMPTS - newAttempts
            }.`,
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        title: "⚠️ Erro de conexão",
        description: "Não foi possível conectar ao servidor.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      {/* 🔐 MODAL DE LOGIN */}
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md bg-card border-2 border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Entrar na Terra Média
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Acesse sua conta para explorar mais conteúdos
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground">
                Usuário
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
                disabled={loading || cooldown !== null}
                className={`bg-input border-border focus:border-primary transition-opacity duration-300 ${
                  cooldown !== null ? "opacity-60 cursor-not-allowed" : ""
                }`}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                disabled={loading || cooldown !== null}
                className={`bg-input border-border focus:border-primary transition-opacity duration-300 ${
                  cooldown !== null ? "opacity-60 cursor-not-allowed" : ""
                }`}
              />
            </div>

            {/* 🕓 Contador do cooldown */}
            {cooldown !== null && (
              <p className="text-center text-yellow-500 font-semibold text-lg animate-pulse">
                Espere {cooldown}s para tentar novamente...
              </p>
            )}

            <Button
              onClick={handleLogin}
              disabled={loading || cooldown !== null}
              className={`w-full bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300 ${
                cooldown !== null ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {cooldown !== null
                ? "Bloqueado"
                : loading
                ? "Verificando..."
                : "Entrar"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 🌟 MODAL DE SUCESSO */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="sm:max-w-lg bg-gradient-to-br from-yellow-500/20 via-black/90 to-yellow-400/10 border-2 border-yellow-500 shadow-lg text-center backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent animate-pulse">
              🌟 Bem-vindo à Terra Média 🌟
            </DialogTitle>
            <DialogDescription className="text-gold text-lg mt-2">
              Os portões se abriram. O segredo foi revelado.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => setSuccessOpen(false)}
              className="bg-gradient-gold text-black font-semibold hover:shadow-gold transition-all duration-300"
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
