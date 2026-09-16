"use client";
import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Search, Plus, MoreHorizontal } from 'lucide-react';

const mentors = [
  { id: 201, name: 'Dr. Alan Turing', dept: 'Computer Science', students: 45, status: 'Active', availability: 'High' },
  { id: 202, name: 'Dr. Ada Lovelace', dept: 'Mathematics', students: 38, status: 'Active', availability: 'Medium' },
  { id: 203, name: 'Prof. John von Neumann', dept: 'Physics', students: 50, status: 'Overloaded', availability: 'Low' },
  { id: 204, name: 'Dr. Grace Hopper', dept: 'Computer Science', students: 12, status: 'Onboarding', availability: 'High' },
];

export default function MentorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader title="Mentors & Faculty" description="Manage academic mentors and their student assignments." />
        <Button className="flex items-center">
          <Plus className="w-4 h-4 mr-2" /> Add Mentor
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-[var(--border)] flex gap-4 bg-[var(--surface)]">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
              <Input placeholder="Search mentors..." className="pl-9" />
            </div>
          </div>
          
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-[var(--muted)] uppercase bg-[var(--elevated)] border-b border-[var(--border)]">
              <tr>
                <th className="px-6 py-4 font-medium">Mentor</th>
                <th className="px-6 py-4 font-medium">Department</th>
                <th className="px-6 py-4 font-medium">Assigned Students</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Availability</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {mentors.map((mentor) => (
                <tr key={mentor.id} className="hover:bg-[var(--elevated)] transition-colors">
                  <td className="px-6 py-4 font-medium text-[var(--contrast)]">{mentor.name}</td>
                  <td className="px-6 py-4 text-[var(--contrast)]">{mentor.dept}</td>
                  <td className="px-6 py-4 text-[var(--contrast)]">{mentor.students}</td>
                  <td className="px-6 py-4">
                    <Badge variant={mentor.status === 'Active' ? 'success' : mentor.status === 'Overloaded' ? 'danger' : 'secondary'}>
                      {mentor.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      mentor.availability === 'High' ? 'bg-green-500/10 text-green-500' :
                      mentor.availability === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {mentor.availability}
                    </span>
                  </td>
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
