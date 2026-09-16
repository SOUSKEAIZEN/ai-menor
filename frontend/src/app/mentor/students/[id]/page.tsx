import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Tabs } from '@/components/ui/Tabs';
import { Card } from '@/components/ui/Card';

export default function StudentDetail({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
         <div>
            <h1 className="text-3xl font-bold">ABC (Demo {params.id})</h1>
            <p className="text-[var(--muted)]">Computer Science • Semester 4</p>
         </div>
      </div>
      
      <Tabs tabs={[
        { id: 'overview', label: 'Overview', content: <div className="p-4"><Card title="Summary" className="p-4">Student is struggling with Data Structures.</Card></div> },
        { id: 'academic', label: 'Academic', content: <div className="p-4"><Card title="Grades" className="p-4">Average: B-</Card></div> },
        { id: 'attendance', label: 'Attendance', content: <div className="p-4"><Card title="Record" className="p-4">85% present.</Card></div> },
        { id: 'insights', label: 'AI Insights', content: <div className="p-4"><Card title="Risk Prediction" className="p-4">High risk of dropping out due to recent missed assignments.</Card></div> }
      ]} />
    </div>
  );
}
