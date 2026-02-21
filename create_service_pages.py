#!/usr/bin/env python3
"""Generate 6 service pages + 3 emergency pages for Staff-Seekers.com"""
import os

OUT = "client/public"
TEL = "+351 932 321 892"
WA = "351932321892"
COLOR = "#FF6B35"
SITE = "staff-seekers.com"
BRAND = "Staff Seekers - Eletricista Profissional"

ZONES_TABLE = """<table style="width:100%;border-collapse:collapse;margin:20px 0">
<thead><tr style="background:#FF6B35;color:white">
<th style="padding:12px;text-align:left;border-radius:8px 0 0 0">Zona</th>
<th style="padding:12px;text-align:left">Cidades</th>
<th style="padding:12px;text-align:center;border-radius:0 8px 0 0">Taxa</th>
</tr></thead>
<tbody>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 1</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Macedo de Cavaleiros</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">15€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 2</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Vila Flor, Alfândega da Fé, Mirandela, Carrazeda de Ansiães</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">20€</td></tr>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 3</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Bragança, Vinhais, Vimioso, Torre de Moncorvo, Mogadouro, Freixo de Espada à Cinta</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">30€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 4</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Miranda do Douro, Vila Nova de Foz Côa, São João da Pesqueira, Murça, Valpaços</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">35€</td></tr>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Zona 5</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Vila Real, Alijó, Sabrosa, Tabuaço, Armamar, Peso da Régua, Lamego, Sta. Marta, Mesão Frio</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">45€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px"><strong>Zona 6</strong></td><td style="padding:10px">Chaves, Vila Pouca de Aguiar, Boticas, Montalegre, Ribeira de Pena, Mondim de Basto, Moimenta da Beira, Sernancelhe, Penedono</td><td style="padding:10px;text-align:center;font-weight:bold;color:#FF6B35">50€</td></tr>
</tbody></table>"""

CSS = """body{margin:0;font-family:Arial,sans-serif;color:#333}
.header{background:#1a1a1a;color:white;padding:20px;text-align:center}
.content{padding:40px 20px;max-width:1200px;margin:0 auto}
h1{color:#FF6B35;font-size:36px;margin-bottom:10px}
h2{color:#333;font-size:24px;margin-top:30px}
h3{color:#FF6B35;font-size:20px;margin-top:20px}
.service-box{background:#fff3e0;padding:25px;border-left:4px solid #FF6B35;margin:20px 0}
.price-box{background:#f5f5f5;padding:30px;border-radius:10px;margin:30px 0;text-align:center}
.process-section{background:#fafafa;padding:25px;border-radius:8px;margin:25px 0}
.pro-equipment{background:linear-gradient(135deg,#fff5e6 0%,#ffe4cc 100%);border:3px solid #FF6B35;padding:30px;border-radius:10px;margin:30px 0;box-shadow:0 4px 15px rgba(255,107,53,0.2)}
.advantages{background:#FF6B35;color:white;padding:30px;border-radius:10px;margin:40px 0}
.cta-btn{display:inline-block;background:#FF6B35;color:white;padding:20px 40px;border-radius:50px;font-size:24px;font-weight:bold;text-decoration:none;box-shadow:0 4px 15px rgba(255,107,53,0.3)}
.footer{background:#1a1a1a;color:white;padding:30px;text-align:center}
.whatsapp-float{position:fixed;bottom:20px;left:20px;width:60px;height:60px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(37,211,102,0.4);z-index:1000;text-decoration:none;font-size:30px}
.phone-float{position:fixed;bottom:20px;right:20px;width:60px;height:60px;background:#FF6B35;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(0,0,0,0.2);z-index:1000;text-decoration:none;font-size:30px}
.breadcrumb{padding:10px 20px;font-size:14px;color:#666;max-width:1200px;margin:0 auto}
.breadcrumb a{color:#FF6B35;text-decoration:none}
.urgente-banner{background:linear-gradient(135deg,#d32f2f,#b71c1c);color:white;padding:30px;text-align:center;border-radius:10px;margin:20px 0;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(211,47,47,0.4)}50%{box-shadow:0 0 20px 10px rgba(211,47,47,0)}}"""

FOOTER_LINKS = """<div style="margin-top:40px;padding:25px;background:#f5f5f5;border-radius:10px">
<h3 style="color:#333;margin-top:0">🏙️ Eletricista Noutras Cidades</h3>
<p style="font-size:15px;line-height:2">
<a href="/eletricista-braganca" style="color:#FF6B35;text-decoration:none">Bragança</a> •
<a href="/eletricista-chaves" style="color:#FF6B35;text-decoration:none">Chaves</a> •
<a href="/eletricista-macedo-cavaleiros" style="color:#FF6B35;text-decoration:none">Macedo</a> •
<a href="/eletricista-mirandela" style="color:#FF6B35;text-decoration:none">Mirandela</a> •
<a href="/eletricista-vila-real" style="color:#FF6B35;text-decoration:none">Vila Real</a> •
<a href="/eletricista-lamego" style="color:#FF6B35;text-decoration:none">Lamego</a>
</p>
<h3 style="color:#333">⚡ Outros Serviços</h3>
<p style="font-size:15px;line-height:2">
<a href="/instalacao-eletrica-completa" style="color:#FF6B35;text-decoration:none">Instalação Elétrica</a> •
<a href="/reparacao-avarias-eletricas" style="color:#FF6B35;text-decoration:none">Reparação Avarias</a> •
<a href="/quadros-eletricos-modernizacao" style="color:#FF6B35;text-decoration:none">Quadros Elétricos</a> •
<a href="/iluminacao-led-profissional" style="color:#FF6B35;text-decoration:none">Iluminação LED</a> •
<a href="/certificacao-eletrica-tras-os-montes" style="color:#FF6B35;text-decoration:none">Certificação CERTIEL</a> •
<a href="/protecao-contra-raios" style="color:#FF6B35;text-decoration:none">Proteção Raios</a>
</p>
<p style="text-align:center;margin-top:15px"><a href="/" style="color:#FF6B35;font-weight:700;text-decoration:none">← Página Inicial</a></p>
</div>"""


