import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
              Intelnet
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Impulsamos tu negocio con soluciones tecnológicas inteligentes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/intelnet.mx/" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/servicios" className="hover:text-accent transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-accent transition-colors">
                  Chatbots Personalizados
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-accent transition-colors">
                  Automatización
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-accent transition-colors">
                  Inteligencia Artificial
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-accent transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/portafolio" className="hover:text-accent transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:contacto@intelnet.mx" className="hover:text-accent transition-colors">
                  contacto@intelnet.mx
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+52 8445283282" className="hover:text-accent transition-colors">
                  +52 844 5283282
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Intelnet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
