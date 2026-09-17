"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Bell, Activity, MessageSquare, Calendar, BarChart2, User, Settings, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function MentorLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    <div className="flex h-screen bg-[var(--background)] text-[var(--main)] overflow-hidden ambient-bg">
      <div className="ambient-blob-1"></div>
      <div className="ambient-blob-2"></div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 glass-panel flex flex-col transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-[var(--border)]/40 shrink-0">
          <h2 className="text-xl font-bold text-gradient">AI mentor</h2>
          <button className="md:hidden text-[var(--muted)]" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive ? 'bg-[var(--main)]/10 text-[var(--main)] shadow-sm' : 'text-[var(--contrast)] hover:bg-[var(--main)]/5 hover:text-[var(--main)] hover:translate-x-1'}`}>
                    {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[var(--main)] rounded-r-full shadow-[0_0_8px_var(--main)]" />}
                    <item.icon size={20} className={`transition-colors ${isActive ? 'text-[var(--main)]' : 'text-[var(--muted)] group-hover:text-[var(--main)]'}`} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-[var(--border)]/40 flex gap-2 justify-around">
           <Link href="/mentor/profile" onClick={() => setMobileMenuOpen(false)}><User size={20} className={`transition-all ${pathname === '/mentor/profile' ? 'text-[var(--main)]' : 'text-[var(--muted)] hover:text-[var(--main)] hover:scale-110'}`} /></Link>
           <Link href="/mentor/settings" onClick={() => setMobileMenuOpen(false)}><Settings size={20} className={`transition-all duration-500 ${pathname === '/mentor/settings' ? 'text-[var(--main)]' : 'text-[var(--muted)] hover:text-[var(--main)] hover:rotate-90'}`} /></Link>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto w-full relative z-10">
        <header className="h-16 shrink-0 glass-header flex items-center px-4 md:px-8 justify-between md:justify-end">
           <div className="flex items-center gap-3 md:hidden">
             <button onClick={() => setMobileMenuOpen(true)} className="text-[var(--contrast)] p-1">
               <Menu size={24} />
             </button>
             <span className="font-bold">AI mentor</span>
           </div>
           <div className="flex items-center gap-2 md:gap-4 ml-auto">
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
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
