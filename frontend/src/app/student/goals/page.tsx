import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Target } from 'lucide-react';
import Link from 'next/link';

export default function GoalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Goals</h1>
          <p className="text-[var(--muted)]">Track your long-term academic objectives.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/student/goals/1">
          <Card className="hover:border-[var(--contrast)] transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Target className="w-5 h-5 text-[var(--contrast)]" /> Maintain 3.8 GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--muted)] mb-4">Current GPA is 3.8. Need to score at least A- in remaining finals.</p>
              <div className="w-full bg-[var(--fade)] h-2 rounded-full">
                <div className="bg-[var(--contrast)] h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-xs text-right mt-1 text-[var(--muted)]">80% on track</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
