// Design Philosophy: Brutalisme Numérique Fonctionnel
// - Clear sectioned layout with thick dividers
// - Bold headings
// - Accessible contact information
// - Copyright notice

import { useSite } from '@/contexts/SiteContext';
import { Phone, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  const { config } = useSite();

  const scrollToSection = (id: string) => {
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
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-black mb-4">{config.name}</h3>
            <p className="text-gray-200 mb-4">
              {config.company.shortDescription}
            </p>
            <p className="text-gray-300 text-sm">
              Cobertura em todo o {config.company.coverage}.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-black mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'trabalhos', label: 'Trabalhos' },
                { id: 'equipa', label: 'Equipa' },
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

          {/* Contact */}
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
                  <p className="text-gray-200">{config.company.coverage}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t-2 border-white/20 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} {config.name}. Todos os direitos reservados.
          <div className="mt-2 text-xs text-gray-400">
            NIF: [NIF] | Morada: Macedo de Cavaleiros, Trás-os-Montes, Portugal
            <span className="mx-2">•</span>
            <a href="/politica-privacidade" className="hover:text-white">Política de Privacidade</a>
            <span className="mx-2">•</span>
            <a href="/termos-condicoes" className="hover:text-white">Termos e Condições</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
