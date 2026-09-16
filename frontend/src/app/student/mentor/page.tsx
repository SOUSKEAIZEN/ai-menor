import React from 'react';
import { MessageSquare, Calendar, Video, Clock, FileText, Star } from 'lucide-react';

export default function Mentor() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header>
        <h1 className="text-3xl font-bold text-[var(--main)]">My Mentor</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] text-center shadow-sm">
            <div className="w-24 h-24 rounded-full bg-[var(--main)] text-white flex items-center justify-center font-bold text-3xl mx-auto mb-4 ring-4 ring-[var(--main)]/20">
              JD
            </div>
            <h2 className="text-xl font-bold text-[var(--contrast)]">ESHA KHANNA</h2>
            <p className="text-sm text-[var(--muted)] mb-6">Professor, Computer Science</p>
            
            <div className="flex justify-center gap-3 mb-6">
               <button className="flex-1 py-2.5 bg-[var(--main)] text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:opacity-90">
                 <MessageSquare className="w-4 h-4" /> Message
               </button>
               <button className="flex-1 py-2.5 bg-[var(--fade)] border border-[var(--border)] text-[var(--contrast)] text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--surface)]">
                 <Calendar className="w-4 h-4" /> Schedule
               </button>
            </div>
            
            <div className="text-left space-y-3 text-sm">
              <div className="flex items-center gap-2 text-[var(--muted)]"><Clock className="w-4 h-4" /> Available Mon, Wed, Fri (2-4 PM)</div>
              <div className="flex items-center gap-2 text-[var(--muted)]"><Star className="w-4 h-4 text-yellow-500" /> 4.9/5 Rating</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
             <h2 className="text-lg font-semibold text-[var(--contrast)] mb-4">Upcoming Meeting</h2>
             <div className="flex items-center justify-between p-4 bg-[var(--fade)] rounded-xl border border-[var(--border)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--contrast)]">Mid-semester Progress Review</h3>
                    <p className="text-sm text-[var(--muted)] mt-1">Tomorrow, 2:00 PM - 2:30 PM</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-[var(--main)] text-white text-sm font-medium rounded-lg">Join Link</button>
             </div>
          </div>
          
          <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
             <h2 className="text-lg font-semibold text-[var(--contrast)] mb-4">Recent Feedback</h2>
             <div className="space-y-4">
               <div className="p-4 border border-[var(--border)] rounded-xl">
                 <h4 className="font-medium text-[var(--contrast)] flex items-center gap-2 mb-2"><FileText className="w-4 h-4 text-[var(--main)]" /> OS Assignment 2</h4>
                 <p className="text-sm text-[var(--muted)]">Great job on the concurrency implementation. Consider optimizing the lock contention in the future.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
