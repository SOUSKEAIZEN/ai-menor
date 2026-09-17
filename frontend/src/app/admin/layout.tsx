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
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--main)] ambient-bg">
      <div className="ambient-blob-1"></div>
      <div className="ambient-blob-2"></div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 glass-panel flex flex-col transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-border/40 shrink-0">
          <span className="font-bold text-xl text-gradient">AI mentor Admin</span>
          <button className="md:hidden text-[var(--muted)]" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive ? 'bg-[var(--main)]/10 text-[var(--main)] shadow-sm' : 'text-[var(--contrast)] hover:bg-[var(--main)]/5 hover:text-[var(--main)] hover:translate-x-1'}`}
              >
                {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[var(--main)] rounded-r-full shadow-[0_0_8px_var(--main)]" />}
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-[var(--main)]' : 'text-[var(--muted)] group-hover:text-[var(--main)]'}`} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 w-full relative z-10">
        <header className="h-16 shrink-0 glass-header flex items-center justify-between md:justify-end px-4 md:px-6">
          <div className="flex items-center gap-3 md:hidden">
             <button onClick={() => setMobileMenuOpen(true)} className="text-[var(--contrast)] p-1">
               <Menu size={24} />
             </button>
             <span className="font-bold">Admin</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4 ml-auto">
            <ThemeToggle />
            <div className="relative group z-50">
               <button className="w-8 h-8 rounded-full bg-[var(--main)] text-white flex items-center justify-center text-sm font-bold shadow-sm cursor-pointer hover:opacity-80 transition-opacity">A</button>
               <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--surface)] border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="p-3 border-b border-[var(--border)]">
                     <p className="font-semibold text-[var(--contrast)] text-sm">System Admin</p>
                     <p className="text-xs text-[var(--muted)]">admin@university.edu</p>
                  </div>
                  <div className="p-1">
                     <Link href="/admin/settings" className="block px-3 py-2 text-sm text-[var(--contrast)] hover:bg-[var(--fade)] rounded-md">Settings</Link>
                  </div>
                  <div className="p-1 border-t border-[var(--border)]">
                     <Link href="/login" className="block w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-md">Log out</Link>
                  </div>
               </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
