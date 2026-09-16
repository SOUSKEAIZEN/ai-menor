import React from 'react';
import { Bell, CheckSquare, Target, Lightbulb, Clock } from 'lucide-react';

export default function Notifications() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[var(--main)]">Notifications</h1>
        <button className="text-sm font-medium text-[var(--main)] hover:underline">Mark all as read</button>
      </header>

      <div className="space-y-4">
        {[
          { type: 'Task', title: 'DBMS Assignment Due Tomorrow', time: '2 hours ago', icon: Clock, color: 'text-orange-500', unread: true },
          { type: 'AI Mentor', title: 'New Study Plan Suggestion', time: '5 hours ago', icon: Lightbulb, color: 'text-yellow-500', unread: true },
          { type: 'Goal', title: 'Goal Milestone Achieved!', time: '1 day ago', icon: Target, color: 'text-green-500', unread: false },
          { type: 'Task', title: 'Task Completed: Read OS Ch 4', time: '2 days ago', icon: CheckSquare, color: 'text-blue-500', unread: false }
        ].map((notif, i) => (
          <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl border ${notif.unread ? 'border-[var(--main)]/50 bg-[var(--main)]/5' : 'border-[var(--border)] bg-[var(--surface)]'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-[var(--surface)] ${notif.color} border border-[var(--border)]`}>
              <notif.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className={`text-sm font-medium ${notif.unread ? 'text-[var(--contrast)] font-bold' : 'text-[var(--muted)]'}`}>{notif.title}</h3>
              <p className="text-xs text-[var(--muted)] mt-1">{notif.time}</p>
            </div>
            {notif.unread && <div className="w-2.5 h-2.5 bg-[var(--main)] rounded-full mt-1.5"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
