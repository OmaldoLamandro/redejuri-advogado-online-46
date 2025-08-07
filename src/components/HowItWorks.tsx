import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MessageCircle, 
  CreditCard, 
  CheckCircle,
  Clock,
  Shield,
  Users
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Descreva sua Necessidade",
      description: "Conte-nos qual é sua questão jurídica de forma simples e direta. Nossa plataforma inteligente identificará a área do direito adequada."
    },
    {
      number: "02", 
      icon: Users,
      title: "Conectamos ao Especialista",
      description: "Em segundos, nossa plataforma conecta você com um advogado especialista na sua área de necessidade, verificado pela OAB e disponível para atendê-lo."
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "Consultoria Direta",
      description: "Converse diretamente com o advogado por chat, áudio ou vídeo. Receba orientações precisas, tire todas suas dúvidas e obtenha a solução para sua questão."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Resolva sua Questão",
      description: "Receba orientações claras sobre os próximos passos. Se necessário, o advogado pode continuar acompanhando seu caso através da nossa plataforma."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Conexão Imediata",
      description: "Sem filas, sem agendamentos. Nossa plataforma conecta você com um advogado em minutos, a qualquer hora do dia."
    },
    {
      icon: CreditCard,
      title: "Preço Justo e Fixo",
      description: "R$50 por conexão, sem taxas extras. Você sabe exatamente quanto vai pagar antes de se conectar com o advogado."
    },
    {
      icon: Shield,
      title: "Advogados Verificados",
      description: "Todos os profissionais da nossa rede são verificados pela OAB e especializados em suas respectivas áreas."
    }
  ];

  return (
    <section id="como-funciona" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-sm sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2">
            🚀 Como Funciona
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Conecte-se com Advogados
            <span className="block text-primary">em 4 Passos Simples</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Revolucionamos o acesso à justiça através da tecnologia. Agora você pode se conectar 
            com um advogado especialista em minutos, de forma simples, rápida e acessível.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full group hover:shadow-elegant transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-base sm:text-lg">{step.number}</span>
                  </div>
                  
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="bg-primary/10 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-3 sm:mb-4">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white mb-12 sm:mb-16 shadow-glow relative overflow-hidden">
          {/* Background pattern for visual interest */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/5 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Pronto para se Conectar
              <span className="block">com um Advogado?</span>
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-95 px-2 sm:px-4 leading-relaxed max-w-3xl mx-auto">
              Mais de <strong className="text-secondary">10.000 pessoas</strong> já usaram nossa plataforma para se conectar com advogados. 
              Seja o próximo a resolver sua questão jurídica de forma rápida e segura.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="group relative w-full sm:w-auto text-base sm:text-lg font-bold bg-white text-primary hover:bg-white/95 border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 sm:px-10 py-4 sm:py-5 rounded-xl overflow-hidden"
                onClick={() => window.open('https://wa.me/5551994922570?text=Ol%C3%A1.%20Vim%20do%20google%20e%20preciso%20de%20assessoria...%20Pode%20me%20ajudar%3F', '_blank')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-3">
                  <span className="text-2xl">💬</span>
                  <span>Conversar com Advogado Agora</span>
                  <span className="text-xl animate-bounce">→</span>
                </span>
              </Button>
              
              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online agora • Resposta imediata</span>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
              <div className="flex items-center justify-center gap-2 text-white/90">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-xs sm:text-sm">Advogados Verificados OAB</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/90">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-xs sm:text-sm">Atendimento 24/7</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/90">
                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-xs sm:text-sm">Preço Fixo R$50</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;