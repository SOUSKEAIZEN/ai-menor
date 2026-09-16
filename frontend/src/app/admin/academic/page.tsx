import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { Card, CardContent } from '@/components/ui/Card';

export default function AcademicPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Academic Structure" description="Configure institutions, departments, and programs" />
      
      <Tabs defaultValue="departments" className="w-full">
        <TabsList>
          <TabsTrigger value="institutions">Institutions</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="semesters">Semesters</TabsTrigger>
        </TabsList>
        <TabsContent value="departments" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Departments</h3>
                <button className="px-4 py-2 bg-[var(--main)] text-[var(--background)] rounded-md text-sm font-medium">Add Department</button>
              </div>
              <div className="space-y-4">
                {['Computer Science', 'Electrical Engineering', 'Mathematics', 'Physics'].map(dept => (
                  <div key={dept} className="p-4 border border-[var(--border)] rounded-md flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{dept}</h4>
                      <p className="text-sm text-[var(--muted)]">School of Engineering & Sciences</p>
                    </div>
                    <button className="text-sm text-blue-500 hover:underline">Edit</button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
