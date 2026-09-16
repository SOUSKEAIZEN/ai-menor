import React from 'react';
import Link from 'next/link';
import { Home, MessageSquare, LineChart, BookOpen, Calendar, CheckSquare, Target, Clock, Library, User, Bell, Settings } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
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
    <div className="min-h-screen bg-[var(--background)] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--surface)] flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-[var(--border)] shrink-0">
          <h1 className="text-xl font-bold text-[var(--main)]">AI mentor</h1>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[var(--contrast)] hover:bg-[var(--elevated)] hover:text-[var(--main)] transition-colors">
              <item.icon className="w-5 h-5 text-[var(--muted)]" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 shrink-0 border-b border-[var(--border)] bg-[var(--surface)] flex items-center justify-between px-6">
          <div className="flex items-center gap-4 md:hidden">
             <span className="font-bold">AI mentor</span>
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
             <ThemeToggle />
             <div className="relative group">
               <button className="w-8 h-8 rounded-full bg-[var(--main)] text-white flex items-center justify-center text-sm font-bold shadow-sm cursor-pointer hover:opacity-80 transition-opacity">A</button>
               <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--surface)] border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="p-3 border-b border-[var(--border)]">
                     <p className="font-semibold text-[var(--contrast)] text-sm">ABC</p>
                     <p className="text-xs text-[var(--muted)]">abc@university.edu</p>
                  </div>
                  <div className="p-1">
                     <Link href="/student/profile" className="block px-3 py-2 text-sm text-[var(--contrast)] hover:bg-[var(--fade)] rounded-md">Profile</Link>
                     <Link href="/student/settings" className="block px-3 py-2 text-sm text-[var(--contrast)] hover:bg-[var(--fade)] rounded-md">Settings</Link>
                  </div>
                  <div className="p-1 border-t border-[var(--border)]">
                     <Link href="/login" className="block w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-md">Log out</Link>
                  </div>
               </div>
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