def head(title, desc, slug, keywords, schema_type, schema_desc, price_range=None):
    schema = f'''{{"@context":"https://schema.org","@type":"Service","serviceType":"{schema_type}","provider":{{"@type":"Electrician","name":"Eletricista Profissional Trás-os-Montes","telephone":"{TEL}","url":"https://{SITE}"}},"areaServed":{{"@type":"State","name":"Trás-os-Montes"}},"description":"{schema_desc}"'''
    if price_range:
        schema += f',"offers":{{"@type":"Offer","priceRange":"{price_range}"}}'
    schema += '}'
    bc = f'{{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{{"@type":"ListItem","position":1,"name":"Início","item":"https://{SITE}/"}},{{"@type":"ListItem","position":2,"name":"{title}","item":"https://{SITE}/{slug}"}}]}}'
    return f'''<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | Eletricista Trás-os-Montes</title>
<meta name="description" content="{desc}" />
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{desc}" />
<meta property="og:url" content="https://{SITE}/{slug}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_PT" />
<meta property="og:site_name" content="{BRAND}" />
<meta name="keywords" content="{keywords}" />
<link rel="canonical" href="https://{SITE}/{slug}">
<style>{CSS}</style>
<script type="application/ld+json">{schema}</script>
<script type="application/ld+json">{bc}</script>
</head>
<body>
<a href="https://wa.me/{WA}?text=Olá,%20preciso%20de%20um%20eletricista" class="whatsapp-float" aria-label="WhatsApp">💬</a>
<a href="tel:{TEL}" class="phone-float" aria-label="Ligar">📞</a>
<header class="header">
<h1>Eletricista Profissional Certificado</h1>
<p style="margin:5px 0;font-size:16px">Macedo de Cavaleiros • Trás-os-Montes</p>
</header>
<nav class="breadcrumb"><a href="/">Início</a> &gt; {title}</nav>
<section class="content">'''


def cta_block(msg="Precisa Deste Serviço? Ligue Agora"):
    return f'''<div style="text-align:center;padding:40px 20px;background:#f9f9f9;border-radius:10px;margin:40px 0">
<h2 style="color:#333;font-size:28px;margin:0 0 20px">{msg}</h2>
<a href="tel:{TEL}" class="cta-btn" style="margin:10px">📞 {TEL}</a><br><br>
<a href="https://wa.me/{WA}" style="display:inline-block;background:#25D366;color:white;padding:20px 40px;border-radius:50px;font-size:24px;font-weight:bold;text-decoration:none;margin:10px;box-shadow:0 4px 15px rgba(37,211,102,0.3)">💬 WhatsApp</a>
</div>'''


def footer(subtitle):
    return f'''</section>
<footer class="footer">
<p><strong>Eletricista Profissional Certificado em Trás-os-Montes</strong></p>
<p style="font-size:14px;opacity:0.7;margin-top:10px">{subtitle}</p>
<p style="font-size:12px;opacity:0.6;margin-top:10px">Macedo • Bragança • Mirandela • Vila Real • Chaves</p>
{FOOTER_LINKS}
</footer>
</body>
</html>'''


# ============================================================
# SERVICE PAGES DATA
# ============================================================
SERVICE_PAGES = []

