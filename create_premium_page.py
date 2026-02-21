#!/usr/bin/env python3
"""Create Premium Technology page for Staff-Seekers.com (Electrician)"""

TEL = "+351 932 321 892"
WA = "351932321892"

html = '''<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tecnologia Premium | Eletricista com Equipamento Profissional de Topo</title>
<meta name="description" content="Único eletricista em Trás-os-Montes com câmara térmica, multímetro Fluke 87V, deteção UV e equipamento profissional de topo. Diagnóstico preciso, zero surpresas. Tel: +351 932 321 892">
<meta property="og:title" content="Tecnologia Premium | Eletricista Profissional Trás-os-Montes">
<meta property="og:description" content="Equipamento profissional que nenhum outro eletricista na região possui. Câmara térmica, Fluke 87V, deteção UV. Resultados incontestáveis.">
<meta property="og:url" content="https://staff-seekers.com/tecnologia-premium">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_PT">
<meta property="og:site_name" content="Staff Seekers - Eletricista Profissional">
<meta name="keywords" content="eletricista equipamento profissional, câmara térmica, fluke 87v, diagnóstico elétrico avançado, tecnologia premium, eletricista trás-os-montes">
<link rel="canonical" href="https://staff-seekers.com/tecnologia-premium">

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Service","serviceType":"Diagnóstico Elétrico Premium","provider":{"@type":"Electrician","name":"Eletricista Profissional Trás-os-Montes","telephone":"+351 932 321 892","url":"https://staff-seekers.com"},"areaServed":{"@type":"State","name":"Trás-os-Montes"},"description":"Serviço de diagnóstico elétrico premium com câmara térmica VEVOR, multímetro Fluke 87V MAX e tecnologia UV."}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"https://staff-seekers.com/"},{"@type":"ListItem","position":2,"name":"Tecnologia Premium","item":"https://staff-seekers.com/tecnologia-premium"}]}
</script>

<style>
*{box-sizing:border-box}
body{margin:0;font-family:'Segoe UI',Arial,sans-serif;color:#333;background:#0a0a0a}
.hero{background:linear-gradient(135deg,#0a0a0a 0%,#1a1a2e 50%,#16213e 100%);color:white;padding:80px 20px;text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(circle at 30% 50%,rgba(255,107,53,0.15),transparent 50%),radial-gradient(circle at 70% 50%,rgba(255,107,53,0.1),transparent 50%);pointer-events:none}
.hero h1{font-size:48px;margin:0 0 10px;color:#FF6B35;position:relative;z-index:1}
.hero .subtitle{font-size:22px;color:#ccc;margin:0 0 30px;position:relative;z-index:1}
.hero .badge{display:inline-block;background:linear-gradient(135deg,#FF6B35,#ff8f00);color:white;padding:12px 30px;border-radius:50px;font-size:18px;font-weight:bold;position:relative;z-index:1;box-shadow:0 4px 20px rgba(255,107,53,0.4)}
.content{max-width:1200px;margin:0 auto;padding:0 20px}
.section{padding:60px 0}
.section-dark{background:#0f0f0f;color:white}
.section-light{background:#f8f9fa;color:#333}
.section-accent{background:linear-gradient(135deg,#1a1a2e,#16213e);color:white}
h2{font-size:36px;text-align:center;margin:0 0 15px}
h2 .orange{color:#FF6B35}
.section-subtitle{text-align:center;font-size:18px;color:#999;margin:0 0 50px;max-width:700px;margin-left:auto;margin-right:auto}
.tool-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:30px;max-width:1200px;margin:0 auto;padding:0 20px}
.tool-card{background:linear-gradient(145deg,#1a1a2e,#0f0f1a);border:1px solid rgba(255,107,53,0.2);border-radius:16px;padding:35px;position:relative;overflow:hidden;transition:transform 0.3s,box-shadow 0.3s}
.tool-card:hover{transform:translateY(-5px);box-shadow:0 10px 40px rgba(255,107,53,0.2)}
.tool-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#FF6B35,#ff8f00)}
.tool-icon{font-size:50px;margin-bottom:15px}
.tool-name{font-size:22px;font-weight:bold;color:#FF6B35;margin:0 0 5px}
.tool-model{font-size:14px;color:#888;margin:0 0 15px;text-transform:uppercase;letter-spacing:1px}
.tool-desc{font-size:16px;line-height:1.8;color:#ccc}
.tool-benefit{background:rgba(255,107,53,0.1);border-left:3px solid #FF6B35;padding:12px 15px;margin-top:15px;border-radius:0 8px 8px 0;font-size:15px;color:#FF6B35}
.vs-grid{display:grid;grid-template-columns:1fr auto 1fr;gap:20px;max-width:900px;margin:0 auto;padding:0 20px;align-items:start}
.vs-card{padding:30px;border-radius:16px}
.vs-old{background:linear-gradient(145deg,#2d1111,#1a0a0a);border:1px solid rgba(255,0,0,0.2)}
.vs-new{background:linear-gradient(145deg,#0a2d11,#0a1a0f);border:1px solid rgba(0,255,100,0.2)}
.vs-divider{display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:bold;color:#FF6B35;padding-top:30px}
.vs-title{font-size:20px;font-weight:bold;margin:0 0 20px;text-align:center}
.vs-old .vs-title{color:#ff4444}
.vs-new .vs-title{color:#00cc66}
.vs-list{list-style:none;padding:0;margin:0}
.vs-list li{padding:8px 0;font-size:15px;line-height:1.6;border-bottom:1px solid rgba(255,255,255,0.05)}
.vs-list li:last-child{border:none}
.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:30px;max-width:1000px;margin:0 auto;padding:0 20px}
.stat-card{text-align:center;padding:30px}
.stat-number{font-size:48px;font-weight:bold;color:#FF6B35;display:block}
.stat-label{font-size:16px;color:#999;margin-top:5px}
.brands{display:flex;flex-wrap:wrap;justify-content:center;gap:30px;max-width:800px;margin:30px auto;padding:0 20px}
.brand-tag{background:rgba(255,107,53,0.1);border:1px solid rgba(255,107,53,0.3);padding:12px 25px;border-radius:50px;font-size:16px;font-weight:bold;color:#FF6B35;letter-spacing:1px}
.cta-section{background:linear-gradient(135deg,#FF6B35,#ff8f00);padding:60px 20px;text-align:center}
.cta-section h2{color:white;margin-bottom:20px}
.cta-section p{color:rgba(255,255,255,0.9);font-size:20px;margin:0 0 30px}
.cta-btn{display:inline-block;background:white;color:#FF6B35;padding:20px 50px;border-radius:50px;font-size:24px;font-weight:bold;text-decoration:none;margin:10px;box-shadow:0 4px 20px rgba(0,0,0,0.2);transition:transform 0.2s}
.cta-btn:hover{transform:scale(1.05)}
.cta-btn-wa{background:#25D366;color:white}
.footer{background:#0a0a0a;color:#888;padding:40px 20px;text-align:center}
.footer a{color:#FF6B35;text-decoration:none}
.whatsapp-float{position:fixed;bottom:20px;left:20px;width:60px;height:60px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(37,211,102,0.4);z-index:1000;text-decoration:none;font-size:30px}
.phone-float{position:fixed;bottom:20px;right:20px;width:60px;height:60px;background:#FF6B35;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(255,107,53,0.4);z-index:1000;text-decoration:none;font-size:30px}
@media(max-width:768px){.hero h1{font-size:32px}.vs-grid{grid-template-columns:1fr;gap:10px}.vs-divider{padding:0;font-size:24px}.tool-grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<a href="https://wa.me/''' + WA + '''?text=Olá,%20preciso%20de%20um%20eletricista" class="whatsapp-float" aria-label="WhatsApp">💬</a>
<a href="tel:''' + TEL + '''" class="phone-float" aria-label="Ligar">📞</a>

<div class="hero">
<h1>⚡ TECNOLOGIA PREMIUM</h1>
<p class="subtitle">O único eletricista em Trás-os-Montes com equipamento de diagnóstico de última geração</p>
<div class="badge">🔬 LABORATÓRIO MÓVEL DE DIAGNÓSTICO ELÉTRICO</div>
</div>
'''

