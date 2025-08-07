import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <img src="/lovable-uploads/81dfea57-b641-4d9a-a599-f80a91c8b71e.png" alt="RedeJuri" className="h-10 sm:h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/80 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              A plataforma tecnológica que conecta você com advogados especialistas de forma rápida, 
              segura e acessível. Facilitamos o acesso à consultoria jurídica por apenas R$50.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="font-semibold shadow-glow animate-gentle-pulse text-sm sm:text-base px-4 sm:px-6"
              onClick={() => window.open('https://wa.me/5551994922570?text=Ol%C3%A1.%20Vim%20do%20google%20e%20preciso%20de%20assessoria...%20Pode%20me%20ajudar%3F', '_blank')}
            >
              Clique aqui para entrar em contato
            </Button>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Links Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#servicos" className="text-sm sm:text-base text-background/80 hover:text-background transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-sm sm:text-base text-background/80 hover:text-background transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm sm:text-base text-background/80 hover:text-background transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-sm sm:text-base text-background/80 hover:text-background transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Atendimento</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                <span className="text-sm sm:text-base text-background/80">24 horas por dia</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                <span className="text-sm sm:text-base text-background/80">Atendimento Online</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                <span className="text-sm sm:text-base text-background/80">contato@redejuri.com.br</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                <span className="text-sm sm:text-base text-background/80">Todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Seção de CTA Final */}
        <div className="bg-primary/10 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 text-center border border-primary/20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Tem uma Questão Jurídica para Resolver?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-background/80 mb-4 sm:mb-6 px-4">
            Não espere o problema crescer. Use nossa plataforma para se conectar com um advogado especialista 
            agora mesmo e resolva sua situação de forma rápida e segura.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto font-bold shadow-glow animate-gentle-pulse"
              onClick={() => window.open('https://wa.me/5551994922570?text=Ol%C3%A1.%20Vim%20do%20google%20e%20preciso%20de%20assessoria...%20Pode%20me%20ajudar%3F', '_blank')}
            >
              Clique aqui para entrar em contato
            </Button>
            <span className="text-sm sm:text-base text-background/60">✅ Plataforma verificada pela OAB</span>
          </div>
        </div>

        {/* Copyright e Disclaimer */}
        <div className="border-t border-background/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-background/60 text-xs sm:text-sm">
              © 2024 RedeJuri. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Código de Ética OAB
              </a>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-background/10 rounded-lg border border-background/20">
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed">
              <strong>Importante:</strong> A RedeJuri é uma plataforma tecnológica que facilita a conexão entre clientes e advogados 
              independentes devidamente inscritos na OAB. Não somos um escritório de advocacia, mas sim uma empresa de tecnologia 
              que facilita o acesso à consultoria jurídica especializada. Todos os advogados parceiros são profissionais 
              autônomos, responsáveis pelos serviços prestados de acordo com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;