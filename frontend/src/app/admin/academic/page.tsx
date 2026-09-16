"use client";
import React, { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { Plus, MoreHorizontal } from 'lucide-react';

const departments = [
  { id: 1, name: 'Computer Science', code: 'CS', programs: 4, head: 'Dr. Alan Turing' },
  { id: 2, name: 'Mathematics', code: 'MATH', programs: 3, head: 'Dr. Ada Lovelace' },
  { id: 3, name: 'Physics', code: 'PHYS', programs: 2, head: 'Prof. John von Neumann' },
];

export default function AcademicPage() {
  const [activeTab, setActiveTab] = useState('departments');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader title="Academic Structure" description="Configure institutions, departments, programs, and curriculum." />
        <Button><Plus className="w-4 h-4 mr-2" /> Add New</Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start border-b border-[var(--border)] rounded-none bg-transparent p-0 space-x-6">
          <TabsTrigger value="institutions" className="pb-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[var(--main)] data-[state=active]:shadow-none bg-transparent">Institutions</TabsTrigger>
          <TabsTrigger value="departments" className="pb-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[var(--main)] data-[state=active]:shadow-none bg-transparent">Departments</TabsTrigger>
          <TabsTrigger value="programs" className="pb-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[var(--main)] data-[state=active]:shadow-none bg-transparent">Programs</TabsTrigger>
          <TabsTrigger value="semesters" className="pb-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[var(--main)] data-[state=active]:shadow-none bg-transparent">Semesters</TabsTrigger>
          <TabsTrigger value="subjects" className="pb-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[var(--main)] data-[state=active]:shadow-none bg-transparent">Subjects</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="departments">
            <Card>
              <CardContent className="p-0">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-[var(--muted)] uppercase bg-[var(--elevated)] border-b border-[var(--border)]">
                    <tr>
                      <th className="px-6 py-4 font-medium">Department Name</th>
                      <th className="px-6 py-4 font-medium">Code</th>
                      <th className="px-6 py-4 font-medium">Programs</th>
                      <th className="px-6 py-4 font-medium">Head of Department</th>
                      <th className="px-6 py-4 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    {departments.map((dept) => (
                      <tr key={dept.id} className="hover:bg-[var(--elevated)] transition-colors">
                        <td className="px-6 py-4 font-medium text-[var(--contrast)]">{dept.name}</td>
                        <td className="px-6 py-4 text-[var(--muted)] font-mono">{dept.code}</td>
                        <td className="px-6 py-4 text-[var(--contrast)]">{dept.programs}</td>
                        <td className="px-6 py-4 text-[var(--contrast)]">{dept.head}</td>
                        <td className="px-6 py-4 text-right">
                          <Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="institutions">
            <div className="text-center py-12 text-[var(--muted)]">Institutions content...</div>
          </TabsContent>
          <TabsContent value="programs">
            <div className="text-center py-12 text-[var(--muted)]">Programs content...</div>
          </TabsContent>
          <TabsContent value="semesters">
            <div className="text-center py-12 text-[var(--muted)]">Semesters content...</div>
          </TabsContent>
          <TabsContent value="subjects">
            <div className="text-center py-12 text-[var(--muted)]">Subjects content...</div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
