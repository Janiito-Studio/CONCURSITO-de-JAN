import re

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update localStorage key to force new data
text = text.replace('concursito_jan_data', 'concursito_jan_data_v4')
text = text.replace('concursito_jan_data_v3', 'concursito_jan_data_v4')

# 2. Add new levels logic
new_groups = []
pattern = r'({\s*id:\s*\"nid_([1-5])\",\s*name:\s*\"Nivel \d+ \((.*?)\)\",\s*questions:\s*\[.*?\]\n\s*})'
matches = list(re.finditer(pattern, text, re.DOTALL))

for i, match in enumerate(matches):
    original_block = match.group(1)
    diff_name = match.group(3)
    level_num = match.group(2)
    
    modified_original = original_block.replace(f'({diff_name})', f'({diff_name} 1)')
    
    clone2 = original_block.replace(f'nid_{level_num}', f'nid_{level_num}_2')
    clone2 = clone2.replace(f'({diff_name})', f'({diff_name} 2)')
    
    clone3 = original_block.replace(f'nid_{level_num}', f'nid_{level_num}_3')
    clone3 = clone3.replace(f'({diff_name})', f'({diff_name} 3)')
    
    new_groups.append((original_block, modified_original + ',\n    ' + clone2 + ',\n    ' + clone3))

for old, new in new_groups:
    text = text.replace(old, new)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(text)
