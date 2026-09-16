import React from 'react';
import { Calendar as CalendarIcon, Clock, BookOpen, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export default function StudyPlan() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--main)]">My Study Plan</h1>
          <p className="text-[var(--muted)] mt-2">Organize your daily study sessions efficiently.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 p-1 bg-[var(--fade)] rounded-lg">
            <button className="p-2 hover:bg-[var(--surface)] rounded-md text-[var(--contrast)]"><ChevronLeft className="w-4 h-4" /></button>
            <span className="text-sm font-medium px-2">Today, Oct 16</span>
            <button className="p-2 hover:bg-[var(--surface)] rounded-md text-[var(--contrast)]"><ChevronRight className="w-4 h-4" /></button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--main)] text-white rounded-xl text-sm font-medium hover:opacity-90">
            <Plus className="w-4 h-4" /> Create Session
          </button>
        </div>
      </header>

      <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm relative">
         <div className="absolute top-0 left-8 bottom-0 w-px bg-[var(--border)]"></div>
         
         <div className="space-y-12 relative">
            {[
              { time: '09:00 AM', dur: '1.5 hrs', title: 'DBMS Chapter 4 Review', sub: 'CS301', type: 'Self Study', stat: 'Completed' },
              { time: '11:00 AM', dur: '1 hr', title: 'OS Lecture', sub: 'CS302', type: 'Class', stat: 'In Progress' },
              { time: '02:00 PM', dur: '2 hrs', title: 'Network Topologies Assignment', sub: 'CS303', type: 'Assignment', stat: 'Upcoming' },
              { time: '05:00 PM', dur: '1 hr', title: 'AI Mentor Catchup', sub: 'General', type: 'Review', stat: 'Upcoming' }
            ].map((plan, i) => (
              <div key={i} className="flex gap-6 relative">
                 <div className="w-4 h-4 rounded-full bg-[var(--main)] absolute -left-[45px] top-1 ring-4 ring-[var(--surface)] z-10"></div>
                 <div className="w-24 text-right pt-0.5">
                   <p className="text-sm font-bold text-[var(--contrast)]">{plan.time}</p>
                   <p className="text-xs text-[var(--muted)]">{plan.dur}</p>
                 </div>
                 <div className={`flex-1 p-5 border rounded-xl flex items-center justify-between ${plan.stat === 'In Progress' ? 'border-[var(--main)] bg-[var(--main)]/5' : 'border-[var(--border)] bg-[var(--fade)]'}`}>
                   <div>
                     <h4 className="font-semibold text-[var(--contrast)] text-lg mb-1">{plan.title}</h4>
                     <p className="text-sm text-[var(--muted)] flex items-center gap-3">
                       <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {plan.sub}</span>
                       <span className="w-1 h-1 rounded-full bg-[var(--muted)]"></span>
                       <span>{plan.type}</span>
                     </p>
                   </div>
                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${plan.stat === 'Completed' ? 'bg-green-500/10 text-green-500' : plan.stat === 'In Progress' ? 'bg-[var(--main)]/10 text-[var(--main)]' : 'bg-[var(--muted)]/20 text-[var(--muted)]'}`}>
                     {plan.stat}
                   </span>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
