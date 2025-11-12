import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const Curiosidades = () => {
  const termos = [
    {
      nome: "Minas Tirith",
      descricao:
        "Significa 'Torre de Guarda' ou 'Torre da Vigilância'. Foi construída para proteger o reino ocidental de Gondor e substituir Osgiliath após sua queda.",
    },
    {
      nome: "Minas Ithil",
      descricao:
        "Traduz-se como 'Torre da Lua'. Irmã de Minas Anor, foi tomada pelas forças de Sauron e rebatizada de Minas Morgul — 'Torre da Feitiçaria'.",
    },
    {
      nome: "Anduin",
      descricao:
        "O Grande Rio da Terra Média. Seu nome significa 'Rio Longo'. Flui desde as Montanhas Nebulosas até o mar, passando por Osgiliath e Lórien.",
    },
    {
      nome: "Gondor",
      descricao:
        "Em sindarin, quer dizer 'Terra de Pedra'. Foi o maior reino dos Homens na Terceira Era, fundado pelos irmãos Isildur e Anárion.",
    },
    {
      nome: "Rohan",
      descricao:
        "Significa 'Terra dos Cavaleiros' ou 'Casa dos Senhores dos Cavalos'. Os rohirrim eram conhecidos pela maestria na montaria e lealdade.",
    },
    {
      nome: "Mordor",
      descricao:
        "Literalmente 'Terra Negra'. Região dominada por Sauron, onde se ergue a Montanha da Perdição e a fortaleza de Barad-dûr.",
    },
    {
      nome: "Eru Ilúvatar",
      descricao:
        "O Criador de todas as coisas. Em quenya, 'Eru' significa 'O Único' e 'Ilúvatar' é 'Pai de Todos'. Criou os Ainur e o mundo de Arda através da música.",
    },
    {
      nome: "Osgiliath",
      descricao:
        "Antiga capital de Gondor, localizada sobre o rio Anduin. Seu nome vem do sindarin e pode significar 'hóspedes das estrelas' ou simplesmente 'forte'. Era um centro de sabedoria e observação dos astros, símbolo da união entre luz e sombra.",
    },
    {
      nome: "Valinor",
      descricao:
        "As Terras Abençoadas onde vivem os Valar e os elfos imortais. O nome significa 'Terra dos Valar' ou 'Lar dos Deuses'.",
    },
    {
      nome: "Silmarils",
      descricao:
        "As três joias criadas por Fëanor que continham a luz das Duas Árvores de Valinor. Símbolo da beleza e da tragédia élfica.",
    },
    {
      nome: "Palantíri",
      descricao:
        "Pedras-vigias usadas pelos reis de Gondor e Arnor para se comunicarem a grandes distâncias. 'Palantír' significa 'Aquele que Vê de Longe'.",
    },
    {
      nome: "Mithril",
      descricao:
        "Metal raro e precioso extraído nas minas de Moria. Leve como o ar e forte como o aço. Em sindarin, significa 'Brilho Cinzento'.",
    },
    {
      nome: "Numenor",
      descricao:
        "A grande ilha dos Homens abençoados. Seu nome vem do quenya e quer dizer 'Terra do Oeste'. Sua queda inspirou a lenda da Atlântida.",
    },
  ];

  return (
    <PageLayout
      title="Curiosidades e Bastidores"
      description="Significados, origens e segredos dos nomes da Terra Média"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {termos.map((item, index) => (
          <Card
            key={index}
            className="bg-gradient-card border-2 border-border hover:border-primary transition-all duration-300"
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gold mb-2">
                {item.nome}
              </h3>
              <p className="text-foreground leading-relaxed">{item.descricao}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
};

export default Curiosidades;
