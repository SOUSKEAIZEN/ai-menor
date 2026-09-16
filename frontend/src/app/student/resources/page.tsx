import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Library, Download } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Resources</h1>
      <p className="text-[var(--muted)]">Materials recommended for you.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Library className="w-5 h-5 text-[var(--contrast)]" /> Advanced Calculus Formula Sheet</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center mt-4">
            <span className="text-sm text-[var(--muted)]">PDF • 2 MB</span>
            <Download className="w-5 h-5 text-[var(--muted)] hover:text-[var(--main)] cursor-pointer" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
