// Header avec navigation améliorée - dropdown villes + liens directs
import { useSite } from '@/contexts/SiteContext';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useRef, useEffect } from 'react';

const cities = [
  { name: 'Bragança', href: '/eletricista-braganca' },
  { name: 'Mirandela', href: '/eletricista-mirandela' },
  { name: 'Chaves', href: '/eletricista-chaves' },
  { name: 'Vila Real', href: '/eletricista-vila-real' },
  { name: 'Macedo de Cavaleiros', href: '/eletricista-macedo-cavaleiros' },
  { name: 'Vinhais', href: '/eletricista-vinhais' },
  { name: 'Miranda do Douro', href: '/eletricista-miranda-douro' },
  { name: 'Mogadouro', href: '/eletricista-mogadouro' },
  { name: 'Torre de Moncorvo', href: '/eletricista-torre-moncorvo' },
  { name: 'Freixo de Espada à Cinta', href: '/eletricista-freixo-espada-cinta' },
];

export default function Header() {
  const { config } = useSite();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [mobileCitiesOpen, setMobileCitiesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCitiesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const navItems = [
    { id: 'home', label: 'HOME', action: () => scrollToSection('home') },
    { id: 'servicos', label: 'SERVIÇOS', action: () => window.location.href = '/servicos' },
    { id: 'cities', label: 'CIDADES', action: () => setCitiesOpen(!citiesOpen), dropdown: true },
    { id: 'blog', label: 'BLOG', action: () => window.location.href = '/blog' },
    { id: 'faq', label: 'FAQ', action: () => window.location.href = '/faq' },
    { id: 'precos', label: 'PREÇOS', action: () => window.location.href = '/blog/custo-eletricista-tras-os-montes-precos' },
    { id: 'contactos', label: 'CONTACTOS', action: () => scrollToSection('contactos') },
  ];

  return (
    <header 
      className="sticky top-0 z-50 bg-white border-b-4 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]"
      style={{ borderBottomColor: config.colors.primary }}
    >
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

      <div className="container py-4">
        <div className="flex items-center justify-between">
          <a 
            href="/"
            className="text-xl font-black tracking-tight hover:opacity-80 transition-opacity"
            style={{ color: config.colors.primary }}
          >
            {config.name}
          </a>

          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <div key={item.id} className="relative" ref={item.dropdown ? dropdownRef : undefined}>
                <button
                  onClick={item.action}
                  className="text-sm font-semibold hover:opacity-60 transition-opacity flex items-center gap-1"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </button>
                {item.dropdown && citiesOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border py-2 min-w-[220px] z-50">
                    {cities.map((city) => (
                      <a
                        key={city.href}
                        href={city.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                        style={{ color: '#333' }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.color = config.colors.primary}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#333'}
                      >
                        ⚡ {city.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Button
            onClick={() => window.open(`https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`, '_blank')}
            className="hidden lg:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]"
          >
            Fale connosco no WhatsApp
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 bg-white" style={{ borderTopColor: config.colors.primary }}>
          <nav className="container py-4 flex flex-col gap-1">
            <a href="/" className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">HOME</a>
            <a href="/servicos" className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">SERVIÇOS</a>
            
            <button
              onClick={() => setMobileCitiesOpen(!mobileCitiesOpen)}
              className="text-left text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 flex items-center justify-between"
            >
              CIDADES <ChevronDown className={`w-4 h-4 transition-transform ${mobileCitiesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileCitiesOpen && (
              <div className="pl-4">
                {cities.map((city) => (
                  <a
                    key={city.href}
                    href={city.href}
                    className="block py-2 px-4 text-sm rounded-lg hover:bg-gray-50"
                    style={{ color: config.colors.primary }}
                  >
                    ⚡ {city.name}
                  </a>
                ))}
              </div>
            )}
            
            <a href="/blog" className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">BLOG</a>
            <a href="/faq" className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">FAQ</a>
            <a href="/blog/custo-eletricista-tras-os-montes-precos" className="text-base font-semibold py-2 px-4 rounded-lg hover:bg-gray-100">PREÇOS</a>
            
            <Button
              onClick={() => {
                window.open(`https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`, '_blank');
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
