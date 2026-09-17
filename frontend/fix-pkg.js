const fs = require('fs');
let pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

pkg.allowScripts = {
  "unrs-resolver": true
};

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2), 'utf8');
console.log('Added allowScripts to package.json');
