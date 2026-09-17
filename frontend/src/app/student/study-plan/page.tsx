"use client";
import React from 'react';
import { Clock, BookOpen, Plus, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useDemoStore } from '@/store/demo-state';

export default function StudyPlan() {
  const studySessions = useDemoStore((state) => state.studySessions);
  const completeStudySession = useDemoStore((state) => state.completeStudySession);

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
         <div className="absolute top-0 left-8 bottom-0 w-px bg-[var(--border)] hidden md:block"></div>
         
         <div className="space-y-12 relative">
            {studySessions.map((session) => (
              <div key={session.id} className="flex flex-col md:flex-row gap-6 relative group">
                 <div className="w-4 h-4 rounded-full bg-[var(--main)] absolute -left-[45px] top-1 ring-4 ring-[var(--surface)] z-10 hidden md:block"></div>
                 <div className="md:w-24 md:text-right pt-0.5">
                   <p className="text-sm font-bold text-[var(--contrast)]">{session.time}</p>
                   <p className="text-xs text-[var(--muted)]">{session.duration}</p>
                 </div>
                 
                 <div className={`flex-1 p-5 border rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors ${session.status === 'Completed' ? 'border-green-500/30 bg-green-500/5' : 'border-[var(--border)] bg-[var(--fade)] hover:border-[var(--main)]'}`}>
                   <div className="flex-1">
                     <div className="flex items-center gap-2 mb-1">
                       <h4 className="font-semibold text-[var(--contrast)] text-lg">{session.activity}</h4>
                       <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide ${session.status === 'Completed' ? 'bg-green-500/10 text-green-500' : session.status === 'Scheduled' ? 'bg-[var(--main)]/10 text-[var(--main)]' : 'bg-[var(--muted)]/20 text-[var(--muted)]'}`}>
                         {session.status}
                       </span>
                     </div>
                     <p className="text-sm text-[var(--muted)] flex items-center gap-3 mb-3">
                       <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {session.subjectName}</span>
                       <span className="w-1 h-1 rounded-full bg-[var(--muted)]"></span>
                       <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {session.date}</span>
                     </p>
                     <div className="bg-[var(--surface)] p-3 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)]">
                       <span className="font-medium text-[var(--contrast)] mr-1">Reason:</span>
                       {session.reason}
                     </div>
                   </div>
                   
                   <div className="flex-shrink-0 flex items-center">
                     <button 
                       onClick={() => completeStudySession(session.id)}
                       disabled={session.status === 'Completed'}
                       className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${session.status === 'Completed' ? 'bg-green-500 text-white cursor-default' : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--contrast)] hover:border-[var(--main)] hover:text-[var(--main)]'}`}
                     >
                       {session.status === 'Completed' ? (
                         <>
                           <CheckCircle2 className="w-4 h-4" /> Done
                         </>
                       ) : (
                         <>
                           <CheckCircle2 className="w-4 h-4 opacity-50" /> Mark Complete
                         </>
                       )}
                     </button>
                   </div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
