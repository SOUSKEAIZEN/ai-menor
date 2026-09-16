import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { PageHeader } from '@/components/ui/PageHeader';
import { Users, GraduationCap, BookOpen, Server, Activity, FileText } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="System Overview" description="High-level overview of AI mentor platform" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-[var(--fade)] rounded-lg text-blue-500"><GraduationCap className="w-6 h-6" /></div>
            <div>
              <p className="text-sm text-[var(--muted)]">Total Students</p>
              <h3 className="text-2xl font-bold">1,248</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-[var(--fade)] rounded-lg text-green-500"><Users className="w-6 h-6" /></div>
            <div>
              <p className="text-sm text-[var(--muted)]">Active Mentors</p>
              <h3 className="text-2xl font-bold">42</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-[var(--fade)] rounded-lg text-purple-500"><BookOpen className="w-6 h-6" /></div>
            <div>
              <p className="text-sm text-[var(--muted)]">Knowledge Docs</p>
              <h3 className="text-2xl font-bold">8,391</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-[var(--fade)] rounded-lg text-orange-500"><Server className="w-6 h-6" /></div>
            <div>
              <p className="text-sm text-[var(--muted)]">System Status</p>
              <h3 className="text-2xl font-bold text-green-500">Healthy</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Usage Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border border-dashed border-[var(--border)] rounded-md text-[var(--muted)]">
              AI Usage Chart Placeholder
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Audit Logs</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
               {[1,2,3].map(i => (
                 <div key={i} className="flex justify-between items-center text-sm p-3 border border-[var(--border)] rounded-md">
                   <div>
                     <p className="font-medium">User config updated</p>
                     <p className="text-[var(--muted)]">admin@aevora.com</p>
                   </div>
                   <span className="text-[var(--muted)]">2 mins ago</span>
                 </div>
               ))}
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
