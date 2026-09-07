
import sys
with open('app.js', 'r', encoding='utf-8') as app:
    text = app.read()

old_set_if = 'function setIfExists(sel, val) {\n  const el = ;\n  if (el) el.textContent = val;\n}'
new_set_if = 'function setIfExists(sel, val) {\n  const el = ;\n  if (el) {\n    if (typeof val === \'string\' && val.includes(\'<svg\')) {\n      el.innerHTML = val;\n    } else {\n      el.textContent = val;\n    }\n  }\n}'

text = text.replace(old_set_if, new_set_if)

old_ob = 'obLangSelect.addEventListener(\'change\', (e) => {\n      applyLanguage(e.target.value);\n    });'
new_ob = 'obLangSelect.addEventListener(\'change\', (e) => {\n      applyLanguage(e.target.value);\n      renderHome();\n      renderPrices();\n      renderSafety();\n    });'
text = text.replace(old_ob, new_ob)

old_set = 'setLangSelect.addEventListener(\'change\', (e) => {\n      applyLanguage(e.target.value);\n    });'
new_set = 'setLangSelect.addEventListener(\'change\', (e) => {\n      applyLanguage(e.target.value);\n      renderHome();\n      renderPrices();\n      renderSafety();\n    });'
text = text.replace(old_set, new_set)

with open('app.js', 'w', encoding='utf-8') as app:
    app.write(text)
