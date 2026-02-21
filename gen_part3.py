#!/usr/bin/env python3
"""Part 3: Main execution - generate all city pages, fix existing pages, create blog articles, servicos page"""
import os, sys, re, glob

# Import parts
exec(open("/Users/admin/projects/staff-seekers/gen_part1.py").read())
exec(open("/Users/admin/projects/staff-seekers/gen_part2.py").read())

# ============================================================
# STEP 1: Generate all city pages (empty + missing)
# ============================================================
print("=" * 60)
print("STEP 1: Generating city pages")
print("=" * 60)

for c in CITIES:
    html = generate_city_html(c, CORRECT_PRICE_TABLE)
    filepath = os.path.join(BASE, f"eletricista-{c['slug']}.html")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    size = os.path.getsize(filepath)
    print(f"  ✅ eletricista-{c['slug']}.html ({size} bytes) - Zona {c['zona']}, {c['price']}€")

# ============================================================
# STEP 2: Fix price tables on ALL existing pages
# ============================================================
print("\n" + "=" * 60)
print("STEP 2: Fixing price tables on existing pages")
print("=" * 60)

# Pattern to find the old broken price table
# It starts with the div containing "Tabela de Taxas" and ends with the closing div+p
OLD_TABLE_PATTERN = re.compile(
    r'<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">\s*'
    r'<h3 style="color:#FF6B35;font-size:22px;margin:0 0 20px;text-align:center">💰 Tabela de Taxas de Deslocação</h3>\s*'
    r'<table.*?</table>\s*'
    r'<p style="font-size:13px;color:#888;margin:15px 0 0;text-align:center">\* Taxa única por deslocação.*?</p>\s*'
    r'</div>',
    re.DOTALL
)

# Also fix Bragança's individual price: "Zona 3: 45€" -> "Zona 3: 30€"
BRAGANCA_WRONG_PRICE = re.compile(
    r'<strong>Taxa de deslocação:</strong>\s*45€\s*\(inclui deslocação desde Macedo de Cavaleiros\)'
)
BRAGANCA_WRONG_ZONA_PRICE = re.compile(
    r'Zona 3:</strong>.*?45€'
)

# Correct zone/price mapping for individual taxa-box sections
ZONE_PRICE_MAP = {
    1: 15, 2: 20, 3: 30, 4: 35, 5: 45, 6: 50
}

# Cities and their correct zones for fixing individual prices
CITY_ZONE_MAP = {
    "braganca": 3,
    "vinhais": 3,
    "mogadouro": 3,
    "torre-moncorvo": 3,
    "freixo-espada-cinta": 3,
    "miranda-douro": 4,
    "valpacos": 4,
    "chaves": 6,
    "montalegre": 6,
    "macedo-cavaleiros": 1,
    "mirandela": 2,
    "vila-flor": 2,
    "vila-real": 5,
    "alijo": 5,
    "lamego": 5,
}

all_html_files = glob.glob(os.path.join(BASE, "eletricista-*.html"))
fixed_count = 0

for filepath in sorted(all_html_files):
    filename = os.path.basename(filepath)
    # Skip files we just generated (they already have correct table)
    slug = filename.replace("eletricista-", "").replace(".html", "")
    if any(c["slug"] == slug for c in CITIES):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if not content.strip():
        continue  # Skip empty files
    
    original = content
    
    # Fix the price table
    if OLD_TABLE_PATTERN.search(content):
        content = OLD_TABLE_PATTERN.sub(CORRECT_PRICE_TABLE, content)
    
    # Fix Bragança specific wrong price (Zona 3: 45€ -> 30€)
    if "braganca" in slug.lower() or "Bragança" in content:
        # Fix taxa-box individual price
        content = content.replace(
            '<strong>Taxa de deslocação:</strong> 45€ (inclui deslocação desde Macedo de Cavaleiros)',
            '<strong>Taxa de deslocação:</strong> 30€ (inclui deslocação desde Macedo de Cavaleiros)'
        )
        # Fix "Zona 3: 45€" text if present
        content = re.sub(
            r'Bragança está na Zona 3 do nosso sistema de deslocação\.\s*<br>\s*\n\s*<strong>Taxa de deslocação:</strong>\s*45€',
            'Bragança está na Zona 3 do nosso sistema de deslocação.<br>\n<strong>Taxa de deslocação:</strong> 30€',
            content
        )
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Fixed: {filename}")
        fixed_count += 1
    else:
        # Check if table exists at all
        if 'Tabela de Taxas' in content:
            print(f"  ℹ️  Already correct: {filename}")
        else:
            print(f"  ⚠️  No price table found: {filename}")

print(f"\n  Fixed {fixed_count} existing pages")

print("\n✅ Steps 1-2 complete!")
