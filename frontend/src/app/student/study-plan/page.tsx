import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Map } from 'lucide-react';

export default function StudyPlanPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Study Plan</h1>
      <p className="text-[var(--muted)]">Your personalized AI-generated weekly schedule.</p>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Map className="w-5 h-5 text-[var(--contrast)]" /> This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-[var(--contrast)] bg-[var(--fade)] rounded-r-lg">
              <h3 className="font-bold">Monday</h3>
              <p className="text-sm text-[var(--muted)]">2 Hours: Calculus Assignment</p>
            </div>
            <div className="p-4 border-l-4 border-purple-500 bg-[var(--fade)] rounded-r-lg">
              <h3 className="font-bold">Tuesday</h3>
              <p className="text-sm text-[var(--muted)]">1.5 Hours: Physics Review</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
