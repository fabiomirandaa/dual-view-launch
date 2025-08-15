import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

export const BottomSection = () => {
  return (
    <section className="py-16 bg-gaming-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left content */}
          <div className="flex-1 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gaming-text mb-4">
              Jogue o <span className="text-gaming-pink">jogo dos grandes</span>
            </h2>
            
            <p className="text-gaming-text-muted mb-2">
              Transforme cada clique em comissão.
            </p>
            
            <p className="text-gaming-text-muted mb-8 text-sm">
              Cadastre-se agora, receba seu link exclusivo e comece a lucrar hoje mesmo!
            </p>

            <Button className="bg-gaming-pink hover:bg-gaming-pink-dark text-white font-semibold px-8 py-4 text-lg rounded-full">
              Seja um afiliado
            </Button>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gaming-dark rounded-2xl overflow-hidden relative">
                  
                  {/* Phone screen content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-center items-center">
                    {/* Profile image area */}
                    <div className="w-32 h-40 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg mb-4 relative overflow-hidden">
                      {/* Simulated person image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="w-full h-8 bg-white/20 rounded backdrop-blur-sm" />
                      </div>
                    </div>

                    {/* Hearts floating */}
                    <div className="absolute top-16 right-4">
                      <div className="bg-gaming-pink rounded-full p-2 shadow-lg animate-bounce">
                        <Heart className="h-4 w-4 text-white fill-current" />
                      </div>
                    </div>

                    <div className="absolute bottom-16 left-4">
                      <div className="bg-gaming-pink rounded-full p-2 shadow-lg animate-bounce delay-300">
                        <Heart className="h-4 w-4 text-white fill-current" />
                      </div>
                    </div>

                    <div className="absolute top-32 left-8">
                      <div className="bg-gaming-pink rounded-full p-1 shadow-lg animate-pulse">
                        <Heart className="h-3 w-3 text-white fill-current" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};