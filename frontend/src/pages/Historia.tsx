import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import knowledgeBg from "@/assets/knowledge-bg.jpg"; 
import { Download } from "lucide-react";

const Historia = () => {
  const cities = [
    {
      title: "Minas Anor",
      content: "Conhecida como a Torre do Sol, foi fundada nas colinas de Emyn Arnen para proteger o oeste do reino. Tornou-se o coração do poder de Gondor e lar da lendária Árvore Branca, símbolo da realeza e da esperança.",
      image: "/img/history/minas-anor.jpg",
    },
    {
      title: "Minas Ithil",
      content: "A Torre da Lua guardava o leste e era irmã de Minas Anor. Foi tomada pelas trevas e transformada em Minas Morgul, marcando o início do declínio de uma era.",
      image: "/img/history/minas-ithil.jpg",
    },
    {
      title: "Os Palantíri",
      content: "As antigas pedras-vigias dos reis. Dizem que a mais poderosa foi perdida durante uma rebelião em 1437 da Terceira Era, quando o caos e a ambição dividiram o povo.",
      image: "/img/history/palantiri.jpg",
    },
    {
      title: "O Declínio",
      content: "O início das invasões ocorreu por volta de 3429 da Segunda Era. Tempos depois, em 2475 da Terceira Era, forças sombrias vindas do leste tomaram as antigas cidades, deixando apenas ruínas e memórias.",
      image: "/img/history/decline.jpg",
    },
    {
      title: "Segredos nas Ruínas",
      content: "Entre as pedras esquecidas e os rios que dividem as terras, dizem que há nomes antigos que significam \"fortaleza\" e \"hóspedes das estrelas\". Para os que buscam compreender o passado, cada palavra pode ser uma chave.",
      image: "/img/history/hospedes_das_estrelas_osgiliath.jpg",
    },
    {
      title: "A Cidade Dividida por um Rio",
      content: "Dizem que uma antiga capital foi dividida por um grande rio que vinha do norte, separando luz e sombra. Alguns chamavam esse curso d'água de Anduin, o espelho das estrelas.",
      image: "/img/history/ponte_de_osgiliath.jpg",
    },
    {
      title: "As Torres Gêmeas",
      content: "Dois faróis erguiam-se sobre as colinas, um voltado para o nascer, outro para o pôr do sol. Juntas, protegiam a fronteira entre o dia e a noite — até que uma delas se perdeu para sempre.",
      image: "/img/history/twin-towers.jpg",
    },
    {
      title: "Os Nomes Antigos",
      content: "Em antigos textos, o nome da primeira capital de Gondor é composto de duas partes. Uma delas significa \"forte\", a outra \"hóspedes das estrelas\". Os estudiosos dizem que quem entende essas línguas antigas pode encontrar o verdadeiro nome.",
      image: "/img/history/forte_osgiliath.jpg",
    }
  ];

  return (
    <PageLayout 
      title="História da Terra Média" 
      description="Crônicas antigas e segredos de Gondor"
    >
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">As Antigas Cidades de Gondor</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cities.map((city, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-gradient-card border-2 border-border hover:border-primary transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${city.image})` }}
              />
              <CardContent className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-gold mb-3">{city.title}</h3>
                <p className="text-foreground leading-relaxed">{city.content}</p>
              </CardContent>
               
              {/* ⬇️ Botão discreto de download */}
              {city.image && (
                <a
                  href={city.image}
                  download
                  title="Baixar imagem"
                  className="absolute bottom-2 right-2 z-20 bg-black/40 text-gold p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70"
                >
                  <Download className="w-5 h-5 text-gold" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Historia;
