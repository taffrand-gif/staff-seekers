#!/bin/bash
BASE="/Users/admin/projects/staff-seekers/client/public"

generate_city_page() {
  local slug="$1"
  local city="$2"
  local zona="$3"
  local price="$4"
  local dist_km="$5"
  local dist_min="$6"
  local zones_served="$7"
  local specialty_title="$8"
  local specialty_text="$9"
  local specialty_items="${10}"
  local problems_items="${11}"
  local review1_text="${12}"
  local review1_name="${13}"
  local review2_text="${14}"
  local review2_name="${15}"
  local keywords="${16}"
  local city_url_encoded="${17}"

  cat > "$BASE/eletricista-${slug}.html" << 'HTMLEOF'
<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
HTMLEOF

  cat >> "$BASE/eletricista-${slug}.html" << HTMLEOF
<title>Eletricista ${city} | Urgências 24h</title>
<meta name="description" content="Eletricista profissional em ${city}, Trás-os-Montes. Serviço 24h/7d. Telefone: +351 932 321 892" />
<meta property="og:title" content="Eletricista ${city} | Urgências 24h" />
<meta property="og:description" content="Eletricista profissional em ${city}. Quadros elétricos, certificação CERTIEL, urgências 24h. Ligue +351 932 321 892" />
<meta property="og:url" content="https://staff-seekers.com/eletricista-${slug}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_PT" />
<meta property="og:site_name" content="Staff Seekers - Eletricista Profissional" />
<meta name="keywords" content="${keywords}" />
<link rel="canonical" href="https://staff-seekers.com/eletricista-${slug}">
<style>
body{margin:0;font-family:Arial,sans-serif;color:#333}
a{text-decoration:none}
.header{background:#1a1a1a;color:white;padding:20px;text-align:center}
.content{padding:40px 20px;max-width:1200px;margin:0 auto}
h1{color:#FF6B35;font-size:36px;margin-bottom:10px}
h2{color:#333;font-size:24px;margin-top:30px}
h3{color:#FF6B35;font-size:20px;margin-top:20px}
.distance-box{background:#fff3e0;padding:20px;border-left:4px solid #FF6B35;margin:20px 0}
.urgence-box{background:#f5f5f5;padding:30px;border-radius:10px;margin:30px 0;text-align:center}
.local-section{background:#fafafa;padding:25px;border-radius:8px;margin:25px 0}
.pro-equipment{background:linear-gradient(135deg,#fff5e6 0%,#ffe4cc 100%);border:3px solid #FF6B35;padding:30px;border-radius:10px;margin:30px 0;box-shadow:0 4px 15px rgba(255,107,53,0.2)}
.advantages{background:#FF6B35;color:white;padding:30px;border-radius:10px;margin:40px 0}
.cta-btn{display:inline-block;background:#FF6B35;color:white;padding:20px 40px;border-radius:50px;font-size:24px;font-weight:bold;text-decoration:none;box-shadow:0 4px 15px rgba(255,107,53,0.3)}
.footer{background:#1a1a1a;color:white;padding:30px;text-align:center}
.whatsapp-float{position:fixed;bottom:20px;left:20px;width:60px;height:60px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(37,211,102,0.4);z-index:1000;text-decoration:none;font-size:30px}
.phone-float{position:fixed;bottom:20px;right:20px;width:60px;height:60px;background:#FF6B35;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(0,0,0,0.2);z-index:1000;text-decoration:none;font-size:30px}
.breadcrumb{padding:10px 20px;font-size:14px;color:#666;max-width:1200px;margin:0 auto}
.breadcrumb a{color:#FF6B35;text-decoration:none}
</style>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "name": "Eletricista Profissional Trás-os-Montes",
  "telephone": "+351 932 321 892",
  "url": "https://staff-seekers.com/eletricista-${slug}",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "${city}",
    "addressRegion": "Trás-os-Montes",
    "addressCountry": "PT"
  },
  "areaServed": {"@type": "City", "name": "${city}"},
  "description": "Eletricista em ${city}, Trás-os-Montes",
  "@id": "https://staff-seekers.com/eletricista-${slug}"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://staff-seekers.com/"},
    {"@type": "ListItem", "position": 2, "name": "Eletricista ${city}", "item": "https://staff-seekers.com/eletricista-${slug}"}
  ]
}
</script>
</head>
<body>
<a href="https://wa.me/351932321892?text=Olá,%20preciso%20eletricista%20${city_url_encoded}" class="whatsapp-float" aria-label="WhatsApp">💬</a>
<a href="tel:+351932321892" class="phone-float" aria-label="Ligar">📞</a>
<header class="header">
<h1>Eletricista Profissional Certificado</h1>
<p style="margin:5px 0;font-size:16px">Macedo de Cavaleiros • Trás-os-Montes</p>
</header>
<nav class="breadcrumb">
<a href="/">Início</a> &gt; Eletricista ${city}
</nav>

<section class="content">
<h1>Eletricista em ${city} 24h</h1>

<div class="distance-box">
<p style="font-size:16px;margin:0;line-height:1.8">
⚡ <strong>Desde Macedo:</strong> ${dist_km} km (${dist_min} minutos) | 🏛️ <strong>Zonas:</strong> ${zones_served}
</p>
</div>

<div class="taxa-box">
<h3>💰 Taxa de Deslocação para ${city}</h3>
<p style="font-size:18px;line-height:1.8">
<strong>Zona ${zona}:</strong> ${city} está na Zona ${zona} do nosso sistema de deslocação.<br>
<strong>Taxa de deslocação:</strong> ${price}€ (inclui deslocação desde Macedo de Cavaleiros)
</p>
<p style="font-size:14px;color:#666;margin-top:10px">
📌 <em>A taxa de deslocação é aplicável a todas as intervenções em ${city} e cobre os custos de transporte desde a nossa base em Macedo de Cavaleiros.</em>
</p>
</div>

<div class="urgence-box">
<h2 style="margin:0 0 15px">📞 URGÊNCIA EM ${city^^}?</h2>
<p style="font-size:24px;color:#FF6B35;font-weight:bold;margin:0">
<a href="tel:+351932321892" style="color:#FF6B35;text-decoration:none">+351 932 321 892</a>
</p>
<p style="font-size:14px;color:#666;margin-top:10px">
ou <a href="https://wa.me/351932321892?text=Olá,%20preciso%20eletricista%20${city_url_encoded}" style="color:#25D366;font-weight:bold;text-decoration:none">WhatsApp 💬</a>
</p>
</div>

<div class="pro-equipment">
<h3 style="color:#FF6B35;font-size:24px;margin:0 0 15px;text-align:center">
🔧 EQUIPAMENTO PROFISSIONAL QUE OS CONCORRENTES NÃO TÊM
</h3>
<p style="font-size:17px;line-height:1.8;color:#555;text-align:center;margin-bottom:20px">
<strong>Não sou um eletricista comum.</strong> Invisto em tecnologia de topo para garantir trabalho rápido, preciso e duradouro.
</p>
<ul style="font-size:16px;line-height:2;color:#555;list-style:none;padding:0">
<li style="margin:10px 0">⚡ <strong>Ridgid Professional</strong> - Deteção de avarias invisíveis a olho nu</li>
<li style="margin:10px 0">📊 <strong>Multímetros Fluke</strong> - Diagnósticos precisos ao milímetro</li>
<li style="margin:10px 0">🔍 <strong>Câmara Térmica FLIR</strong> - Vejo sobrecargas antes de queimar</li>
<li style="margin:10px 0">⚡ <strong>Testadores Certificados</strong> - Segurança garantida</li>
<li style="margin:10px 0">🛠️ <strong>Ferramentas Profissionais</strong> - Trabalho 3x mais rápido</li>
</ul>
<p style="font-size:14px;color:#666;margin-top:20px;text-align:center;font-style:italic;background:#fff;padding:15px;border-radius:5px">
💡 <strong>Porque uso equipamento caro?</strong> Deteto problemas que outros não veem, trabalho mais rápido, e o resultado dura anos.
</p>
</div>

<h2>Eletricista Certificado em ${city}</h2>
<p style="font-size:18px;line-height:1.8">
Precisa de <strong>eletricista urgente em ${city}</strong>? Chego em <strong>${dist_min} minutos</strong> desde Macedo de Cavaleiros com todo o equipamento profissional necessário.
</p>

<div class="local-section">
<h3>${specialty_title}</h3>
<p style="font-size:16px;line-height:1.8;color:#555">${specialty_text}</p>
<ul style="font-size:16px;line-height:2;color:#555">
${specialty_items}
</ul>
</div>

<div class="local-section">
<h3>⚡ Problemas Elétricos Frequentes em ${city}</h3>
<ul style="font-size:16px;line-height:2;color:#555">
${problems_items}
</ul>
</div>

HTMLEOF

  # Price table
  cat >> "$BASE/eletricista-${slug}.html" << 'HTMLEOF'
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
<h3 style="color:#FF6B35;font-size:22px;margin:0 0 20px;text-align:center">💰 Tabela de Taxas de Deslocação</h3>
<table style="width:100%;border-collapse:collapse;font-size:15px">
<thead>
<tr style="background:#FF6B35;color:white">
<th style="padding:12px;text-align:left;border-radius:8px 0 0 0">Zona</th>
<th style="padding:12px;text-align:left">Cidades</th>
<th style="padding:12px;text-align:center;border-radius:0 8px 0 0">Taxa</th>
</tr>
</thead>
<tbody>
<tr style="background:#fff"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 1</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Macedo de Cavaleiros</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">15€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 2</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Vila Flor, Alfândega da Fé, Mirandela, Carrazeda de Ansiães</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">20€</td></tr>
<tr style="background:#fff"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 3</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">30€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 4</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Miranda do Douro, Vila Nova de Foz Côa, São João da Pesqueira, Murça, Valpaços</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">35€</td></tr>
<tr style="background:#fff"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 5</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Peso da Régua, Lamego, Santa Marta de Penaguião, Mesão Frio</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">45€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px"><strong>Zona 6</strong></td><td style="padding:10px">Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono</td><td style="padding:10px;text-align:center;font-weight:bold;color:#FF6B35">50€</td></tr>
</tbody>
</table>
<p style="font-size:13px;color:#888;margin:15px 0 0;text-align:center">* Taxa única por deslocação. Orçamento do serviço à parte, gratuito e sem compromisso.</p>
</div>
HTMLEOF

  cat >> "$BASE/eletricista-${slug}.html" << HTMLEOF

<div class="advantages">
<h3 style="font-size:24px;margin:0 0 20px">⚡ Porquê Me Escolher?</h3>
<ul style="font-size:18px;line-height:2">
<li>✅ Profissional certificado baseado em Macedo (${dist_km}km)</li>
<li>✅ <strong>Equipamento profissional Ridgid &amp; Fluke</strong></li>
<li>✅ Chego em ${dist_min} minutos em ${city}</li>
<li>✅ Disponível 24h/24, 7 dias/7</li>
<li>✅ Orçamento gratuito sem compromisso</li>
<li>✅ Garantia em todos os trabalhos</li>
<li>✅ Tecnologia que concorrentes não têm</li>
</ul>
</div>

<div style="background:#f0f8ff;padding:25px;border-radius:10px;margin:30px 0">
<h3 style="color:#333">💬 O que dizem os clientes em ${city}</h3>
<div style="background:white;padding:20px;margin:15px 0;border-radius:8px;border-left:4px solid #FFD700">
<div style="color:#FFD700;font-size:18px;margin-bottom:10px">⭐⭐⭐⭐⭐</div>
<p style="font-size:16px;margin:0 0 10px">"${review1_text}"</p>
<p style="font-size:14px;color:#999;margin:0">— ${review1_name}</p>
</div>
<div style="background:white;padding:20px;margin:15px 0;border-radius:8px;border-left:4px solid #FFD700">
<div style="color:#FFD700;font-size:18px;margin-bottom:10px">⭐⭐⭐⭐⭐</div>
<p style="font-size:16px;margin:0 0 10px">"${review2_text}"</p>
<p style="font-size:14px;color:#999;margin:0">— ${review2_name}</p>
</div>
</div>

<div style="text-align:center;padding:40px 20px;background:#f9f9f9;border-radius:10px;margin:40px 0">
<h2 style="color:#333;font-size:28px;margin:0 0 20px">Não perca tempo! Ligue agora</h2>
<a href="tel:+351932321892" class="cta-btn" style="margin:10px">📞 +351 932 321 892</a>
<br><br>
<a href="https://wa.me/351932321892?text=Olá,%20preciso%20eletricista%20${city_url_encoded}" style="display:inline-block;background:#25D366;color:white;padding:20px 40px;border-radius:50px;font-size:24px;font-weight:bold;text-decoration:none;margin:10px;box-shadow:0 4px 15px rgba(37,211,102,0.3)">💬 WhatsApp</a>
</div>
</section>

<footer class="footer">
<p><strong>Eletricista Profissional Certificado em Trás-os-Montes</strong></p>
<p style="font-size:14px;opacity:0.7;margin-top:10px">⚡ Equipamento Ridgid &amp; Fluke | 💯 Certificado CERTIEL | 📞 24h/7d</p>
<p style="font-size:12px;opacity:0.6;margin-top:10px">Macedo • Bragança • Mirandela • Vila Real • Chaves</p>
<div style="margin-top:40px;padding:25px;background:#f5f5f5;border-radius:10px">
<h3 style="color:#333;margin-top:0">🏙️ Eletricista Noutras Cidades</h3>
<p style="font-size:15px;line-height:2">
<a href="/eletricista-braganca" style="color:#FF6B35;text-decoration:none">Bragança</a> • <a href="/eletricista-chaves" style="color:#FF6B35;text-decoration:none">Chaves</a> • <a href="/eletricista-macedo-cavaleiros" style="color:#FF6B35;text-decoration:none">Macedo</a> • <a href="/eletricista-mirandela" style="color:#FF6B35;text-decoration:none">Mirandela</a> • <a href="/eletricista-mogadouro" style="color:#FF6B35;text-decoration:none">Mogadouro</a> • <a href="/eletricista-torre-moncorvo" style="color:#FF6B35;text-decoration:none">Torre de Moncorvo</a> • <a href="/eletricista-vila-real" style="color:#FF6B35;text-decoration:none">Vila Real</a> • <a href="/eletricista-vinhais" style="color:#FF6B35;text-decoration:none">Vinhais</a> • <a href="/eletricista-lamego" style="color:#FF6B35;text-decoration:none">Lamego</a>
</p>
<h3 style="color:#333">📝 Artigos Úteis</h3>
<p style="font-size:15px;line-height:2">
<a href="/blog/eletricista-urgente-24-horas-braganca" style="color:#FF6B35;text-decoration:none">Eletricista Urgente 24h</a> • <a href="/blog/quanto-custa-instalacao-eletrica-completa" style="color:#FF6B35;text-decoration:none">Preços Instalação Elétrica</a> • <a href="/blog/blog-problemas-eletricos-inverno" style="color:#FF6B35;text-decoration:none">Problemas Elétricos no Inverno</a>
</p>
<p style="text-align:center;margin-top:15px"><a href="/" style="color:#FF6B35;font-weight:700;text-decoration:none">← Página Inicial</a></p>
</div>
</footer>
</body>
</html>
HTMLEOF

  echo "✅ Created eletricista-${slug}.html ($(wc -c < "$BASE/eletricista-${slug}.html") bytes)"
}

echo "=== GENERATING CITY PAGES ==="

# 1. Alfândega da Fé (Zona 2, 20€)
generate_city_page "alfandega-da-fe" "Alfândega da Fé" "2" "20" "30" "30" \
  "Centro, Sendim da Serra, Vilar Chão, Sambade" \
  "🏛️ Especialista em Casas Tradicionais" \
  "Alfândega da Fé tem um património arquitetónico rico com casas de granito tradicionais. Tenho experiência em:" \
  "<li>Modernização de instalações elétricas em casas de pedra</li>
<li>Certificação elétrica CERTIEL para habitações antigas</li>
<li>Instalação de sistemas de aquecimento elétrico</li>
<li>Iluminação interior e exterior para propriedades rurais</li>" \
  "<li><strong>Instalações antigas</strong> com cablagem deteriorada</li>
<li><strong>Quadros elétricos desatualizados</strong> sem disjuntores diferenciais</li>
<li><strong>Problemas de tensão</strong> em zonas rurais</li>
<li><strong>Avarias por tempestades</strong> frequentes na região</li>
<li><strong>Necessidade de certificação</strong> para venda ou arrendamento</li>" \
  "Veio rápido e resolveu o problema do quadro elétrico. Muito profissional." \
  "António R., Centro" \
  "Excelente trabalho na instalação elétrica da minha casa antiga. Recomendo!" \
  "Fernanda L., Sambade" \
  "eletricista alfândega da fé, eletricista urgente alfândega da fé, eletricista 24 horas, quadro elétrico, certificação elétrica, alfândega da fé" \
  "Alfândega%20da%20Fé"

# 2. Carrazeda de Ansiães (Zona 2, 20€)
generate_city_page "carrazeda-de-ansiaes" "Carrazeda de Ansiães" "2" "20" "45" "40" \
  "Centro, Linhares, Vilarinho da Castanheira, Pombal" \
  "🍇 Especialista em Quintas Vinícolas" \
  "Carrazeda de Ansiães é terra de vinho do Porto e Douro. Tenho experiência em:" \
  "<li>Instalações elétricas para quintas vinícolas e adegas</li>
<li>Sistemas de refrigeração para armazenamento de vinho</li>
<li>Iluminação para caves e armazéns</li>
<li>Painéis solares para propriedades agrícolas</li>" \
  "<li><strong>Instalações antigas</strong> em quintas centenárias</li>
<li><strong>Sobrecarga elétrica</strong> durante a vindima</li>
<li><strong>Sistemas trifásicos</strong> para equipamento agrícola</li>
<li><strong>Avarias por humidade</strong> em caves e adegas</li>
<li><strong>Certificação elétrica</strong> para turismo rural</li>" \
  "Fez a instalação completa da minha adega. Trabalho impecável e rápido." \
  "Manuel P., Linhares" \
  "Profissional de confiança. Resolveu uma avaria urgente no fim de semana." \
  "Rosa M., Centro" \
  "eletricista carrazeda de ansiães, eletricista urgente, eletricista 24 horas, quadro elétrico, certificação elétrica, carrazeda de ansiães, douro" \
  "Carrazeda%20de%20Ansiães"

echo "=== First 2 done ==="
