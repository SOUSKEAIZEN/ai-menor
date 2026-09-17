const fs = require('fs');

let page = fs.readFileSync('src/app/(auth)/register/page.tsx', 'utf8');

page = page.replace(/className="space-y-6"/, 'className="space-y-4 flex flex-col justify-center h-full"');
page = page.replace(/className="text-center sm:text-left space-y-2 mb-8"/, 'className="text-center sm:text-left space-y-1 mb-4"');
page = page.replace(/className="space-y-4 mt-6"/, 'className="space-y-3 mt-3"');
page = page.replace(/className="space-y-2"/g, 'className="space-y-1.5"');
page = page.replace(/className="w-full mt-6"/, 'className="w-full mt-4"');
page = page.replace(/size="lg"/, 'size="default"');
page = page.replace(/className="px-8 text-center text-sm text-\[var\(--muted\)\] mt-8"/, 'className="px-2 text-center text-xs text-[var(--muted)] mt-4 leading-relaxed"');
page = page.replace(/className="px-8 text-center text-sm text-\[var\(--muted\)\]"/, 'className="px-2 text-center text-sm text-[var(--muted)] mt-2"');
// Change grid-cols-2 gap-4 to gap-2
page = page.replace(/className="grid grid-cols-2 gap-4"/, 'className="grid grid-cols-2 gap-2"');

fs.writeFileSync('src/app/(auth)/register/page.tsx', page, 'utf8');
console.log('Fixed register page spacing.');
