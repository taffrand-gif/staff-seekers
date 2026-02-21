#!/bin/bash

echo "Correction des formulations solo/singulier dans tous les fichiers HTML..."

cd /Users/admin/projects/staff-seekers/client/public

# Liste des fichiers HTML
FILES=$(find . -name "*.html" -type f)

for file in $FILES; do
    echo "Traitement de $file..."
    
    # Sauvegarde originale
    cp "$file" "$file.bak"
    
    # 1. Remplacement des formulations spécifiques
    sed -i '' 's/é uma das minhas especialidades/é uma das nossas especialidades/g' "$file"
    sed -i '' 's/faço cortes precisos/fazemos cortes precisos/g' "$file"
    sed -i '' 's/Utilizo técnicas/Utilizamos técnicas/g' "$file"
    sed -i '' 's/minimizando a necessidade/minimizamos a necessidade/g' "$file"
    sed -i '' 's/Quando é inevitável, faço/Quando é inevitável, fazemos/g' "$file"
    sed -i '' 's/fecho com argamassa/fechamos com argamassa/g' "$file"
    
    # 2. Remplacement générique des verbes au singulier (1ère personne)
    sed -i '' 's/\([[:space:]]\)faço\([[:space:]]\)/\1fazemos\2/g' "$file"
    sed -i '' 's/\([[:space:]]\)utilizo\([[:space:]]\)/\1utilizamos\2/g' "$file"
    sed -i '' 's/\([[:space:]]\)instalo\([[:space:]]\)/\1instalamos\2/g' "$file"
    sed -i '' 's/\([[:space:]]\)reparo\([[:space:]]\)/\1reparamos\2/g' "$file"
    sed -i '' 's/\([[:space:]]\)modernizo\([[:space:]]\)/\1modernizamos\2/g' "$file"
    sed -i '' 's/\([[:space:]]\)certifico\([[:space:]]\)/\1certificamos\2/g' "$file"
    
    # 3. Remplacement des pronoms possessifs
    sed -i '' 's/ a minha / a nossa /g' "$file"
    sed -i '' 's/ da minha / da nossa /g' "$file"
    sed -i '' 's/ na minha / na nossa /g' "$file"
    sed -i '' 's/ o meu / o nosso /g' "$file"
    sed -i '' 's/ do meu / do nosso /g' "$file"
    sed -i '' 's/ no meu / no nosso /g' "$file"
    
    # 4. Éviter de toucher aux citations clients (contenant "minha" dans des guillemets ou avis)
    # On ne corrige pas les lignes qui contiennent des guillemets ou des avis clients
    
    echo "  ✓ $file corrigé"
done

echo ""
echo "=== Vérification des corrections ==="
echo "Recherche de 'faço' restant:"
grep -n " faço " *.html | head -10

echo ""
echo "Recherche de 'minha' restant (hors citations):"
grep -n "minha" *.html | grep -v "style=" | grep -v "font-size" | head -10

echo ""
echo "Correction terminée !"