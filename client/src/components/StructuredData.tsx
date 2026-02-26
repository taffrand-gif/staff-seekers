// Structured Data (Schema.org) component
// Schema Markup LocalBusiness: Plumber pour norte-reparos, Electrician pour staff-seekers

import { useEffect } from 'react';
import { useSite } from '@/contexts/SiteContext';
import { useLocation } from 'wouter';

export default function StructuredData() {
  const { config } = useSite();
  const [location] = useLocation();

  useEffect(() => {
    // Remover scripts existentes
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const businessType = 'Electrician';
    const serviceName = 'Eletricista';
    
    // Liste des 10 villes servies
    const citiesServed = [
      "Bragança", "Macedo de Cavaleiros", "Mirandela", "Chaves", 
      "Vila Real", "Vinhais", "Miranda do Douro", "Mogadouro", 
      "Torre de Moncorvo", "Freixo de Espada à Cinta", "Valpaços", "Alfândega da Fé"
    ];

    // LocalBusiness Schema enrichi
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": businessType,
      "@id": `https://${config.domain}/#organization`,
      "name": config.name,
      "legalName": config.company.fullName,
      "description": config.description,
      "url": `https://${config.domain}`,
      "telephone": `+351${config.phone.replace(/\s/g, '')}`,
      "email": config.email,
      "priceRange": "€€ - €€€",
      "image": `https://${config.domain}${config.seo.ogImage}`,
      "logo": `https://${config.domain}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Macedo de Cavaleiros",
        "addressLocality": "Macedo de Cavaleiros",
        "addressRegion": "Bragança",
        "postalCode": "5340",
        "addressCountry": "PT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.5382",
        "longitude": "-6.9667"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "41.5382",
          "longitude": "-6.9667"
        },
        "geoRadius": "100000"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "47",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "foundingDate": config.company.yearEstablished,
      "knowsLanguage": "pt-PT",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "makesOffer": config.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.label,
          "provider": {
            "@id": `https://${config.domain}/#organization`
          }
        }
      }))
    };

    // Service Schema (général)
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": config.serviceType,
      "provider": {
        "@id": `https://${config.domain}/#organization`
      },
      "areaServed": citiesServed.map(city => ({
        "@type": "City",
        "name": city
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `Serviços de ${config.serviceType}`,
        "itemListElement": config.services.map((service, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "itemOffered": {
            "@type": "Service",
            "name": service.label,
            "description": `${service.label} profissional em Trás-os-Montes`,
            "provider": {
              "@id": `https://${config.domain}/#organization`
            }
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "EUR",
            "price": service.basePrice.toString()
          }
        }))
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": `+351${config.phone.replace(/\s/g, '')}`,
          "contactType": "customer service",
          "areaServed": "PT",
          "availableLanguage": "Portuguese",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        }
      }
    };

    // Service Schema spécifique pour les pages ville
    const getCityServiceSchema = () => {
      const cityPages = [
        { path: '/eletricista-chaves', city: 'Chaves' },
        { path: '/eletricista-braganca', city: 'Bragança' },
        { path: '/eletricista-mirandela', city: 'Mirandela' },
        { path: '/eletricista-macedo-de-cavaleiros', city: 'Macedo de Cavaleiros' },
        { path: '/eletricista-valpacos', city: 'Valpaços' },
        { path: '/eletricista-vinhais', city: 'Vinhais' },
        { path: '/eletricista-miranda-douro', city: 'Miranda do Douro' },
        { path: '/eletricista-mogadouro', city: 'Mogadouro' },
        { path: '/eletricista-torre-moncorvo', city: 'Torre de Moncorvo' },
        { path: '/eletricista-freixo-espada-cinta', city: 'Freixo de Espada à Cinta' }
      ];

      const currentCity = cityPages.find(page => location === page.path);
      if (!currentCity) return null;

      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${serviceName} em ${currentCity.city}`,
        "description": `${serviceName} profissional em ${currentCity.city}, Trás-os-Montes. Serviço 24h, urgências, orçamento gratuito.`,
        "provider": {
          "@id": `https://${config.domain}/#organization`
        },
        "areaServed": {
          "@type": "City",
          "name": currentCity.city
        },
        "serviceType": config.serviceType,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "EUR",
            "price": "80-200"
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": `+351${config.phone.replace(/\s/g, '')}`,
            "contactType": "customer service"
          }
        }
      };
    };

    // Reviews Schema amélioré
    const reviewsSchema = config.testimonials.map((testimonial, index) => ({
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": `https://${config.domain}/#review-${index + 1}`,
      "itemReviewed": {
        "@id": `https://${config.domain}/#organization`
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": testimonial.location
        }
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": testimonial.text,
      "datePublished": "2025-06-01",
      "publisher": {
        "@type": "Organization",
        "name": config.name
      }
    }));

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": `https://${config.domain}`,
      "name": config.name,
      "description": config.description,
      "inLanguage": "pt-PT",
      "publisher": {
        "@id": `https://${config.domain}/#organization`
      }
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `https://${config.domain}/#organization`,
      "name": config.name,
      "url": `https://${config.domain}`,
      "logo": `https://${config.domain}${config.seo.ogImage}`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": config.phone.replace(/\s/g, ''),
        "contactType": "customer service",
        "areaServed": "PT",
        "availableLanguage": "Portuguese",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      "sameAs": [
        `https://wa.me/${config.whatsapp || '351932321892'}?text=${encodeURIComponent(config.whatsappMessage)}`
      ]
    };

    // FAQ Schema enrichi
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `Qual é o horário de atendimento do ${config.serviceType}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Estamos disponíveis 24 horas por dia, 7 dias por semana, incluindo fins de semana e feriados. Serviço de urgência permanente."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo demora a chegar em caso de urgência?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em situações de urgência, o nosso tempo médio de resposta é de 30 a 45 minutos na zona de Bragança e Macedo de Cavaleiros. Para zonas mais afastadas, até 60 minutos."
          }
        },
        {
          "@type": "Question",
          "name": "Qual é a zona de cobertura?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cobrimos toda a região de Trás-os-Montes num raio de 100 km, incluindo Bragança, Mirandela, Macedo de Cavaleiros, Miranda do Douro, Vinhais, Chaves, Vila Real, Mogadouro, Torre de Moncorvo, Freixo de Espada à Cinta, Valpaços e Alfândega da Fé."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto custa uma intervenção?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os preços variam conforme o serviço e a localização. Oferecemos orçamento gratuito e sem compromisso. Preços a partir de 50€ para instalação de tomadas."
          }
        },
        {
          "@type": "Question",
          "name": "Têm certificação profissional?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, somos eletricistas certificados com anos de experiência na região. Trabalhamos com equipamento profissional Fluke e FLIR, e emitimos certificação CERTIEL."
          }
        }
      ]
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `https://${config.domain}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": config.serviceType,
          "item": `https://${config.domain}/servicos`
        }
      ]
    };

    // Ajouter la ville actuelle au breadcrumb si on est sur une page ville
    const cityPages = [
      { path: '/eletricista-chaves', city: 'Chaves' },
      { path: '/eletricista-braganca', city: 'Bragança' },
      { path: '/eletricista-mirandela', city: 'Mirandela' },
      { path: '/eletricista-macedo-de-cavaleiros', city: 'Macedo de Cavaleiros' },
      { path: '/eletricista-valpacos', city: 'Valpaços' },
      { path: '/eletricista-vinhais', city: 'Vinhais' },
      { path: '/eletricista-miranda-douro', city: 'Miranda do Douro' },
      { path: '/eletricista-mogadouro', city: 'Mogadouro' },
      { path: '/eletricista-torre-moncorvo', city: 'Torre de Moncorvo' },
      { path: '/eletricista-freixo-espada-cinta', city: 'Freixo de Espada à Cinta' }
    ];

    const currentCity = cityPages.find(page => location === page.path);
    if (currentCity) {
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": 3,
        "name": `${serviceName} em ${currentCity.city}`,
        "item": `https://${config.domain}${location}`
      });
    }

    // Inserir tous les schemas
    const schemas = [
      localBusinessSchema,
      serviceSchema,
      websiteSchema,
      organizationSchema,
      faqSchema,
      breadcrumbSchema,
      ...reviewsSchema
    ];

    // Ajouter le schema spécifique à la ville si applicable
    const cityServiceSchema = getCityServiceSchema();
    if (cityServiceSchema) {
      schemas.push(cityServiceSchema);
    }

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [config, location]);

  return null;
}
