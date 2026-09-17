const fs = require('fs');

// 1. Remove from layout.tsx
let layoutContent = fs.readFileSync('src/app/layout.tsx', 'utf8');
layoutContent = layoutContent.replace(/import \{ CustomCursor \} from "@\/components\/ui\/CustomCursor";\n?/, '');
layoutContent = layoutContent.replace(/<CustomCursor \/>\n?\s*/, '');
fs.writeFileSync('src/app/layout.tsx', layoutContent, 'utf8');

// 2. Remove CSS from globals.css
let cssContent = fs.readFileSync('src/app/globals.css', 'utf8');
cssContent = cssContent.replace(/\/\* Custom Cursor Overrides \*\/[\s\S]*?cursor: none !important;\n}\n?/, '');
fs.writeFileSync('src/app/globals.css', cssContent, 'utf8');

// 3. Delete the component file
if (fs.existsSync('src/components/ui/CustomCursor.tsx')) {
  fs.unlinkSync('src/components/ui/CustomCursor.tsx');
}

console.log('Custom cursor removed completely.');
