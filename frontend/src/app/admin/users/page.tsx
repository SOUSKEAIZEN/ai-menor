"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
export default function UsersPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[var(--contrast)]">Users Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-[var(--elevated)] text-[var(--fade)]">
                <tr>
                  <th className="px-6 py-3 rounded-tl-lg">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3 rounded-tr-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="border-b border-[var(--border)]">
                    <td className="px-6 py-4 font-medium text-[var(--contrast)]">User {i}</td>
                    <td className="px-6 py-4 text-[var(--fade)]">user{i}@example.com</td>
                    <td className="px-6 py-4">Student</td>
                    <td className="px-6 py-4 text-green-500">Active</td>
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
