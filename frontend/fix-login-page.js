const fs = require('fs');

let page = fs.readFileSync('src/app/(auth)/login/page.tsx', 'utf8');

page = page.replace(/className="space-y-6"/, 'className="space-y-4 flex flex-col justify-center h-full"');
page = page.replace(/className="text-center sm:text-left space-y-2 mb-8"/, 'className="text-center sm:text-left space-y-1 mb-4"');
page = page.replace(/className="space-y-4"/, 'className="space-y-3"');
page = page.replace(/className="space-y-2"/g, 'className="space-y-1.5"');
page = page.replace(/className="w-full mt-6"/, 'className="w-full mt-4"');
page = page.replace(/className="relative my-8"/, 'className="relative my-5"');
page = page.replace(/className="grid grid-cols-1 sm:grid-cols-3 gap-3"/, 'className="grid grid-cols-3 gap-2"');
page = page.replace(/className="px-8 text-center text-sm text-\[var\(--muted\)\] mt-8"/, 'className="px-2 text-center text-sm text-[var(--muted)] mt-4"');
page = page.replace(/<Button variant="outline" className="w-full">/g, '<Button variant="outline" className="w-full px-0 text-xs sm:text-sm">');
page = page.replace(/<ArrowRight className="ml-2 h-4 w-4" \/>\s*<\/Button>/g, '<ArrowRight className="ml-2 h-4 w-4" />\n          </Button>');
page = page.replace(/size="lg"/, 'size="default"'); // Make the main button slightly smaller vertically

fs.writeFileSync('src/app/(auth)/login/page.tsx', page, 'utf8');
console.log('Fixed login page spacing.');
