import React from 'react';
import { Card } from '@/components/ui/Card';
import { PageHeader } from '@/components/ui/PageHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function Dashboard() {
  const needsAttention = [
    { id: 1, student: "ABC", academic: "At Risk", attendance: "85%", risk: "High", lastInteraction: "2 days ago", action: "Schedule Meeting" },
    { id: 2, student: "ABC", academic: "Warning", attendance: "90%", risk: "Medium", lastInteraction: "1 week ago", action: "Send Message" }
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Mentor Overview" description="Welcome back. Here is what's happening with your students today." />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Total Students" className="p-4"><div className="text-3xl font-bold mt-2">124</div></Card>
        <Card title="Needs Attention" className="p-4"><div className="text-3xl font-bold mt-2 text-red-500">12</div></Card>
        <Card title="Upcoming Meetings" className="p-4"><div className="text-3xl font-bold mt-2">5</div></Card>
        <Card title="Pending Follow-ups" className="p-4"><div className="text-3xl font-bold mt-2">8</div></Card>
      </div>

      <Card title="Students Needing Attention" className="p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[var(--border)] text-[var(--muted)]">
              <th className="py-3 px-4">Student</th>
              <th className="py-3 px-4">Academic</th>
              <th className="py-3 px-4">Attendance</th>
              <th className="py-3 px-4">Risk</th>
              <th className="py-3 px-4">Last Interaction</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {needsAttention.map((row) => (
              <tr key={row.id} className="border-b border-[var(--border)] hover:bg-[var(--fade)] transition-colors">
                <td className="py-3 px-4">{row.student}</td>
                <td className="py-3 px-4">{row.academic}</td>
                <td className="py-3 px-4">{row.attendance}</td>
                <td className="py-3 px-4"><Badge variant={row.risk === 'High' ? 'danger' : 'warning'}>{row.risk}</Badge></td>
                <td className="py-3 px-4">{row.lastInteraction}</td>
                <td className="py-3 px-4"><Button variant="outline" size="sm">{row.action}</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
