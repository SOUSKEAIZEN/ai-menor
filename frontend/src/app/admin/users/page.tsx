"use client";
import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Search, Filter, Plus, MoreHorizontal } from 'lucide-react';

const users = [
  { id: 1, name: 'Alice Smith', email: 'alice@university.edu', role: 'Admin', status: 'Active', dept: 'IT', created: '2025-10-01' },
  { id: 2, name: 'Bob Johnson', email: 'bob.j@university.edu', role: 'Mentor', status: 'Active', dept: 'Computer Science', created: '2025-11-12' },
  { id: 3, name: 'Charlie Davis', email: 'cdavis@student.edu', role: 'Student', status: 'Inactive', dept: 'Engineering', created: '2026-01-05' },
  { id: 4, name: 'Diana Prince', email: 'dprince@university.edu', role: 'Mentor', status: 'Active', dept: 'Mathematics', created: '2026-02-20' },
  { id: 5, name: 'Evan Wright', email: 'ewright@student.edu', role: 'Student', status: 'Active', dept: 'Physics', created: '2026-03-15' },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader title="User Management" description="Manage system users, roles, and access permissions." />
        <Button className="flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-[var(--border)] flex flex-wrap gap-4 items-center justify-between bg-[var(--surface)]">
            <div className="flex items-center space-x-2 w-full max-w-sm">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                <Input placeholder="Search users..." className="pl-9" />
              </div>
              <Button variant="outline" size="icon"><Filter className="w-4 h-4" /></Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-[var(--muted)] uppercase bg-[var(--elevated)] border-b border-[var(--border)]">
                <tr>
                  <th className="px-6 py-4 font-medium">Name & Email</th>
                  <th className="px-6 py-4 font-medium">Role</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Department</th>
                  <th className="px-6 py-4 font-medium">Created</th>
                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-[var(--elevated)] transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-[var(--contrast)]">{user.name}</div>
                      <div className="text-[var(--muted)] text-xs mt-0.5">{user.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline">{user.role}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={user.status === 'Active' ? 'success' : 'secondary'}>{user.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-[var(--contrast)]">{user.dept}</td>
                    <td className="px-6 py-4 text-[var(--muted)]">{user.created}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="icon" className="text-[var(--muted)]">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-[var(--border)] flex justify-between items-center text-sm text-[var(--muted)]">
            <span>Showing 1 to 5 of 12,431 users</span>
            <div className="flex space-x-1">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
