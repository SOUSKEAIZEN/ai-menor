const fs = require('fs');

let content = fs.readFileSync('src/app/(marketing)/layout.tsx', 'utf8');

content = content.replace(
  /className="sticky top-0 z-50 w-full border-b border-\[var\(--border\)\] bg-\[var\(--surface\)\]\/80 backdrop-blur-md"/,
  'className="fixed top-4 left-4 right-4 z-50 floating-header flex items-center justify-between px-6 mx-auto max-w-7xl"'
);

// Container in header
content = content.replace(
  /<div className="container mx-auto px-4 h-16 flex items-center justify-between">/,
  '<div className="w-full h-16 flex items-center justify-between">'
);

// Text gradient on logo
content = content.replace(
  /<span className="font-bold text-xl tracking-tight">AI mentor<\/span>/,
  '<span className="font-bold text-xl tracking-tight text-gradient">AI mentor</span>'
);

// Main padding top
content = content.replace(
  /<main className="flex-1">/,
  '<main className="flex-1 pt-24">'
);

fs.writeFileSync('src/app/(marketing)/layout.tsx', content, 'utf8');
console.log('Marketing layout updated!');
