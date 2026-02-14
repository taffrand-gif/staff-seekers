import React from 'react';
import { useSite } from '@/contexts/SiteContext';
import { Award, Wrench, Clock, Shield, User } from 'lucide-react';

export default function Equipa() {
  const { config } = useSite();

  return (
    <section id="equipa" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            A Nossa Equipa no Terreno
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gente da terra, que conhece cada rua de Trás-os-Montes e trata a sua casa com respeito.
          </p>
        </div>

        {/* Team Grid */}
        {config.team && config.team.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {config.team.map((member, index) => (
              <div key={index} className="bg-gray-50 border-2 border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto bg-gray-200 relative overflow-hidden">
                   {/* Placeholder for image if not exists, or real image */}
                   <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" onError={(e) => {
                          // Fallback if image fails
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center');
                          e.currentTarget.parentElement.innerHTML = '<span class="text-4xl">👷</span>'; 
                        }} />
                      ) : (
                        <User className="w-16 h-16" />
                      )}
                   </div>
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <span className="bg-[var(--site-primary)] text-white text-xs px-2 py-1 rounded uppercase font-bold tracking-wide">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 font-semibold flex items-center">
                    <MapPinIcon className="w-3 h-3 mr-1" /> {member.location}
                  </p>
                  
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  
                  <div className="mt-auto bg-white p-3 rounded border-l-4 border-[var(--site-primary)] italic text-gray-600 text-sm">
                    {member.quote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Generic Stats (Keep existing but simplified) */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="p-6 border rounded bg-white">
                <div className="text-4xl font-bold text-[var(--site-primary)] mb-2">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
            </div>
             <div className="p-6 border rounded bg-white">
                <div className="text-4xl font-bold text-[var(--site-primary)] mb-2">100%</div>
                <div className="text-gray-600">Transparência</div>
            </div>
             <div className="p-6 border rounded bg-white">
                <div className="text-4xl font-bold text-[var(--site-primary)] mb-2">24/7</div>
                <div className="text-gray-600">Disponibilidade</div>
            </div>
        </div>

      </div>
    </section>
  );
}

function MapPinIcon({className}: {className?: string}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}
