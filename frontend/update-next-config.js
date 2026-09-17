const fs = require('fs');

let config = fs.readFileSync('next.config.ts', 'utf8');

// Remove from experimental
config = config.replace(/\s*reactCompiler:\s*true,?\s*/, '');

// Add to root
config = config.replace(
  /const nextConfig: NextConfig = \{/,
  'const nextConfig: NextConfig = {\n  reactCompiler: true,'
);

fs.writeFileSync('next.config.ts', config, 'utf8');
console.log('Moved reactCompiler to root config');
