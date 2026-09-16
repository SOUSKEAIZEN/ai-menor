"use client";
import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const perfData = [
  { name: 'Week 1', avg_gpa: 3.1, attendance: 95 },
  { name: 'Week 2', avg_gpa: 3.15, attendance: 92 },
  { name: 'Week 3', avg_gpa: 3.12, attendance: 89 },
  { name: 'Week 4', avg_gpa: 3.2, attendance: 85 },
  { name: 'Week 5', avg_gpa: 3.25, attendance: 88 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Institutional Analytics" description="Comprehensive insights into academic performance and engagement." />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total Students', value: '12,431' },
          { title: 'Avg Attendance', value: '89.4%' },
          { title: 'Institution GPA', value: '3.18' },
          { title: 'Active Interventions', value: '412' },
        ].map((card, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <p className="text-sm font-medium text-[var(--muted)] mb-1">{card.title}</p>
              <h3 className="text-2xl font-bold text-[var(--contrast)]">{card.value}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Academic Trends (Avg GPA)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={perfData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="name" stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis domain={[2.5, 4.0]} stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }} />
                  <Line type="monotone" dataKey="avg_gpa" stroke="var(--main)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={perfData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="name" stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis domain={[0, 100]} stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }} />
                  <Bar dataKey="attendance" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
