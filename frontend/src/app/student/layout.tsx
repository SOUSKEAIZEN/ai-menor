import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  BrainCircuit, 
  TrendingUp, 
  BookOpen, 
  CalendarCheck, 
  CheckSquare, 
  Target, 
  Map, 
  Library, 
  UserCircle, 
  Bell, 
  Settings,
  User
} from 'lucide-react';

const SidebarLink = ({ href, icon: Icon, children }: { href: string; icon: any; children: React.ReactNode }) => (
  <Link href={href} className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--main)] hover:bg-[var(--fade)] rounded-lg transition-colors">
    <Icon className="w-5 h-5" />
    <span className="font-medium">{children}</span>
  </Link>
);

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--main)] flex">
      <aside className="w-64 bg-[var(--surface)] border-r border-[var(--border)] hidden md:flex flex-col">
        <div className="p-6 border-b border-[var(--border)]">
          <h1 className="text-xl font-bold text-[var(--main)] flex items-center gap-2">
            <BrainCircuit className="text-[var(--contrast)]" />
            AI mentor
          </h1>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          <SidebarLink href="/student/dashboard" icon={LayoutDashboard}>Dashboard</SidebarLink>
          <SidebarLink href="/student/ai-mentor" icon={BrainCircuit}>AI Mentor</SidebarLink>
          <SidebarLink href="/student/progress" icon={TrendingUp}>My Progress</SidebarLink>
          <SidebarLink href="/student/subjects" icon={BookOpen}>Subjects</SidebarLink>
          <SidebarLink href="/student/attendance" icon={CalendarCheck}>Attendance</SidebarLink>
          <SidebarLink href="/student/tasks" icon={CheckSquare}>Tasks</SidebarLink>
          <SidebarLink href="/student/goals" icon={Target}>Goals</SidebarLink>
          <SidebarLink href="/student/study-plan" icon={Map}>Study Plan</SidebarLink>
          <SidebarLink href="/student/resources" icon={Library}>Resources</SidebarLink>
          <SidebarLink href="/student/mentor" icon={UserCircle}>Mentor</SidebarLink>
          
          <div className="mt-8 mb-2 px-4 text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">Account</div>
          <SidebarLink href="/student/notifications" icon={Bell}>Notifications</SidebarLink>
          <SidebarLink href="/student/profile" icon={User}>Profile</SidebarLink>
          <SidebarLink href="/student/settings" icon={Settings}>Settings</SidebarLink>
        </nav>
      </aside>
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between px-6 shrink-0">
          <div className="md:hidden">
            <BrainCircuit className="w-6 h-6 text-[var(--contrast)]" />
          </div>
          <div className="flex-1 flex justify-end items-center gap-4">
            <button className="p-2 text-[var(--muted)] hover:text-[var(--main)] rounded-full hover:bg-[var(--fade)] transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-[var(--fade)] flex items-center justify-center border border-[var(--border)]">
              <User className="w-5 h-5 text-[var(--muted)]" />
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[var(--background)]">
          {children}
        </div>
      </main>
    </div>
  );
}
