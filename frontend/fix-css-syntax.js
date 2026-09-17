const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

css = css.replace(/@keyframes float \{\n  0%, 100% \{ transform: translate3d\(0, 0, 0\) scale\(1\); \}\n  33% \{ transform: translate3d\(30px, -50px, 0\) scale\(1\.05\); \}\n  66% \{ transform: translate3d\(-20px, 20px, 0\) scale\(0\.95\); \}\n\}\n  33% \{ transform: translate\(30px, -50px\) scale\(1\.05\); \}\n  66% \{ transform: translate\(-20px, 20px\) scale\(0\.95\); \}\n\}/, `@keyframes float {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  33% { transform: translate3d(30px, -50px, 0) scale(1.05); }
  66% { transform: translate3d(-20px, 20px, 0) scale(0.95); }
}`);

css = css.replace(/@keyframes float-delayed \{\n  0%, 100% \{ transform: translate3d\(0, 0, 0\) scale\(1\); \}\n  33% \{ transform: translate3d\(-40px, 40px, 0\) scale\(1\.02\); \}\n  66% \{ transform: translate3d\(30px, -20px, 0\) scale\(0\.98\); \}\n\}\n  33% \{ transform: translate\(-40px, 40px\) scale\(1\.02\); \}\n  66% \{ transform: translate\(30px, -20px\) scale\(0\.98\); \}\n\}/, `@keyframes float-delayed {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  33% { transform: translate3d(-40px, 40px, 0) scale(1.02); }
  66% { transform: translate3d(30px, -20px, 0) scale(0.98); }
}`);

fs.writeFileSync('src/app/globals.css', css, 'utf8');
console.log('Fixed CSS syntax error.');
