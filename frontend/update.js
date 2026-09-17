const fs = require('fs');

const layouts = [
  'src/app/student/layout.tsx',
  'src/app/mentor/layout.tsx',
  'src/app/admin/layout.tsx'
];

layouts.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace nav links
  content = content.replace(
    /className=\{\`group relative flex items-center gap-3 px-3 py-2\.5 rounded-xl text-sm font-medium transition-all duration-300 \$\{isActive \? 'bg-\[var\(--main\)\]\/10 text-\[var\(--main\)\] shadow-sm backdrop-blur-md' : 'text-\[var\(--contrast\)\] hover:bg-\[var\(--main\)\]\/5 hover:text-\[var\(--main\)\] hover:translate-x-1'\}\`\}/g,
    'className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-400 ease-out ${isActive ? "bg-[var(--surface)] text-[var(--main)] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.05),inset_0_1px_0_0_var(--border-highlight)] border border-[var(--border)]" : "text-[var(--contrast)] hover:bg-[var(--glass-strong)] hover:text-[var(--main-light)]"}`}'
  );
  
  // Change hover transform on icons
  content = content.replace(
    /w-4 h-4 transition-transform duration-300 \$\{isActive \? 'text-\[var\(--main\)\] scale-110' : 'text-\[var\(--muted\)\] group-hover:text-\[var\(--main\)\] group-hover:scale-110'\}/g,
    'w-5 h-5 transition-transform duration-400 ${isActive ? "text-[var(--main)] scale-110" : "text-[var(--muted)] group-hover:text-[var(--main-light)] group-hover:scale-110"}'
  );
  content = content.replace(
    /w-5 h-5 transition-transform duration-300 \$\{isActive \? 'text-\[var\(--main\)\] scale-110' : 'text-\[var\(--muted\)\] group-hover:text-\[var\(--main\)\] group-hover:scale-110'\}/g,
    'w-5 h-5 transition-transform duration-400 ${isActive ? "text-[var(--main)] scale-110" : "text-[var(--muted)] group-hover:text-[var(--main-light)] group-hover:scale-110"}'
  );

  // Update layout main container padding to make things feel more "floating"
  content = content.replace(
    /bg-\[var\(--surface\)\]\/30 backdrop-blur-sm border border-border\/20 shadow-inner/g,
    'bg-[var(--glass-fill)] backdrop-blur-2xl border border-border/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]'
  );
  
  // Profile Dropdown background upgrade
  content = content.replace(
    /w-56 bg-surface backdrop-blur-xl border border-border\/40/g,
    'w-64 bg-[var(--surface)] backdrop-blur-3xl border border-border/60 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.1)]'
  );

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Layouts updated!');
