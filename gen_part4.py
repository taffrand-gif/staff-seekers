#!/usr/bin/env python3
"""Part 4: Add price tables to pages that don't have them + fix individual prices"""
import os, re

BASE = "/Users/admin/projects/staff-seekers/client/public"

CORRECT_PRICE_TABLE = '''<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
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
</div>'''

# Pages that need price table added (they don't have one)
PAGES_NO_TABLE = [
    "eletricista-alijo.html",
    "eletricista-lamego.html",
    "eletricista-mogadouro.html",
    "eletricista-montalegre.html",
    "eletricista-torre-moncorvo.html",
    "eletricista-valpacos.html",
    "eletricista-vila-flor.html",
    "eletricista-vinhais.html",
]

# Correct zone+price for each city
CITY_CORRECTIONS = {
    "alijo": (5, 45),
    "lamego": (5, 45),
    "mogadouro": (3, 30),
    "montalegre": (6, 50),
    "torre-moncorvo": (3, 30),
    "valpacos": (4, 35),
    "vila-flor": (2, 20),
    "vinhais": (3, 30),
    "braganca": (3, 30),
    "chaves": (6, 50),
    "freixo-espada-cinta": (3, 30),
    "macedo-cavaleiros": (1, 15),
    "miranda-douro": (4, 35),
    "mirandela": (2, 20),
    "vila-real": (5, 45),
}

print("=" * 60)
print("STEP 2b: Adding price tables to pages that don't have them")
print("=" * 60)

for filename in PAGES_NO_TABLE:
    filepath = os.path.join(BASE, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Insert price table before <div class="advantages">
    if '<div class="advantages">' in content:
        content = content.replace(
            '<div class="advantages">',
            CORRECT_PRICE_TABLE + '\n\n<div class="advantages">'
        )
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Added price table to {filename}")
    else:
        print(f"  ⚠️  No insertion point found in {filename}")

# Now fix individual taxa-box prices on ALL existing pages
print("\n" + "=" * 60)
print("STEP 2c: Fixing individual city prices in taxa-box sections")
print("=" * 60)

import glob
all_files = glob.glob(os.path.join(BASE, "eletricista-*.html"))

for filepath in sorted(all_files):
    filename = os.path.basename(filepath)
    slug = filename.replace("eletricista-", "").replace(".html", "")
    
    # Skip urgente pages
    if "urgente" in slug:
        continue
    
    if slug not in CITY_CORRECTIONS:
        continue
    
    zona, price = CITY_CORRECTIONS[slug]
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Fix any wrong taxa de deslocação price
    # Pattern: "Taxa de deslocação:</strong> XX€"
    content = re.sub(
        r'(<strong>Taxa de deslocação:</strong>\s*)\d+€',
        f'\\g<1>{price}€',
        content
    )
    
    # Fix "Zona X:</strong> CITY está na Zona X" - ensure zona number is correct
    # Pattern: "Zona X:</strong> CITY está na Zona X"
    content = re.sub(
        r'<strong>Zona \d+:</strong>',
        f'<strong>Zona {zona}:</strong>',
        content
    )
    content = re.sub(
        r'está na Zona \d+ do nosso',
        f'está na Zona {zona} do nosso',
        content
    )
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Fixed prices in {filename} -> Zona {zona}, {price}€")
    else:
        print(f"  ℹ️  Already correct: {filename}")

print("\n✅ Price tables and individual prices fixed!")
