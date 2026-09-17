const fs = require('fs');

let content = fs.readFileSync('src/app/(auth)/layout.tsx', 'utf8');

// Add import
content = content.replace(
  /import \{ ThemeToggle \} from '@\/components\/ThemeToggle';/,
  "import { ThemeToggle } from '@/components/ThemeToggle';\nimport { BrandLogo } from '@/components/ui/BrandLogo';"
);

// Replace desktop logo
content = content.replace(
  /<Link href="\/" className="flex items-center gap-2 text-2xl font-bold">\s*<div className="w-10 h-10 bg-\[var\(--main\)\] text-\[var\(--contrast\)\] rounded-xl flex items-center justify-center">\s*<BookOpen size=\{24\} \/>\s*<\/div>\s*<span>AI mentor<\/span>\s*<\/Link>/,
  '<BrandLogo />'
);

// Replace mobile logo
content = content.replace(
  /<Link href="\/" className="flex items-center gap-2 text-2xl font-bold">\s*<div className="w-8 h-8 bg-\[var\(--main\)\] text-\[var\(--contrast\)\] rounded-xl flex items-center justify-center">\s*<BookOpen size=\{20\} \/>\s*<\/div>\s*<span>AI mentor<\/span>\s*<\/Link>/,
  '<BrandLogo className="scale-90" />'
);

fs.writeFileSync('src/app/(auth)/layout.tsx', content, 'utf8');
console.log('Auth layout updated!');