# Page 1: Instalação Elétrica Completa
def page_instalacao():
    h = head("Instalação Elétrica Completa em Trás-os-Montes",
        "Instalação elétrica completa para casas e empresas em Trás-os-Montes. Projeto, execução e certificação. Tel: +351 932 321 892",
        "instalacao-eletrica-completa",
        "instalação elétrica, instalação elétrica completa, eletricista instalação, nova instalação, trás-os-montes",
        "Instalação Elétrica Completa",
        "Instalação elétrica completa para habitações e empresas em Trás-os-Montes.",
        "500€-5000€")
    body = f"""
<h1>Instalação Elétrica Completa em Trás-os-Montes</h1>
<div class="service-box">
<p style="font-size:18px;margin:0;line-height:1.8">
🏠 <strong>Instalação elétrica de raiz</strong> para construção nova ou remodelação total | ⚡ <strong>Projeto + Execução + Certificação CERTIEL</strong> | 💰 <strong>Orçamento gratuito</strong>
</p></div>

<div class="price-box">
<h2 style="margin:0 0 15px">📞 PRECISA INSTALAÇÃO ELÉTRICA?</h2>
<p style="font-size:24px;color:#FF6B35;font-weight:bold;margin:0"><a href="tel:{TEL}" style="color:#FF6B35;text-decoration:none">{TEL}</a></p>
<p style="font-size:14px;color:#666;margin-top:10px">ou <a href="https://wa.me/{WA}" style="color:#25D366;font-weight:bold;text-decoration:none">WhatsApp 💬</a></p>
</div>

<h2>Instalação Elétrica Profissional de A a Z</h2>
<p style="font-size:18px;line-height:1.8">Realizo <strong>instalações elétricas completas</strong> para construção nova, remodelação total ou ampliação. Desde o projeto técnico até à certificação CERTIEL final, tudo incluído num único serviço.</p>

<div class="process-section">
<h3>🔧 O Que Inclui a Instalação Completa?</h3>
<ul style="font-size:16px;line-height:2;color:#555">
<li>📐 <strong>Projeto elétrico</strong> — Dimensionamento conforme normas RTIEBT</li>
<li>⚡ <strong>Quadro elétrico</strong> — Montagem com proteções (disjuntores, diferencial)</li>
<li>🔌 <strong>Tomadas e interruptores</strong> — Distribuição otimizada por divisão</li>
<li>💡 <strong>Iluminação</strong> — Pontos de luz interiores e exteriores</li>
<li>🔗 <strong>Cablagem</strong> — Cabos certificados em condutas protegidas</li>
<li>🌍 <strong>Ligação à terra</strong> — Sistema de proteção obrigatório</li>
<li>📋 <strong>Certificação CERTIEL</strong> — Incluída no serviço</li>
</ul></div>

<div class="pro-equipment">
<h3 style="color:#FF6B35;font-size:24px;margin:0 0 15px;text-align:center">🔧 EQUIPAMENTO PROFISSIONAL</h3>
<p style="font-size:17px;line-height:1.8;color:#555;text-align:center">Trabalho com <strong>ferramentas e materiais de qualidade profissional</strong> para garantir uma instalação segura e duradoura.</p>
<ul style="font-size:16px;line-height:2;color:#555;list-style:none;padding:0">
<li style="margin:10px 0">📊 <strong>Multímetros Fluke</strong> — Medições precisas de tensão e corrente</li>
<li style="margin:10px 0">🔍 <strong>Câmara Térmica FLIR</strong> — Verificação de pontos quentes</li>
<li style="margin:10px 0">⚡ <strong>Testadores de instalação</strong> — Conformidade com normas</li>
<li style="margin:10px 0">🛡️ <strong>Material certificado</strong> — Cabos, quadros e proteções de marca</li>
</ul></div>

<h2>💰 Preços Indicativos</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
<table style="width:100%;border-collapse:collapse;margin:20px 0">
<thead><tr style="background:#FF6B35;color:white">
<th style="padding:12px;text-align:left">Tipo</th><th style="padding:12px;text-align:left">Descrição</th><th style="padding:12px;text-align:center">Preço</th>
</tr></thead><tbody>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee"><strong>T1/T2</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Apartamento até 80m²</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">500-1500€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee"><strong>T3/T4</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Apartamento 80-150m²</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">1500-3000€</td></tr>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Moradia</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Casa 150-300m²</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">3000-5000€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px"><strong>Comercial</strong></td><td style="padding:10px">Loja, escritório, armazém</td><td style="padding:10px;text-align:center;font-weight:bold;color:#FF6B35">Sob orçamento</td></tr>
</tbody></table>
<p style="font-size:13px;color:#888;margin:15px 0 0;text-align:center">* Preços indicativos. Orçamento gratuito e sem compromisso após visita técnica.</p>
</div>

<h2>💰 Tabela de Taxas de Deslocação</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
{ZONES_TABLE}
</div>

<div class="advantages">
<h3 style="font-size:24px;margin:0 0 20px">⚡ Porquê Escolher-me?</h3>
<ul style="font-size:18px;line-height:2">
<li>✅ Eletricista certificado com experiência comprovada</li>
<li>✅ Projeto + execução + certificação num só serviço</li>
<li>✅ Materiais de qualidade profissional</li>
<li>✅ Orçamento gratuito e transparente</li>
<li>✅ Garantia de 2 anos sobre o trabalho</li>
<li>✅ Cumprimento rigoroso das normas RTIEBT</li>
</ul></div>

<div style="background:#f0f8ff;padding:25px;border-radius:10px;margin:30px 0">
<h3 style="color:#333">❓ Perguntas Frequentes</h3>
<h4 style="color:#FF6B35">Quanto tempo demora uma instalação completa?</h4>
<p style="font-size:16px;line-height:1.8">Depende da dimensão: apartamento T2 leva 3-5 dias, moradia 1-2 semanas.</p>
<h4 style="color:#FF6B35">Posso fazer a instalação por fases?</h4>
<p style="font-size:16px;line-height:1.8">Sim, podemos planear a instalação por fases conforme o andamento da obra.</p>
<h4 style="color:#FF6B35">A certificação CERTIEL está incluída?</h4>
<p style="font-size:16px;line-height:1.8">Sim, o serviço completo inclui projeto, execução e certificação final.</p>
</div>

{cta_block("Precisa Instalação Elétrica? Ligue Agora")}"""
    return h + body + footer("⚡ Instalação Elétrica Completa | 📋 Certificação CERTIEL | 📞 Orçamento Gratuito")

