import re
import os

# Fichiers à modifier
files_to_fix = [
    'client/src/components/Header.tsx',
    'client/src/components/Footer.tsx',
    'client/src/components/ChatWidget.tsx',
    'client/src/components/FAQSection.tsx',
    'client/src/components/HeroUrgence.tsx',
    'client/src/pages/Home.tsx'
]

for filepath in files_to_fix:
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Vérifier si ACTIVE_CONFIG est déjà importé
    if 'ACTIVE_CONFIG' not in content:
        # Ajouter l'import en haut
        if 'import' in content:
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if line.startswith('import'):
                    lines.insert(i, 'import { ACTIVE_CONFIG } from "@shared/serviceConfig";')
                    content = '\n'.join(lines)
                    break
    
    # Ajouter la destructuration du gradient dans le composant
    if 'gradient.from' not in content and 'export default function' in content:
        # Trouver la première ligne du composant et ajouter la config
        content = re.sub(
            r'(export default function \w+\([^)]*\) \{)',
            r'\1\n  const { gradient } = ACTIVE_CONFIG;',
            content,
            count=1
        )
    
    # Remplacer bg-red-600 par style inline
    content = re.sub(
        r'className="([^"]*?)bg-red-600([^"]*?)"',
        lambda m: f'className="{m.group(1).strip()} {m.group(2).strip()}" style={{{{backgroundColor: gradient.from}}}}',
        content
    )
    
    # Remplacer text-red-600 par style inline
    content = re.sub(
        r'className="([^"]*?)text-red-600([^"]*?)"',
        lambda m: f'className="{m.group(1).strip()} {m.group(2).strip()}" style={{{{color: gradient.from}}}}',
        content
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Fixed: {filepath}")

print("\n🎉 Toutes les couleurs ont été rendues dynamiques!")
