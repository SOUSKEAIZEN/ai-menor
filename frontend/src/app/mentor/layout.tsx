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
        <div className="h-16 flex items-center px-6 border-b border-[var(--border)] shrink-0">
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
        <header className="h-16 shrink-0 border-b border-[var(--border)] bg-[var(--surface)] flex items-center px-8">
           <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <div className="relative group">
               <button className="w-8 h-8 rounded-full bg-[var(--main)] text-white flex items-center justify-center text-sm font-bold shadow-sm cursor-pointer hover:opacity-80 transition-opacity">EK</button>
               <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--surface)] border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="p-3 border-b border-[var(--border)]">
                     <p className="font-semibold text-[var(--contrast)] text-sm">ESHA KHANNA</p>
                     <p className="text-xs text-[var(--muted)]">esha.k@university.edu</p>
                  </div>
                  <div className="p-1">
                     <Link href="/mentor/profile" className="block px-3 py-2 text-sm text-[var(--contrast)] hover:bg-[var(--fade)] rounded-md">Profile</Link>
                     <Link href="/mentor/settings" className="block px-3 py-2 text-sm text-[var(--contrast)] hover:bg-[var(--fade)] rounded-md">Settings</Link>
                  </div>
                  <div className="p-1 border-t border-[var(--border)]">
                     <Link href="/login" className="block w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-md">Log out</Link>
                  </div>
               </div>
             </div>
           </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
