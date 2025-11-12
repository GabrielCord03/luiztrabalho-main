import { useState } from "react";
import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";
import { LoginModal } from "@/components/LoginModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import citiesBg from "@/assets/cities-bg.jpg";
import knowledgeBg from "@/assets/knowledge-bg.jpg";

const Index = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Hero />
      
      <main className="container mx-auto px-4 py-12 space-y-16">
        <section className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-gold bg-clip-text text-transparent">
            Explorar o Blog
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard
              title="Como conheci a saga"
              description="Descubra como começou minha jornada pela Terra Média."
              href="/conhecendo"
            />
            <BlogCard
              title="As cidades da Terra Média"
              description="Um olhar apaixonado sobre os lugares que moldaram a história."
              href="/cidades"
              backgroundImage={citiesBg}
            />
            <BlogCard
              title="Curiosidades e bastidores"
              description="Alguns fatos interessantes sobre a criação do universo de Tolkien."
              href="/curiosidades"
            />
          </div>
        </section>

        <section className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <BlogCard
              title="Saiba mais"
              description="Antigas crônicas de Gondor e segredos esquecidos entre rios e ruínas."
              href="/historia"
              backgroundImage={knowledgeBg}
              special
            />
            <BlogCard
              title="Mitologia da Terra Média"
              description="A criação de Arda pelos Valar e as eras antigas antes do Senhor dos Anéis."
              href="/mitologia"
              backgroundImage={knowledgeBg}
              special
            />
          </div>
        </section>

        <section className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-gold bg-clip-text text-transparent">
            Explorações Especiais
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BlogCard
              title="Falas Icônicas"
              description="As palavras que ecoam pela eternidade."
              href="/falas"
            />
            <BlogCard
              title="Feitos e Batalhas"
              description="Reviva os momentos que moldaram o destino da Terra Média."
              href="/feitos"
            />
          </div>
        </section>

        {/* Botão secreto */}
        <div className="fixed bottom-4 right-4 z-50">
          <Link to="/dicas">
            <Button 
              variant="ghost" 
              size="sm"
              className="opacity-20 hover:opacity-100 transition-opacity duration-300 text-primary"
            >
              dicas
            </Button>
          </Link>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">© 2025 - Blog da Terra Média</p>
          <Button 
            onClick={() => setLoginOpen(true)}
            className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
          >
            Entrar
          </Button>
        </div>
      </footer>

      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
};

export default Index;
