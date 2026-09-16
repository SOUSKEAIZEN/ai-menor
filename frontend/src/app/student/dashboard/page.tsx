import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Brain, Target, Calendar, Clock } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-[var(--muted)] mt-1">Welcome back! Here's your academic overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--fade)] flex items-center justify-center text-[var(--contrast)]">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted)]">Average Grade</p>
                <p className="text-2xl font-bold">A-</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--fade)] flex items-center justify-center text-[var(--contrast)]">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted)]">Attendance</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--fade)] flex items-center justify-center text-[var(--contrast)]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted)]">Upcoming Tasks</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--fade)] flex items-center justify-center text-[var(--contrast)]">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted)]">Study Streak</p>
                <p className="text-2xl font-bold">12 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Academic Progress Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-[var(--border)] rounded-lg text-[var(--muted)]">
              [Chart Component: Recharts line chart showing grades over time]
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-[var(--fade)] rounded-lg border border-[var(--border)]">
              <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                <Brain className="w-4 h-4 text-[var(--contrast)]" />
                Focus on Calculus
              </h4>
              <p className="text-xs text-[var(--muted)]">Your recent quiz scores indicate you might need extra practice with integration.</p>
            </div>
            <div className="p-4 bg-[var(--fade)] rounded-lg border border-[var(--border)]">
              <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                <Brain className="w-4 h-4 text-[var(--contrast)]" />
                Study Break Suggestion
              </h4>
              <p className="text-xs text-[var(--muted)]">You've been studying for 2 hours straight. Consider a 15-minute break.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
