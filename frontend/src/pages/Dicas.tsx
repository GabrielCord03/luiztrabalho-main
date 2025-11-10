import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Dicas = () => {
  const hints = [
    {
      title: "Entre as Pedras",
      content:
        "Nem toda ruína está morta — algumas guardam nomes antigos e significados esquecidos.",
    },
    {
      title: "O Rio que Divide",
      content:
        "Procure onde as águas separam o passado do presente. As margens escondem memórias.",
    },
    {
      title: "Luz e Escuridão",
      content:
        "O Sol e a Lua têm suas torres. E em meio a elas, nasceu a cidade das estrelas.",
    },
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

            {/* Fundo mágico */}
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
      <div className="fixed bottom-4 right-6 group cursor-pointer select-none max-w-sm">
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
