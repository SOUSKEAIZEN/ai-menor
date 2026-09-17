const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Add will-change and hardware acceleration to ambient blobs
css = css.replace(/\.ambient-blob-1\s*\{/, '.ambient-blob-1 {\n    will-change: transform;\n    transform: translateZ(0);');
css = css.replace(/\.ambient-blob-2\s*\{/, '.ambient-blob-2 {\n    will-change: transform;\n    transform: translateZ(0);');

// Use translate3d in keyframes to force GPU acceleration
css = css.replace(/@keyframes float \{[\s\S]*?\}/, `@keyframes float {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  33% { transform: translate3d(30px, -50px, 0) scale(1.05); }
  66% { transform: translate3d(-20px, 20px, 0) scale(0.95); }
}`);

css = css.replace(/@keyframes float-delayed \{[\s\S]*?\}/, `@keyframes float-delayed {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  33% { transform: translate3d(-40px, 40px, 0) scale(1.02); }
  66% { transform: translate3d(30px, -20px, 0) scale(0.98); }
}`);

// Add hardware acceleration to glass components to prevent repaint lag
const glassClasses = ['\\.glass-panel', '\\.glass-card', '\\.floating-header', '\\.floating-sidebar'];
glassClasses.forEach(cls => {
  const regex = new RegExp(`(${cls}\\s*\\{[\\s\\S]*?)(transition:.*?})`, 'g');
  css = css.replace(regex, `$1transform: translateZ(0);\n    will-change: transform, box-shadow;\n    $2`);
});

fs.writeFileSync('src/app/globals.css', css, 'utf8');
console.log('CSS optimized for buttery smooth 60fps.');
