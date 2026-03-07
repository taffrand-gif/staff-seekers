import React from 'react';
import { useSite } from '@/contexts/SiteContext';

interface Forfait {
  icon: string;
  title: string;
  description: string;
  priceRange: string;
  details: string[];
  popular?: boolean;
}

interface ForfaitsGridProps {
  className?: string;
}

function ForfaitsGrid({ className = '' }: ForfaitsGridProps) {
  const { config } = useSite();
  const accentColor = config.id === 'norte-reparos' ? '#0e7490' : '#FF6B35';

  const forfaitsElectricien: Forfait[] = [
    {
      icon: '🔌',
      title: 'Installation Prise/Interrupteur',
      description: 'Ajout ou remplacement de prise ou interrupteur',
      priceRange: '50-105€',
      details: [
        'Déplacement inclus (Zone 1)',
        'Installation complète',
        'Test de fonctionnement',
        'Garantie 6 mois'
      ]
    },
    {
      icon: '🔍',
      title: 'Recherche de Panne',
      description: 'Diagnostic complet installation électrique',
      priceRange: '85-140€',
      details: [
        'Déplacement inclus (Zone 1)',
        'Diagnostic approfondi',
        'Rapport détaillé',
        'Devis réparation gratuit'
      ],
      popular: true
    },
    {
      icon: '💡',
      title: 'Installation Luminaire',
      description: 'Pose de plafonnier, applique ou spot',
      priceRange: '50-105€',
      details: [
        'Déplacement inclus (Zone 1)',
        'Installation sécurisée',
        'Raccordement électrique',
        'Nettoyage après travaux'
      ]
    },
    {
      icon: '⚡',
      title: 'Réparation Disjoncteur',
      description: 'Tableau qui saute - diagnostic et réparation',
      priceRange: '85-210€',
      details: [
        'Déplacement inclus (Zone 1)',
        'Identification problème',
        'Remplacement si nécessaire',
        'Mise aux normes'
      ],
      popular: true
    },
    {
      icon: '🏠',
      title: 'Modernisation Tableau Simple',
      description: 'Mise à jour tableau électrique basique',
      priceRange: '165-365€',
      details: [
        'Déplacement inclus (Zone 1)',
        'Nouveau tableau modulaire',
        'Disjoncteurs neufs',
        'Étiquetage circuits'
      ]
    },
    {
      icon: '🔧',
      title: 'Tableau Électrique Complet',
      description: 'Installation tableau neuf avec protection',
      priceRange: '215-515€',
      details: [
        'Déplacement inclus (Zone 1)',
        'Tableau complet aux normes',
        'Différentiel 30mA',
        'Parafoudre inclus'
      ]
    },
    {
      icon: '📋',
      title: 'Certification CERTIEL',
      description: 'Inspection et certificat officiel',
      priceRange: '95-215€',
      details: [
        'Déplacement inclus (Zone 1)',
        'Inspection complète',
        'Certificat officiel',
        'Rapport détaillé'
      ]
    },
    {
      icon: '🏗️',
      title: 'Installation Complète',
      description: 'Électricité maison/appartement neuf',
      priceRange: 'Sur devis',
      details: [
        'Étude personnalisée',
        'Plan électrique',
        'Matériel de qualité',
        'Garantie 6 mois'
      ]
    }
  ];

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Forfaits & Tarifs Clairs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prix tout compris pour les interventions les plus courantes. Matériel standard inclus.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {forfaitsElectricien.map((forfait, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                forfait.popular ? 'ring-2 ring-offset-2' : 'border-2 border-gray-100'
              }`}
              style={forfait.popular ? { ringColor: accentColor } : {}}
            >
              {/* Popular Badge */}
              {forfait.popular && (
                <div
                  className="text-white text-center py-2 text-sm font-bold"
                  style={{ backgroundColor: accentColor }}
                >
                  ⭐ PLUS DEMANDÉ
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div className="text-5xl mb-4 text-center">{forfait.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center min-h-[56px]">
                  {forfait.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 text-center min-h-[40px]">
                  {forfait.description}
                </p>

                {/* Price */}
                <div className="text-center mb-6">
                  <div
                    className="text-4xl font-black mb-1"
                    style={{ color: accentColor }}
                  >
                    {forfait.priceRange}
                  </div>
                  <p className="text-xs text-gray-500">Zone 1 - Matériel standard inclus</p>
                </div>

                {/* Details */}
                <ul className="space-y-2 mb-6">
                  {forfait.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className="w-full py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: accentColor }}
                  onClick={() => {
                    const phone = '932321892';
                    const message = encodeURIComponent(`Olá! Gostaria de um orçamento para: ${forfait.title}`);
                    window.open(`https://wa.me/351${phone}?text=${message}`, '_blank');
                  }}
                >
                  Demander Devis
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Informations Importantes
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">📍</div>
              <h4 className="font-bold text-gray-900 mb-1">Zones de Déplacement</h4>
              <p className="text-sm text-gray-600">
                Prix indiqués pour Zone 1 (≤15km). Autres zones: voir grille tarifaire.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-bold text-gray-900 mb-1">Matériel Inclus</h4>
              <p className="text-sm text-gray-600">
                Matériel standard inclus. Équipement premium sur demande avec supplément.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⏰</div>
              <h4 className="font-bold text-gray-900 mb-1">Majorations</h4>
              <p className="text-sm text-gray-600">
                Samedi +29%, Dimanche/Férié +43%, Nocturne (18h-8h) +50%
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-green-50 border-2 border-green-200 rounded-xl px-8 py-4">
            <p className="text-lg font-bold text-gray-900 mb-1">
              ✅ Prix Communiqué et Validé Avant Intervention
            </p>
            <p className="text-sm text-gray-600">
              Aucune surprise. Si le prix change, nous vous prévenons AVANT de commencer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ForfaitsGrid);
