import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Search } from 'lucide-react';

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <PageHeader title="Students" description="View and manage enrolled students" />
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-[var(--border)] flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--muted)]" />
              <Input placeholder="Search students by name or ID..." className="pl-9" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[var(--fade)] text-[var(--muted)] uppercase">
                <tr>
                  <th className="px-6 py-3">Student</th>
                  <th className="px-6 py-3">Program</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Risk Level</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4,5].map(i => (
                  <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--fade)]/50">
                    <td className="px-6 py-4">
                      <div className="font-medium">ABC</div>
                      <div className="text-[var(--muted)]">STU-2023-00{i}</div>
                    </td>
                    <td className="px-6 py-4">Computer Science B.S.</td>
                    <td className="px-6 py-4"><Badge variant="success">Enrolled</Badge></td>
                    <td className="px-6 py-4"><Badge variant="outline">Low</Badge></td>
                    <td className="px-6 py-4"><Button variant="outline" size="sm">View Profile</Button></td>
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
