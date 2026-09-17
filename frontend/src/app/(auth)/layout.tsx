import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

import { ThemeToggle } from '@/components/ThemeToggle';
import { BrandLogo } from '@/components/ui/BrandLogo';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--main)] flex relative">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {/* Brand Side - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 bg-[var(--surface)] flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--main)] rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--main)] rounded-full blur-[120px] opacity-10"></div>
        
        <div className="relative z-10">
          <BrandLogo />
        </div>

        <div className="relative z-10 max-w-lg mt-20">
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Empower your learning journey with world-class mentorship.
          </h1>
          <p className="text-[var(--muted)] text-lg mb-12">
            Join thousands of students and mentors accelerating their careers through personalized guidance, curated resources, and meaningful connections.
          </p>
          
          <div className="flex gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-12 h-12 rounded-full border-2 border-[var(--surface)] bg-[var(--elevated)] flex items-center justify-center text-sm font-medium z-[${10-i}]`}>
                  M{i}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-semibold">Join 10,000+ users</span>
              <span className="text-sm text-[var(--muted)]">Students & Mentors</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-sm text-[var(--muted)]">
          &copy; {new Date().getFullYear()} AI mentor. All rights reserved.
        </div>
      </div>

      {/* Auth Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex lg:hidden justify-center mb-8">
            <BrandLogo className="scale-90" />
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}
