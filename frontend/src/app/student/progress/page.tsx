import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { TrendingUp, Award, BarChart2 } from 'lucide-react';

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Progress</h1>
      <p className="text-[var(--muted)]">Track your academic journey and performance trends.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Overall GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">3.8</div>
            <p className="text-sm text-green-500 mt-2">+0.2 from last semester</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Award className="w-5 h-5" /> Credits Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">45 / 120</div>
            <div className="w-full bg-[var(--fade)] h-2 rounded-full mt-4">
              <div className="bg-[var(--contrast)] h-2 rounded-full" style={{ width: '37.5%' }}></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart2 className="w-5 h-5" /> Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">Top 15%</div>
            <p className="text-sm text-[var(--muted)] mt-2">In your cohort</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance by Subject</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center border-2 border-dashed border-[var(--border)] rounded-lg text-[var(--muted)]">
            [Chart Component: Recharts bar chart showing grades by subject]
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
