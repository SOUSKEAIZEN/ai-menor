"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, UserRound, GraduationCap,
  BookOpen, FileText, BarChart3, Bot,
  Activity, ShieldAlert, Settings, Bell, Search, UserCircle
} from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const sidebarLinks = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/students', label: 'Students', icon: UserRound },
  { href: '/admin/mentors', label: 'Mentors', icon: GraduationCap },
  { href: '/admin/academic', label: 'Academic Structure', icon: BookOpen },
  { href: '/admin/documents', label: 'Knowledge Base', icon: FileText },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/ai', label: 'AI Management', icon: Bot },
  { href: '/admin/system', label: 'System Health', icon: Activity },
  { href: '/admin/audit-logs', label: 'Audit Logs', icon: ShieldAlert },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--background)] flex">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-64 flex-shrink-0 border-r border-[var(--border)] bg-[var(--surface)] flex flex-col"
      >
        <div className="h-16 flex items-center px-6 border-b border-[var(--border)]">
          <div className="w-8 h-8 rounded bg-[var(--main)] text-white flex items-center justify-center font-bold mr-3">A</div>
          <span className="font-semibold text-lg text-[var(--contrast)]">Aevora Mentor</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <div className={`flex items-center px-3 py-2.5 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-[var(--main)] text-white' 
                    : 'text-[var(--contrast)] hover:bg-[var(--elevated)] hover:text-[var(--main)]'
                }`}>
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="text-sm font-medium">{link.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 flex-shrink-0 border-b border-[var(--border)] bg-[var(--surface)] flex items-center justify-between px-6">
          <div className="w-96 relative flex items-center">
            <Search className="w-4 h-4 absolute left-3 text-[var(--muted)]" />
            <input 
              placeholder="Search everywhere..."
              className="w-full bg-[var(--elevated)] text-[var(--contrast)] border border-[var(--border)] rounded-md pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-[var(--main)]"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-[var(--muted)] hover:text-[var(--contrast)] relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--main)]" />
            </Button>
            <div className="flex items-center space-x-2 border-l border-[var(--border)] pl-4">
              <UserCircle className="w-8 h-8 text-[var(--muted)]" />
              <div className="text-sm">
                <p className="font-medium text-[var(--contrast)]">System Admin</p>
                <p className="text-xs text-[var(--muted)]">admin@aevora.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[var(--background)] p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
