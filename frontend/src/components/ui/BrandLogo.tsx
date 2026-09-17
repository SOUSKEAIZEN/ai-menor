import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const BrandLogo = ({ className, href = "/" }: { className?: string; href?: string }) => {
  return (
    <Link href={href} className={cn("group relative flex items-center gap-3 w-fit", className)}>
      {/* 3D Glass-Metal Logo Mark */}
      <div className="relative flex items-center justify-center w-10 h-10 perspective-container">
        {/* Ambient Glow behind the logo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--main)] to-fuchsia-500 rounded-2xl blur-[10px] opacity-40 group-hover:opacity-80 group-hover:blur-[14px] transition-all duration-700 ease-out"></div>
        
        {/* Main Logo Container with 3D transform */}
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/40 to-white/5 dark:from-white/10 dark:to-white/0 border border-white/50 dark:border-white/10 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(79,70,229,0.3),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center overflow-hidden transform-3d transition-all duration-700 ease-out group-hover:rotate-x-12 group-hover:-rotate-y-12 group-hover:scale-[1.05]">
          
          {/* Robotic Silhouette */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative z-10 text-[var(--main)] dark:text-indigo-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
            <path d="M12 6V2H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="4" y="6" width="16" height="13" rx="4" fill="url(#bot-gradient)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 13H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 13H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Glowing Eyes */}
            <circle cx="9" cy="13" r="1.5" fill="#fff" className="animate-pulse shadow-[0_0_8px_#fff]" />
            <circle cx="15" cy="13" r="1.5" fill="#fff" className="animate-pulse shadow-[0_0_8px_#fff]" />
            
            <defs>
              <linearGradient id="bot-gradient" x1="4" y1="6" x2="20" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.2"/>
                <stop offset="1" stopColor="currentColor" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
          </svg>
          
          {/* Glass Specular Highlight (Top Edge) */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60"></div>

          {/* Light Reflection Sweep Animation */}
          <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-30deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-sweep pointer-events-none"></div>
        </div>
      </div>

      {/* Typography */}
      <span className="font-display font-extrabold text-[22px] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[var(--contrast)] to-[var(--main)] dark:from-white dark:to-indigo-300 drop-shadow-sm transition-all duration-300">
        AI mentor
      </span>
    </Link>
  );
};
