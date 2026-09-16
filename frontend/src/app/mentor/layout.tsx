"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Bell, 
  Activity, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  User, 
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const sidebarLinks = [
  { name: "Dashboard", href: "/mentor/dashboard", icon: LayoutDashboard },
  { name: "Students", href: "/mentor/students", icon: Users },
  { name: "Alerts", href: "/mentor/alerts", icon: Bell },
  { name: "Interventions", href: "/mentor/interventions", icon: Activity },
  { name: "Messages", href: "/mentor/messages", icon: MessageSquare },
  { name: "Meetings", href: "/mentor/meetings", icon: Calendar },
  { name: "Analytics", href: "/mentor/analytics", icon: BarChart3 },
];

const bottomLinks = [
  { name: "Profile", href: "/mentor/profile", icon: User },
  { name: "Settings", href: "/mentor/settings", icon: Settings },
];

export default function MentorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-surface sticky top-0 z-50">
        <div className="font-bold text-xl text-contrast">AI mentor</div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-contrast">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(mobileMenuOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && (
          <motion.aside 
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className={cn(
              "fixed inset-y-0 left-0 z-40 w-64 border-r border-border bg-surface flex flex-col transition-transform duration-300 md:static md:translate-x-0",
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-6 hidden md:block">
              <div className="font-bold text-2xl text-main tracking-tight">AI mentor</div>
            </div>
            
            <nav className="flex-1 px-4 space-y-1 mt-4 md:mt-0 overflow-y-auto">
              {sidebarLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-blend text-main" 
                        : "text-muted hover:bg-fade hover:text-contrast"
                    )}
                  >
                    <link.icon size={18} className={isActive ? "text-main" : "text-muted"} />
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-border space-y-1">
              {bottomLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-blend text-main" 
                        : "text-muted hover:bg-fade hover:text-contrast"
                    )}
                  >
                    <link.icon size={18} className={isActive ? "text-main" : "text-muted"} />
                    {link.name}
                  </Link>
                );
              })}
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors">
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Header - Desktop */}
        <header className="hidden md:flex h-16 items-center justify-between px-8 border-b border-border bg-surface/50 backdrop-blur-md">
          <h1 className="text-lg font-semibold text-contrast capitalize">
            {pathname.split('/').filter(Boolean).pop()?.replace('-', ' ') || 'Dashboard'}
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="relative p-2 text-muted hover:text-contrast transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-main rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-blend flex items-center justify-center text-main font-semibold">
              M
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-background">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
