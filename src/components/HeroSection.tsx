import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Percent, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gaming-dark relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-gaming-dark to-gaming-dark-light" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)]">
          
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gaming-text mb-6">
              Venha para a <span className="text-gaming-pink">ZeroUm</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gaming-text-muted mb-2">
              Faça parte do programa de afiliados na <span className="text-gaming-pink font-semibold">ZeroUm</span>.
            </p>
            
            <p className="text-sm sm:text-base text-gaming-text-muted mb-8 max-w-md mx-auto lg:mx-0">
              A ZeroUm não para de crescer e agora você pode fazer parte do nosso time. Vem pra ZeroUm!
            </p>

            <Button variant="gaming" size="lg" className="text-lg px-8 py-3 mb-8">
              Quero ser afiliado
            </Button>

            {/* Promo cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <Card className="bg-gaming-dark-light border-gaming-pink/20 p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gaming-pink/20 p-2 rounded-full">
                    <Percent className="h-5 w-5 text-gaming-pink" />
                  </div>
                  <div>
                    <p className="text-sm text-gaming-text-muted">Media Kit Completo</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gaming-dark-light border-gaming-pink/20 p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gaming-pink/20 p-2 rounded-full">
                    <Sparkles className="h-5 w-5 text-gaming-pink" />
                  </div>
                  <div>
                    <p className="text-sm text-gaming-text-muted">Códigos Promocionais</p>
                    <p className="text-sm text-gaming-text-muted">exclusivos</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gaming-dark rounded-2xl overflow-hidden relative">
                  
                  {/* Phone screen content */}
                  <div className="absolute inset-0 p-4">
                    {/* Profile section */}
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-gaming-pink to-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">ZU</span>
                      </div>
                      <p className="text-gaming-text text-sm">@zeroumbet</p>
                    </div>

                    {/* Stats card */}
                    <Card className="bg-gaming-dark-light border-gaming-pink/30 p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gaming-pink text-xs">CPA</p>
                          <p className="text-gaming-pink text-xs">RESHARE</p>
                          <p className="text-gaming-text-muted text-xs">50 + CUPONS</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gaming-pink text-xl font-bold">1.990,93</p>
                          <div className="bg-gaming-pink p-1 rounded">
                            <Sparkles className="h-3 w-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Additional cards */}
                    <Card className="bg-gaming-dark-light border-border p-2 mb-2">
                      <p className="text-gaming-text text-xs">Gerente de contas</p>
                    </Card>
                  </div>

                  {/* Floating hearts */}
                  <div className="absolute top-20 right-4 text-gaming-pink text-xl animate-pulse">❤️</div>
                  <div className="absolute top-32 right-8 text-gaming-pink text-lg animate-pulse delay-300">💎</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};