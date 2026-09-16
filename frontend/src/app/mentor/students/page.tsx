import React from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search } from 'lucide-react';

export default function StudentsPage() {
  const students = [
    { id: '1', name: "ABC", program: "Computer Science", academicStatus: "At Risk", attendance: "85%", risk: "High", lastInteraction: "2 days ago" },
    { id: '2', name: "ABC", program: "Engineering", academicStatus: "Good", attendance: "98%", risk: "Low", lastInteraction: "1 week ago" }
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="My Students" description="Manage and monitor your assigned students." />
      
      <div className="flex gap-4 mb-6">
         <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 text-[var(--muted)]" size={18} />
            <Input placeholder="Search students..." className="pl-10" />
         </div>
         <Button variant="outline">Filter</Button>
      </div>

      <Card className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--fade)] text-[var(--muted)]">
              <th className="py-3 px-4">Student</th>
              <th className="py-3 px-4">Program</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Attendance</th>
              <th className="py-3 px-4">Risk</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((row) => (
              <tr key={row.id} className="border-b border-[var(--border)] hover:bg-[var(--fade)] transition-colors">
                <td className="py-3 px-4"><Link href={`/mentor/students/${row.id}`} className="hover:underline font-medium">{row.name}</Link></td>
                <td className="py-3 px-4 text-sm text-[var(--muted)]">{row.program}</td>
                <td className="py-3 px-4">{row.academicStatus}</td>
                <td className="py-3 px-4">{row.attendance}</td>
                <td className="py-3 px-4"><Badge variant={row.risk === 'High' ? 'danger' : 'success'}>{row.risk}</Badge></td>
                <td className="py-3 px-4"><Link href={`/mentor/students/${row.id}`}><Button variant="outline" size="sm">View Profile</Button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
