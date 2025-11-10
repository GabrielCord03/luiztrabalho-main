import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  const { toast } = useToast();

  const handleLogin = () => {
    if (!username || !password) {
      toast({
        title: "Campos vazios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Simulação de login
    toast({
      title: "Bem-vindo à Terra Média!",
      description: `Olá, ${username}!`,
    });
    
    setUsername("");
    setPassword("");
    onOpenChange(false);
  };

  return (
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
              className="bg-input border-border focus:border-primary"
            />
          </div>
          <Button 
            onClick={handleLogin}
            className="w-full bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
          >
            Entrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
