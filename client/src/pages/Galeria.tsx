import { useState } from "react";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";

interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

export default function Galeria() {
  const config = ACTIVE_CONFIG;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const images = getGalleryImages(config.type);
  const categories = ["Todas", ...Array.from(new Set(images.map(img => img.category)))];

  const filteredImages = selectedCategory === "Todas" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container py-4">
          <a href="/" className="text-2xl font-bold text-gray-900">
            {config.businessName}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Galeria de Trabalhos
          </h1>
          <p className="text-xl opacity-90">
            Veja alguns dos nossos trabalhos realizados com qualidade e profissionalismo
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Ver Imagem
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-semibold">{image.alt}</p>
                <p className="text-gray-300 text-xs">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p className="mb-2">
            {config.businessName} - {config.name} 24h
          </p>
          <p className="text-gray-400 text-sm">
            📞 {formatPhone(config.phone)} | 💬 WhatsApp
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2024 {config.businessName}. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
}

// Fonction pour générer des images placeholder (à remplacer par de vraies images)
function getGalleryImages(serviceType: 'plomberie' | 'electricite'): GalleryImage[] {
  const baseUrl = "https://placehold.co/600x400";
  
  if (serviceType === 'plomberie') {
    return [
      { url: `${baseUrl}/667eea/white?text=Reparação+Fuga`, alt: "Reparação de fuga de água", category: "Reparações" },
      { url: `${baseUrl}/667eea/white?text=Instalação+Torneira`, alt: "Instalação de torneira", category: "Instalações" },
      { url: `${baseUrl}/667eea/white?text=Desentupimento`, alt: "Desentupimento de canalização", category: "Desentupimentos" },
      { url: `${baseUrl}/667eea/white?text=Caldeira`, alt: "Manutenção de caldeira", category: "Manutenção" },
      { url: `${baseUrl}/667eea/white?text=Casa+Banho`, alt: "Instalação de casa de banho", category: "Instalações" },
      { url: `${baseUrl}/667eea/white?text=Esquentador`, alt: "Instalação de esquentador", category: "Instalações" },
      { url: `${baseUrl}/667eea/white?text=Cano+Rebentado`, alt: "Reparação de cano rebentado", category: "Reparações" },
      { url: `${baseUrl}/667eea/white?text=Autoclismo`, alt: "Reparação de autoclismo", category: "Reparações" },
      { url: `${baseUrl}/667eea/white?text=Pia+Cozinha`, alt: "Instalação de pia de cozinha", category: "Instalações" },
    ];
  } else {
    return [
      { url: `${baseUrl}/f093fb/white?text=Quadro+Elétrico`, alt: "Instalação de quadro elétrico", category: "Instalações" },
      { url: `${baseUrl}/f093fb/white?text=Tomadas`, alt: "Instalação de tomadas", category: "Instalações" },
      { url: `${baseUrl}/f093fb/white?text=Iluminação`, alt: "Instalação de iluminação LED", category: "Iluminação" },
      { url: `${baseUrl}/f093fb/white?text=Curto-Circuito`, alt: "Reparação de curto-circuito", category: "Reparações" },
      { url: `${baseUrl}/f093fb/white?text=Disjuntor`, alt: "Substituição de disjuntor", category: "Reparações" },
      { url: `${baseUrl}/f093fb/white?text=Fiação`, alt: "Substituição de fiação", category: "Instalações" },
      { url: `${baseUrl}/f093fb/white?text=Interruptores`, alt: "Instalação de interruptores", category: "Instalações" },
      { url: `${baseUrl}/f093fb/white?text=Certificação`, alt: "Certificação elétrica", category: "Certificação" },
      { url: `${baseUrl}/f093fb/white?text=Focos+LED`, alt: "Instalação de focos LED", category: "Iluminação" },
    ];
  }
}
