import React, { useEffect, useState } from 'react';
import { useSite } from '@/contexts/SiteContext';

const citiesNorte = [
  'Bragança', 'Mirandela', 'Macedo de Cavaleiros', 'Vila Real', 'Chaves',
  'Lamego', 'Mogadouro', 'Torre de Moncorvo', 'Vinhais', 'Vila Flor',
];

const citiesStaff = [
  'Bragança', 'Mirandela', 'Macedo de Cavaleiros', 'Vila Real', 'Chaves',
  'Lamego', 'Mogadouro', 'Torre de Moncorvo', 'Vinhais', 'Alfândega da Fé',
];

const namesNorte = [
  'Maria S.', 'António F.', 'João M.', 'Ana R.', 'Manuel P.',
  'Rosa L.', 'Carlos D.', 'Teresa B.', 'José A.', 'Fernanda C.',
];

const namesStaff = [
  'Pedro G.', 'Luísa M.', 'Ricardo S.', 'Helena F.', 'Miguel A.',
  'Carla T.', 'Nuno R.', 'Isabel P.', 'Tiago L.', 'Sofia D.',
];

const actionsNorte = [
  'pediu orçamento para desentupimento',
  'ligou para urgência de fuga de água',
  'pediu orçamento para reparação de esquentador',
  'agendou visita para casa de banho',
  'pediu orçamento para canalização nova',
  'ligou para fuga de água urgente',
];

const actionsStaff = [
  'pediu orçamento para quadro elétrico',
  'ligou para urgência elétrica',
  'pediu certificação CERTIEL',
  'agendou instalação de iluminação',
  'pediu orçamento para avaria elétrica',
  'ligou para curto-circuito urgente',
];

function randomMinutes() {
  return Math.floor(Math.random() * 45) + 2;
}

function pickRandom<T>(arr: T[], exclude?: T): T {
  const filtered = exclude ? arr.filter(item => item !== exclude) : arr;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export default function SocialProofTicker() {
  const { config } = useSite();
  const isPlumber = config.id === 'norte-reparos';
  const [notification, setNotification] = useState<{ name: string; city: string; action: string; minutes: number } | null>(null);
  const [visible, setVisible] = useState(false);

  const cities = isPlumber ? citiesNorte : citiesStaff;
  const names = isPlumber ? namesNorte : namesStaff;
  const actions = isPlumber ? actionsNorte : actionsStaff;
  const accentColor = isPlumber ? '#0e7490' : '#FF6B35';

  useEffect(() => {
    // First notification after 8-15 seconds
    const initialDelay = Math.floor(Math.random() * 7000) + 8000;

    const showNotification = () => {
      setNotification(prev => {
        const newName = pickRandom(names, prev?.name);
        const newCity = pickRandom(cities, prev?.city);
        const newAction = pickRandom(actions, prev?.action);
        return {
          name: newName,
          city: newCity,
          action: newAction,
          minutes: randomMinutes(),
        };
      });
      setVisible(true);

      // Hide after 5 seconds
      setTimeout(() => setVisible(false), 5000);
    };

    const firstTimeout = setTimeout(showNotification, initialDelay);

    // Then every 25-45 seconds
    const interval = setInterval(showNotification, Math.floor(Math.random() * 20000) + 25000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [names, cities, actions]);

  if (!notification || !visible) return null;

  return (
    <div
      className="fixed bottom-24 left-4 z-40 animate-slide-in-left"
      style={{
        animation: 'slideInLeft 0.4s ease-out',
      }}
    >
      <div
        className="bg-white rounded-xl shadow-2xl border-l-4 p-4 max-w-xs"
        style={{ borderColor: accentColor }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ backgroundColor: accentColor }}
          >
            {notification.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {notification.name} de {notification.city}
            </p>
            <p className="text-xs text-gray-600">
              {notification.action}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              há {notification.minutes} minutos
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
