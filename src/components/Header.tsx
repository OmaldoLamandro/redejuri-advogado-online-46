import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="text-2xl sm:text-3xl font-bold">
              <span className="text-primary">rede</span>
              <span className="text-secondary">juri</span>
            </div>
          </div>
          
          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#servicos" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Depoimentos
            </a>
          </nav>

          {/* Contact Button */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="default"
              size="lg"
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => window.open('https://wa.me/5551994922570?text=Ol%C3%A1.%20Vim%20do%20google%20e%20preciso%20de%20assessoria...%20Pode%20me%20ajudar%3F', '_blank')}
            >
              <span className="hidden sm:inline">Contato</span>
              <span className="sm:hidden">💬</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;