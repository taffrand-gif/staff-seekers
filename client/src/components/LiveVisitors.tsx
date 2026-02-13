// Compteur visiteurs live - Quick Win #5
// Style Hormozi : FOMO, preuve sociale en temps réel

import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

export default function LiveVisitors() {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  // Générer un nombre aléatoire entre 12 et 47
  useEffect(() => {
    const randomCount = Math.floor(Math.random() * (47 - 12 + 1)) + 12;
    setVisitorCount(randomCount);

    // Mettre à jour toutes les 30-60 secondes
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 5) - 2; // -2 à +2
      setVisitorCount(prev => Math.max(12, prev + change));
    }, 30000 + Math.random() * 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-20 left-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl border-2 border-gray-300 p-4 flex items-center gap-3 animate-pulse">
        <div className="relative">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-bold text-gray-800">Online agora:</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-red-600">{visitorCount}</span>
            <span className="text-sm text-gray-600">pessoas</span>
          </div>
        </div>
      </div>
    </div>
  );
}