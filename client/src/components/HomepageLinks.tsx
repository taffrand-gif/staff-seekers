// SEO Internal Links section for Staff-Seekers homepage
// Adds 15+ internal links to services, cities, urgency pages, and blog articles

export default function HomepageLinks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Services Links */}
        <h2 className="text-3xl font-black mb-6 text-center">🔧 Os Nossos Serviços Elétricos</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
          A nossa equipa oferece serviços elétricos completos em Trás-os-Montes. Desde{' '}
          <a href="/instalacao-eletrica-completa" className="text-[#c2410c] font-bold hover:underline">instalação elétrica completa</a> para construções e renovações, até{' '}
          <a href="/quadros-eletricos-modernizacao" className="text-[#c2410c] font-bold hover:underline">modernização de quadros elétricos</a>. Realizamos{' '}
          <a href="/certificacao-eletrica-tras-os-montes" className="text-[#c2410c] font-bold hover:underline">certificação elétrica CERTIEL</a>,{' '}
          <a href="/reparacao-avarias-eletricas" className="text-[#c2410c] font-bold hover:underline">reparação de avarias elétricas</a>,{' '}
          <a href="/iluminacao-led-profissional" className="text-[#c2410c] font-bold hover:underline">iluminação LED profissional</a>,{' '}
          <a href="/instalacao-paineis-solares-tras-os-montes" className="text-[#c2410c] font-bold hover:underline">instalação de painéis solares</a>,{' '}
          <a href="/protecao-contra-raios" className="text-[#c2410c] font-bold hover:underline">proteção contra raios</a> e{' '}
          <a href="/automacao-residencial-domotica" className="text-[#c2410c] font-bold hover:underline">automação residencial</a>. Veja a nossa{' '}
          <a href="/tecnologia-premium" className="text-[#c2410c] font-bold hover:underline">tecnologia premium</a> e{' '}
          <a href="/galeria" className="text-[#c2410c] font-bold hover:underline">galeria de trabalhos</a>.
        </p>

        {/* Urgency Links */}
        <h2 className="text-3xl font-black mb-6 text-center">🚨 Eletricista Urgente 24h</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { href: '/eletricista-urgente-braganca', label: '🚨 Urgente Bragança' },
            { href: '/eletricista-urgente-vila-real', label: '🚨 Urgente Vila Real' },
            { href: '/eletricista-urgente-mirandela', label: '🚨 Urgente Mirandela' },
            { href: '/eletricista-urgente-chaves', label: '🚨 Urgente Chaves' },
            { href: '/eletricista-urgente-macedo', label: '🚨 Urgente Macedo' },
            { href: '/eletricista-urgente-lamego', label: '🚨 Urgente Lamego' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-block bg-orange-50 border-2 border-[#FF6B35] px-5 py-3 rounded-lg text-[#c2410c] font-bold hover:bg-[#FF6B35] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Blog Articles */}
        <h2 className="text-3xl font-black mb-6 text-center">📰 Artigos Recentes do Blog</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { href: '/blog/casa-sem-luz-o-que-fazer', title: 'Casa Sem Luz: O Que Fazer?', desc: 'Guia completo passo a passo.' },
            { href: '/blog/certificado-certiel-preco-quanto-custa', title: 'Certificado CERTIEL: Preço', desc: 'Quanto custa a certificação em 2026.' },
            { href: '/blog/tomada-queimada-perigos-solucoes', title: 'Tomada Queimada: Perigos', desc: 'Saiba os perigos e como detetar.' },
            { href: '/blog/quadro-eletrico-antigo-fusiveis-trocar', title: 'Quadro Elétrico Antigo', desc: 'Quando trocar o quadro elétrico.' },
            { href: '/blog/sinais-problemas-eletricos-casa', title: 'Sinais de Problemas Elétricos', desc: 'Conheça os sinais de alerta.' },
            { href: '/blog/camera-termica-encontrar-problemas-eletricos', title: 'Câmara Térmica: Diagnóstico', desc: 'Tecnologia para encontrar problemas.' },
          ].map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="block bg-white p-4 rounded-lg border-l-4 border-[#FF6B35] shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-bold text-[#c2410c] block mb-1">{article.title}</span>
              <span className="text-sm text-gray-600">{article.desc}</span>
            </a>
          ))}
        </div>
        <p className="text-center">
          <a href="/blog/" className="text-[#c2410c] font-bold text-lg hover:underline">
            Ver todos os artigos do blog →
          </a>
        </p>

        {/* City-specific services */}
        <h2 className="text-3xl font-black mb-6 mt-12 text-center">🏗️ Serviços por Cidade</h2>
        <p className="text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
          <a href="/quadros-eletricos-braganca" className="text-[#c2410c] hover:underline">Quadros Elétricos Bragança</a> •{' '}
          <a href="/quadros-eletricos-vila-real" className="text-[#c2410c] hover:underline">Quadros Elétricos Vila Real</a> •{' '}
          <a href="/quadros-eletricos-mirandela" className="text-[#c2410c] hover:underline">Quadros Elétricos Mirandela</a> •{' '}
          <a href="/certificacao-eletrica-braganca" className="text-[#c2410c] hover:underline">Certificação Bragança</a> •{' '}
          <a href="/certificacao-eletrica-vila-real" className="text-[#c2410c] hover:underline">Certificação Vila Real</a> •{' '}
          <a href="/certificacao-eletrica-mirandela" className="text-[#c2410c] hover:underline">Certificação Mirandela</a> •{' '}
          <a href="/iluminacao-led-braganca" className="text-[#c2410c] hover:underline">LED Bragança</a> •{' '}
          <a href="/iluminacao-led-vila-real" className="text-[#c2410c] hover:underline">LED Vila Real</a> •{' '}
          <a href="/iluminacao-led-mirandela" className="text-[#c2410c] hover:underline">LED Mirandela</a> •{' '}
          <a href="/eficiencia-energetica-poupanca" className="text-[#c2410c] hover:underline">Eficiência Energética</a>
        </p>
      </div>
    </section>
  );
}
