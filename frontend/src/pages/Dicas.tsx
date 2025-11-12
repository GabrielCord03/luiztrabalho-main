import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Dicas = () => {
  const hints = [
    {
      title: "Eco nas sombras",
      content:
        "Nem todas as respostas estão nas palavras. Às vezes, é a própria imagem que sussurra segredos.",
    },
    {
      title: "A Cidade Dividida por um Rio",
      content:
        "Alguns relatos falam de uma antiga capital dividida por um rio , onde as águas separam o passado do presente. As margens escondem segredos.",
    },
    {
      title: "Os Nomes Antigos",
      content: "Há uma antiga lenda sobre uma cidade cujo nome signica 'forte' e 'hóspedes das estrelas'. Dizem que, ao desvendar esse enigma, o passado volta a brilhar sob as águas do grande rio."
    },
    {
      title: "O Cântico das Estrelas",
      content: "Entre as páginas mais antigas, há uma história que fala de um cântico celeste. Seus versos mencionam aqueles que vieram do alto — os chamados hóspedes das estrelas. Talvez o segredo esteja em ouvir novamente essa melodia esquecida."
    },
    {
      title: "O Guardião das Ruínas",
      content: "Faramir defendeu uma cidade condenada, resistindo à tentação de poder. Seu feito ecoa entre muralhas partidas e rios antigos. Dizem que aquele que lembrar sua história descobrirá o nome da fortaleza dos hóspedes das estrelas."
    },
    {
      title: "A Cidade Perdida da Terra Média",
      content: "Falam de uma cidade esquecida, tomada pelo tempo e pelas águas. Dizem que já brilhou como um espelho entre as estrelas — mas agora, apenas quem revisita as histórias antigas pode recordar seu verdadeiro nome."
    }
  ];

  const riddles = [
    {
      title: "Parte 1!",
      content: "Mago que traiu as terras médias!",
    },
    {
      title: "Parte 2?",
      content: "Resistiu à maior criação de Sauron?",
    },
  ];

  return (
    <PageLayout
      title="Dicas para os Atentos"
      description="Apenas os observadores verão o que está oculto nas ruínas..."
    >
      {/* Introdução */}
      <div className="mb-8 text-center">
        <Sparkles className="w-12 h-12 mx-auto text-primary animate-pulse mb-4" />
        <p className="text-lg text-muted-foreground">
          Você encontrou o caminho secreto! Explore as dicas e desvende o código perdido.
        </p>
      </div>

      {/* 🪶 DICAS */}
      {/* 🏛️ SEÇÃO: O NOME PERDIDO */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-gold animate-pulse">
          O Nome Perdido
        </h2>
        <p className="text-muted-foreground mt-2 italic">
          Entre ruínas e estrelas, um antigo nome aguarda ser lembrado.
        </p>
      </div>

      {/* Cards das Dicas do Usuário */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {hints.map((hint, index) => (
          <Card
            key={index}
            className="relative group bg-gradient-card border-2 border-primary/50 hover:border-primary transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="text-xl text-gold text-center">
                {hint.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 text-center">
              <p className="text-foreground group-hover:drop-shadow-[0_0_8px_#FFD700] transition-all duration-700 ease-out">
                {hint.content}
              </p>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
          </Card>
        ))}
      </div>

      {/* 🧩 GRUPO: CÓDIGO PERDIDO */}
      <div className="mt-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent drop-shadow-gold animate-pulse">
            Código Perdido
          </h2>
          <p className="text-muted-foreground mt-2 italic">
            Reúna as partes para despertar o nome esquecido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {riddles.map((riddle, index) => (
            <Card
              key={index}
              className="relative group bg-gradient-card border-2 border-border hover:border-primary transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary text-center">
                  {riddle.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 text-center">
                <p className="text-foreground group-hover:drop-shadow-[0_0_8px_#FFD700] transition-all duration-700 ease-out">
                  {riddle.content}
                </p>
              </CardContent>

              {/* Fundo mágico dourado */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
            </Card>
          ))}
        </div>
      </div>

      {/* 🔮 TEXTO SECRETO (invisível até hover) */}
      <div className="fixed bottom-4 left-6 group cursor-pointer select-none max-w-sm">
        <p
          className="
            text-sm
            text-transparent
            transition-all duration-700 ease-out
            group-hover:text-foreground
            group-hover:drop-shadow-[0_0_8px_#FFD700]
            group-hover:scale-105
          "
        >
          Seu Nome perdido remete a uma{" "}
          <span className="text-transparent group-hover:text-gold group-hover:underline transition-all duration-700">
            cidade dividida por um grande rio
          </span>
          , e para despertá-la é preciso unir o nome do{" "}
          <span className="text-transparent group-hover:text-gold group-hover:underline transition-all duration-700">
            mago branco que traiu sua ordem
          </span>{" "}
          — cuja{" "}
          <span className="text-transparent group-hover:text-gold group-hover:underline italic transition-all duration-700">
            emoção
          </span>{" "}
          ecoa após seu nome — ao do{" "}
          <span className="text-transparent group-hover:text-gold group-hover:underline transition-all duration-700">
            capitão de Gondor que resistiu à sombra de Mordor
          </span>
          , cuja{" "}
          <span className="text-transparent group-hover:text-gold group-hover:underline italic transition-all duration-700">
            dúvida
          </span>{" "}
          repousa ao fim de sua jornada.{" "}
          <span
            className="
              block mt-2 italic text-transparent group-hover:text-gold
              transition-all duration-700 group-hover:drop-shadow-[0_0_8px_#FFD700]
            "
          >
            Quando ambos se unirem, o selo será rompido.
          </span>
        </p>

        {/* Fundo mágico dourado */}
        <div
          className="
            absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-400/10 
            opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm
          "
        />
      </div>
    </PageLayout>
  );
};

export default Dicas;
