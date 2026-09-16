import React from 'react';
import { Calendar, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function Attendance() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header>
        <h1 className="text-3xl font-bold text-[var(--main)]">Attendance Tracker</h1>
        <p className="text-[var(--muted)] mt-2">Monitor your class presence and upcoming schedules.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { title: 'Overall Attendance', val: '92%', icon: Calendar, color: 'text-[var(--main)]' },
           { title: 'Classes Attended', val: '145', icon: CheckCircle2, color: 'text-green-500' },
           { title: 'Classes Missed', val: '12', icon: XCircle, color: 'text-red-500' },
           { title: 'Current Status', val: 'Safe', icon: AlertCircle, color: 'text-blue-500' }
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
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {[
                    { sub: 'Database Management', p: 40, a: 4, pct: 90, stat: 'Good' },
                    { sub: 'Operating Systems', p: 38, a: 6, pct: 86, stat: 'Warning' },
                    { sub: 'Computer Networks', p: 42, a: 2, pct: 95, stat: 'Excellent' }
                  ].map((r, i) => (
                    <tr key={i} className="text-[var(--contrast)]">
                      <td className="py-4 font-medium">{r.sub}</td>
                      <td className="py-4">{r.p}</td>
                      <td className="py-4 text-red-500">{r.a}</td>
                      <td className="py-4 font-bold">{r.pct}%</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${r.stat === 'Warning' ? 'bg-orange-500/10 text-orange-500' : 'bg-green-500/10 text-green-500'}`}>{r.stat}</span>
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
             <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)]">Recent Sessions</h2>
             <div className="space-y-4">
                {[
                  { d: 'Today, 10:00 AM', s: 'Database Management', t: 'Present' },
                  { d: 'Yesterday, 2:00 PM', s: 'Operating Systems', t: 'Absent' },
                  { d: 'Yesterday, 11:00 AM', s: 'Computer Networks', t: 'Present' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)]">
                    <div className="mt-1">
                      {item.t === 'Present' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--contrast)] text-sm">{item.s}</h4>
                      <p className="text-xs text-[var(--muted)] mt-1">{item.d}</p>
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
