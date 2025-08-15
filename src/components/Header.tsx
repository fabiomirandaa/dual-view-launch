import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Settings, Search } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gaming-dark/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gaming-pink">zero</div>
            <div className="text-2xl font-bold text-white">Um</div>
          </div>

          {/* Desktop Navigation Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gaming-text hover:text-gaming-pink">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gaming-text hover:text-gaming-pink">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gaming-text hover:text-gaming-pink">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gaming-text hover:text-gaming-pink">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gaming-text"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gaming-dark-light rounded-lg mt-2">
              <Button variant="ghost" className="w-full justify-start text-gaming-text">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gaming-text">
                <Settings className="h-5 w-5 mr-2" />
                Configurações
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gaming-text">
                <Search className="h-5 w-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};