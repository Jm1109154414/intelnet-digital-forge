import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast.error("Por favor completa todos los campos requeridos");
    return;
  }

  try {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error al enviar el mensaje");
    }

    toast.success("¡Mensaje enviado! Te contactaremos pronto.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    toast.error("No se pudo enviar el mensaje. Intenta de nuevo.");
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email",
      info: "contacto@intelnet.mx",
      link: "mailto:contacto@intelnet.mx",
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Teléfono",
      info: "+52 8445283282",
      link: "https://wa.me/528445283282",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">Contáctanos</h1>
            <p className="text-xl text-primary-foreground/90">
              Estamos listos para ayudarte a transformar tu negocio con tecnología
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-border hover:border-accent/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-3xl">Envíanos un Mensaje</CardTitle>
                  <CardDescription className="text-base">
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Nombre Completo <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+52 55 1234 5678"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="¿En qué podemos ayudarte?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Mensaje <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tu proyecto..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                      Enviar Mensaje
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.info}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>


              <Card className="border-2 border-accent/20">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Respuesta Rápida</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Tiempo promedio de respuesta: <span className="font-bold text-accent">2-4 horas</span>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Para consultas urgentes, llámanos directamente o escríbenos por WhatsApp.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">¿Prefieres una Reunión Virtual?</h2>
            <p className="text-xl text-muted-foreground">
              Agenda una videollamada gratuita de 30 minutos para discutir tu proyecto en detalle
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={() => window.open("https://wa.me/528445283282?text=Hola%20quiero%20agendar%20una%20reunión", "_blank")}
            >
              Agenda una Reunión
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
