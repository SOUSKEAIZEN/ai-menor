"use client";

import React, { useEffect, useState } from 'react';
import { Moon, Sun, Monitor, Bell, Shield, Key } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themes = [
    { icon: Sun, label: 'Light', value: 'light' },
    { icon: Moon, label: 'Dark', value: 'dark' },
    { icon: Monitor, label: 'System', value: 'system' }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <header>
        <h1 className="text-3xl font-bold text-[var(--main)]">Settings</h1>
      </header>

      <div className="space-y-6">
         <section className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
           <h2 className="text-lg font-semibold text-[var(--contrast)] mb-4 border-b border-[var(--border)] pb-2">Appearance</h2>
           <div className="flex gap-4 mt-4">
             {mounted && themes.map((t) => {
               const isActive = theme === t.value;
               return (
                 <button 
                   key={t.value} 
                   onClick={() => setTheme(t.value)}
                   className={`flex flex-col items-center gap-2 p-4 border rounded-xl flex-1 transition-all ${
                     isActive 
                       ? 'border-[var(--main)] bg-[var(--main)]/5' 
                       : 'border-[var(--border)] hover:bg-[var(--fade)]'
                   }`}
                 >
                   <t.icon className={`w-6 h-6 ${isActive ? 'text-[var(--main)]' : 'text-[var(--muted)]'}`} />
                   <span className={`text-sm font-medium ${isActive ? 'text-[var(--main)]' : 'text-[var(--muted)]'}`}>{t.label}</span>
                 </button>
               );
             })}
           </div>
         </section>

         <section className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
           <h2 className="text-lg font-semibold text-[var(--contrast)] mb-4 border-b border-[var(--border)] pb-2">Notifications</h2>
           <div className="space-y-4 mt-4">
             {['Email Notifications', 'Push Notifications', 'AI Mentor Alerts', 'Task Reminders'].map((opt, i) => (
               <div key={i} className="flex items-center justify-between">
                 <span className="text-sm font-medium text-[var(--contrast)]">{opt}</span>
                 <div className={`w-10 h-6 rounded-full flex items-center p-1 cursor-pointer transition-colors ${i < 3 ? 'bg-[var(--main)]' : 'bg-[var(--border)]'}`}>
                   <div className={`w-4 h-4 rounded-full bg-white transition-transform ${i < 3 ? 'translate-x-4' : 'translate-x-0'}`}></div>
                 </div>
               </div>
             ))}
           </div>
         </section>
      </div>
    </div>
  );
}
