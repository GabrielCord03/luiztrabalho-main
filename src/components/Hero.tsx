import heroBackground from "@/assets/hero-background.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 py-16 animate-fade-in">
        <div className="flex flex-col items-center gap-6 mb-8">
          <img 
            src={logo} 
            alt="Logo do Blog da Terra Média" 
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] animate-scale-in"
          />
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-cinzel">
              Blog da Terra Média
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              Explorando o universo criado por Tolkien
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
