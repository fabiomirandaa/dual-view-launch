import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import fortuneDragon from "@/assets/fortune-dragon.jpg";
import fortuneTiger from "@/assets/fortune-tiger.jpg";
import ratinhoSortudo from "@/assets/ratinho-sortudo.jpg";
import cashMania from "@/assets/cash-mania.jpg";

const games = [
  {
    id: 1,
    title: "FORTUNE DRAGON",
    provider: "PGSoft",
    image: fortuneDragon,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "FORTUNE TIGER",
    provider: "PGSoft", 
    image: fortuneTiger,
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 3,
    title: "RATINHO SORTUDO",
    provider: "PGSoft",
    image: ratinhoSortudo,
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    id: 4,
    title: "CASH MANIA",
    provider: "PGSoft",
    image: cashMania,
    gradient: "from-yellow-500 to-orange-500"
  }
];

const sponsors = [
  "PragmaticPlay", "NetEnt", "Evolution", "Ezugi", "NetEnt", "Caleta", "PG Soft", "Spribe"
];

export const GamesSection = () => {
  return (
    <section className="py-16 bg-gaming-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Games intro */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gaming-text mb-4">
            Mais de <span className="text-gaming-pink">4000</span> jogos
          </h2>
          <p className="text-lg text-gaming-text-muted mb-2">
            Transforme sua audiência em lucro real!
          </p>
          <p className="text-sm text-gaming-text-muted max-w-2xl mx-auto">
            No Programa de Afiliados <span className="text-gaming-pink font-semibold">ZeroUm Bet</span>, você tem a chance de monetizar seu tráfego e conquistar ganhos consistentes, promovendo a plataforma de apostas que mais cresce no Brasil.
          </p>
        </div>

        <div className="text-center mb-12">
          <Button className="bg-gaming-pink hover:bg-gaming-pink-dark text-white font-semibold px-8 py-4 text-lg rounded-full">
            Seja um afiliado
          </Button>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {games.map((game) => (
            <Card key={game.id} className="group overflow-hidden bg-gaming-dark-light border-border hover:border-gaming-pink/50 transition-all duration-300 hover:scale-105">
              <div className="relative aspect-square">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${game.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                {/* Game info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-bold text-sm mb-1">{game.title}</h3>
                  <p className="text-gray-300 text-xs">{game.provider}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Sponsors section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gaming-text mb-8">
            O maior apoiador do <span className="text-gaming-pink">Futebol Brasileiro</span>
          </h3>
        </div>

        {/* Sponsor logos placeholder */}
        <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-11 gap-4 mb-8">
          {Array.from({length: 11}).map((_, i) => (
            <div key={i} className="aspect-square bg-gaming-dark-light rounded-lg border border-border flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-gaming-pink to-purple-500 rounded-full opacity-50" />
            </div>
          ))}
        </div>

        {/* Sponsors text */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gaming-text-muted">
          {sponsors.map((sponsor, i) => (
            <span key={i}>{sponsor}</span>
          ))}
        </div>
      </div>
    </section>
  );
};