# Page 2: Reparação de Avarias Elétricas
def page_reparacao():
    h = head("Reparação de Avarias Elétricas em Trás-os-Montes",
        "Reparação urgente de avarias elétricas em Trás-os-Montes. Curto-circuitos, disjuntores, tomadas. Resposta rápida. Tel: +351 932 321 892",
        "reparacao-avarias-eletricas",
        "reparação avarias elétricas, curto-circuito, disjuntor dispara, eletricista reparação, trás-os-montes",
        "Reparação de Avarias Elétricas",
        "Reparação urgente de avarias elétricas em Trás-os-Montes. Diagnóstico e resolução rápida.",
        "50€-300€")
    body = f"""
<h1>Reparação de Avarias Elétricas em Trás-os-Montes</h1>
<div class="service-box">
<p style="font-size:18px;margin:0;line-height:1.8">
🔧 <strong>Diagnóstico e reparação rápida</strong> de qualquer avaria elétrica | ⚡ <strong>Equipamento profissional Fluke + FLIR</strong> | 🚗 <strong>Resposta em menos de 1 hora</strong> (zona Macedo)
</p></div>

<div class="price-box">
<h2 style="margin:0 0 15px">📞 AVARIA ELÉTRICA? LIGUE JÁ</h2>
<p style="font-size:24px;color:#FF6B35;font-weight:bold;margin:0"><a href="tel:{TEL}" style="color:#FF6B35;text-decoration:none">{TEL}</a></p>
<p style="font-size:14px;color:#666;margin-top:10px">ou <a href="https://wa.me/{WA}" style="color:#25D366;font-weight:bold;text-decoration:none">WhatsApp 💬</a></p>
</div>

<h2>Tipos de Avarias Que Reparo</h2>
<div class="process-section">
<ul style="font-size:16px;line-height:2;color:#555">
<li>⚡ <strong>Disjuntor que dispara constantemente</strong> — Identificação da causa e resolução</li>
<li>🔌 <strong>Tomadas sem corrente</strong> — Verificação de circuitos e reparação</li>
<li>💡 <strong>Luzes que piscam ou não acendem</strong> — Diagnóstico e correção</li>
<li>🔥 <strong>Curto-circuitos</strong> — Localização e eliminação do problema</li>
<li>📊 <strong>Quadro elétrico danificado</strong> — Substituição de componentes</li>
<li>🌍 <strong>Problemas de terra</strong> — Medição e correção da ligação à terra</li>
<li>🔋 <strong>Sobretensões e picos</strong> — Instalação de proteções</li>
<li>🏠 <strong>Cheiro a queimado</strong> — Inspeção urgente e reparação</li>
</ul></div>

<div class="pro-equipment">
<h3 style="color:#FF6B35;font-size:24px;margin:0 0 15px;text-align:center">🔧 DIAGNÓSTICO COM EQUIPAMENTO PROFISSIONAL</h3>
<ul style="font-size:16px;line-height:2;color:#555;list-style:none;padding:0">
<li style="margin:10px 0">📊 <strong>Multímetro Fluke 117</strong> — Medição precisa de tensão, corrente e resistência</li>
<li style="margin:10px 0">🔍 <strong>Câmara Térmica FLIR</strong> — Deteção de pontos quentes e sobrecargas invisíveis</li>
<li style="margin:10px 0">⚡ <strong>Testador de isolamento</strong> — Verificação de cabos e circuitos</li>
<li style="margin:10px 0">🔎 <strong>Detetor de cabos</strong> — Localização de fios dentro das paredes</li>
</ul></div>

<h2>💰 Preços de Reparação</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
<table style="width:100%;border-collapse:collapse;margin:20px 0">
<thead><tr style="background:#FF6B35;color:white">
<th style="padding:12px;text-align:left">Serviço</th><th style="padding:12px;text-align:center">Preço</th>
</tr></thead><tbody>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee">Diagnóstico + reparação simples (tomada, interruptor)</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">50-80€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee">Reparação circuito / curto-circuito</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">80-150€</td></tr>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee">Substituição disjuntor / diferencial</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">60-120€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px">Reparação complexa (quadro, cablagem)</td><td style="padding:10px;text-align:center;font-weight:bold;color:#FF6B35">150-300€</td></tr>
</tbody></table>
<p style="font-size:13px;color:#888;margin:15px 0 0;text-align:center">* Preços incluem mão de obra. Material à parte se necessário. Taxa de deslocação conforme zona.</p>
</div>

<h2>💰 Tabela de Taxas de Deslocação</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
{ZONES_TABLE}
</div>

<div class="advantages">
<h3 style="font-size:24px;margin:0 0 20px">⚡ Porquê Escolher-me?</h3>
<ul style="font-size:18px;line-height:2">
<li>✅ Diagnóstico preciso com equipamento Fluke + FLIR</li>
<li>✅ Resposta rápida — menos de 1h na zona Macedo</li>
<li>✅ Preços transparentes antes de começar</li>
<li>✅ Reparação definitiva, não provisória</li>
<li>✅ Garantia sobre o trabalho realizado</li>
</ul></div>

{cta_block("Avaria Elétrica? Ligue Agora")}"""
    return h + body + footer("⚡ Reparação de Avarias | 🔧 Diagnóstico Profissional | 📞 Resposta Rápida")


