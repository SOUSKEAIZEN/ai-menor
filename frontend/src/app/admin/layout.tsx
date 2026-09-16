"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  BrainCircuit, 
  BarChart3, 
  ShieldAlert, 
  Settings, 
  Server,
  Menu,
  X,
  Bell
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarLinks = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/students', label: 'Students', icon: GraduationCap },
  { href: '/admin/mentors', label: 'Mentors', icon: Users },
  { href: '/admin/academic', label: 'Academic', icon: BookOpen },
  { href: '/admin/documents', label: 'Documents', icon: FileText },
  { href: '/admin/ai', label: 'AI Config', icon: BrainCircuit },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/audit-logs', label: 'Audit Logs', icon: ShieldAlert },
  { href: '/admin/system', label: 'System', icon: Server },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--main)] flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-[var(--surface)] border-r border-[var(--border)] z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-[var(--border)]">
          <span className="text-xl font-bold tracking-tight text-[var(--contrast)]">AI mentor Admin</span>
          <button className="lg:hidden text-[var(--muted)]" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-[var(--blend)] text-[var(--contrast)]' 
                    : 'text-[var(--fade)] hover:bg-[var(--elevated)] hover:text-[var(--main)]'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-[var(--contrast)]' : 'text-[var(--muted)]'} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-[var(--surface)] border-b border-[var(--border)] sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-[var(--fade)] hover:text-[var(--main)]"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-semibold text-[var(--contrast)] hidden sm:block">
              {sidebarLinks.find(l => l.href === pathname)?.label || 'Admin Portal'}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-[var(--fade)] hover:text-[var(--main)]">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-[var(--blend)] border border-[var(--border)] flex items-center justify-center">
              <span className="text-xs font-bold text-[var(--contrast)]">AD</span>
            </div>
          </div>
        </header>
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}
