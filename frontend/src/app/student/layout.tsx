"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageSquare, LineChart, BookOpen, Calendar, CheckSquare, Target, Clock, Library, User, Bell, Settings, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Dashboard', href: '/student/dashboard', icon: Home },
    { name: 'AI Mentor', href: '/student/ai-mentor', icon: MessageSquare },
    { name: 'My Progress', href: '/student/progress', icon: LineChart },
    { name: 'Subjects', href: '/student/subjects', icon: BookOpen },
    { name: 'Attendance', href: '/student/attendance', icon: Calendar },
    { name: 'Tasks', href: '/student/tasks', icon: CheckSquare },
    { name: 'Goals', href: '/student/goals', icon: Target },
    { name: 'Study Plan', href: '/student/study-plan', icon: Clock },
    { name: 'Resources', href: '/student/resources', icon: Library },
    { name: 'Mentor', href: '/student/mentor', icon: User },
    { name: 'Notifications', href: '/student/notifications', icon: Bell },
    { name: 'Profile', href: '/student/profile', icon: User },
    { name: 'Settings', href: '/student/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] flex ambient-bg p-2 md:p-4 gap-4">
      <div className="ambient-blob-1"></div>
      <div className="ambient-blob-2"></div>
      
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Floating Sidebar */}
      <aside className={`fixed inset-y-4 left-4 z-50 w-64 floating-sidebar flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:inset-0 md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-[120%]'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-border/40 shrink-0">
          <h1 className="text-xl font-bold text-gradient tracking-tight">AI mentor</h1>
          <button className="md:hidden text-[var(--muted)] hover:text-[var(--contrast)] transition-colors" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${isActive ? 'bg-[var(--main)]/10 text-[var(--main)] shadow-sm backdrop-blur-md' : 'text-[var(--contrast)] hover:bg-[var(--main)]/5 hover:text-[var(--main)] hover:translate-x-1'}`}>
                {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[var(--main)] rounded-r-full shadow-[0_0_8px_var(--main)]" />}
                <item.icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-[var(--main)] scale-110' : 'text-[var(--muted)] group-hover:text-[var(--main)] group-hover:scale-110'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-[calc(100vh-2rem)] overflow-hidden w-full relative z-10 gap-4">
        {/* Floating Header */}
        <header className="h-16 shrink-0 floating-header flex items-center justify-between px-4 md:px-6 z-20">
          <div className="flex items-center gap-3 md:hidden">
             <button onClick={() => setMobileMenuOpen(true)} className="text-[var(--contrast)] p-1 hover:bg-[var(--main)]/10 rounded-lg transition-colors">
               <Menu size={24} />
             </button>
             <span className="font-bold text-gradient">AI mentor</span>
          </div>
          <div className="hidden md:flex flex-1" />
          <div className="flex items-center gap-4 ml-auto">
             <ThemeToggle />
             <div className="w-px h-6 bg-border/40 hidden md:block"></div>
             <div className="relative group">
               <button className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--main)] to-indigo-700 text-white flex items-center justify-center text-sm font-bold shadow-md cursor-pointer hover:shadow-lg transition-all hover:scale-105">A</button>
               <div className="absolute right-0 top-full mt-2 w-56 bg-[var(--surface)]/90 backdrop-blur-xl border border-border/40 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-right scale-95 group-hover:scale-100 z-50">
                  <div className="p-4 border-b border-border/40 bg-[var(--main)]/5 rounded-t-xl">
                     <p className="font-bold text-[var(--contrast)] text-sm">ABC</p>
                     <p className="text-xs text-[var(--muted)] mt-0.5">abc@university.edu</p>
                  </div>
                  <div className="p-2 space-y-1">
                     <Link href="/student/profile" className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--contrast)] hover:bg-[var(--main)]/10 hover:text-[var(--main)] rounded-lg transition-colors"><User size={16}/> Profile</Link>
                     <Link href="/student/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--contrast)] hover:bg-[var(--main)]/10 hover:text-[var(--main)] rounded-lg transition-colors"><Settings size={16}/> Settings</Link>
                  </div>
                  <div className="p-2 border-t border-border/40">
                     <Link href="/login" className="block w-full text-left px-3 py-2 text-sm text-red-500 font-medium hover:bg-red-500/10 rounded-lg transition-colors">Log out</Link>
                  </div>
               </div>
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-2 md:p-4 custom-scrollbar rounded-3xl bg-[var(--surface)]/30 backdrop-blur-sm border border-border/20 shadow-inner">
          {children}
        </div>
      </main>
    </div>
  );
}