# Page 3: Automação Residencial / Domótica
def page_automacao():
    h = head("Automação Residencial e Domótica em Trás-os-Montes",
        "Automação residencial e domótica em Trás-os-Montes. Casa inteligente, controlo remoto, poupança energética. Tel: +351 932 321 892",
        "automacao-residencial-domotica",
        "automação residencial, domótica, casa inteligente, smart home, controlo remoto, eletricista domótica, trás-os-montes",
        "Automação Residencial e Domótica",
        "Instalação de sistemas de automação residencial e domótica em Trás-os-Montes.",
        "200€-3000€")
    body = f"""
<h1>Automação Residencial e Domótica em Trás-os-Montes</h1>
<div class="service-box">
<p style="font-size:18px;margin:0;line-height:1.8">
🏠 <strong>Transforme a sua casa numa casa inteligente</strong> | 📱 <strong>Controlo por smartphone</strong> | 💡 <strong>Poupança energética até 30%</strong>
</p></div>

<div class="price-box">
<h2 style="margin:0 0 15px">📞 QUER UMA CASA INTELIGENTE?</h2>
<p style="font-size:24px;color:#FF6B35;font-weight:bold;margin:0"><a href="tel:{TEL}" style="color:#FF6B35;text-decoration:none">{TEL}</a></p>
<p style="font-size:14px;color:#666;margin-top:10px">ou <a href="https://wa.me/{WA}" style="color:#25D366;font-weight:bold;text-decoration:none">WhatsApp 💬</a></p>
</div>

<h2>Soluções de Domótica Que Instalo</h2>
<div class="process-section">
<ul style="font-size:16px;line-height:2;color:#555">
<li>💡 <strong>Iluminação inteligente</strong> — Controlo por voz, horários automáticos, regulação de intensidade</li>
<li>🔌 <strong>Tomadas inteligentes</strong> — Ligar/desligar equipamentos remotamente</li>
<li>🌡️ <strong>Termostatos smart</strong> — Aquecimento otimizado, poupança até 30%</li>
<li>🚪 <strong>Fechaduras eletrónicas</strong> — Acesso por código, impressão digital ou smartphone</li>
<li>📹 <strong>Videovigilância</strong> — Câmaras com acesso remoto 24/7</li>
<li>🔔 <strong>Alarmes inteligentes</strong> — Deteção de intrusão, fumo, inundação</li>
<li>☀️ <strong>Estores automáticos</strong> — Programação horária ou por sensor solar</li>
<li>🎵 <strong>Som ambiente</strong> — Sistema multiroom integrado</li>
</ul></div>

<div class="pro-equipment">
<h3 style="color:#FF6B35;font-size:24px;margin:0 0 15px;text-align:center">📱 MARCAS QUE INSTALO</h3>
<ul style="font-size:16px;line-height:2;color:#555;list-style:none;padding:0">
<li style="margin:10px 0">🏠 <strong>Shelly</strong> — Módulos WiFi compactos, excelente relação qualidade/preço</li>
<li style="margin:10px 0">💡 <strong>Philips Hue</strong> — Iluminação inteligente premium</li>
<li style="margin:10px 0">🔧 <strong>Sonoff</strong> — Interruptores e relés inteligentes acessíveis</li>
<li style="margin:10px 0">📱 <strong>Tuya/Smart Life</strong> — Ecossistema completo e económico</li>
</ul></div>

<h2>💰 Preços Indicativos</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
<table style="width:100%;border-collapse:collapse;margin:20px 0">
<thead><tr style="background:#FF6B35;color:white">
<th style="padding:12px;text-align:left">Pacote</th><th style="padding:12px;text-align:left">Inclui</th><th style="padding:12px;text-align:center">Preço</th>
</tr></thead><tbody>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Básico</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Iluminação smart + 4 tomadas inteligentes</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">200-500€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Intermédio</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Básico + termostato + estores + alarme</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">500-1500€</td></tr>
<tr style="background:#fff3e0"><td style="padding:10px"><strong>Completo</strong></td><td style="padding:10px">Tudo incluído + videovigilância + som</td><td style="padding:10px;text-align:center;font-weight:bold;color:#FF6B35">1500-3000€</td></tr>
</tbody></table>
<p style="font-size:13px;color:#888;margin:15px 0 0;text-align:center">* Preços incluem instalação + configuração. Material incluído.</p>
</div>

<h2>💰 Tabela de Taxas de Deslocação</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
{ZONES_TABLE}
</div>

<div class="advantages">
<h3 style="font-size:24px;margin:0 0 20px">⚡ Porquê Automatizar a Sua Casa?</h3>
<ul style="font-size:18px;line-height:2">
<li>✅ Poupança energética até 30% na fatura</li>
<li>✅ Conforto — controle tudo do sofá ou fora de casa</li>
<li>✅ Segurança reforçada com alarmes e câmaras</li>
<li>✅ Valorização do imóvel</li>
<li>✅ Instalação profissional e configuração completa</li>
</ul></div>

{cta_block("Quer Uma Casa Inteligente? Ligue Agora")}"""
    return h + body + footer("🏠 Domótica | 📱 Casa Inteligente | 💡 Poupança Energética")

# Page 4: Proteção Contra Raios
def page_raios():
    h = head("Proteção Contra Raios e Para-Raios em Trás-os-Montes",
        "Instalação de para-raios e proteção contra descargas atmosféricas em Trás-os-Montes. Proteção de equipamentos. Tel: +351 932 321 892",
        "protecao-contra-raios",
        "proteção contra raios, para-raios, descargas atmosféricas, descarregadores sobretensão, proteção equipamentos, trás-os-montes",
        "Proteção Contra Raios",
        "Instalação de sistemas de proteção contra raios e sobretensões em Trás-os-Montes.",
        "150€-2000€")
    body = f"""
<h1>Proteção Contra Raios e Para-Raios em Trás-os-Montes</h1>
<div class="service-box">
<p style="font-size:18px;margin:0;line-height:1.8">
⛈️ <strong>Trás-os-Montes é uma das regiões com mais trovoadas de Portugal</strong> | 🛡️ <strong>Proteção completa contra raios</strong> | ⚡ <strong>Descarregadores de sobretensão</strong>
</p></div>

<div class="price-box">
<h2 style="margin:0 0 15px">📞 PROTEJA A SUA CASA CONTRA RAIOS</h2>
<p style="font-size:24px;color:#FF6B35;font-weight:bold;margin:0"><a href="tel:{TEL}" style="color:#FF6B35;text-decoration:none">{TEL}</a></p>
<p style="font-size:14px;color:#666;margin-top:10px">ou <a href="https://wa.me/{WA}" style="color:#25D366;font-weight:bold;text-decoration:none">WhatsApp 💬</a></p>
</div>

<h2>Porquê Instalar Proteção Contra Raios?</h2>
<p style="font-size:18px;line-height:1.8">Trás-os-Montes regista <strong>dezenas de trovoadas por ano</strong>, especialmente no verão. Um único raio pode destruir eletrodomésticos, quadros elétricos e até provocar incêndios. A proteção adequada é um investimento que se paga na primeira trovoada.</p>

<div class="process-section">
<h3>🛡️ Soluções de Proteção Que Instalo</h3>
<ul style="font-size:16px;line-height:2;color:#555">
<li>⚡ <strong>Descarregadores de sobretensão (SPD)</strong> — Proteção no quadro elétrico contra picos</li>
<li>🏠 <strong>Para-raios</strong> — Sistema completo de captação e condução ao solo</li>
<li>🌍 <strong>Ligação à terra reforçada</strong> — Essencial para dissipar a descarga</li>
<li>🔌 <strong>Proteção de equipamentos sensíveis</strong> — TV, computadores, router, frigorífico</li>
<li>📡 <strong>Proteção de antenas e painéis solares</strong> — Pontos vulneráveis no telhado</li>
</ul></div>

<h2>💰 Preços de Proteção Contra Raios</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
<table style="width:100%;border-collapse:collapse;margin:20px 0">
<thead><tr style="background:#FF6B35;color:white">
<th style="padding:12px;text-align:left">Serviço</th><th style="padding:12px;text-align:center">Preço</th>
</tr></thead><tbody>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee">Descarregador de sobretensão (SPD) no quadro</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">150-250€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee">Proteção completa quadro + tomadas sensíveis</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">300-600€</td></tr>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee">Para-raios completo (captação + condução + terra)</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">800-2000€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px">Verificação/manutenção sistema existente</td><td style="padding:10px;text-align:center;font-weight:bold;color:#FF6B35">80-150€</td></tr>
</tbody></table>
</div>

<h2>💰 Tabela de Taxas de Deslocação</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
{ZONES_TABLE}
</div>

<div class="advantages">
<h3 style="font-size:24px;margin:0 0 20px">⚡ Proteja o Seu Investimento</h3>
<ul style="font-size:18px;line-height:2">
<li>✅ Evite danos de milhares de euros em equipamentos</li>
<li>✅ Proteção contra incêndios elétricos</li>
<li>✅ Instalação conforme normas portuguesas</li>
<li>✅ Equipamento certificado e garantido</li>
<li>✅ Manutenção anual disponível</li>
</ul></div>

{cta_block("Proteja a Sua Casa Contra Raios")}"""
    return h + body + footer("⛈️ Proteção Contra Raios | 🛡️ Para-Raios | ⚡ Descarregadores SPD")


