"use client";

import React from 'react';
import { BookOpen, Calendar, CheckSquare, Target, Clock, MessageSquare, AlertCircle, TrendingUp, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useDemoStore } from '../../../store/demo-state';

export default function Dashboard() {
  const { user, subjects, tasks, goals, mentor } = useDemoStore();

  const activeGoals = goals.filter(g => g.status === 'Active').length;
  const pendingTasks = tasks.filter(t => t.status !== 'Completed').length;
  const overdueTasks = tasks.filter(t => t.status === 'Overdue').length;
  const completedTasksThisWeek = tasks.filter(t => t.status === 'Completed').length;

  const needsAttentionSubjects = subjects.filter(s => s.status === 'Needs Attention');

  const priorities = [
    ...tasks.filter(t => t.status === 'Overdue').map(t => ({ title: t.title, time: `Overdue - ${t.due}`, type: 'Task', urgent: true })),
    ...tasks.filter(t => t.status === 'Pending' && t.due.toLowerCase().includes('today')).map(t => ({ title: t.title, time: `Due ${t.due}`, type: 'Task', urgent: true })),
    ...needsAttentionSubjects.map(s => ({ title: `Review ${s.name} Concepts`, time: 'Recommended', type: 'AI Suggestion', urgent: false })),
    ...goals.filter(g => g.status === 'Active').map(g => ({ title: `Goal Progress: ${g.title}`, time: 'Ongoing', type: 'Goal', urgent: false }))
  ].slice(0, 4);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-[var(--main)]">Good morning, {user.name.split(' ')[0]}</h1>
        <p className="text-[var(--muted)]">Here&apos;s your academic overview.</p>
      </header>
      
      {/* Top statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[ 
          { title: 'Academic Progress', value: user.gpa + ' GPA', icon: BookOpen, trend: 'Stable' },
          { title: 'Attendance', value: `${user.overallAttendance}%`, icon: Calendar, trend: 'On track' },
          { title: 'Active Goals', value: activeGoals.toString(), icon: Target, trend: 'Keep it up' },
          { title: 'Pending Tasks', value: pendingTasks.toString(), icon: CheckSquare, trend: overdueTasks > 0 ? `${overdueTasks} overdue` : 'All on time' }
        ].map(stat => (
          <div key={stat.title} className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[var(--muted)]">{stat.title}</h3>
              <stat.icon className="w-5 h-5 text-[var(--main)]" />
            </div>
            <p className="text-3xl font-semibold text-[var(--contrast)]">{stat.value}</p>
            <p className="text-xs text-[var(--muted)] mt-2">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          {/* Weekly Review & AI Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <h2 className="text-xl font-semibold text-[var(--contrast)]">Weekly Review</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--muted)]">Tasks Completed</span>
                  <span className="font-medium text-[var(--contrast)]">{completedTasksThisWeek}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--muted)]">Goals Progressed</span>
                  <span className="font-medium text-[var(--contrast)]">{activeGoals}</span>
                </div>
                <div>
                  <p className="text-sm text-[var(--muted)] mb-1">What improved:</p>
                  <p className="text-sm font-medium text-[var(--contrast)]">{subjects.find(s => s.status === 'Strong')?.name || 'Overall consistency'}</p>
                </div>
              </div>
            </section>

            <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <AlertTriangle className="w-24 h-24" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <h2 className="text-xl font-semibold text-[var(--contrast)]">AI Insight</h2>
              </div>
              <div className="space-y-3 relative z-10">
                <p className="text-sm text-[var(--contrast)] leading-relaxed">
                  Your performance in <span className="font-bold text-[var(--main)]">{needsAttentionSubjects[0]?.name || 'some areas'}</span> has dropped recently. 
                  Attendance is at {needsAttentionSubjects[0]?.attendance || 0}% and current progress is lagging.
                </p>
                <div className="p-3 bg-[var(--fade)] rounded-lg border border-[var(--border)] mt-2">
                  <p className="text-xs text-[var(--muted)]">Recommendation:</p>
                  <p className="text-sm font-medium text-[var(--contrast)] mt-1">Focus on {needsAttentionSubjects[0]?.topics?.[0]?.name || 'upcoming topics'} this weekend to catch up.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Subject Overview */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[var(--contrast)]">Subject Overview</h2>
              <Link href="/student/subjects" className="text-sm font-medium text-[var(--main)] hover:underline">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjects.map(sub => (
                <div key={sub.code} className="p-5 border border-[var(--border)] rounded-xl bg-[var(--surface)] hover:border-[var(--main)] transition-colors group relative">
                  <h3 className="font-semibold text-lg text-[var(--contrast)]">{sub.name}</h3>
                  <p className="text-sm text-[var(--muted)] mb-4">{sub.code}</p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1"><span className="text-[var(--muted)]">Progress</span><span className="font-medium text-[var(--contrast)]">{sub.progress}%</span></div>
                      <div className="h-1.5 w-full bg-[var(--fade)] rounded-full overflow-hidden"><div className="h-full bg-[var(--main)]" style={{ width: `${sub.progress}%` }} /></div>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 bg-[var(--fade)] text-[var(--contrast)] text-sm font-medium rounded-lg group-hover:bg-[var(--main)] group-hover:text-white transition-colors">
                    View Subject
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          {/* Today's Priorities */}
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Today&apos;s Priorities</h2>
            <div className="space-y-4">
              {priorities.map((rec, i) => (
                <div key={i} className="flex gap-4 p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)] cursor-pointer hover:border-[var(--main)] transition-colors">
                  <div className="mt-1">
                    {rec.urgent ? <AlertCircle className="w-5 h-5 text-red-500" /> : <CheckSquare className="w-5 h-5 text-[var(--main)]" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--contrast)] text-sm">{rec.title}</h4>
                    <p className="text-xs text-[var(--muted)] mt-1">{rec.type} • {rec.time}</p>
                  </div>
                </div>
              ))}
              {priorities.length === 0 && (
                <p className="text-sm text-[var(--muted)] text-center py-4">You&apos;re all caught up for today!</p>
              )}
            </div>
          </section>

          {/* Mentor Activity */}
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Your Mentor</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--main)] text-white flex items-center justify-center font-bold text-lg">
                {mentor.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold text-[var(--contrast)]">{mentor.name}</h3>
                <p className="text-xs text-[var(--muted)]">{mentor.department}</p>
              </div>
            </div>
            <div className="p-4 bg-[var(--fade)] rounded-xl text-sm text-[var(--contrast)] mb-4">
              <p className="font-medium mb-1">Next Meeting</p>
              <p className="text-[var(--muted)] flex items-center gap-2"><Clock className="w-4 h-4" /> {mentor.nextMeeting}</p>
            </div>
            <button className="w-full py-2.5 bg-[var(--main)] text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <MessageSquare className="w-4 h-4" />
              Message Mentor
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
