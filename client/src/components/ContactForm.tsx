import React, { useState } from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';

export default function ContactForm() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá, chamo-me ${nome || 'Cliente'}.\nTelefone: ${telefone || 'não indicado'}\nProblema: ${descricao || 'Gostaria de pedir um orçamento.'}`
    );
    window.open(`https://wa.me/351932321892?text=${msg}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+351932321892';
  };

  return (
    <section id="contacto-rapido" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Pedir Orçamento <span className="text-[#FF6B35]">Grátis</span>
            </h2>
            <p className="text-lg text-gray-300">
              Descreva o seu problema e a nossa equipa responde rapidamente via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleWhatsApp} className="space-y-5">
            <div>
              <label htmlFor="cf-nome" className="block text-sm font-semibold text-gray-300 mb-1">Nome</label>
              <input
                id="cf-nome"
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="O seu nome"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              />
            </div>
            <div>
              <label htmlFor="cf-tel" className="block text-sm font-semibold text-gray-300 mb-1">Telefone</label>
              <input
                id="cf-tel"
                type="tel"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
                placeholder="Ex: 912 345 678"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              />
            </div>
            <div>
              <label htmlFor="cf-desc" className="block text-sm font-semibold text-gray-300 mb-1">Descrição do problema</label>
              <textarea
                id="cf-desc"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                placeholder="Descreva brevemente o problema elétrico..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar via WhatsApp
              </button>
              <button
                type="button"
                onClick={handleCall}
                className="flex-1 flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </button>
            </div>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Orçamento sem compromisso. Resposta rápida garantida.
          </p>
        </div>
      </div>
    </section>
  );
}
