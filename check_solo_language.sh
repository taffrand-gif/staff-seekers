#!/bin/bash

echo "Recherche des formulations solo/singulier dans les fichiers HTML..."

cd /Users/admin/projects/staff-seekers/client/public

echo ""
echo "=== Recherche de 'Eu trabalho' ==="
grep -n "Eu trabalho" *.html

echo ""
echo "=== Recherche de 'Baseado na minha experiência' ==="
grep -n "Baseado na minha experiência" *.html

echo ""
echo "=== Recherche de 'a minha experiência' ==="
grep -n "a minha experiência" *.html

echo ""
echo "=== Recherche de 'eu preencho' ==="
grep -n "eu preencho" *.html

echo ""
echo "=== Recherche de 'Eu conheço' ==="
grep -n "Eu conheço" *.html

echo ""
echo "=== Recherche de 'conheço-os' ==="
grep -n "conheço-os" *.html

echo ""
echo "=== Recherche de 'minha/meu' (sans les questions FAQ) ==="
grep -n "minha\|meu" *.html | grep -v "h4" | grep -v "FAQ" | head -20

echo ""
echo "=== Recherche de 'Sou um profissional solo' ==="
grep -n "profissional solo" *.html

echo ""
echo "=== Recherche de 'Sou eletricista' ==="
grep -n "Sou eletricista" *.html