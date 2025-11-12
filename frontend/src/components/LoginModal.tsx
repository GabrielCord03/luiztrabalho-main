import { useState } from "react";
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
  const { toast } = useToast();

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
        setSuccessOpen(true); // Abre o modal de sucesso
        onOpenChange(false); // Fecha o de login

        // Fecha automaticamente após 3 segundos
        setTimeout(() => setSuccessOpen(false), 3000);
      } else {
        toast({
          title: "❌ Falha no login",
          description: data.msg || "Usuário ou senha incorretos.",
          variant: "destructive",
        });
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
              <Label htmlFor="username" className="text-foreground">Usuário</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
                disabled={loading}
                className="bg-input border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                disabled={loading}
                className="bg-input border-border focus:border-primary"
              />
            </div>

            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
            >
              {loading ? "Verificando..." : "Entrar"}
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
