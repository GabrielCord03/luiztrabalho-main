import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-primary hover:text-primary hover:bg-muted">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-muted-foreground">{description}</p>
            )}
          </header>
          
          <div className="animate-fade-in">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
