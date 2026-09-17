'use client';
import React from 'react';
import { Bell, CheckSquare, Target, Lightbulb, Clock, MessageSquare, AlertTriangle } from 'lucide-react';
import { useDemoStore } from '../../../store/demo-state';

export default function Notifications() {
  const { notifications, markNotificationRead, markAllNotificationsRead } = useDemoStore();

  const getIcon = (type: string) => {
    switch (type) {
      case 'Alert': return <AlertTriangle className="w-5 h-5" />;
      case 'Reminder': return <Clock className="w-5 h-5" />;
      case 'Message': return <MessageSquare className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'Alert': return 'text-orange-500';
      case 'Reminder': return 'text-blue-500';
      case 'Message': return 'text-green-500';
      default: return 'text-[var(--main)]';
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[var(--main)]">Notifications</h1>
        <button 
          onClick={markAllNotificationsRead} 
          className="text-sm font-medium text-[var(--main)] hover:underline"
        >
          Mark all as read
        </button>
      </header>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            onClick={() => !notif.read && markNotificationRead(notif.id)}
            className={`flex items-start gap-4 p-5 rounded-2xl border transition-all ${
              !notif.read ? 'border-[var(--main)]/50 bg-[var(--main)]/5 cursor-pointer hover:bg-[var(--main)]/10' : 'border-[var(--border)] bg-[var(--surface)]'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-[var(--surface)] ${getColor(notif.type)} border border-[var(--border)]`}>
              {getIcon(notif.type)}
            </div>
            <div className="flex-1">
              <h3 className={`text-sm font-medium ${!notif.read ? 'text-[var(--contrast)] font-bold' : 'text-[var(--muted)]'}`}>{notif.title}</h3>
              <p className="text-sm text-[var(--contrast)] mt-1">{notif.message}</p>
              <p className="text-xs text-[var(--muted)] mt-2">{notif.time}</p>
            </div>
            {!notif.read && <div className="w-2.5 h-2.5 bg-[var(--main)] rounded-full mt-1.5 flex-shrink-0"></div>}
          </div>
        ))}
        {notifications.length === 0 && (
          <div className="p-8 text-center text-[var(--muted)] bg-[var(--surface)] rounded-2xl border border-[var(--border)]">
            No notifications to display.
          </div>
        )}
      </div>
    </div>
  );
}
