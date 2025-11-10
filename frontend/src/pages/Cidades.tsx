import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const Cidades = () => {
  return (
    <PageLayout 
      title="As cidades e reinos da Terra Média" 
      description="Lugares que moldaram a história"
    >
      <Card className="bg-gradient-card border-2 border-border">
        <CardContent className="prose prose-invert max-w-none p-6 md:p-8">
          <p className="text-lg text-foreground leading-relaxed">
            Uma das coisas que mais me fascinam na obra de Tolkien é o cuidado com que ele 
            descreve cada cidade, cada ruína e cada reino. Ele não apenas cria lugares, mas 
            histórias e culturas inteiras para cada um.
          </p>

          <p className="text-lg text-foreground leading-relaxed mt-4">
            <strong className="text-primary">Rivendell</strong>, por exemplo, é um refúgio de paz entre montanhas, onde o 
            som da água e o brilho das estrelas parecem conversar. Já <strong className="text-primary">Minas Tirith</strong>, 
            a "Cidade Branca", é uma fortaleza majestosa que carrega o peso de séculos de batalhas.
          </p>

          <p className="text-lg text-foreground leading-relaxed mt-4">
            E há <strong className="text-primary">Osgiliath</strong>, uma cidade partida — símbolo de uma era de glória que se perdeu, 
            mas também de esperança. Tolkien descreve as pedras antigas cobertas de musgo, as pontes 
            quebradas sobre o rio Anduin... É impossível não se sentir lá.
          </p>

          <p className="text-lg text-foreground leading-relaxed mt-4">
            Essas descrições me fazem sentir que a Terra Média é real — um lugar que vive 
            dentro da imaginação de todos que a visitam através das páginas dos livros.
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default Cidades;
