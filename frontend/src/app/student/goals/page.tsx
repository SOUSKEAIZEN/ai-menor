import React from 'react';
import { Target, Plus, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Goals() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-[var(--main)]">My Goals</h1>
          <p className="text-[var(--muted)] mt-2">Set and track your long-term academic objectives.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--main)] text-white rounded-xl text-sm font-medium hover:opacity-90">
          <Plus className="w-4 h-4" /> Create Goal
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { id: 1, title: 'Achieve 4.0 GPA this Semester', desc: 'Maintain top grades in all core subjects to qualify for the Dean\'s List.', prog: 65, dl: 'Dec 15', ms: 3 },
          { id: 2, title: 'Master React & Next.js', desc: 'Build 3 full-stack projects using modern web technologies.', prog: 40, dl: 'Nov 30', ms: 2 },
          { id: 3, title: '100% Attendance in OS', desc: 'Do not miss a single Operating Systems class this month.', prog: 90, dl: 'Oct 31', ms: 4 }
        ].map(goal => (
          <Link key={goal.id} href={`/student/goals/${goal.id}`} className="block group">
            <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] hover:border-[var(--main)] hover:shadow-md transition-all h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[var(--main)]/10 text-[var(--main)] flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--contrast)] mb-2 group-hover:text-[var(--main)] transition-colors">{goal.title}</h3>
              <p className="text-sm text-[var(--muted)] mb-6 line-clamp-2">{goal.desc}</p>
              
              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                  <span>{goal.ms} Milestones</span>
                  <span>Due {goal.dl}</span>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1.5"><span className="text-[var(--muted)]">Progress</span><span className="font-medium text-[var(--contrast)]">{goal.prog}%</span></div>
                  <div className="h-2 w-full bg-[var(--fade)] rounded-full overflow-hidden"><div className="h-full bg-[var(--main)]" style={{ width: `${goal.prog}%` }} /></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
