"use client";
import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Search, Filter, Download, MoreHorizontal } from 'lucide-react';

const students = [
  { id: 101, name: 'Emma Wilson', id_number: 'STU-9921', program: 'B.S. Computer Science', status: 'Enrolled', gpa: '3.8' },
  { id: 102, name: 'Liam Garcia', id_number: 'STU-9922', program: 'B.A. Psychology', status: 'At Risk', gpa: '2.4' },
  { id: 103, name: 'Olivia Martinez', id_number: 'STU-9923', program: 'B.S. Engineering', status: 'Enrolled', gpa: '3.9' },
  { id: 104, name: 'Noah Robinson', id_number: 'STU-9924', program: 'B.S. Mathematics', status: 'On Leave', gpa: '3.1' },
  { id: 105, name: 'Sophia Lee', id_number: 'STU-9925', program: 'B.S. Computer Science', status: 'Enrolled', gpa: '4.0' },
];

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader title="Student Directory" description="View and manage student records and academic status." />
        <div className="flex gap-2">
          <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export</Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-[var(--border)] flex gap-4 bg-[var(--surface)]">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
              <Input placeholder="Search by name or ID..." className="pl-9" />
            </div>
            <select className="bg-[var(--elevated)] border border-[var(--border)] text-[var(--contrast)] text-sm rounded-md px-3 py-2 outline-none">
              <option>All Programs</option>
              <option>Computer Science</option>
              <option>Engineering</option>
            </select>
            <select className="bg-[var(--elevated)] border border-[var(--border)] text-[var(--contrast)] text-sm rounded-md px-3 py-2 outline-none">
              <option>All Statuses</option>
              <option>Enrolled</option>
              <option>At Risk</option>
            </select>
            <Button variant="outline" size="icon"><Filter className="w-4 h-4" /></Button>
          </div>
          
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-[var(--muted)] uppercase bg-[var(--elevated)] border-b border-[var(--border)]">
              <tr>
                <th className="px-6 py-4 font-medium">Student</th>
                <th className="px-6 py-4 font-medium">Program</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">GPA</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-[var(--elevated)] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-[var(--contrast)]">{student.name}</div>
                    <div className="text-[var(--muted)] text-xs mt-0.5">{student.id_number}</div>
                  </td>
                  <td className="px-6 py-4 text-[var(--contrast)]">{student.program}</td>
                  <td className="px-6 py-4">
                    <Badge variant={student.status === 'Enrolled' ? 'success' : student.status === 'At Risk' ? 'destructive' : 'secondary'}>
                      {student.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 font-mono text-[var(--contrast)]">{student.gpa}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
