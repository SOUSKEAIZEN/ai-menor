"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, BookOpen, FileText, 
  Settings, Activity, Server, GraduationCap, Shield, Bot, BarChart3, Menu, X
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const sidebarLinks = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/students', label: 'Students', icon: GraduationCap },
  { href: '/admin/mentors', label: 'Mentors', icon: BookOpen },
  { href: '/admin/academic', label: 'Academic Structure', icon: FileText },
  { href: '/admin/documents', label: 'Knowledge Base', icon: BookOpen },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/ai', label: 'AI Management', icon: Bot },
  { href: '/admin/system', label: 'System Health', icon: Server },
  { href: '/admin/audit-logs', label: 'Audit Logs', icon: Shield },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-[100dvh] bg-[var(--background)] text-[var(--main)] ambient-bg p-3 pt-safe md:p-4 gap-4">
      <div className="ambient-blob-1"></div>
      <div className="ambient-blob-2"></div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Floating Sidebar */}
      <aside className={`fixed inset-y-4 left-4 z-50 w-64 floating-sidebar flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:inset-0 md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-[120%]'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-border/40 shrink-0">
          <Link href="/" className="font-bold text-xl text-gradient tracking-tight hover:opacity-80 transition-opacity">AI mentor Admin</Link>
          <button className="md:hidden text-[var(--muted)] hover:text-[var(--contrast)] transition-colors" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5 custom-scrollbar">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${isActive ? 'bg-[var(--main)]/10 text-[var(--main)] shadow-sm backdrop-blur-md' : 'text-[var(--contrast)] hover:bg-[var(--main)]/5 hover:text-[var(--main)] hover:translate-x-1'}`}
              >
                {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[var(--main)] rounded-r-full shadow-[0_0_8px_var(--main)]" />}
                <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-[var(--main)] scale-110' : 'text-[var(--muted)] group-hover:text-[var(--main)] group-hover:scale-110'}`} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 w-full relative z-10 h-full gap-4">
        {/* Floating Header */}
        <header className="h-16 shrink-0 floating-header flex items-center justify-between md:justify-end px-4 md:px-6 z-20">
          <div className="flex items-center gap-3 md:hidden">
             <button onClick={() => setMobileMenuOpen(true)} className="text-[var(--contrast)] p-1 hover:bg-[var(--main)]/10 rounded-lg transition-colors">
               <Menu size={24} />
             </button>
             <Link href="/" className="font-bold text-gradient hover:opacity-80 transition-opacity">Admin</Link>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <ThemeToggle />
            <div className="w-px h-6 bg-border/40 hidden md:block"></div>
            <div className="relative group focus-within:z-50 z-50">
               <button className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--main)] to-indigo-700 text-white flex items-center justify-center text-sm font-bold shadow-md cursor-pointer hover:shadow-lg transition-all hover:scale-105">A</button>
               <div className="absolute right-0 top-full mt-2 w-56 bg-[var(--surface)]/90 backdrop-blur-xl border border-border/40 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 origin-top-right scale-95 group-hover:scale-100 group-focus-within:scale-100">
                  <div className="p-4 border-b border-border/40 bg-[var(--main)]/5 rounded-t-xl">
                     <p className="font-bold text-[var(--contrast)] text-sm">System Admin</p>
                     <p className="text-xs text-[var(--muted)] mt-0.5">admin@university.edu</p>
                  </div>
                  <div className="p-2 space-y-1">
                     <Link href="/admin/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--contrast)] hover:bg-[var(--main)]/10 hover:text-[var(--main)] rounded-lg transition-colors"><Settings size={16}/> Settings</Link>
                  </div>
                  <div className="p-2 border-t border-border/40">
                     <Link href="/login" className="block w-full text-left px-3 py-2 text-sm text-red-500 font-medium hover:bg-red-500/10 rounded-lg transition-colors">Log out</Link>
                  </div>
               </div>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar rounded-3xl bg-[var(--surface)]/30 backdrop-blur-sm border border-border/20 shadow-inner">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
