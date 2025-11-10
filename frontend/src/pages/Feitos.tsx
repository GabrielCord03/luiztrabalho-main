import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Feitos = () => {
  const feats = [
    {
      character: "Saruman, o Branco",
      achievements: [
        { title: "Corromper Isengard", description: "Transformou o centro de sabedoria em fortaleza industrial, forjando exércitos e devastando florestas." },
        { title: "Criar os Uruk-hai", description: "Deu origem a uma nova raça de guerreiros leais e poderosos." },
        { title: "Trair os Istari", description: "O mago-chefe se voltou às sombras, acreditando que Sauron venceria." },
        { title: "Manipular Théoden", description: "Usou Gríma para corromper o rei de Rohan." },
        { title: "Atacar Rohan em Duas Frentes", description: "Estratégia militar que quase destruiu o reino dos cavaleiros." }
      ]
    },
    {
      character: "Éomer",
      achievements: [
        { title: "Sobreviver no Desterro", description: "Mesmo exilado, manteve seus homens leais e combativos." },
        { title: "Carga nos Campos de Pelenor", description: "Liderou o ataque que virou o rumo da batalha ao grito de 'À morte!'." }
      ]
    },
    {
      character: "Faramir",
      achievements: [
        { title: "Defender Osgiliath", description: "Protegeu a cidade condenada e recuou com honra e estratégia." },
        { title: "Resistir ao Anel", description: "Enfrentou a tentação e escolheu a sabedoria, superando Boromir em coragem moral." }
      ]
    },
    {
      character: "Arwen",
      achievements: [
        { title: "Escolher a Mortalidade", description: "Renunciou à imortalidade por amor, unindo elfos e homens pela última vez." }
      ]
    },
    {
      character: "Treebeard e os Ents",
      achievements: [
        { title: "Realizar o Conselho dos Ents", description: "Convenceu seu povo a agir — um milagre entre seres tão antigos." },
        { title: "Destruir Isengard", description: "A natureza se ergueu contra a indústria e venceu." }
      ]
    },
    {
      character: "Hobbits do Condado",
      achievements: [
        { title: "A Revolução do Condado", description: "Merry e Pippin libertaram sua terra de Saruman, tornando-se líderes e heróis." }
      ]
    },
    {
      character: "Tom Bombadil",
      achievements: [
        { title: "Dominar o Anel", description: "Imune ao poder do Um Anel, fez o artefato desaparecer como brincadeira — um mistério que desafia até Gandalf." }
      ]
    },
    {
      character: "Elrond e Galadriel",
      achievements: [
        { title: "Manter os Anéis Élficos", description: "Usaram Vilya e Nenya por milênios para proteger seus reinos sem cair na corrupção." }
      ]
    },
    {
      character: "Gothmog, o Senhor dos Balrogs",
      achievements: [
        { title: "Destruir Moria", description: "Liderou a guerra que arrasou Khazad-dûm e transformou o reino dos anões em ruínas eternas." }
      ]
    }
  ];

  return (
    <PageLayout 
      title="Feitos e Batalhas" 
      description="As conquistas que moldaram o destino da Terra Média"
    >
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Os Grandes Feitos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {feats.map((feat, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-elevated"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{feat.character}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {feat.achievements.map((achievement, aIndex) => (
                  <div key={aIndex}>
                    <p className="font-bold text-gold">{achievement.title}:</p>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Feitos;
