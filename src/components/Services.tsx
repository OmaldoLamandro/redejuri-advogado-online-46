import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, FileText, Users, Building, Heart, Car, Home, Briefcase, Shield } from "lucide-react";
const Services = () => {
  const services = [{
    icon: FileText,
    title: "Direito Civil",
    description: "Contratos, responsabilidade civil, danos morais e questões patrimoniais.",
    popular: false
  }, {
    icon: Briefcase,
    title: "Direito do Trabalho",
    description: "Demissões, rescisões, horas extras, assédio moral e direitos trabalhistas.",
    popular: true
  }, {
    icon: Users,
    title: "Direito de Família",
    description: "Divórcio, pensão alimentícia, guarda dos filhos e união estável.",
    popular: false
  }, {
    icon: Building,
    title: "Direito Empresarial",
    description: "Abertura de empresas, contratos comerciais e questões societárias.",
    popular: false
  }, {
    icon: Heart,
    title: "Direito do Consumidor",
    description: "Problemas com produtos, serviços, cobranças indevidas e negativação.",
    popular: true
  }, {
    icon: Car,
    title: "Direito de Trânsito",
    description: "Multas, CNH suspensa, recursos administrativos e acidentes.",
    popular: false
  }, {
    icon: Home,
    title: "Direito Imobiliário",
    description: "Compra, venda, locação, financiamento e questões condominiais.",
    popular: false
  }, {
    icon: Shield,
    title: "Direito Previdenciário",
    description: "Aposentadoria, benefícios, revisões e auxílios do INSS.",
    popular: true
  }];
  return <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-sm sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2 border-primary/20">
            ⚖️ Áreas de Conexão Jurídica
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Conectamos Você com
            <span className="block text-primary">Especialistas em Cada Área</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Nossa plataforma conecta você com advogados especialistas verificados pela OAB em todas as áreas do direito. 
            Não importa qual seja sua necessidade jurídica, encontramos o profissional certo para você.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <Card key={index} className="relative group hover:shadow-elegant transition-all duration-500 hover:scale-105 cursor-pointer border-l-4 border-l-transparent hover:border-l-secondary">
                {service.popular && <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground shadow-md text-xs">
                    Popular
                  </Badge>}
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className="mx-auto bg-primary/10 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
            Não encontrou sua área? Nossa plataforma conecta você com advogados para qualquer questão jurídica.
          </p>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              💰 Preço Fixo e Transparente
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Todas as conexões custam apenas <strong className="text-primary text-lg sm:text-xl">R$50</strong>, 
              independente da área ou complexidade. Sem surpresas, sem taxas ocultas.
            </p>
            <Badge variant="secondary" className="text-sm sm:text-lg px-4 sm:px-6 py-1.5 sm:py-2 bg-success text-success-foreground">
              ✅ Primeira consulta de 30 minutos garantida
            </Badge>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;