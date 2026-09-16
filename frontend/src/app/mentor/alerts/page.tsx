import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function AlertsPage() {
  const alerts = [
    { id: 1, student: "ABC", category: "Academic", reason: "Failed Midterm", severity: "High", time: "2 hours ago" },
    { id: 2, student: "ABC", category: "Attendance", reason: "3 consecutive absences", severity: "Medium", time: "1 day ago" }
  ];

  const content = (
    <div className="space-y-4 p-4">
      {alerts.map(a => (
        <Card key={a.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 border-red-500">
           <div>
              <div className="flex items-center gap-2 mb-1">
                 <span className="font-bold">{a.student}</span>
                 <Badge variant="danger">{a.severity}</Badge>
                 <span className="text-xs text-[var(--muted)]">{a.time}</span>
              </div>
              <p className="text-sm text-[var(--muted)]"><span className="font-medium text-[var(--main)]">{a.category}:</span> {a.reason}</p>
           </div>
           <div className="flex gap-2">
              <Button variant="outline" size="sm">View Student</Button>
              <Button size="sm">Take Action</Button>
           </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <PageHeader title="Student Alerts" description="Prioritized system alerts for your students." />
      <Tabs tabs={[
        { id: 'all', label: 'All Alerts', content },
        { id: 'academic', label: 'Academic', content: <div className="p-4">Academic Alerts...</div> },
        { id: 'attendance', label: 'Attendance', content: <div className="p-4">Attendance Alerts...</div> }
      ]} />
    </div>
  );
}
