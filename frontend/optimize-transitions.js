const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Replace `transition: all` with specific properties for buttery smooth UX
css = css.replace(/transition: all 0.4s cubic-bezier\(0.2, 0.8, 0.2, 1\);/g, 'transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);');
css = css.replace(/transition: all 0.4s ease;/g, 'transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease;');
css = css.replace(/transition: all 0.3s cubic-bezier\(0.2, 0.8, 0.2, 1\);/g, 'transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);');
css = css.replace(/transition: all /g, 'transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; /* optimized all */ /* ');

fs.writeFileSync('src/app/globals.css', css, 'utf8');

let button = fs.readFileSync('src/components/ui/Button.tsx', 'utf8');
button = button.replace(/transition-all/g, 'transition-[transform,box-shadow,background-color,border-color,color,opacity]');
fs.writeFileSync('src/components/ui/Button.tsx', button, 'utf8');

console.log('Transitions optimized for 60fps.');
