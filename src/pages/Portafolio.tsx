import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portafolio = () => {
  const projects = [
    {
      title: "E-Commerce Fashion Hub",
      category: "Desarrollo Web",
      description:
        "Plataforma completa de comercio electrónico con gestión de inventario, pagos integrados y dashboard administrativo.",
      tags: ["E-commerce", "React", "Node.js", "Stripe"],
      results: "+200% en ventas online en 6 meses",
    },
    {
      title: "ChatBot Atención al Cliente",
      category: "Chatbot IA",
      description:
        "Asistente virtual inteligente para atención 24/7 en WhatsApp y web, reduciendo tiempo de respuesta significativamente.",
      tags: ["WhatsApp", "IA", "NLP", "Automatización"],
      results: "80% reducción en tiempos de respuesta",
    },
    {
      title: "Sistema de Automatización CRM",
      category: "Automatización",
      description:
        "Automatización completa de procesos de ventas, seguimiento de leads y generación de reportes en tiempo real.",
      tags: ["CRM", "Zapier", "APIs", "Dashboard"],
      results: "60% ahorro en tiempo administrativo",
    },
    {
      title: "Plataforma Educativa Online",
      category: "Desarrollo Web",
      description:
        "Sistema de gestión de aprendizaje con videos, evaluaciones, certificados y seguimiento de progreso estudiantil.",
      tags: ["LMS", "React", "Video Streaming", "Certificados"],
      results: "+1,000 usuarios activos",
    },
    {
      title: "Análisis Predictivo con IA",
      category: "Inteligencia Artificial",
      description:
        "Sistema de análisis predictivo para optimización de inventarios y forecasting de demanda basado en datos históricos.",
      tags: ["Machine Learning", "Python", "Analytics", "Predicción"],
      results: "40% mejora en gestión de inventario",
    },
    {
      title: "App de Reservas Restaurant",
      category: "Desarrollo Web",
      description:
        "Sistema de reservas online con gestión de mesas, menú digital interactivo y notificaciones automáticas.",
      tags: ["Reservas", "Restaurant", "WhatsApp", "Calendario"],
      results: "+150 reservas mensuales",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">Nuestro Portafolio</h1>
            <p className="text-xl text-primary-foreground/90">
              Casos de éxito que demuestran nuestro compromiso con la excelencia y la innovación
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">40+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">95%</div>
              <div className="text-sm text-muted-foreground">Tasa de Éxito</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">10+</div>
              <div className="text-sm text-muted-foreground">Industrias</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-accent font-semibold">
                      {project.category}
                    </Badge>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-accent">Resultado:</p>
                    <p className="text-sm text-muted-foreground">{project.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Intelnet transformó completamente nuestra presencia digital. El equipo es profesional y los resultados superaron nuestras expectativas.",
                author: "María González",
                role: "CEO, Fashion Hub",
              },
              {
                text: "La automatización que implementaron nos ahorró innumerables horas de trabajo manual. Excelente ROI y soporte continuo.",
                author: "Carlos Ramírez",
                role: "Director de Operaciones",
              },
              {
                text: "Su chatbot de IA mejoró drásticamente nuestra atención al cliente. Respuestas instantáneas y clientes más satisfechos.",
                author: "Ana Martínez",
                role: "Gerente de Servicio al Cliente",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-6">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">¿Tu proyecto será el próximo?</h2>
            <p className="text-xl text-primary-foreground/90">
              Únete a las empresas que ya confiaron en nosotros para su transformación digital
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contacto">
                Comienza Tu Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portafolio;
