import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Target } from 'lucide-react';
import Link from 'next/link';

export default function GoalDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/student/goals">
          <Button variant="outline" size="icon"><ArrowLeft className="w-4 h-4" /></Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3"><Target className="text-[var(--contrast)]" /> Maintain 3.8 GPA</h1>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Milestones</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 p-4 border border-[var(--border)] rounded-lg bg-[var(--fade)] opacity-50">
            <div className="w-4 h-4 rounded-full bg-[var(--contrast)]"></div>
            <span className="line-through">Score A in Midterms</span>
          </div>
          <div className="flex items-center gap-4 p-4 border border-[var(--contrast)] rounded-lg">
            <div className="w-4 h-4 rounded-full border-2 border-[var(--contrast)]"></div>
            <span>Complete Final Project for CS 201 with A grade</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
