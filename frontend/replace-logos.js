const fs = require('fs');

function replaceInFile(file, regex, replacement) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(regex, replacement);
    fs.writeFileSync(file, content, 'utf8');
  }
}

// 1. Add import BrandLogo to all files
const layouts = [
  'src/app/student/layout.tsx',
  'src/app/mentor/layout.tsx',
  'src/app/admin/layout.tsx',
  'src/app/(marketing)/layout.tsx'
];

layouts.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes("import { BrandLogo }")) {
    content = content.replace(
      /import \{ ThemeToggle \} from '@\/components\/ThemeToggle';/g,
      "import { ThemeToggle } from '@/components/ThemeToggle';\nimport { BrandLogo } from '@/components/ui/BrandLogo';"
    );
    fs.writeFileSync(file, content, 'utf8');
  }
});

// 2. Replace simple text links in Student/Mentor/Admin layouts
['src/app/student/layout.tsx', 'src/app/mentor/layout.tsx', 'src/app/admin/layout.tsx'].forEach(file => {
  replaceInFile(
    file,
    /<Link href="\/" className="text-xl font-bold text-gradient tracking-tight hover:opacity-80 transition-opacity">AI mentor<\/Link>/g,
    '<BrandLogo />'
  );
  replaceInFile(
    file,
    /<Link href="\/" className="font-bold text-gradient hover:opacity-80 transition-opacity">AI mentor<\/Link>/g,
    '<BrandLogo className="scale-90 origin-left" />'
  );
});

// 3. Replace complex logo in Marketing Layout
replaceInFile(
  'src/app/(marketing)/layout.tsx',
  /<Link href="\/" className="flex items-center space-x-2">\s*<Bot className="h-8 w-8 text-\[var\(--main\)\]" \/>\s*<span className="font-bold text-xl tracking-tight text-gradient">AI mentor<\/span>\s*<\/Link>/g,
  '<BrandLogo />'
);

replaceInFile(
  'src/app/(marketing)/layout.tsx',
  /<div className="flex items-center space-x-2 mb-4">\s*<Bot className="h-6 w-6 text-\[var\(--main\)\]" \/>\s*<span className="font-bold text-lg text-\[var\(--main\)\]">AI mentor<\/span>\s*<\/div>/g,
  '<BrandLogo className="scale-75 origin-left" />'
);

console.log('Logos replaced!');
