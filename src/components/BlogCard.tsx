import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  description: string;
  href: string;
  backgroundImage?: string;
  special?: boolean;
}

export const BlogCard = ({ title, description, href, backgroundImage, special }: BlogCardProps) => {
  return (
    <Link to={href} className="group block">
      <Card className={`
        relative overflow-hidden bg-gradient-card border-2 border-border 
        transition-all duration-300 hover:border-primary hover:shadow-card-hover
        hover:-translate-y-2 h-full
        ${special ? 'md:col-span-2 border-primary/50' : ''}
      `}>
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent group-hover:drop-shadow-gold transition-all duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <CardDescription className="text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
