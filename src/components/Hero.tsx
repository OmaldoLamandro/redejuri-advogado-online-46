import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";
const Hero = () => {
  return (
    <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-gradient-hero min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-4 sm:mb-6 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 font-semibold bg-secondary text-secondary-foreground">
              🌐 Plataforma de Conexão Jurídica
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Fale com um
              <span className="block text-secondary">Advogado Online</span>
              <span className="block">por uma Hora e</span>
              <span className="block text-secondary">Tire Suas Dúvidas</span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-normal mt-2 text-white/90">
                Por apenas R$50
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong>Não somos um escritório de advocacia.</strong> Somos a plataforma que conecta você, 
              de forma rápida e segura, com advogados especialistas verificados pela OAB. 
              Resolva suas questões jurídicas em minutos, sem sair de casa.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto font-bold shadow-glow hover:scale-105 transition-all duration-300 animate-gentle-pulse" 
                onClick={() => window.open('https://wa.me/5551994922570?text=Ol%C3%A1.%20Vim%20do%20google%20e%20preciso%20de%20assessoria...%20Pode%20me%20ajudar%3F', '_blank')}
              >
                💬 Clique aqui para entrar em contato
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur"
              >
                📋 Como Funciona
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <Card className="p-3 sm:p-4 bg-white/10 border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-2 sm:space-x-3 text-white">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Conexão Imediata</span>
                </div>
              </Card>
              <Card className="p-3 sm:p-4 bg-white/10 border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-2 sm:space-x-3 text-white">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Advogados 24/7</span>
                </div>
              </Card>
              <Card className="p-3 sm:p-4 bg-white/10 border-white/20 backdrop-blur hover:bg-white/15 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-2 sm:space-x-3 text-white">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">100% Seguro</span>
                </div>
              </Card>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroImage} 
                alt="Consultoria jurídica online" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;