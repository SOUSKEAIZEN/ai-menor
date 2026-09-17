"use client";

import React from 'react';
import { Calendar, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { useDemoStore } from '@/store/demo-state';

export default function Attendance() {
  const { user, subjects, studySessions } = useDemoStore();
  
  const TOTAL_CLASSES_PER_SUBJECT = 45;
  const TARGET_ATTENDANCE = 85;

  const totalOverallClasses = subjects.length * TOTAL_CLASSES_PER_SUBJECT;

  const subjectAttendanceData = subjects.map(sub => {
    const attended = Math.round(TOTAL_CLASSES_PER_SUBJECT * (sub.attendance / 100));
    const missed = TOTAL_CLASSES_PER_SUBJECT - attended;
    
    let targetStatus = 'Safe';
    let needed = 0;
    if (sub.attendance < TARGET_ATTENDANCE) {
      targetStatus = 'Warning';
      needed = Math.ceil((TARGET_ATTENDANCE / 100 * TOTAL_CLASSES_PER_SUBJECT - attended) / (1 - TARGET_ATTENDANCE / 100));
    } else if (sub.attendance >= 95) {
      targetStatus = 'Excellent';
    } else {
      targetStatus = 'Good';
    }

    return {
      ...sub,
      attended,
      missed,
      targetStatus,
      needed
    };
  });

  const totalAttended = subjectAttendanceData.reduce((acc, curr) => acc + curr.attended, 0);
  const totalMissed = subjectAttendanceData.reduce((acc, curr) => acc + curr.missed, 0);

  const overallCurrent = totalOverallClasses > 0 ? Math.round((totalAttended / totalOverallClasses) * 100) : 0;
  const isSafe = overallCurrent >= TARGET_ATTENDANCE;

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header>
        <h1 className="text-3xl font-bold text-[var(--main)]">Attendance Tracker</h1>
        <p className="text-[var(--muted)] mt-2">Monitor your class presence and upcoming schedules.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { title: 'Overall Attendance', val: `${user.overallAttendance}%`, icon: Calendar, color: 'text-[var(--main)]' },
           { title: 'Classes Attended', val: totalAttended.toString(), icon: CheckCircle2, color: 'text-green-500' },
           { title: 'Classes Missed', val: totalMissed.toString(), icon: XCircle, color: 'text-red-500' },
           { title: 'Current Status', val: isSafe ? 'Safe' : 'At Risk', icon: AlertCircle, color: isSafe ? 'text-blue-500' : 'text-red-500' }
         ].map((s, i) => (
           <div key={i} className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm flex items-center gap-4">
             <div className={`w-12 h-12 rounded-xl bg-[var(--fade)] flex items-center justify-center ${s.color}`}>
               <s.icon className="w-6 h-6" />
             </div>
             <div>
               <p className="text-sm font-medium text-[var(--muted)]">{s.title}</p>
               <p className="text-2xl font-bold text-[var(--contrast)]">{s.val}</p>
             </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Subject Attendance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] text-[var(--muted)]">
                    <th className="pb-3 font-medium">Subject</th>
                    <th className="pb-3 font-medium">Present</th>
                    <th className="pb-3 font-medium">Absent</th>
                    <th className="pb-3 font-medium">%</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Target ({TARGET_ATTENDANCE}%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {subjectAttendanceData.map((r, i) => (
                    <tr key={i} className="text-[var(--contrast)]">
                      <td className="py-4 font-medium">{r.name}</td>
                      <td className="py-4">{r.attended}</td>
                      <td className="py-4 text-red-500">{r.missed}</td>
                      <td className="py-4 font-bold">{r.attendance}%</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                          r.targetStatus === 'Warning' ? 'bg-orange-500/10 text-orange-500' : 
                          r.targetStatus === 'Excellent' ? 'bg-green-500/10 text-green-500' :
                          'bg-blue-500/10 text-blue-500'
                        }`}>
                          {r.targetStatus}
                        </span>
                      </td>
                      <td className="py-4 text-xs text-[var(--muted)]">
                        {r.needed > 0 ? `Needs ${r.needed} classes` : 'On track'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
        
        <div className="space-y-8">
          <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
             <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Scheduled Sessions</h2>
             <div className="space-y-4">
                {studySessions.map((session, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)]">
                    <div className="mt-1">
                      {session.status === 'Completed' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : 
                       session.status === 'Missed' ? <XCircle className="w-5 h-5 text-red-500" /> :
                       <Calendar className="w-5 h-5 text-blue-500" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--contrast)] text-sm">{session.subjectName}</h4>
                      <p className="text-xs text-[var(--muted)] mt-1">{session.date}, {session.time}</p>
                    </div>
                  </div>
                ))}
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
