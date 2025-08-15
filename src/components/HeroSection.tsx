import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Percent, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gaming-dark relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gaming-text mb-6">
              Venha para a <span className="text-gaming-pink">ZeroUm</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gaming-text mb-4">
              Faça parte do programa de afiliados na <span className="text-gaming-pink font-semibold">ZeroUm</span>.
            </p>
            
            {/* Description */}
            <p className="text-gaming-text-muted mb-8 text-base leading-relaxed">
              A ZeroUm não para de crescer e agora você pode fazer parte do nosso time. Vem pra ZeroUm
            </p>
            
            {/* CTA Button */}
            <Button className="bg-gaming-pink hover:bg-gaming-pink-dark text-white font-semibold px-8 py-4 text-lg mb-12 rounded-full">
              Quero ser afiliado
            </Button>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="bg-gaming-dark-light border-border p-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="bg-gaming-pink/20 p-2 rounded-lg">
                    <Percent className="h-5 w-5 text-gaming-pink" />
                  </div>
                  <div>
                    <h3 className="text-gaming-text font-semibold text-sm">Media Kit Completo</h3>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-gaming-dark-light border-border p-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="bg-gaming-pink/20 p-2 rounded-lg">
                    <Sparkles className="h-5 w-5 text-gaming-pink" />
                  </div>
                  <div>
                    <h3 className="text-gaming-text font-semibold text-sm">Códigos Promocionais</h3>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Top floating cards */}
              <Card className="absolute -top-4 -left-8 bg-gaming-pink/20 border-gaming-pink/30 p-3 z-10 w-48">
                <div className="flex items-center space-x-2">
                  <Percent className="h-4 w-4 text-gaming-pink" />
                  <span className="text-white text-sm font-medium">CPA</span>
                </div>
                <div className="text-white text-xs mt-1">REV$HARE</div>
                <div className="text-white text-xs">Seus Ganhos</div>
                <div className="text-gaming-pink text-2xl font-bold">1.990,93</div>
              </Card>
              
              <Card className="absolute top-16 -right-8 bg-gaming-dark-light border-border p-3 z-10 w-44">
                <div className="flex items-center space-x-2">
                  <Percent className="h-4 w-4 text-gaming-pink" />
                  <span className="text-white text-sm font-medium">Gerente de contas</span>
                </div>
              </Card>

              {/* Phone Frame */}
              <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gaming-dark rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Content */}
                  <div className="p-6 h-full flex flex-col justify-center items-center">
                    {/* Center Profile Image */}
                    <div className="relative">
                      <div className="w-48 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                        <div className="text-white text-sm font-medium">Profile Image</div>
                      </div>
                      {/* Floating Hearts */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">❤️</span>
                      </div>
                      <div className="absolute bottom-4 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder logos */}
            {['Pragmatic Play', 'Red Tiger', 'Evolution', 'Ezugi', 'NetEnt', 'Caleta', 'PG Soft', 'Spribe'].map((partner, index) => (
              <div key={index} className="bg-gaming-text-muted/20 rounded-lg px-4 py-2">
                <span className="text-gaming-text-muted text-sm font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};