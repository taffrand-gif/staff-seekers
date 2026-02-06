import { useEffect } from 'react';
import { ACTIVE_CONFIG } from '../../../shared/serviceConfig';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export function useSEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    // Mettre à jour le titre
    document.title = title;

    // Mettre à jour ou créer la meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Mettre à jour ou créer le lien canonique
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // Ajouter les données structurées Schema.org
    if (schema) {
      const scriptId = 'schema-org-data';
      let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [title, description, canonical, schema]);
}

// Fonction helper pour générer le titre SEO selon le format requis
export function generateSEOTitle(ville?: string): string {
  const config = ACTIVE_CONFIG;
  
  if (ville) {
    // Format: [Service] [Ville] 24h | [Entreprise]
    return `${config.name} ${ville} 24h | ${config.businessName}`;
  }
  
  // Page d'accueil
  return `${config.name} 24h | ${config.businessName} | Urgências Bragança`;
}

// Fonction helper pour générer la meta description
export function generateMetaDescription(ville?: string): string {
  const config = ACTIVE_CONFIG;
  
  if (ville) {
    if (config.type === 'plomberie') {
      return `${config.name} em ${ville} - Reparação de fugas de água, entupimentos e instalações. Atendemos urgências 24h. Piquete 24h.`;
    } else {
      return `${config.name} em ${ville} - Curto-circuitos, quadros elétricos, instalações. Urgências 24h. Ligue agora.`;
    }
  }
  
  // Page d'accueil
  if (config.type === 'plomberie') {
    return `${config.name} 24h - instalação, reparação e manutenção técnica de canalizações e fugas de água. Somos uma equipa de canalizadores profissionais e certificados.`;
  } else {
    return `${config.name} 24h - instalação, reparação e manutenção de sistemas elétricos. Somos uma equipa de eletricistas profissionais e certificados.`;
  }
}

// Fonction pour générer le schema LocalBusiness
export function generateLocalBusinessSchema(ville?: string) {
  const config = ACTIVE_CONFIG;
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": config.businessName,
    "image": `https://${config.domain}/logo.png`,
    "telephone": `+${config.whatsappNumber}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": ville || "Macedo de Cavaleiros",
      "addressRegion": "Bragança",
      "addressCountry": "PT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": ville ? getCityCoordinates(ville).lat : 41.5382,
      "longitude": ville ? getCityCoordinates(ville).lng : -6.9667
    },
    "url": `https://${config.domain}${ville ? `/servicos/${getCitySlug(ville)}` : ''}`,
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": ville || "Bragança"
    }
  };
}

// Fonction pour générer le schema FAQPage
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Fonction helper pour obtenir les coordonnées d'une ville (approximatives)
function getCityCoordinates(ville: string): { lat: number; lng: number } {
  const coordinates: Record<string, { lat: number; lng: number }> = {
    "Alfândega da Fé": { lat: 41.3444, lng: -6.9667 },
    "Bragança": { lat: 41.8058, lng: -6.7567 },
    "Carrazeda de Ansiães": { lat: 41.2422, lng: -7.3056 },
    "Freixo de Espada à Cinta": { lat: 41.0892, lng: -6.8061 },
    "Macedo de Cavaleiros": { lat: 41.5382, lng: -6.9667 },
    "Miranda do Douro": { lat: 41.4972, lng: -6.2739 },
    "Mirandela": { lat: 41.4867, lng: -7.1858 },
    "Mogadouro": { lat: 41.3403, lng: -6.7128 },
    "Torre de Moncorvo": { lat: 41.1786, lng: -7.0536 },
    "Vila Flor": { lat: 41.3072, lng: -7.1514 },
    "Vimioso": { lat: 41.5836, lng: -6.5264 },
    "Vinhais": { lat: 41.8372, lng: -7.0014 },
  };
  
  return coordinates[ville] || { lat: 41.5382, lng: -6.9667 };
}

// Fonction helper pour obtenir le slug d'une ville
function getCitySlug(ville: string): string {
  return ville
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}
