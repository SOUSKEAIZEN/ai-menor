"use client";
import React, { use } from 'react';
import { useDemoStore } from '@/store/demo-state';
import Link from 'next/link';
import { Target, CheckCircle2, Circle } from 'lucide-react';

export default function GoalDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const goalId = parseInt(unwrappedParams.id, 10);
  const goals = useDemoStore((state) => state.goals);
  const toggleGoalMilestone = useDemoStore((state) => state.toggleGoalMilestone);
  
  const goal = goals.find(g => g.id === goalId);

  if (!goal) {
    return (
      <div className="space-y-6 max-w-5xl mx-auto">
        <header>
          <h1 className="text-2xl font-bold text-[var(--main)]">Goal Not Found</h1>
          <Link href="/student/goals" className="text-[var(--main)] underline mt-4 inline-block">Back to Goals</Link>
        </header>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <header className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <Link href="/student/goals" className="text-[var(--muted)] hover:text-[var(--main)] text-sm mb-4 inline-block">&larr; Back to Goals</Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[var(--main)]/10 text-[var(--main)] flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--main)]">{goal.title}</h1>
              <p className="text-[var(--muted)] mt-1">{goal.skill}</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className={`px-4 py-2 rounded-xl text-sm font-medium inline-block ${goal.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
            {goal.status}
          </span>
          <p className="text-[var(--muted)] text-sm mt-2">Deadline: {goal.deadline}</p>
        </div>
      </header>

      <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
        <h3 className="text-xl font-bold text-[var(--contrast)] mb-2">Description</h3>
        <p className="text-[var(--muted)]">{goal.description}</p>
        
        <div className="mt-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-semibold text-[var(--contrast)]">Overall Progress</span>
            <span className="font-bold text-[var(--main)]">{goal.progress}%</span>
          </div>
          <div className="h-4 w-full bg-[var(--fade)] rounded-full overflow-hidden">
            <div className="h-full bg-[var(--main)] transition-all duration-500" style={{ width: `${goal.progress}%` }} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[var(--contrast)]">Milestones</h3>
        <div className="grid grid-cols-1 gap-3">
          {goal.milestones.map((milestone) => (
            <div 
              key={milestone.id} 
              className={`p-4 border rounded-xl flex items-center justify-between transition-colors ${milestone.completed ? 'border-[var(--main)] bg-[var(--main)]/5' : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--main)]/50'}`}
            >
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => toggleGoalMilestone(goal.id, milestone.id)}
                  className="flex-shrink-0 focus:outline-none"
                >
                  {milestone.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-[var(--main)]" />
                  ) : (
                    <Circle className="w-6 h-6 text-[var(--muted)] hover:text-[var(--main)] transition-colors" />
                  )}
                </button>
                <span className={`font-medium ${milestone.completed ? 'text-[var(--contrast)] line-through opacity-70' : 'text-[var(--contrast)]'}`}>
                  {milestone.title}
                </span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-md ${milestone.completed ? 'bg-[var(--main)]/10 text-[var(--main)]' : 'bg-[var(--fade)] text-[var(--muted)]'}`}>
                {milestone.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