# Page 5: Manutenção Preventiva Elétrica
def page_manutencao():
    h = head("Manutenção Preventiva Elétrica em Trás-os-Montes",
        "Manutenção preventiva de instalações elétricas em Trás-os-Montes. Inspeção anual, prevenção de avarias. Tel: +351 932 321 892",
        "manutencao-preventiva-eletrica",
        "manutenção preventiva elétrica, inspeção elétrica, revisão instalação, prevenção avarias, eletricista manutenção, trás-os-montes",
        "Manutenção Preventiva Elétrica",
        "Serviço de manutenção preventiva de instalações elétricas em Trás-os-Montes.",
        "80€-200€")
    body = f"""
<h1>Manutenção Preventiva Elétrica em Trás-os-Montes</h1>
<div class="service-box">
<p style="font-size:18px;margin:0;line-height:1.8">
🔍 <strong>Prevenir é mais barato que reparar</strong> | 📋 <strong>Inspeção completa da instalação</strong> | 🛡️ <strong>Evite avarias e incêndios</strong>
</p></div>

<div class="price-box">
<h2 style="margin:0 0 15px">📞 AGENDE A SUA INSPEÇÃO</h2>
<p style="font-size:24px;color:#FF6B35;font-weight:bold;margin:0"><a href="tel:{TEL}" style="color:#FF6B35;text-decoration:none">{TEL}</a></p>
<p style="font-size:14px;color:#666;margin-top:10px">ou <a href="https://wa.me/{WA}" style="color:#25D366;font-weight:bold;text-decoration:none">WhatsApp 💬</a></p>
</div>

<h2>O Que Verifico na Manutenção Preventiva?</h2>
<div class="process-section">
<ul style="font-size:16px;line-height:2;color:#555">
<li>📊 <strong>Quadro elétrico</strong> — Estado dos disjuntores, diferencial, ligações</li>
<li>🔌 <strong>Tomadas e interruptores</strong> — Desgaste, aquecimento, folgas</li>
<li>💡 <strong>Circuitos de iluminação</strong> — Verificação de todos os pontos</li>
<li>🌍 <strong>Ligação à terra</strong> — Medição da resistência de terra</li>
<li>🔥 <strong>Pontos quentes</strong> — Inspeção com câmara térmica FLIR</li>
<li>📐 <strong>Cabos e condutas</strong> — Estado de isolamento e proteção</li>
<li>⚡ <strong>Proteções</strong> — Teste de disjuntores e diferencial</li>
<li>📋 <strong>Relatório completo</strong> — Com recomendações e prioridades</li>
</ul></div>

<div class="pro-equipment">
<h3 style="color:#FF6B35;font-size:24px;margin:0 0 15px;text-align:center">🔧 INSPEÇÃO COM EQUIPAMENTO PROFISSIONAL</h3>
<ul style="font-size:16px;line-height:2;color:#555;list-style:none;padding:0">
<li style="margin:10px 0">📊 <strong>Multímetro Fluke</strong> — Medições precisas de todos os parâmetros</li>
<li style="margin:10px 0">🔍 <strong>Câmara Térmica FLIR</strong> — Deteção de sobrecargas invisíveis a olho nu</li>
<li style="margin:10px 0">⚡ <strong>Testador de diferencial</strong> — Verificação do tempo de disparo</li>
<li style="margin:10px 0">🌍 <strong>Medidor de terra</strong> — Conformidade da ligação à terra</li>
</ul></div>

<h2>💰 Preços de Manutenção Preventiva</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
<table style="width:100%;border-collapse:collapse;margin:20px 0">
<thead><tr style="background:#FF6B35;color:white">
<th style="padding:12px;text-align:left">Tipo</th><th style="padding:12px;text-align:left">Inclui</th><th style="padding:12px;text-align:center">Preço</th>
</tr></thead><tbody>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Apartamento</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Inspeção completa + relatório</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">80-120€</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee"><strong>Moradia</strong></td><td style="padding:10px;border-bottom:1px solid #eee">Inspeção completa + câmara térmica + relatório</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">120-200€</td></tr>
<tr style="background:#fff3e0"><td style="padding:10px"><strong>Contrato anual</strong></td><td style="padding:10px">2 visitas/ano + prioridade em urgências</td><td style="padding:10px;text-align:center;font-weight:bold;color:#FF6B35">150-300€/ano</td></tr>
</tbody></table>
</div>

<h2>💰 Tabela de Taxas de Deslocação</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
{ZONES_TABLE}
</div>

<div class="advantages">
<h3 style="font-size:24px;margin:0 0 20px">⚡ Benefícios da Manutenção Preventiva</h3>
<ul style="font-size:18px;line-height:2">
<li>✅ Evite avarias caras e inesperadas</li>
<li>✅ Prevenção de incêndios elétricos</li>
<li>✅ Prolongue a vida da instalação</li>
<li>✅ Relatório detalhado com prioridades</li>
<li>✅ Desconto em reparações futuras para clientes com contrato</li>
</ul></div>

{cta_block("Agende a Sua Manutenção Preventiva")}"""
    return h + body + footer("🔍 Manutenção Preventiva | 📋 Inspeção Completa | 🛡️ Prevenção de Avarias")

