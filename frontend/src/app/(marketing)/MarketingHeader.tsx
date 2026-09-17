"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { BrandLogo } from '@/components/ui/BrandLogo';

export default function MarketingHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Students', href: '/for-students' },
    { name: 'Mentors', href: '/for-mentors' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-50 floating-header flex items-center justify-between px-6 mx-auto max-w-7xl transform-gpu">
        <div className="w-full h-16 flex items-center justify-between">
          <BrandLogo />
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[var(--muted)]">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="hover:text-[var(--main)] transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-[var(--contrast)] rounded-xl hover:bg-[var(--glass-fill)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--background)]/80 backdrop-blur-3xl md:hidden flex flex-col pt-28 px-6 pb-6 transform-gpu transition-all">
          <nav className="flex flex-col space-y-6 text-xl font-medium text-[var(--contrast)]">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-[var(--main)] transition-colors border-b border-[var(--border)] pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
