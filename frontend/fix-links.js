const fs = require('fs');

let content = fs.readFileSync('src/app/(marketing)/page.tsx', 'utf8');

// Replace standard links containing buttons
content = content.replace(
  /<Link href="\/register">\s*<Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full group">\s*(.*?)<\/Button>\s*<\/Link>/g,
  '<Button size="lg" asChild className="w-full sm:w-auto text-lg px-8 h-14 rounded-full group"><Link href="/register">$1</Link></Button>'
);

content = content.replace(
  /<Link href="\/features">\s*<Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full glass-card hover:bg-\[var\(--surface\)\]">\s*(.*?)<\/Button>\s*<\/Link>/g,
  '<Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-lg px-8 h-14 rounded-full glass-card hover:bg-[var(--surface)]"><Link href="/features">$1</Link></Button>'
);

fs.writeFileSync('src/app/(marketing)/page.tsx', content, 'utf8');
console.log('Fixed links in marketing page');
