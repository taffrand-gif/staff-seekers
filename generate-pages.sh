#!/bin/bash
# Generator script for Staff-Seekers electrician pages
# This creates all city pages, blog articles, servicos page, and fixes price tables

BASE="/Users/admin/projects/staff-seekers/client/public"
BLOG="$BASE/blog"

# Correct price table HTML used on ALL pages
PRICE_TABLE='<div style="background:#f8f9fa;padding:30px;border-radius:10px;margin:30px 0;border:2px solid #FF6B35">
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
</div>'

echo "Script loaded - PRICE_TABLE ready"
echo "Length: ${#PRICE_TABLE}"