# Page 6: Eficiência Energética
def page_eficiencia():
    h = head("Eficiência Energética e Poupança de Energia em Trás-os-Montes",
        "Soluções de eficiência energética em Trás-os-Montes. Reduza a fatura de eletricidade até 40%. Auditoria energética. Tel: +351 932 321 892",
        "eficiencia-energetica-poupanca",
        "eficiência energética, poupança energia, auditoria energética, reduzir fatura eletricidade, LED, eletricista, trás-os-montes",
        "Eficiência Energética e Poupança",
        "Soluções de eficiência energética para reduzir a fatura de eletricidade em Trás-os-Montes.",
        "100€-2000€")
    body = f"""
<h1>Eficiência Energética e Poupança em Trás-os-Montes</h1>
<div class="service-box">
<p style="font-size:18px;margin:0;line-height:1.8">
💡 <strong>Reduza a fatura de eletricidade até 40%</strong> | 📊 <strong>Auditoria energética completa</strong> | ☀️ <strong>Soluções sustentáveis</strong>
</p></div>

<div class="price-box">
<h2 style="margin:0 0 15px">📞 QUER POUPAR NA ELETRICIDADE?</h2>
<p style="font-size:24px;color:#FF6B35;font-weight:bold;margin:0"><a href="tel:{TEL}" style="color:#FF6B35;text-decoration:none">{TEL}</a></p>
<p style="font-size:14px;color:#666;margin-top:10px">ou <a href="https://wa.me/{WA}" style="color:#25D366;font-weight:bold;text-decoration:none">WhatsApp 💬</a></p>
</div>

<h2>Soluções de Poupança Energética</h2>
<div class="process-section">
<ul style="font-size:16px;line-height:2;color:#555">
<li>💡 <strong>Substituição por LED</strong> — Poupança de 80% na iluminação</li>
<li>📊 <strong>Auditoria energética</strong> — Identificação de desperdícios com câmara térmica</li>
<li>🌡️ <strong>Termostatos inteligentes</strong> — Aquecimento otimizado, -30% na fatura</li>
<li>⏰ <strong>Programadores horários</strong> — Equipamentos ligados só quando necessário</li>
<li>☀️ <strong>Painéis solares</strong> — Produção própria de eletricidade</li>
<li>⚡ <strong>Otimização do contrato EDP</strong> — Potência adequada ao consumo real</li>
<li>🔌 <strong>Eliminação de consumos fantasma</strong> — Standby custa 50-100€/ano</li>
</ul></div>

<h2>💰 Preços</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
<table style="width:100%;border-collapse:collapse;margin:20px 0">
<thead><tr style="background:#FF6B35;color:white">
<th style="padding:12px;text-align:left">Serviço</th><th style="padding:12px;text-align:center">Preço</th><th style="padding:12px;text-align:center">Poupança</th>
</tr></thead><tbody>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee">Auditoria energética completa</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">100-150€</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee">—</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px;border-bottom:1px solid #eee">Substituição iluminação LED (casa)</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">200-500€</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;color:green">80% iluminação</td></tr>
<tr style="background:#fff3e0"><td style="padding:10px;border-bottom:1px solid #eee">Termostato + programadores</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;font-weight:bold;color:#FF6B35">150-400€</td><td style="padding:10px;text-align:center;border-bottom:1px solid #eee;color:green">20-30% aquecimento</td></tr>
<tr style="background:#f9f9f9"><td style="padding:10px">Pacote completo eficiência</td><td style="padding:10px;text-align:center;font-weight:bold;color:#FF6B35">500-2000€</td><td style="padding:10px;text-align:center;color:green">30-40% total</td></tr>
</tbody></table>
</div>

<h2>💰 Tabela de Taxas de Deslocação</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
{ZONES_TABLE}
</div>

<div class="advantages">
<h3 style="font-size:24px;margin:0 0 20px">💡 Porquê Investir em Eficiência Energética?</h3>
<ul style="font-size:18px;line-height:2">
<li>✅ Retorno do investimento em 6-18 meses</li>
<li>✅ Poupança real e mensurável na fatura</li>
<li>✅ Conforto melhorado (melhor iluminação, temperatura)</li>
<li>✅ Valorização do imóvel</li>
<li>✅ Contribuição para o ambiente</li>
</ul></div>

{cta_block("Quer Poupar na Eletricidade? Ligue Agora")}"""
    return h + body + footer("💡 Eficiência Energética | ☀️ Poupança | 📊 Auditoria Energética")


