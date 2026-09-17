'use client';
import React, { useState } from 'react';
import { MessageSquare, Calendar, Video, Clock, FileText, Star, Bot } from 'lucide-react';
import Link from 'next/link';
import { useDemoStore } from '../../../store/demo-state';

export default function Mentor() {
  const { mentor, requestMentorMeeting } = useDemoStore();
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [scheduleData, setScheduleData] = useState({ date: '', time: '', purpose: '' });

  const handleRequestMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (scheduleData.date && scheduleData.time && scheduleData.purpose) {
      requestMentorMeeting(scheduleData.date, scheduleData.time, scheduleData.purpose);
      setShowScheduleForm(false);
      setScheduleData({ date: '', time: '', purpose: '' });
      alert('Meeting requested successfully!');
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[var(--main)]">My Mentor</h1>
        <Link href="/student/ai-mentor" className="px-4 py-2 bg-[var(--fade)] border border-[var(--main)] text-[var(--main)] rounded-xl flex items-center gap-2 hover:bg-[var(--main)] hover:text-white transition-all text-sm font-medium">
          <Bot className="w-4 h-4" /> Prepare for Meeting with AI
        </Link>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] text-center shadow-sm">
            <div className="w-24 h-24 rounded-full bg-[var(--main)] text-white flex items-center justify-center font-bold text-3xl mx-auto mb-4 ring-4 ring-[var(--main)]/20">
              {getInitials(mentor.name)}
            </div>
            <h2 className="text-xl font-bold text-[var(--contrast)]">{mentor.name}</h2>
            <p className="text-sm text-[var(--muted)] mb-1">{mentor.role}</p>
            <p className="text-xs text-[var(--muted)] mb-6">{mentor.department}</p>
            
            <div className="flex justify-center gap-3 mb-6">
               <button className="flex-1 py-2.5 bg-[var(--main)] text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:opacity-90">
                 <MessageSquare className="w-4 h-4" /> Message
               </button>
               <button onClick={() => setShowScheduleForm(!showScheduleForm)} className="flex-1 py-2.5 bg-[var(--fade)] border border-[var(--border)] text-[var(--contrast)] text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--surface)]">
                 <Calendar className="w-4 h-4" /> {showScheduleForm ? 'Cancel' : 'Schedule'}
               </button>
            </div>
            
            <div className="text-left space-y-3 text-sm">
              <div className="flex items-center gap-2 text-[var(--muted)]"><Clock className="w-4 h-4" /> {mentor.availability}</div>
              <div className="flex items-center gap-2 text-[var(--muted)]"><Star className="w-4 h-4 text-yellow-500" /> 4.9/5 Rating</div>
            </div>
          </div>
          
          <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
            <h3 className="font-semibold text-[var(--contrast)] mb-3 text-sm uppercase tracking-wider">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map((exp, i) => (
                <span key={i} className="px-3 py-1 bg-[var(--fade)] border border-[var(--border)] rounded-lg text-xs font-medium text-[var(--muted)]">
                  {exp}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          {showScheduleForm && (
            <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm animate-in fade-in slide-in-from-top-4">
              <h2 className="text-lg font-semibold text-[var(--contrast)] mb-4">Request a Meeting</h2>
              <form onSubmit={handleRequestMeeting} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--muted)] mb-1">Date</label>
                    <input type="date" required value={scheduleData.date} onChange={(e) => setScheduleData({...scheduleData, date: e.target.value})} className="w-full px-4 py-2 bg-[var(--fade)] border border-[var(--border)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main)] text-[var(--contrast)]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--muted)] mb-1">Time</label>
                    <input type="time" required value={scheduleData.time} onChange={(e) => setScheduleData({...scheduleData, time: e.target.value})} className="w-full px-4 py-2 bg-[var(--fade)] border border-[var(--border)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main)] text-[var(--contrast)]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--muted)] mb-1">Purpose</label>
                  <textarea required value={scheduleData.purpose} onChange={(e) => setScheduleData({...scheduleData, purpose: e.target.value})} placeholder="What would you like to discuss?" className="w-full px-4 py-2 bg-[var(--fade)] border border-[var(--border)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main)] text-[var(--contrast)] h-24 resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-2.5 bg-[var(--main)] text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity">Submit Request</button>
              </form>
            </div>
          )}

          <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
             <h2 className="text-lg font-semibold text-[var(--contrast)] mb-4">Upcoming Meeting</h2>
             <div className="flex items-center justify-between p-4 bg-[var(--fade)] rounded-xl border border-[var(--border)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--contrast)]">Mid-semester Progress Review</h3>
                    <p className="text-sm text-[var(--muted)] mt-1">{mentor.nextMeeting}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-[var(--main)] text-white text-sm font-medium rounded-lg hover:opacity-90">Join Link</button>
             </div>
          </div>
          
          <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
             <h2 className="text-lg font-semibold text-[var(--contrast)] mb-4">Recent Feedback</h2>
             <div className="space-y-4">
               <div className="p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)]">
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
