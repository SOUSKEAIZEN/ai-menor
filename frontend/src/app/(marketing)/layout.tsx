import React from 'react';
import Link from 'next/link';
import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/Button';

import { ThemeToggle } from '@/components/ThemeToggle';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--main)] font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-[var(--main)]" />
            <span className="font-bold text-xl tracking-tight">AI mentor</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[var(--fade)]">
            <Link href="/features" className="hover:text-[var(--main)] transition-colors">Features</Link>
            <Link href="/how-it-works" className="hover:text-[var(--main)] transition-colors">How it Works</Link>
            <Link href="/for-students" className="hover:text-[var(--main)] transition-colors">Students</Link>
            <Link href="/for-mentors" className="hover:text-[var(--main)] transition-colors">Mentors</Link>
            <Link href="/about" className="hover:text-[var(--main)] transition-colors">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/student/dashboard"><Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button></Link>
            <Link href="/student/dashboard"><Button variant="primary">Get Started</Button></Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--fade)]">
        <div className="container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-6 w-6 text-[var(--main)]" />
              <span className="font-bold text-lg text-[var(--main)]">AI mentor</span>
            </div>
            <p className="text-sm">Intelligent mentoring for the modern era.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--main)] mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-[var(--main)]">Features</Link></li>
              <li><Link href="/how-it-works" className="hover:text-[var(--main)]">How it Works</Link></li>
              <li><Link href="/pricing" className="hover:text-[var(--main)]">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--main)] mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[var(--main)]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--main)]">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--main)]">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--main)] mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-[var(--main)]">Privacy Policy</Link></li>
              <li><Link href="/security" className="hover:text-[var(--main)]">Security</Link></li>
              <li><Link href="/terms" className="hover:text-[var(--main)]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--border)] py-6 mt-8">
          <p className="text-center text-sm text-[var(--muted)]">© 2026 AI mentor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
