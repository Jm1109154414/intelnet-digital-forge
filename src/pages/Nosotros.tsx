import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, ArrowRight } from "lucide-react";

const Nosotros = () => {
  const values = [
    {
      icon: <Target className="h-10 w-10 text-accent" />,
      title: "Innovación Constante",
      description: "Nos mantenemos a la vanguardia de las últimas tecnologías para ofrecer soluciones de clase mundial.",
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Enfoque en el Cliente",
      description: "Tu éxito es nuestro éxito. Trabajamos de cerca contigo para entender y superar tus expectativas.",
    },
    {
      icon: <Award className="h-10 w-10 text-accent" />,
      title: "Calidad Garantizada",
      description: "Cada proyecto es tratado con el más alto estándar de calidad y atención al detalle.",
    },
  ];

  const stats = [
    { number: "50+", label: "Empresas Digitalizadas" },
    { number: "100+", label: "Proyectos Completados" },
    { number: "95%", label: "Satisfacción del Cliente" },
    { number: "24/7", label: "Soporte Técnico" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">Sobre Intelnet</h1>
            <p className="text-xl text-primary-foreground/90">
              Tu socio tecnológico para la transformación digital
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-2 border-accent/20 hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="mb-4">
                  <Target className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-3xl">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-foreground">
                  Empoderar a empresas y emprendedores con soluciones tecnológicas innovadoras que impulsen su
                  crecimiento, mejoren su eficiencia y les permitan destacar en el mercado digital. Nos
                  comprometemos a transformar ideas en realidades tecnológicas que generen valor real y resultados
                  medibles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="mb-4">
                  <Eye className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-3xl">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-foreground">
                  Ser el referente líder en soluciones tecnológicas integrales en América Latina, reconocidos por
                  nuestra excelencia, innovación constante y el impacto positivo que generamos en cada proyecto.
                  Aspiramos a digitalizar miles de empresas y contribuir activamente al ecosistema tecnológico
                  regional.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y proyecto que realizamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent">{stat.number}</div>
                <div className="text-lg text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Expertise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Nuestro Equipo</h2>
              <p className="text-xl text-muted-foreground">
                Expertos apasionados por la tecnología y la innovación
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                En Intelnet contamos con un equipo multidisciplinario de profesionales altamente capacitados en las
                últimas tecnologías y metodologías de desarrollo. Nuestros especialistas en desarrollo web,
                inteligencia artificial, automatización y consultoría tecnológica trabajan en conjunto para ofrecer
                soluciones integrales y de alta calidad.
              </p>
              <p className="text-lg">
                Nos caracterizamos por nuestra capacidad de adaptación, pensamiento innovador y compromiso con la
                excelencia. Cada miembro del equipo aporta años de experiencia y una pasión genuina por resolver
                desafíos complejos mediante la tecnología.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl text-muted-foreground">
              Descubre cómo podemos ayudarte a alcanzar tus objetivos digitales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contacto">
                  Agenda una Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="default" size="lg" asChild>
                <Link to="/portafolio">Ver Nuestro Trabajo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
