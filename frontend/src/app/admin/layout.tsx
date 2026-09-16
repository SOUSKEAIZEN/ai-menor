import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, Users, BookOpen, FileText, 
  Settings, Activity, Server, GraduationCap, Shield, Bot, BarChart3
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
  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--main)]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--surface)] flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-[var(--border)]">
          <span className="font-bold text-xl">AI mentor Admin</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[var(--fade)] text-sm font-medium transition-colors"
              >
                <Icon className="w-4 h-4 text-[var(--muted)]" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-end px-6 border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="w-8 h-8 rounded-full bg-[var(--fade)] flex items-center justify-center text-sm font-bold">
              A
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
