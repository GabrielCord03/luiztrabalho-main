import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import knowledgeBg from "@/assets/knowledge-bg.jpg";

const Historia = () => {
  const cities = [
    {
      title: "Minas Anor",
      content: "Conhecida como a Torre do Sol, foi fundada nas colinas de Emyn Arnen para proteger o oeste do reino. Tornou-se o coração do poder de Gondor e lar da lendária Árvore Branca, símbolo da realeza e da esperança."
    },
    {
      title: "Minas Ithil",
      content: "A Torre da Lua guardava o leste e era irmã de Minas Anor. Foi tomada pelas trevas e transformada em Minas Morgul, marcando o início do declínio de uma era."
    },
    {
      title: "Os Palantíri",
      content: "As antigas pedras-vigias dos reis. Dizem que a mais poderosa foi perdida durante uma rebelião em 1437 da Terceira Era, quando o caos e a ambição dividiram o povo."
    },
    {
      title: "O Declínio",
      content: "O início das invasões ocorreu por volta de 3429 da Segunda Era. Tempos depois, em 2475 da Terceira Era, forças sombrias vindas do leste tomaram as antigas cidades, deixando apenas ruínas e memórias."
    },
    {
      title: "Segredos nas Ruínas",
      content: "Entre as pedras esquecidas e os rios que dividem as terras, dizem que há nomes antigos que significam \"fortaleza\" e \"hóspedes das estrelas\". Para os que buscam compreender o passado, cada palavra pode ser uma chave."
    },
    {
      title: "A Cidade Entre Rios",
      content: "Dizem que uma antiga capital foi dividida por um grande rio que vinha do norte, separando luz e sombra. Alguns chamavam esse curso d'água de Anduin, o espelho das estrelas."
    },
    {
      title: "As Torres Gêmeas",
      content: "Dois faróis erguiam-se sobre as colinas, um voltado para o nascer, outro para o pôr do sol. Juntas, protegiam a fronteira entre o dia e a noite — até que uma delas se perdeu para sempre."
    },
    {
      title: "Os Nomes Antigos",
      content: "Em antigos textos, o nome da primeira capital de Gondor é composto de duas partes. Uma delas significa \"forte\", a outra \"hóspedes das estrelas\". Os estudiosos dizem que quem entende essas línguas antigas pode encontrar o verdadeiro nome."
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
              className="relative overflow-hidden bg-gradient-card border-2 border-border hover:border-primary transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${knowledgeBg})` }}
              />
              <CardContent className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-gold mb-3">{city.title}</h3>
                <p className="text-foreground leading-relaxed">{city.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Historia;
