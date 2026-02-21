#!/usr/bin/env python3
"""Add internal links to service pages in city page footers - Staff-Seekers"""
import os, re, glob

SITE_DIR = "/Users/admin/projects/staff-seekers/client/public"

SERVICE_LINKS_BLOCK = """<h3 style="color:#333">⚡ Serviços Especializados</h3>
<p style="font-size:15px;line-height:2">
<a href="/instalacao-eletrica-completa" style="color:#FF6B35;text-decoration:none">Instalação Elétrica</a> • <a href="/reparacao-avarias-eletricas" style="color:#FF6B35;text-decoration:none">Reparação Avarias</a> • <a href="/automacao-residencial-domotica" style="color:#FF6B35;text-decoration:none">Domótica</a> • <a href="/protecao-contra-raios" style="color:#FF6B35;text-decoration:none">Proteção Raios</a> • <a href="/manutencao-preventiva-eletrica" style="color:#FF6B35;text-decoration:none">Manutenção Preventiva</a> • <a href="/eficiencia-energetica-poupanca" style="color:#FF6B35;text-decoration:none">Eficiência Energética</a> • <a href="/certificacao-eletrica-tras-os-montes" style="color:#FF6B35;text-decoration:none">Certificação CERTIEL</a>
</p>"""

count = 0
for f in sorted(glob.glob(os.path.join(SITE_DIR, "eletricista-*.html"))):
    fname = os.path.basename(f)
    # Skip urgente/service pages
    if "urgente" in fname:
        continue
    
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    
    # Skip if already has service links
    if "Serviços Especializados" in content:
        print(f"  = {fname} (already has links)")
        continue
    
    # Find the "Artigos Úteis" or "Outros Serviços" section and insert before it
    # Or insert before the closing </div> of the footer links block
    if '<h3 style="color:#333">📝 Artigos Úteis</h3>' in content:
        content = content.replace(
            '<h3 style="color:#333">📝 Artigos Úteis</h3>',
            SERVICE_LINKS_BLOCK + '\n<h3 style="color:#333">📝 Artigos Úteis</h3>'
        )
    elif '<p style="text-align:center;margin-top:15px"><a href="/" style="color:#FF6B35' in content:
        content = content.replace(
            '<p style="text-align:center;margin-top:15px"><a href="/" style="color:#FF6B35',
            SERVICE_LINKS_BLOCK + '\n<p style="text-align:center;margin-top:15px"><a href="/" style="color:#FF6B35'
        )
    else:
        print(f"  ⚠️ {fname} - no insertion point found")
        continue
    
    with open(f, "w", encoding="utf-8") as fh:
        fh.write(content)
    count += 1
    print(f"  ✅ {fname}")

print(f"\n🔗 Added service links to {count} city pages")
