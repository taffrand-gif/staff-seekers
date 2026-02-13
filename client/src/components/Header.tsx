// Header com navegação funcional
// Links de navegação apontam para secções da página principal

import { useSite } from '@/contexts/SiteContext';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export default function Header() {
  const { config } = useSite();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // Se estamos numa sub-página, navegar para a home primeiro
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'servicos', label: 'SERVIÇOS' },
    { id: 'equipa', label: 'EQUIPA' },
    { id: 'trabalhos', label: 'TRABALHOS' },
    { id: 'faq', label: 'FAQ' },
    { id: 'testemunhos', label: 'TESTEMUNHOS' },
    { id: 'blog', label: 'BLOG' },
    { id: 'contactos', label: 'CONTACTOS' },
  ];

  return (
    <header 
      className="sticky top-0 z-50 bg-white border-b-4 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]"
      style={{ borderBottomColor: config.colors.primary }}
    >
      {/* Barra superior com telefone */}
      <div 
        className="text-white py-2"
        style={{ backgroundColor: config.colors.primary }}
      >
        <div className="container flex items-center justify-center gap-2 text-sm font-semibold">
          <Phone className="w-4 h-4" />
          <a href={`tel:${config.phone.replace(/\s/g, '')}`} className="hover:underline">
            LIGUE AGORA: {config.phone}
          </a>
        </div>
      </div>

      {/* Navegação principal */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-black tracking-tight hover:opacity-80 transition-opacity"
            style={{ color: config.colors.primary }}
          >
            {config.name}
          </button>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold hover:opacity-60 transition-opacity"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Botão WhatsApp */}
          <Button
            onClick={() => window.open(`https://wa.me/${config.whatsapp || '351932321892'}`, '_blank')}
            className="hidden lg:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]"
          >
            Fale connosco no WhatsApp
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 bg-white" style={{ borderTopColor: config.colors.primary }}>
          <nav className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                window.open(`https://wa.me/${config.whatsapp || '351932321892'}`, '_blank');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold mt-2"
            >
              Fale connosco no WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
