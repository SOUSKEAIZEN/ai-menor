import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Search } from 'lucide-react';

export default function MentorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <PageHeader title="Mentors" description="Manage faculty and peer mentors" />
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-[var(--border)] flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--muted)]" />
              <Input placeholder="Search mentors..." className="pl-9" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[var(--fade)] text-[var(--muted)] uppercase">
                <tr>
                  <th className="px-6 py-3">Mentor Name</th>
                  <th className="px-6 py-3">Department</th>
                  <th className="px-6 py-3">Assigned Students</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3].map(i => (
                  <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--fade)]/50">
                    <td className="px-6 py-4 font-medium">ESHA KHANNA{i}</td>
                    <td className="px-6 py-4">Engineering</td>
                    <td className="px-6 py-4">12 / 15</td>
                    <td className="px-6 py-4"><Badge variant="success">Active</Badge></td>
                    <td className="px-6 py-4"><Button variant="outline" size="sm">Manage</Button></td>
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
