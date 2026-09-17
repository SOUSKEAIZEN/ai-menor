"use client";

import React from 'react';
import { TrendingUp, Award, Book, Clock } from 'lucide-react';
import { useDemoStore } from '@/store/demo-state';

export default function Progress() {
  const { user, subjects } = useDemoStore();

  const sortedSubjects = [...subjects].sort((a, b) => b.progress - a.progress);
  const strongest = sortedSubjects[0];
  const weakest = sortedSubjects[sortedSubjects.length - 1];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-[var(--main)]">Your Progress</h1>
        <p className="text-[var(--muted)]">See how your learning is changing over time.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[ 
          { title: 'Current GPA', value: user.gpa, icon: Award, trend: '+0.1 from last sem' },
          { title: 'Overall Attendance', value: `${user.overallAttendance}%`, icon: Clock, trend: 'Consistent' },
          { title: 'Subjects Passed', value: user.subjectsPassed.toString(), icon: Book, trend: 'Out of 40' },
          { title: 'Goals Achieved', value: user.goalsAchieved.toString(), icon: TrendingUp, trend: 'Keep it up!' }
        ].map(stat => (
          <div key={stat.title} className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[var(--muted)]">{stat.title}</h3>
              <div className="w-10 h-10 rounded-full bg-[var(--fade)] flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-[var(--main)]" />
              </div>
            </div>
            <p className="text-3xl font-semibold text-[var(--contrast)]">{stat.value}</p>
            <p className="text-xs text-[var(--muted)] mt-2">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Academic Performance</h2>
            <div className="space-y-6">
              {subjects.map(sub => (
                <div key={sub.id}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-[var(--contrast)]">{sub.name}</span>
                    <span className="text-[var(--muted)]">{sub.progress}%</span>
                  </div>
                  <div className="h-3 w-full bg-[var(--fade)] rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${sub.status === 'Strong' ? 'bg-green-500' : sub.status === 'Average' ? 'bg-blue-500' : 'bg-orange-500'}`} 
                      style={{ width: `${sub.progress}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Strongest & Weakest Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {strongest && (
                <div className="p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)]">
                  <h4 className="text-xs font-semibold text-green-500 uppercase mb-1">Strongest</h4>
                  <p className="font-bold text-lg text-[var(--contrast)]">{strongest.name}</p>
                  <p className="text-sm text-[var(--muted)]">{strongest.progress}% Progress</p>
                </div>
              )}
              {weakest && (
                <div className="p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)]">
                  <h4 className="text-xs font-semibold text-orange-500 uppercase mb-1">Needs Attention</h4>
                  <p className="font-bold text-lg text-[var(--contrast)]">{weakest.name}</p>
                  <p className="text-sm text-[var(--muted)]">{weakest.progress}% Progress</p>
                </div>
              )}
            </div>
          </section>
        </div>
        
        <div className="space-y-8">
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Growth Summary</h2>
            <div className="prose prose-sm text-[var(--muted)]">
              <p>You have shown consistent improvement in your core computer science subjects. Your database management scores have increased significantly since the last assessment.</p>
              <div className="mt-6 p-4 bg-[var(--fade)] rounded-xl border border-[var(--border)]">
                <h4 className="font-medium text-[var(--contrast)] mb-2">Key Insight</h4>
                <p className="text-xs">Your study consistency correlates strongly with your recent grade improvements. Focus a bit more on <span className="font-bold text-[var(--main)]">{weakest?.name}</span> to boost your overall GPA.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
