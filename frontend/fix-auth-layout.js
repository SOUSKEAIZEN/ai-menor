const fs = require('fs');

let layout = fs.readFileSync('src/app/(auth)/layout.tsx', 'utf8');

// Reduce vertical padding on the mobile auth side from p-6 to p-4 py-6
layout = layout.replace(
  /className="w-full lg:w-1\/2 flex items-center justify-center p-6 sm:p-12"/,
  'className="w-full lg:w-1/2 flex items-center justify-center p-4 py-8 sm:p-12"'
);

// Reduce logo margin
layout = layout.replace(
  /className="flex lg:hidden justify-center mb-8"/,
  'className="flex lg:hidden justify-center mb-4"'
);

fs.writeFileSync('src/app/(auth)/layout.tsx', layout, 'utf8');
console.log('Fixed auth layout vertical spacing.');
