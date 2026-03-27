import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  MessageSquare,
  Zap,
  Brain,
  ShoppingCart,
  FileText,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const Servicios = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-accent" />,
      title: "Desarrollo Web",
      description:
        "Creamos sitios web modernos, responsivos y optimizados para conversión. Desde landing pages hasta plataformas complejas.",
      features: [
        "Diseño responsive y moderno",
        "Optimización SEO",
        "Alta velocidad de carga",
        "Integración con sistemas existentes",
      ],
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-accent" />,
      title: "Tiendas Online",
      description:
        "Plataformas de e-commerce completas con gestión de inventario, pagos seguros y experiencia de usuario excepcional.",
      features: [
        "Integración de pagos",
        "Gestión de productos",
        "Dashboard administrativo",
        "Análisis de ventas",
      ],
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-accent" />,
      title: "Chatbots Personalizados",
      description:
        "Automatiza tu atención al cliente con chatbots inteligentes disponibles 24/7 en WhatsApp, web y redes sociales.",
      features: [
        "Respuestas automáticas inteligentes",
        "Integración multi-canal",
        "Aprendizaje continuo",
        "Análisis de conversaciones",
      ],
    },
    {
      icon: <Zap className="h-12 w-12 text-accent" />,
      title: "Automatización de Procesos",
      description:
        "Optimiza tus operaciones con automatizaciones que ahorran tiempo y reducen errores humanos.",
      features: [
        "Flujos de trabajo automatizados",
        "Integración con herramientas existentes",
        "Reportes automáticos",
        "Notificaciones inteligentes",
      ],
    },
    {
      icon: <Brain className="h-12 w-12 text-accent" />,
      title: "Inteligencia Artificial",
      description:
        "Soluciones de IA personalizadas para análisis de datos, predicciones y asistentes virtuales.",
      features: [
        "Análisis predictivo",
        "Procesamiento de lenguaje natural",
        "Reconocimiento de patrones",
        "Asistentes virtuales",
      ],
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      title: "Consultoría Tecnológica",
      description:
        "Asesoramiento experto para definir la mejor estrategia digital para tu negocio.",
      features: [
        "Análisis de necesidades",
        "Planificación estratégica",
        "Selección de tecnologías",
        "Roadmap de implementación",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Análisis",
      description: "Entendemos tus necesidades y objetivos",
    },
    {
      step: "02",
      title: "Planificación",
      description: "Diseñamos la solución ideal para ti",
    },
    {
      step: "03",
      title: "Desarrollo",
      description: "Creamos tu solución con las mejores prácticas",
    },
    {
      step: "04",
      title: "Entrega",
      description: "Implementamos y capacitamos a tu equipo",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">Nuestros Servicios</h1>
            <p className="text-xl text-primary-foreground/90">
              Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de tu negocio
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base pt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Nuestro Proceso</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un enfoque estructurado para garantizar el éxito de tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">¿Tienes un proyecto en mente?</h2>
            <p className="text-xl text-primary-foreground/90">
              Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contacto">
                Solicita una Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
