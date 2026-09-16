"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, GraduationCap, BrainCircuit, Activity } from 'lucide-react';

const data = [
  { name: 'Mon', users: 400, aiCalls: 240 },
  { name: 'Tue', users: 300, aiCalls: 139 },
  { name: 'Wed', users: 200, aiCalls: 980 },
  { name: 'Thu', users: 278, aiCalls: 390 },
  { name: 'Fri', users: 189, aiCalls: 480 },
  { name: 'Sat', users: 239, aiCalls: 380 },
  { name: 'Sun', users: 349, aiCalls: 430 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-[var(--blend)] text-[var(--contrast)]">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-[var(--fade)]">Total Users</p>
              <h3 className="text-2xl font-bold text-[var(--contrast)]">12,483</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-[var(--blend)] text-[var(--contrast)]">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="text-sm text-[var(--fade)]">Active Students</p>
              <h3 className="text-2xl font-bold text-[var(--contrast)]">8,234</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-[var(--blend)] text-[var(--contrast)]">
              <BrainCircuit size={24} />
            </div>
            <div>
              <p className="text-sm text-[var(--fade)]">AI Queries (Today)</p>
              <h3 className="text-2xl font-bold text-[var(--contrast)]">45.2k</h3>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-[var(--blend)] text-[var(--contrast)]">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm text-[var(--fade)]">System Health</p>
              <h3 className="text-2xl font-bold text-[var(--contrast)]">99.9%</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" stroke="var(--fade)" />
                <YAxis stroke="var(--fade)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--main)' }}
                  itemStyle={{ color: 'var(--contrast)' }}
                />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="aiCalls" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Audit Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0">
                  <div>
                    <p className="text-sm font-medium text-[var(--contrast)]">User login detected</p>
                    <p className="text-xs text-[var(--fade)]">admin@aevora.com via IP 192.168.1.1</p>
                  </div>
                  <span className="text-xs text-[var(--fade)]">2m ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
