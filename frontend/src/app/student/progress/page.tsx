import React from 'react';
import { TrendingUp, Award, Book, Clock } from 'lucide-react';

export default function Progress() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-[var(--main)]">Your Progress</h1>
        <p className="text-[var(--muted)]">See how your learning is changing over time.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[ 
          { title: 'Current GPA', value: '3.8', icon: Award, trend: '+0.1 from last sem' },
          { title: 'Overall Attendance', value: '92%', icon: Clock, trend: 'Consistent' },
          { title: 'Subjects Passed', value: '12', icon: Book, trend: 'Out of 40' },
          { title: 'Goals Achieved', value: '8', icon: TrendingUp, trend: '2 this month' }
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
            <div className="h-80 flex flex-col items-center justify-center border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--fade)] text-[var(--muted)]">
              <TrendingUp className="w-8 h-8 mb-2 opacity-50" />
              <p>Chart Data Unavailable</p>
            </div>
          </section>
          
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Assessment History</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)]">
                  <div>
                    <h4 className="font-medium text-[var(--contrast)]">Midterm Exam - CS30{i}</h4>
                    <p className="text-sm text-[var(--muted)]">Oct 15, 2023</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[var(--main)]">8{i}/100</p>
                    <p className="text-xs text-green-500">Above Average</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <div className="space-y-8">
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Growth Summary</h2>
            <div className="prose prose-sm text-[var(--muted)]">
              <p>You have shown consistent improvement in your core computer science subjects. Your database management scores have increased by 15% since the last assessment.</p>
              <div className="mt-6 p-4 bg-[var(--fade)] rounded-xl border border-[var(--border)]">
                <h4 className="font-medium text-[var(--contrast)] mb-2">Key Insight</h4>
                <p className="text-xs">Your study consistency correlates strongly with your recent grade improvements. Keep maintaining your 3-hour daily study blocks.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
