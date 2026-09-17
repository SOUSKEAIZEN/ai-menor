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
    <div className="flex h-[100dvh] bg-[var(--background)] text-[var(--main)] overflow-hidden ambient-bg p-3 pt-safe md:p-4 gap-4">
      <div className="ambient-blob-1"></div>
      <div className="ambient-blob-2"></div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Floating Sidebar */}
      <aside className={`fixed inset-y-4 left-4 z-50 w-64 floating-sidebar flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:inset-0 md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-[120%]'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-border/40 shrink-0">
          <Link href="/" className="text-xl font-bold text-gradient tracking-tight hover:opacity-80 transition-opacity">AI mentor</Link>
          <button className="md:hidden text-[var(--muted)] hover:text-[var(--contrast)] transition-colors" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          <ul className="space-y-1.5 px-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-400 ease-out ${isActive ? "bg-[var(--surface)] text-[var(--main)] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.05),inset_0_1px_0_0_var(--border-highlight)] border border-[var(--border)]" : "text-[var(--contrast)] hover:bg-[var(--glass-strong)] hover:text-[var(--main-light)]"}`}>
                    {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[var(--main)] rounded-r-full shadow-[0_0_8px_var(--main)]" />}
                    <item.icon size={20} className={`transition-transform duration-300 ${isActive ? 'text-[var(--main)] scale-110' : 'text-[var(--muted)] group-hover:text-[var(--main)] group-hover:scale-110'}`} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-border/40 flex gap-2 justify-around bg-[var(--surface)]/10 rounded-b-3xl">
           <Link href="/mentor/profile" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-[var(--main)]/10 transition-colors"><User size={20} className={`transition-all ${pathname === '/mentor/profile' ? 'text-[var(--main)]' : 'text-[var(--muted)] hover:text-[var(--main)] hover:scale-110'}`} /></Link>
           <Link href="/mentor/settings" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-[var(--main)]/10 transition-colors"><Settings size={20} className={`transition-all duration-500 ${pathname === '/mentor/settings' ? 'text-[var(--main)]' : 'text-[var(--muted)] hover:text-[var(--main)] hover:rotate-90'}`} /></Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full relative z-10 gap-4">
        {/* Floating Header */}
        <header className="h-16 shrink-0 relative floating-header flex items-center px-4 md:px-8 justify-between md:justify-end z-20">
           <div className="flex items-center gap-3 md:hidden">
             <button onClick={() => setMobileMenuOpen(true)} className="text-[var(--contrast)] p-1 hover:bg-[var(--main)]/10 rounded-lg transition-colors">
               <Menu size={24} />
             </button>
             <Link href="/" className="font-bold text-gradient hover:opacity-80 transition-opacity">AI mentor</Link>
           </div>
           <div className="flex items-center gap-4 ml-auto">
              <ThemeToggle />
              <div className="w-px h-6 bg-border/40 hidden md:block"></div>
              <div className="relative group focus-within:z-50">
               <button className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--main)] to-indigo-700 text-white flex items-center justify-center text-sm font-bold shadow-md cursor-pointer hover:shadow-lg transition-all hover:scale-105">EK</button>
               <div className="absolute right-0 top-full mt-2 w-64 bg-[var(--surface)] backdrop-blur-3xl border border-border/60 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.1)] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 origin-top-right scale-95 group-hover:scale-100 group-focus-within:scale-100 z-50">
                  <div className="p-4 border-b border-border/40 bg-[var(--main)]/5 rounded-t-xl">
                     <p className="font-bold text-[var(--contrast)] text-sm">ESHA KHANNA</p>
                     <p className="text-xs text-[var(--muted)] mt-0.5">esha.k@university.edu</p>
                  </div>
                  <div className="p-2 space-y-1">
                     <Link href="/mentor/profile" className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--contrast)] hover:bg-[var(--main)]/10 hover:text-[var(--main)] rounded-lg transition-colors"><User size={16}/> Profile</Link>
                     <Link href="/mentor/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--contrast)] hover:bg-[var(--main)]/10 hover:text-[var(--main)] rounded-lg transition-colors"><Settings size={16}/> Settings</Link>
                  </div>
                  <div className="p-2 border-t border-border/40">
                     <Link href="/login" className="block w-full text-left px-3 py-2 text-sm text-red-500 font-medium hover:bg-red-500/10 rounded-lg transition-colors">Log out</Link>
                  </div>
               </div>
             </div>
           </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-2 md:p-4 custom-scrollbar rounded-3xl bg-[var(--glass-fill)] backdrop-blur-2xl border border-border/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
          {children}
        </div>
      </main>
    </div>
  );
}
