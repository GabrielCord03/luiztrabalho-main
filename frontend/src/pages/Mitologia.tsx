import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const Mitologia = () => {
  const sections = [
    {
      title: "",
      content: "Antes mesmo de O Senhor dos Anéis ser escrito, J.R.R. Tolkien já havia criado uma das mitologias mais vastas e coerentes da literatura moderna. Ele não apenas inventou uma história — ele forjou um universo com deuses, anjos, povos e eras inteiras. Essa base é o que dá à Terra Média sua alma e profundidade."
    },
    {
      title: "O Canto da Criação",
      content: "No princípio existia apenas Eru Ilúvatar, o Criador. Dele vieram os Ainur, espíritos poderosos que cantaram a melodia que deu origem ao mundo — o Ainulindalë, o Canto dos Ainur. Essa música divina gerou o universo de Arda, onde toda a história da Terra Média se desenrola.\n\nMas um dos Ainur, Melkor, desejou introduzir sua própria vontade na canção, criando dissonâncias. Mesmo assim, Ilúvatar transformou o caos em parte do plano maior. Assim nasceu o equilíbrio entre harmonia e conflito que marcaria toda a criação."
    },
    {
      title: "Os Valar e a Modelagem do Mundo",
      content: "Alguns Ainur desceram ao mundo recém-criado para moldá-lo. Tornaram-se os Valar, os Poderes de Arda: Manwë (ventos e céus), Ulmo (mares e rios), Aulë (ferreiro criador dos anões), Yavanna (mãe das árvores e frutos) e Varda (criadora das estrelas), entre outros.\n\nEntretanto, Melkor — que mais tarde seria chamado Morgoth — corrompeu boa parte de sua obra com frio, sombras e destruição. Mesmo assim, os Valar resistiram, protegendo o mundo e preparando o caminho para os Filhos de Ilúvatar."
    },
    {
      title: "Os Primogênitos e os Seguidores",
      content: "Os primeiros filhos a despertar foram os Elfos, os Primogênitos — belos, imortais e amantes da arte e do conhecimento. Eles testemunharam as Duas Árvores de Valinor e a luz imortal que iluminava o mundo antes do sol e da lua.\n\nDepois vieram os Homens, os Seguidores, dotados do dom da mortalidade — um presente de Ilúvatar. Ao contrário dos Elfos, que estão presos ao mundo até seu fim, os Homens partem para destinos desconhecidos após a morte, um mistério que nem os Valar compreendem totalmente."
    },
    {
      title: "As Silmarils e a Queda dos Noldor",
      content: "O elfo Fëanor criou as lendárias Silmarils, joias que continham a luz das Duas Árvores. Quando Morgoth as roubou e destruiu as Árvores, Fëanor e seus seguidores juraram vingança, dando início à Guerra das Silmarils. Esse juramento trouxe séculos de tragédias, exílios e batalhas.\n\nEssas histórias, contadas em O Silmarillion, formam o pano de fundo moral e épico de todo o universo tolkieniano — uma história de orgulho, perda e esperança."
    },
    {
      title: "De Morgoth a Sauron: a Sombra que Retorna",
      content: "Após a derrota de Morgoth no fim da Primeira Era, um de seus servos mais fiéis sobreviveu: Sauron. Astuto e disfarçado, ele assumiu o papel de novo Senhor do Escuro. Ao forjar os Anéis do Poder, tentou subjugar Elfos e Homens — e assim, o mal primordial de Morgoth renasceu em nova forma.\n\nO Um Anel concentrava essa ambição: o desejo de dominar todas as vontades, a essência da corrupção em sua forma pura. A luta contra Sauron é o reflexo final da guerra espiritual iniciada no Canto dos Ainur."
    },
    {
      title: "O Eco da Mitologia",
      content: "Toda essa mitologia ecoa em O Hobbit e O Senhor dos Anéis. Cada ruína, canção e lenda carrega o peso desse passado sagrado. Quando os personagens mencionam Valinor, Beren e Lúthien, ou as antigas guerras, eles estão tocando em um tecido histórico vivo.\n\nTolkien criou uma mitologia moderna, com moral, sacrifício e beleza. Ele queria dar à Inglaterra uma lenda fundadora — mas acabou oferecendo ao mundo inteiro um espelho do que há de mais humano: a coragem diante do impossível e a esperança que nunca morre."
    },
    {
      title: "O Destino de Arda e a Última Música",
      content: "Nos escritos finais de Tolkien, o mundo — Arda — ainda não está completo. Ferido pelas guerras e pela corrupção de Morgoth e Sauron, ele aguarda a cura prometida no fim das eras: o Dagor Dagorath, a Última Batalha.\n\nNesse confronto, Morgoth retornará, mas será finalmente derrotado. Então, Eru Ilúvatar entoará uma nova canção, recriando o mundo sem dor nem sombra. Essa profecia, chamada Última Música, encerra toda a mitologia com um renascimento — a harmonia restaurada e o eterno recomeço da luz."
    }
  ];

  return (
    <PageLayout 
      title="A Mitologia da Terra Média" 
      description="A criação de Arda e os Poderes Eternos"
    >
      <div className="space-y-6">
        {sections.map((section, index) => (
          <Card 
            key={index}
            className="bg-gradient-card border-2 border-border hover:border-primary transition-all duration-300"
          >
            <CardContent className="p-6">
              {section.title && (
                <h3 className="text-2xl font-bold text-gold mb-4">{section.title}</h3>
              )}
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="text-foreground leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}

        <Card className="bg-gradient-card border-2 border-primary/50">
          <CardContent className="p-6 text-center">
            <p className="text-lg italic text-muted-foreground">
              "De todas as criações de Ilúvatar, a mais bela é a liberdade — pois dela nascem a música, o amor e o sacrifício."
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Mitologia;
