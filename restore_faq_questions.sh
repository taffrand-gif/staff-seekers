#!/bin/bash

echo "Restauration des questions FAQ (voix du client)..."

cd /Users/admin/projects/staff-seekers/client/public

# Liste des fichiers HTML
FILES=$(find . -name "*.html" -type f)

for file in $FILES; do
    echo "Traitement de $file..."
    
    # Restaurer les questions FAQ (h4)
    # On restaure "nossa/nosso" à "minha/meu" dans les questions (h4)
    sed -i '' 's/<h4[^>]*>.*da nossa /<h4>.*da minha /g' "$file"
    sed -i '' 's/<h4[^>]*>.*na nossa /<h4>.*na minha /g' "$file"
    sed -i '' 's/<h4[^>]*>.*a nossa /<h4>.*a minha /g' "$file"
    sed -i '' 's/<h4[^>]*>.*do nosso /<h4>.*do meu /g' "$file"
    sed -i '' 's/<h4[^>]*>.*no nosso /<h4>.*no meu /g' "$file"
    sed -i '' 's/<h4[^>]*>.*o nosso /<h4>.*o meu /g' "$file"
    
    # Restaurer spécifiquement les patterns communs dans les questions
    sed -i '' 's/da nossa quinta/da minha quinta/g' "$file"
    sed -i '' 's/da nossa casa/da minha casa/g' "$file"
    sed -i '' 's/da nossa adega/da minha adega/g' "$file"
    sed -i '' 's/da nossa exploração/da minha exploração/g' "$file"
    sed -i '' 's/do nosso restaurante/do meu restaurante/g' "$file"
    sed -i '' 's/do nosso alojamento/do meu alojamento/g' "$file"
    
    echo "  ✓ $file traité"
done

echo "Restauration terminée !"