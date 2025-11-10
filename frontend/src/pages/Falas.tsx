import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Falas = () => {
  const characters = [
    {
      name: "🧙‍♂️ Gandalf",
      quotes: [
        { text: "Um mago nunca se atrasa, nem se adianta. Ele chega exatamente quando pretende chegar.", note: "Para Bilbo, em 'A Sociedade do Anel'" },
        { text: "Não é nossa parte dominar todos os mares deste mundo, mas fazer o que está ao nosso alcance...", note: "Consolando Frodo" },
        { text: "Mesmo os menores personagens podem mudar o curso do futuro.", note: "Falando sobre Gollum" },
        { text: "Não passe adiante a amargura dos mais velhos aos mais jovens.", note: "Um conselho atemporal" },
        { text: "Contra o poder das trevas... descobrimos que não somos heróis, mas apenas homens.", note: "Sobre as limitações humanas" }
      ]
    },
    {
      name: "🧝‍♂️ Elrond",
      quotes: [
        { text: "A estrada pela frente, se você a seguir, não o trará de volta.", note: "Aviso a Frodo em Valfenda" }
      ]
    },
    {
      name: "👑 Aragorn",
      quotes: [
        { text: "Um dia, a coragem dos Homens falhará, mas hoje não é esse dia.", note: "Antes da Batalha dos Campos de Pelenor" },
        { text: "Pelos que nos são queridos, saúdem a morte.", note: "No Abismo de Helm" },
        { text: "Não temo a morte... temo um futuro sem esperança.", note: "Para Arwen" }
      ]
    },
    {
      name: "🧙‍♂️ Saruman",
      quotes: [
        { text: "O poder do Anel não pode ser desfeito... é preciso unir-se a ele!", note: "Tentando corromper Gandalf" }
      ]
    },
    {
      name: "🧝‍♀️ Galadriel",
      quotes: [
        { text: "Mesmo a menor pessoa pode mudar o curso do futuro.", note: "Símbolo de esperança" },
        { text: "A sombra não tem poder, a não ser aquele que lhe concedemos.", note: "Sobre a natureza do mal" }
      ]
    },
    {
      name: "🧌 Gollum",
      quotes: [
        { text: "Meu precioooso...", note: "Sua obsessão eterna" },
        { text: "Nós o odiamos para sempre.", note: "Conflito entre Sméagol e Gollum" }
      ]
    },
    {
      name: "🧙‍♂️ Boromir",
      quotes: [
        { text: "Não é um presente que se dê a um homem de pouca coragem.", note: "No Conselho de Elrond" },
        { text: "Eu te seguiria, meu irmão... meu capitão... meu rei.", note: "Suas últimas palavras a Aragorn" }
      ]
    },
    {
      name: "🧒 Frodo",
      quotes: [
        { text: "Sinto que não estou mais em uma aventura, mas num pesadelo do qual não consigo acordar.", note: "O fardo do Anel" },
        { text: "Eu levarei o Anel, embora não saiba o caminho.", note: "No Conselho de Elrond" }
      ]
    },
    {
      name: "🧒 Samwise Gamgi",
      quotes: [
        { text: "Existe alguma coisa boa neste mundo, Sr. Frodo, que vale a pena lutar por ela.", note: "Em Mordor" },
        { text: "Eu não posso carregar o Anel por você... mas posso carregar você.", note: "Na Montanha da Perdição" }
      ]
    },
    {
      name: "🧔 Théoden",
      quotes: [
        { text: "Agora, para a morte! Para a ruína... e o fim do mundo.", note: "Campos de Pelenor" },
        { text: "Ergam-me! Não quero morrer de joelhos.", note: "Suas últimas palavras" }
      ]
    },
    {
      name: "🧝‍♀️ Éowyn",
      quotes: [
        { text: "Eu não sou um homem! Sou uma mulher.", note: "Ao derrotar o Rei Bruxo de Angmar" }
      ]
    }
  ];

  const generalQuotes = [
    { text: "Não seja tão rápido em dar a morte como sentença.", note: "Gandalf sobre misericórdia" },
    { text: "A mão de um amigo é sempre bem-vinda.", note: "Gandalf para Frodo" },
    { text: "A aventura começa de manhã.", note: "Provérbio Hobbit" },
    { text: "O mundo não está nos livros e mapas. Ele está lá fora.", note: "Gandalf a Bilbo" },
    { text: "O Anel foi feito na Montanha da Perdição. Lá, apenas lá, pode ser desfeito.", note: "Fundamento da missão" }
  ];

  return (
    <PageLayout 
      title="Falas Icônicas da Terra Média" 
      description="Palavras que ecoam pelas eras, ditas por heróis e vilões de Arda"
    >
      <div className="space-y-12">
        {characters.map((character, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold text-primary mb-4">{character.name}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {character.quotes.map((quote, qIndex) => (
                <Card 
                  key={qIndex}
                  className="bg-gradient-card border-2 border-border hover:border-primary transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <p className="text-foreground italic mb-2">"{quote.text}"</p>
                    <p className="text-sm text-muted-foreground">({quote.note})</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">📜 Frases Gerais e Provérbios</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {generalQuotes.map((quote, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-2 border-border hover:border-primary transition-all duration-300"
              >
                <CardContent className="p-6">
                  <p className="text-foreground italic mb-2">"{quote.text}"</p>
                  <p className="text-sm text-muted-foreground">({quote.note})</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Falas;
