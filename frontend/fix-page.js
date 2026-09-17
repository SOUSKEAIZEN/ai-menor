const fs = require('fs');
let content = fs.readFileSync('src/app/(marketing)/page.tsx', 'utf8');

content = content.replace(
  /<Link href="\/register" passHref legacyBehavior>\s*<Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full group">\s*Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" \/>\s*<\/Button>\s*<\/Link>/g,
  '<Button size="lg" asChild className="w-full sm:w-auto text-lg px-8 h-14 rounded-full group">\n              <Link href="/register">\n                Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />\n              </Link>\n            </Button>'
);

content = content.replace(
  /<Link href="\/features" passHref legacyBehavior>\s*<Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full glass-card hover:bg-\[var\(--surface\)\]">\s*Explore Features\s*<\/Button>\s*<\/Link>/g,
  '<Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-lg px-8 h-14 rounded-full glass-card hover:bg-[var(--surface)]">\n              <Link href="/features">\n                Explore Features\n              </Link>\n            </Button>'
);

fs.writeFileSync('src/app/(marketing)/page.tsx', content, 'utf8');
