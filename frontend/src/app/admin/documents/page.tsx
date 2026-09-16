import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Upload, FileText, Search } from 'lucide-react';
import { Input } from '@/components/ui/Input';

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <PageHeader title="Knowledge Base" description="Manage RAG documents and learning materials" />
        <Button><Upload className="w-4 h-4 mr-2" /> Upload Document</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-[var(--border)] flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--muted)]" />
              <Input placeholder="Search documents..." className="pl-9" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[var(--fade)] text-[var(--muted)] uppercase">
                <tr>
                  <th className="px-6 py-3">Document</th>
                  <th className="px-6 py-3">Subject</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Uploaded</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4].map(i => (
                  <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--fade)]/50">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="font-medium">Syllabus_CS101_F24.pdf</div>
                        <div className="text-[var(--muted)] text-xs">2.4 MB</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">CS101</td>
                    <td className="px-6 py-4"><Badge variant={i === 2 ? 'warning' : 'success'}>{i === 2 ? 'Processing' : 'Ready'}</Badge></td>
                    <td className="px-6 py-4 text-[var(--muted)]">2 days ago</td>
                    <td className="px-6 py-4">
                      <Button variant="outline" size="sm">Manage</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
