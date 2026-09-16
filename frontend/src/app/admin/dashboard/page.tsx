"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { PageHeader } from '@/components/ui/PageHeader';
import { Users, GraduationCap, FileText, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', usage: 4000, queries: 2400 },
  { name: 'Tue', usage: 3000, queries: 1398 },
  { name: 'Wed', usage: 2000, queries: 9800 },
  { name: 'Thu', usage: 2780, queries: 3908 },
  { name: 'Fri', usage: 1890, queries: 4800 },
  { name: 'Sat', usage: 2390, queries: 3800 },
  { name: 'Sun', usage: 3490, queries: 4300 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="System Overview" description="Overview of platform activity, AI usage, and system health." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Students', value: '12,431', icon: Users, trend: '+4.5%', up: true },
          { label: 'Active Mentors', value: '432', icon: GraduationCap, trend: '+2.1%', up: true },
          { label: 'Knowledge Base Docs', value: '8,941', icon: FileText, trend: '+12%', up: true },
          { label: 'System Health', value: '99.9%', icon: Activity, trend: '-0.1%', up: false },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-[var(--muted)] mb-1">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-[var(--contrast)]">{stat.value}</h3>
                  </div>
                  <div className="p-2 bg-[var(--elevated)] rounded-md">
                    <Icon className="w-5 h-5 text-[var(--main)]" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {stat.up ? (
                    <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={stat.up ? 'text-green-500' : 'text-red-500'}>{stat.trend}</span>
                  <span className="text-[var(--muted)] ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Usage Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="name" stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--contrast)' }}
                  />
                  <Line type="monotone" dataKey="usage" stroke="var(--main)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                  <Line type="monotone" dataKey="queries" stroke="#8b5cf6" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Audit Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'User created', user: 'admin@aevora.com', time: '2 mins ago', target: 'jdoe@student.edu' },
                { action: 'Document uploaded', user: 'cs_dept_head', time: '15 mins ago', target: 'Syllabus_CS101.pdf' },
                { action: 'Prompt updated', user: 'ai_engineer', time: '1 hour ago', target: 'v2.4_system_prompt' },
                { action: 'API key rotated', user: 'sysadmin', time: '3 hours ago', target: 'OpenAI_Prod_Key' },
                { action: 'Role modified', user: 'admin@aevora.com', time: '5 hours ago', target: 'm.smith@faculty.edu' },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[var(--elevated)] border border-[var(--border)]">
                  <div>
                    <p className="text-sm font-medium text-[var(--contrast)]">{log.action}</p>
                    <div className="text-xs text-[var(--muted)] mt-1 flex space-x-2">
                      <span>{log.user}</span>
                      <span>•</span>
                      <span>{log.target}</span>
                    </div>
                  </div>
                  <span className="text-xs text-[var(--muted)]">{log.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