with open('/Users/admin/projects/staff-seekers/client/public/tecnologia-premium.html', 'w') as f:
    f.write(html)
print("✅ Part 1 written")

# Part 2: Tool cards + VS section
html2 = '''
<div class="section section-dark">
<div class="content">
<h2>🔬 O Nosso <span class="orange">Arsenal Tecnológico</span></h2>
<p class="section-subtitle">Equipamento profissional de topo que nenhum outro eletricista na região possui. Diagnóstico preciso, resultados incontestáveis.</p>

<div class="tool-grid">

<div class="tool-card">
<div class="tool-icon">🌡️</div>
<div class="tool-name">Câmara Térmica Infravermelhos</div>
<div class="tool-model">VEVOR 256×192 • Resolução Profissional</div>
<div class="tool-desc">Vê o invisível. Deteta pontos quentes, sobrecargas e defeitos de isolamento <strong>sem tocar em nada</strong>. Identifica problemas que um eletricista normal nunca encontraria.</div>
<div class="tool-benefit">💡 Resultado: Encontro avarias ocultas em minutos, não em horas</div>
</div>

<div class="tool-card">
<div class="tool-icon">📊</div>
<div class="tool-name">Multímetro de Precisão</div>
<div class="tool-model">FLUKE 87V MAX • True RMS Industrial</div>
<div class="tool-desc">O padrão mundial em medição elétrica. Precisão de 0,05% em tensão, corrente, resistência e frequência. Certificado para ambientes industriais extremos.</div>
<div class="tool-benefit">💡 Resultado: Medições com precisão cirúrgica, zero margem de erro</div>
</div>

<div class="tool-card">
<div class="tool-icon">🔍</div>
<div class="tool-name">Câmara Endoscópica</div>
<div class="tool-model">RIDGID SeeSnake • Inspeção Visual HD</div>
<div class="tool-desc">Inspeção visual dentro de paredes, tetos e condutas <strong>sem demolição</strong>. Imagem HD em tempo real. Vejo exatamente onde está o problema antes de abrir o que quer que seja.</div>
<div class="tool-benefit">💡 Resultado: Zero destruição desnecessária, intervenção cirúrgica</div>
</div>

<div class="tool-card">
<div class="tool-icon">💜</div>
<div class="tool-name">Deteção UV com Fluoresceína</div>
<div class="tool-model">Tecnologia Ultravioleta • Não-Invasiva</div>
<div class="tool-desc">Tecnologia usada em medicina e indústria aeronáutica. Injeto fluoresceína no sistema e com luz UV localizo fugas <strong>invisíveis a olho nu</strong> — sem partir uma única parede.</div>
<div class="tool-benefit">💡 Resultado: Localização de fugas com precisão milimétrica, zero danos</div>
</div>

<div class="tool-card">
<div class="tool-icon">💧</div>
<div class="tool-name">Detetor de Humidade</div>
<div class="tool-model">RIDGID micro LM-100 • Laser Profissional</div>
<div class="tool-desc">Mede a humidade dentro de paredes, pavimentos e tetos com precisão laser. Identifica infiltrações ocultas e danos por água <strong>antes que se tornem visíveis</strong>.</div>
<div class="tool-benefit">💡 Resultado: Deteto problemas de humidade antes que causem danos graves</div>
</div>

<div class="tool-card">
<div class="tool-icon">⚡</div>
<div class="tool-name">Ferramentas Profissionais</div>
<div class="tool-model">KNIPEX • DEWALT • RIDGID</div>
<div class="tool-desc">Cada ferramenta é de gama profissional. Knipex para precisão alemã, DeWalt para potência, Ridgid para fiabilidade. Nada de ferramentas de bricolage — só equipamento de topo.</div>
<div class="tool-benefit">💡 Resultado: Trabalho mais rápido, mais limpo, mais duradouro</div>
</div>

</div>
</div>
</div>

<div class="section section-light">
<div class="content">
<h2 style="color:#333">🆚 Eletricista Tradicional <span class="orange">vs</span> Diagnóstico Premium</h2>
<p class="section-subtitle" style="color:#666">A diferença entre adivinhar e saber exatamente o que se passa</p>

<div class="vs-grid">
<div class="vs-card vs-old">
<div class="vs-title">❌ Método Tradicional</div>
<ul class="vs-list" style="color:#ccc">
<li>🔨 Abre paredes "para ver o que se passa"</li>
<li>⏰ Diagnóstico por tentativa e erro (horas)</li>
<li>💸 Custos imprevisíveis e surpresas</li>
<li>🏚️ Danos colaterais na casa</li>
<li>🔄 Problema pode voltar (causa não identificada)</li>
<li>📋 Sem relatório técnico</li>
<li>🤷 "Acho que é aqui..."</li>
</ul>
</div>

<div class="vs-divider">VS</div>

<div class="vs-card vs-new">
<div class="vs-title">✅ Diagnóstico Premium</div>
<ul class="vs-list" style="color:#ccc">
<li>🔬 Câmara térmica vê através das paredes</li>
<li>⚡ Diagnóstico preciso em 15-30 minutos</li>
<li>💰 Orçamento exato antes de começar</li>
<li>🏠 Zero danos — intervenção cirúrgica</li>
<li>✅ Causa raiz identificada e eliminada</li>
<li>📊 Relatório com imagens térmicas</li>
<li>🎯 "O problema está AQUI, veja a imagem"</li>
</ul>
</div>
</div>
</div>
</div>
'''

with open('/Users/admin/projects/staff-seekers/client/public/tecnologia-premium.html', 'a') as f:
    f.write(html2)
print("✅ Part 2 appended")
