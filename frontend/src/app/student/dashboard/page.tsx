import React from 'react';
import { BookOpen, Calendar, CheckSquare, Target, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-[var(--main)]">Good morning, ABC</h1>
        <p className="text-[var(--muted)]">Here's your academic overview.</p>
      </header>
      
      {/* Top statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[ 
          { title: 'Academic Progress', value: '85%', icon: BookOpen, trend: '+2% this week' },
          { title: 'Attendance', value: '92%', icon: Calendar, trend: 'On track' },
          { title: 'Active Goals', value: '3', icon: Target, trend: '2 completing soon' },
          { title: 'Pending Tasks', value: '5', icon: CheckSquare, trend: '1 overdue' }
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
          {/* Performance Overview */}
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Performance Overview</h2>
            <div className="h-72 flex flex-col items-center justify-center border-2 border-dashed border-[var(--border)] rounded-xl bg-[var(--fade)] text-[var(--muted)]">
              <LineChart className="w-8 h-8 mb-2 opacity-50" />
              <p>No data yet</p>
            </div>
          </section>

          {/* Subject Overview */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[var(--contrast)]">Subject Overview</h2>
              <Link href="/student/subjects" className="text-sm font-medium text-[var(--main)] hover:underline">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Database Management', code: 'CS301', progress: 75, att: 90 },
                { name: 'Operating Systems', code: 'CS302', progress: 60, att: 85 },
                { name: 'Computer Networks', code: 'CS303', progress: 85, att: 95 }
              ].map(sub => (
                <div key={sub.code} className="p-5 border border-[var(--border)] rounded-xl bg-[var(--surface)] hover:border-[var(--main)] transition-colors group relative">
                  <span className="absolute top-3 right-3 text-xs bg-[var(--fade)] text-[var(--muted)] px-2 py-1 rounded-md">Demo</span>
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
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Today's Priorities</h2>
            <div className="space-y-4">
              {[
                { title: 'Complete OS Assignment', time: 'Due 11:59 PM', type: 'Task', urgent: true },
                { title: 'Review DBMS Chapter 4', time: 'Recommended', type: 'AI Suggestion', urgent: false },
                { title: 'Goal Milestone: 80% in CN', time: 'Ongoing', type: 'Goal', urgent: false }
              ].map((rec, i) => (
                <div key={i} className="flex gap-4 p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)]">
                  <div className="mt-1">
                    {rec.urgent ? <AlertCircle className="w-5 h-5 text-red-500" /> : <CheckSquare className="w-5 h-5 text-[var(--main)]" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--contrast)] text-sm">{rec.title}</h4>
                    <p className="text-xs text-[var(--muted)] mt-1">{rec.type} • {rec.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mentor Activity */}
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Your Mentor</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--main)] text-white flex items-center justify-center font-bold text-lg">
                EK
              </div>
              <div>
                <h3 className="font-semibold text-[var(--contrast)]">ESHA KHANNA</h3>
                <p className="text-xs text-[var(--muted)]">Computer Science Dept</p>
              </div>
            </div>
            <div className="p-4 bg-[var(--fade)] rounded-xl text-sm text-[var(--contrast)] mb-4">
              <p className="font-medium mb-1">Next Meeting</p>
              <p className="text-[var(--muted)] flex items-center gap-2"><Clock className="w-4 h-4" /> Tomorrow, 2:00 PM</p>
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

// Dummy for LineChart icon since we imported it in previous file but not here
function LineChart(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
}
