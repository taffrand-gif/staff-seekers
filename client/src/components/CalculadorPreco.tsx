import React, { useState, useMemo } from 'react';
import { useSite } from '@/contexts/SiteContext';

const zones = [
  { label: 'Macedo de Cavaleiros (Zona 1)', price: 15 },
  { label: 'Mirandela / Vila Flor (Zona 2)', price: 20 },
  { label: 'Bragança / Vinhais (Zona 3)', price: 30 },
  { label: 'Miranda do Douro (Zona 4)', price: 35 },
  { label: 'Vila Real / Lamego (Zona 5)', price: 45 },
  { label: 'Chaves / Montalegre (Zona 6)', price: 50 },
];

const servicesElec = [
  { label: 'Tomada / Interruptor', min: 30, max: 45 },
  { label: 'Avaria / Diagnóstico', min: 50, max: 80 },
  { label: 'Substituição Quadro Elétrico', min: 150, max: 350 },
  { label: 'Certificação CERTIEL', min: 80, max: 200 },
  { label: 'Instalação Completa', min: 200, max: 500 },
];

const servicesPlumb = [
  { label: 'Desentupimento Simples', min: 40, max: 60 },
  { label: 'Fuga de Água Visível', min: 60, max: 90 },
  { label: 'Fuga Oculta (deteção + reparação)', min: 120, max: 250 },
  { label: 'Esquentador (reparação)', min: 50, max: 120 },
  { label: 'Casa de Banho Completa', min: 800, max: 1800 },
];

export default function CalculadorPreco() {
  const { config } = useSite();
  const isPlumber = config.id === 'norte-reparos';
  const [zoneIdx, setZoneIdx] = useState(0);
  const [serviceIdx, setServiceIdx] = useState(0);
  const [isUrgent, setIsUrgent] = useState(false);

  const services = isPlumber ? servicesPlumb : servicesElec;
  const phone = isPlumber ? '928 484 451' : '932 321 892';
  const whatsapp = isPlumber ? '351928484451' : '351932321892';
  const accentColor = isPlumber ? '#0e7490' : '#FF6B35';

  const result = useMemo(() => {
    const zone = zones[zoneIdx];
    const service = services[serviceIdx];
    const mult = isUrgent ? 1.5 : 1;
    const travel = Math.round(zone.price * mult);
    const laborMin = Math.round(service.min * mult);
    const laborMax = Math.round(service.max * mult);
    return {
      travel,
      travelBase: zone.price,
      laborMin,
      laborMax,
      totalMin: travel + laborMin,
      totalMax: travel + laborMax,
      zoneName: zone.label,
      serviceName: service.label,
    };
  }, [zoneIdx, serviceIdx, isUrgent, services]);

  const waMsg = encodeURIComponent(
    `Olá! Preciso de ${result.serviceName} em ${result.zoneName}. Estimativa: ${result.totalMin}€-${result.totalMax}€. Podem vir?`
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calcule o Preço da Sua Intervenção
          </h2>
          <p className="text-lg text-gray-600">
            Estimativa imediata — sem ter de falar com ninguém
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
          {/* Zone */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">📍 Onde está?</label>
            <select
              value={zoneIdx}
              onChange={e => setZoneIdx(Number(e.target.value))}
              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none text-lg"
              style={{ borderColor: accentColor }}
            >
              {zones.map((z, i) => (
                <option key={i} value={i}>{z.label} — {z.price}€</option>
              ))}
            </select>
          </div>

          {/* Service */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">🔧 Que serviço precisa?</label>
            <select
              value={serviceIdx}
              onChange={e => setServiceIdx(Number(e.target.value))}
              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none text-lg"
              style={{ borderColor: accentColor }}
            >
              {services.map((s, i) => (
                <option key={i} value={i}>{s.label} — {s.min}€ a {s.max}€</option>
              ))}
            </select>
          </div>

          {/* Urgency toggle */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-2">🕐 É urgência noturna ou fim de semana?</label>
            <div className="flex gap-4">
              <button
                onClick={() => setIsUrgent(false)}
                className="flex-1 py-3 rounded-xl font-bold text-lg border-2 transition-all"
                style={{
                  borderColor: !isUrgent ? accentColor : '#e5e7eb',
                  backgroundColor: !isUrgent ? `${accentColor}15` : 'white',
                  color: !isUrgent ? accentColor : '#6b7280',
                }}
              >
                Não
              </button>
              <button
                onClick={() => setIsUrgent(true)}
                className="flex-1 py-3 rounded-xl font-bold text-lg border-2 transition-all"
                style={{
                  borderColor: isUrgent ? '#dc2626' : '#e5e7eb',
                  backgroundColor: isUrgent ? '#fef2f2' : 'white',
                  color: isUrgent ? '#dc2626' : '#6b7280',
                }}
              >
                Sim (+50%)
              </button>
            </div>
          </div>

          {/* Result */}
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: accentColor }}>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Deslocação:</span>
                <span className="font-bold">{result.travel}€</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Mão de obra (estimativa):</span>
                <span className="font-bold">{result.laborMin}€ - {result.laborMax}€</span>
              </div>
              {isUrgent && (
                <div className="flex justify-between text-red-600 text-sm">
                  <span>Inclui acréscimo urgência (+50% deslocação e mão de obra)</span>
                </div>
              )}
              <hr />
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">TOTAL ESTIMADO:</span>
                <span className="text-3xl font-black" style={{ color: accentColor }}>
                  {result.totalMin}€ - {result.totalMax}€
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              * Estimativa. Preço exato comunicado ao telefone antes de sair. Sem surpresas garantido. Noturno/fim de semana: +50% sobre deslocação e mão de obra.
            </p>
            <a
              href={`https://wa.me/${whatsapp}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#25D366' }}
            >
              💬 Confirmar Disponibilidade no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
