const fs = require('fs');

let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

content = content.replace(
  /import \{ ThemeProvider \} from "@\/components\/theme-provider";/,
  'import { ThemeProvider } from "@/components/theme-provider";\nimport { CustomCursor } from "@/components/ui/CustomCursor";'
);

content = content.replace(
  /<ThemeProvider attribute="class" defaultTheme="system" enableSystem>\s*\{children\}\s*<\/ThemeProvider>/,
  '<ThemeProvider attribute="class" defaultTheme="system" enableSystem>\n          <CustomCursor />\n          {children}\n        </ThemeProvider>'
);

fs.writeFileSync('src/app/layout.tsx', content, 'utf8');
console.log('Root layout updated with CustomCursor!');
