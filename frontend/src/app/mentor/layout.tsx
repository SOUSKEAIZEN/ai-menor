import React from 'react';
import Link from 'next/link';
import { Home, Users, Bell, Activity, MessageSquare, Calendar, BarChart2, User, Settings } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function MentorLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { label: 'Dashboard', href: '/mentor/dashboard', icon: Home },
    { label: 'Students', href: '/mentor/students', icon: Users },
    { label: 'Alerts', href: '/mentor/alerts', icon: Bell },
    { label: 'Interventions', href: '/mentor/interventions', icon: Activity },
    { label: 'Messages', href: '/mentor/messages', icon: MessageSquare },
    { label: 'Meetings', href: '/mentor/meetings', icon: Calendar },
    { label: 'Analytics', href: '/mentor/analytics', icon: BarChart2 },
  ];

  return (
    <div className="flex h-screen bg-[var(--background)] text-[var(--main)] overflow-hidden">
      <aside className="w-64 bg-[var(--surface)] border-r border-[var(--border)] flex flex-col">
        <div className="p-6 border-b border-[var(--border)]">
          <h2 className="text-xl font-bold">AI mentor</h2>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[var(--fade)] transition-colors">
                  <item.icon size={20} className="text-[var(--muted)]" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-[var(--border)] flex gap-2 justify-around">
           <Link href="/mentor/profile"><User size={20} className="text-[var(--muted)] hover:text-[var(--main)] transition-colors" /></Link>
           <Link href="/mentor/settings"><Settings size={20} className="text-[var(--muted)] hover:text-[var(--main)] transition-colors" /></Link>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-[var(--border)] bg-[var(--surface)] flex items-center px-8">
           <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <span className="text-sm">Mentor Portal</span>
           </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
