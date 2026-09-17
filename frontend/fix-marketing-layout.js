const fs = require('fs');

let layout = fs.readFileSync('src/app/(marketing)/layout.tsx', 'utf8');

// Add import
layout = layout.replace(
  /import \{ BrandLogo \} from '@\/components\/ui\/BrandLogo';/,
  "import { BrandLogo } from '@/components/ui/BrandLogo';\nimport MarketingHeader from './MarketingHeader';"
);

// Replace header block
layout = layout.replace(
  /<header className="fixed top-4 left-4 right-4 z-50 floating-header[\s\S]*?<\/header>/,
  '<MarketingHeader />'
);

fs.writeFileSync('src/app/(marketing)/layout.tsx', layout, 'utf8');
console.log('Updated layout with MarketingHeader.');
