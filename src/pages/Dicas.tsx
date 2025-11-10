import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Dicas = () => {
  const hints = [
    {
      title: "Entre as Pedras",
      content: "Nem toda ruína está morta — algumas guardam nomes antigos e significados esquecidos."
    },
    {
      title: "O Rio que Divide",
      content: "Procure onde as águas separam o passado do presente. As margens escondem memórias."
    },
    {
      title: "Luz e Escuridão",
      content: "O Sol e a Lua têm suas torres. E em meio a elas, nasceu a cidade das estrelas."
    }
  ];

  const riddles = [
    {
      title: "parte 1!",
      content: "Mago que traiu as terras medias!"
    },
    {
      title: "parte 2",
      content: "Resistiu a maior criação de Souron?"
    }
  ];

  return (
    <PageLayout 
      title="Dicas para os Atentos" 
      description="Apenas os observadores verão o que está oculto nas ruínas..."
    >
      <div className="mb-8 text-center">
        <Sparkles className="w-12 h-12 mx-auto text-primary animate-pulse mb-4" />
        <p className="text-lg text-muted-foreground">
          Você encontrou o caminho secreto! Desvende os enigmas escondidos nas páginas do blog.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {hints.map((hint, index) => (
          <Card 
            key={index}
            className="bg-gradient-card border-2 border-primary/50 hover:border-primary transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl text-gold">{hint.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">{hint.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {riddles.map((riddle, index) => (
          <Card 
            key={index}
            className="bg-gradient-card border-2 border-border hover:border-primary transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl text-primary">{riddle.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{riddle.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
};

export default Dicas;
