import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GamesSection } from "@/components/GamesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BottomSection } from "@/components/BottomSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />
      <HeroSection />
      <GamesSection />
      <HowItWorksSection />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Index;
