import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

const Curiosidades = () => {
  return (
    <PageLayout 
      title="Curiosidades e bastidores" 
      description="Segredos da criação da Terra Média"
    >
      <Card className="bg-gradient-card border-2 border-border">
        <CardContent className="p-12 text-center space-y-6">
          <Construction className="w-16 h-16 mx-auto text-primary animate-pulse" />
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Em Construção
            </h2>
            <p className="text-lg text-foreground mb-4">
              Ainda estamos reunindo as lendas e segredos da produção da saga...
            </p>
            <p className="text-lg text-muted-foreground">
              Retorne mais tarde para descobrir fatos sobre a criação dos idiomas élficos, 
              gravações épicas na Nova Zelândia e muito mais!
            </p>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default Curiosidades;
