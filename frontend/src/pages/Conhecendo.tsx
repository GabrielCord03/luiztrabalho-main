import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const Conhecendo = () => {
  return (
    <PageLayout 
      title="Como conheci a saga" 
      description="Minha jornada pela Terra Média"
    >
      <div className="space-y-6">
        <Card className="bg-gradient-card border-2 border-border">
          <CardContent className="prose prose-invert max-w-none p-6 md:p-8">
            <p className="text-lg text-foreground leading-relaxed">
              Meu primeiro contato com <strong className="text-primary">O Senhor dos Anéis</strong> foi quase por acaso. 
              Um amigo me emprestou o DVD de "A Sociedade do Anel", dizendo que era um filme longo, 
              mas inesquecível. Ele não estava errado.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mt-4">
              Logo nas primeiras cenas, fui completamente envolvido pelo universo criado por <strong className="text-primary">J.R.R. Tolkien</strong>: 
              as paisagens da Terra Média, a música épica e os personagens marcantes. Quando Frodo 
              recebe o Anel, percebi que aquela história não era apenas sobre fantasia, mas sobre 
              coragem, amizade e sacrifício.
            </p>

            <p className="text-lg text-foreground leading-relaxed mt-4">
              Depois de assistir à trilogia completa, comecei a ler os livros — e foi aí que 
              minha paixão realmente começou. Tolkien escrevia com tanto detalhe que cada capítulo 
              parecia abrir um portal para outro mundo.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-2 border-primary/50">
          <CardContent className="p-6 text-center">
            <p className="text-lg italic text-muted-foreground">
              "Mesmo a menor pessoa pode mudar o curso do futuro." — Galadriel
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Conhecendo;
