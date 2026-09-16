'use client';
import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AnalyticsPage() {
  const data = [
    { name: 'Week 1', interventions: 4 },
    { name: 'Week 2', interventions: 7 },
    { name: 'Week 3', interventions: 5 },
    { name: 'Week 4', interventions: 12 },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Mentor Analytics" description="Insights into student performance and your workload." />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Total Students" className="p-4"><div className="text-3xl font-bold mt-2">124</div></Card>
        <Card title="Active Interventions" className="p-4"><div className="text-3xl font-bold mt-2">15</div></Card>
        <Card title="Follow-ups" className="p-4"><div className="text-3xl font-bold mt-2">8</div></Card>
        <Card title="Engagement Score" className="p-4"><div className="text-3xl font-bold mt-2 text-green-500">92%</div></Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Card title="Intervention Trends" className="p-4 h-80 flex flex-col">
            <div className="flex-1 mt-4">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                     <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                     <XAxis dataKey="name" stroke="var(--muted)" fontSize={12} />
                     <YAxis stroke="var(--muted)" fontSize={12} />
                     <Tooltip cursor={{fill: 'var(--fade)'}} contentStyle={{backgroundColor: 'var(--surface)', borderColor: 'var(--border)'}} />
                     <Bar dataKey="interventions" fill="var(--main)" radius={[4, 4, 0, 0]} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </Card>
         <Card title="Risk Distribution" className="p-4 h-80 flex items-center justify-center">
            <p className="text-[var(--muted)] text-sm">More charts coming soon...</p>
         </Card>
      </div>
    </div>
  );
}