# Emergency pages
def page_urgente(city, zone, price, slug):
    h = head(f"Eletricista Urgente em {city} | 24h/7d",
        f"Eletricista urgente em {city}, disponível 24 horas. Resposta rápida, avarias elétricas, curto-circuitos. Taxa deslocação {price}. Tel: +351 932 321 892",
        slug,
        f"eletricista urgente {city.lower()}, eletricista 24 horas {city.lower()}, avaria elétrica urgente, emergência elétrica {city.lower()}",
        "Eletricista Urgente",
        f"Serviço de eletricista urgente 24 horas em {city}, Trás-os-Montes.")
    body = f"""
<h1>Eletricista Urgente em {city} — 24h/7d</h1>

<div class="urgente-banner">
<h2 style="margin:0;font-size:28px">🚨 URGÊNCIA ELÉTRICA EM {city.upper()}?</h2>
<p style="font-size:22px;margin:10px 0">Ligue agora — resposta imediata</p>
<a href="tel:{TEL}" style="display:inline-block;background:white;color:#d32f2f;padding:15px 40px;border-radius:50px;font-size:24px;font-weight:bold;text-decoration:none;margin-top:10px">📞 {TEL}</a>
</div>

<div class="service-box">
<p style="font-size:18px;margin:0;line-height:1.8">
🚗 <strong>{city} — Zona {zone}</strong> | 💰 <strong>Taxa de deslocação: {price}</strong> | ⚡ <strong>Disponível 24 horas, 7 dias por semana</strong>
</p></div>

<h2>Serviços de Urgência em {city}</h2>
<div class="process-section">
<ul style="font-size:16px;line-height:2;color:#555">
<li>⚡ <strong>Curto-circuitos</strong> — Localização e reparação imediata</li>
<li>🔥 <strong>Cheiro a queimado</strong> — Inspeção urgente de segurança</li>
<li>💡 <strong>Casa sem luz</strong> — Diagnóstico e resolução rápida</li>
<li>📊 <strong>Quadro elétrico disparou</strong> — Identificação da causa</li>
<li>🔌 <strong>Tomadas com faíscas</strong> — Reparação de emergência</li>
<li>🌊 <strong>Inundação + eletricidade</strong> — Corte seguro e reparação</li>
<li>🏢 <strong>Comércio sem energia</strong> — Prioridade para negócios</li>
</ul></div>

<div class="pro-equipment">
<h3 style="color:#FF6B35;font-size:24px;margin:0 0 15px;text-align:center">🔧 EQUIPAMENTO PARA DIAGNÓSTICO RÁPIDO</h3>
<ul style="font-size:16px;line-height:2;color:#555;list-style:none;padding:0">
<li style="margin:10px 0">📊 <strong>Multímetro Fluke</strong> — Diagnóstico preciso em minutos</li>
<li style="margin:10px 0">🔍 <strong>Câmara Térmica FLIR</strong> — Deteção instantânea de pontos quentes</li>
<li style="margin:10px 0">⚡ <strong>Kit completo de reparação</strong> — Material para resolver no momento</li>
<li style="margin:10px 0">🚗 <strong>Carrinha equipada</strong> — Tudo o que preciso para a urgência</li>
</ul></div>

<h2>💰 Tabela de Taxas de Deslocação</h2>
<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
{ZONES_TABLE}
<p style="font-size:13px;color:#888;margin:15px 0 0;text-align:center">* Em urgências noturnas (22h-8h) e fins de semana, pode aplicar-se suplemento de 20€.</p>
</div>

<div class="advantages">
<h3 style="font-size:24px;margin:0 0 20px">⚡ Porquê Ligar-me em Urgência?</h3>
<ul style="font-size:18px;line-height:2">
<li>✅ Disponível 24 horas, 7 dias por semana</li>
<li>✅ Resposta rápida para {city} e arredores</li>
<li>✅ Diagnóstico profissional com equipamento Fluke + FLIR</li>
<li>✅ Reparação definitiva, não provisória</li>
<li>✅ Preço combinado antes de começar</li>
<li>✅ Sem surpresas na fatura</li>
</ul></div>

<div style="background:#f0f8ff;padding:25px;border-radius:10px;margin:30px 0">
<h3 style="color:#333">❓ Perguntas Frequentes — Urgências em {city}</h3>
<h4 style="color:#FF6B35">Quanto tempo demora a chegar a {city}?</h4>
<p style="font-size:16px;line-height:1.8">Depende da hora e trânsito, mas normalmente chego em menos de 1 hora a {city}.</p>
<h4 style="color:#FF6B35">Trabalha à noite e fins de semana?</h4>
<p style="font-size:16px;line-height:1.8">Sim, estou disponível 24h/7d para urgências elétricas. Noites e feriados têm suplemento de 20€.</p>
<h4 style="color:#FF6B35">Quanto custa uma urgência?</h4>
<p style="font-size:16px;line-height:1.8">Taxa de deslocação {price} + mão de obra conforme o trabalho. Digo sempre o preço antes de começar.</p>
</div>

{cta_block(f"Urgência Elétrica em {city}? Ligue Agora")}"""
    return h + body + footer(f"🚨 Eletricista Urgente {city} | ⚡ 24h/7d | 📞 Resposta Imediata")


# ============================================================
# MAIN - Generate all pages
# ============================================================
def main():
    pages = {
        "instalacao-eletrica-completa.html": page_instalacao(),
        "reparacao-avarias-eletricas.html": page_reparacao(),
        "automacao-residencial-domotica.html": page_automacao(),
        "protecao-contra-raios.html": page_raios(),
        "manutencao-preventiva-eletrica.html": page_manutencao(),
        "eficiencia-energetica-poupanca.html": page_eficiencia(),
        "eletricista-urgente-vila-real.html": page_urgente("Vila Real", 5, "45€", "eletricista-urgente-vila-real"),
        "eletricista-urgente-chaves.html": page_urgente("Chaves", 6, "50€", "eletricista-urgente-chaves"),
        "eletricista-urgente-lamego.html": page_urgente("Lamego", 5, "45€", "eletricista-urgente-lamego"),
    }

    for filename, content in pages.items():
        path = os.path.join(OUT, filename)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        size = os.path.getsize(path)
        print(f"✅ {filename} ({size:,} bytes)")

    print(f"\n🎉 {len(pages)} pages created in {OUT}/")

if __name__ == "__main__":
    main()
