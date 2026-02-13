// Footer com navegação funcional e informações de contacto
import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  const { config } = useSite();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="text-white py-16"
      style={{ backgroundColor: config.colors.primaryDark }}
    >
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Informação da empresa */}
          <div>
            <h3 className="text-2xl font-black mb-4">{config.name}</h3>
            <p className="text-gray-200 mb-4">
              {config.company.shortDescription}
            </p>
            <p className="text-gray-300 text-sm">
              Cobertura em toda a região de {config.company.coverage}.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-black mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'precos', label: 'Preços' },
                { id: 'equipa', label: 'Equipa' },
                { id: 'trabalhos', label: 'Trabalhos' },
                { id: 'faq', label: 'FAQ' },
                { id: 'testemunhos', label: 'Testemunhos' },
                { id: 'blog', label: 'Blog' },
                { id: 'contactos', label: 'Contactos' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-black mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Telefone:</p>
                  <a 
                    href={`tel:${config.phone.replace(/\s/g, '')}`}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {config.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Horário:</p>
                  <p className="text-gray-200">24 horas por dia, 7 dias por semana</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Zona de Cobertura:</p>
                  <p className="text-gray-200">Trás-os-Montes — Bragança, Macedo de Cavaleiros, Mirandela e região</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t-2 border-white/20 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} {config.name}. Todos os direitos reservados.
          <div className="mt-2 text-xs text-gray-400">
            Morada: Macedo de Cavaleiros, Trás-os-Montes, Portugal
          </div>
        </div>
      </div>
    </footer>
  );
}
