const fs = require('fs');

const layouts = [
  'src/app/student/layout.tsx',
  'src/app/mentor/layout.tsx',
  'src/app/admin/layout.tsx'
];

layouts.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Optimize the main scrolling container
    content = content.replace(
      /className="flex-1 overflow-y-auto p-2 md:p-4 custom-scrollbar rounded-3xl bg-\[var\(--glass-fill\)\] backdrop-blur-2xl border border-border\/40 shadow-\[inset_0_1px_2px_rgba\(0,0,0,0\.02\)\]"/g,
      'className="flex-1 overflow-y-auto p-2 md:p-4 custom-scrollbar rounded-3xl bg-[var(--glass-fill)] backdrop-blur-2xl border border-border/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] transform-gpu"'
    );
    
    // Optimize floating header
    content = content.replace(
      /className="h-16 shrink-0 relative floating-header flex items-center justify-between px-4 md:px-6 z-20"/g,
      'className="h-16 shrink-0 relative floating-header flex items-center justify-between px-4 md:px-6 z-20 transform-gpu"'
    );
    
    fs.writeFileSync(file, content, 'utf8');
  }
});

console.log('Layouts optimized for performance.');
