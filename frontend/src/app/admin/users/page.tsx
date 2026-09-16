import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Search, Plus } from 'lucide-react';

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <PageHeader title="Users Management" description="Manage platform administrators and roles" />
        <Button><Plus className="w-4 h-4 mr-2" /> Add User</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-[var(--border)] flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--muted)]" />
              <Input placeholder="Search users..." className="pl-9" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[var(--fade)] text-[var(--muted)] uppercase">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Department</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4,5].map(i => (
                  <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--fade)]/50">
                    <td className="px-6 py-4">
                      <div className="font-medium">System Admin</div>
                      <div className="text-[var(--muted)]">admin{i}@aevora.edu</div>
                    </td>
                    <td className="px-6 py-4">Administrator</td>
                    <td className="px-6 py-4"><Badge variant="success">Active</Badge></td>
                    <td className="px-6 py-4">IT Services</td>
                    <td className="px-6 py-4"><Button variant="outline" size="sm">Edit</Button></td>
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
