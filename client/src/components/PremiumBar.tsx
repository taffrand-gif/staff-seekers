import React from 'react';
import { useSite } from '@/contexts/SiteContext';

export default function PremiumBar() {
  const { config } = useSite();
  const isPlumber = config.id === 'norte-reparos';

  const items = isPlumber
    ? [
        { icon: '🔬', label: 'Câmara Térmica' },
        { icon: '🔧', label: 'Ridgid K-6200' },
        { icon: '🔍', label: 'Endoscópio HD' },
        { icon: '📡', label: 'Geofone Deteção' },
      ]
    : [
        { icon: '🔬', label: 'Câmara FLIR' },
        { icon: '📊', label: 'Fluke 87V MAX' },
        { icon: '🔍', label: 'Endoscópio Ridgid' },
        { icon: '📋', label: 'CERTIEL Certificado' },
      ];

  return (
    <div className="bg-gray-900 text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap text-sm md:text-base">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-bold hidden md:inline">
            Equipamento Profissional:
          </span>
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2 font-semibold whitespace-nowrap">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
