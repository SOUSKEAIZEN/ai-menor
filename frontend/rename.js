const fs = require('fs');

const mappings = {
  "'ABC'": "'ABC 1'",
  "'John Doe'": "'ABC 2'",
  "'Sarah Smith'": "'ABC 3'",
  "'Michael Chen'": "'ABC 4'",
  "'Jane Wilson'": "'ABC 5'",
  "'Alex Brown'": "'ABC 6'",
  "'Emma Davis'": "'ABC 7'",
  "'James Wilson'": "'ABC 8'"
};

function replaceNames(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [oldName, newName] of Object.entries(mappings)) {
    // Replace with quotes
    content = content.replace(new RegExp(oldName, 'g'), newName);
    // Replace without quotes (for strings that might be inside template literals or unquoted but matched exactly)
    const oldUnquoted = oldName.replace(/'/g, '');
    const newUnquoted = newName.replace(/'/g, '');
    content = content.replace(new RegExp(oldUnquoted, 'g'), newUnquoted);
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(\`Updated \${filePath}\`);
}

replaceNames('src/store/demo-state.ts');
replaceNames('src/app/admin/dashboard/page.tsx');
