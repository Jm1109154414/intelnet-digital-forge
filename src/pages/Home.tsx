import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, MessageSquare, Zap, Brain, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Home = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-accent" />,
      title: "Desarrollo Web",
      description: "Sitios web modernos, tiendas online y landing pages que convierten visitantes en clientes.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-accent" />,
      title: "Chatbots Personalizados",
      description: "Automatiza tu atención al cliente con chatbots inteligentes en WhatsApp y web.",
    },
    {
      icon: <Zap className="h-10 w-10 text-accent" />,
      title: "Automatización",
      description: "Optimiza tus procesos y flujos de trabajo para ahorrar tiempo y recursos.",
    },
    {
      icon: <Brain className="h-10 w-10 text-accent" />,
      title: "Inteligencia Artificial",
      description: "Soluciones con IA para análisis de datos, asistentes virtuales y más.",
    },
  ];

  const benefits = [
    "Soluciones 100% personalizadas",
    "Soporte técnico dedicado",
    "Implementación rápida",
    "Resultados medibles",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Impulsamos tu negocio con{" "}
              <span className="bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
                soluciones tecnológicas
              </span>{" "}
              inteligentes
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Creamos herramientas digitales a la medida: páginas web, chatbots, automatizaciones y más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contacto">
                  Solicita una Cotización
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/servicios">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Innovación y Eficiencia en Cada Proyecto
              </h2>
              <p className="text-lg text-muted-foreground">
                En Intelnet, nos especializamos en transformar ideas en soluciones digitales que generan resultados
                reales. Con más de 50 empresas digitalizadas, somos tu socio tecnológico ideal.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" asChild>
                <Link to="/nosotros">Conoce Más Sobre Nosotros</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-primary-foreground">+50</div>
                  <div className="text-2xl text-primary-foreground/90">Empresas Digitalizadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contacto">Agenda una Consulta Gratuita</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/portafolio">Ver Portafolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
