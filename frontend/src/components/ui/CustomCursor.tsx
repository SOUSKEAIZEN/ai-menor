"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringAI, setIsHoveringAI] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Motion values for smooth tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for smooth following
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Velocity tracking for rotation
  const lastTime = useRef(Date.now());
  const lastX = useRef(-100);
  const lastY = useRef(-100);
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, { damping: 20, stiffness: 200 });

  useEffect(() => {
    // Check if device has a fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);
    
    if (!mediaQuery.matches) return;

    // Add global class to hide default cursor
    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate velocity for rotation
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const dx = e.clientX - lastX.current;
        const dy = e.clientY - lastY.current;
        // Calculate angle of movement
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
          // Adjust rotation based on movement direction slightly
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          // Constrain rotation to subtle tilts (-15 to 15 degrees from base 0)
          const targetRot = Math.max(-15, Math.min(15, angle / 4));
          rotation.set(targetRot);
        } else {
          rotation.set(0);
        }
      }
      
      lastX.current = e.clientX;
      lastY.current = e.clientY;
      lastTime.current = now;

      // Update position
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Track interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest('a, button, input, select, textarea, [role="button"]');
      const isAI = !!target.closest('.ai-interactive, [data-ai="true"]');
      
      setIsHovering(isInteractive);
      setIsHoveringAI(isAI);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, rotation]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: smoothX,
        y: smoothY,
        rotate: smoothRotation,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.1 : 1,
          rotate: isHoveringAI ? 180 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative -translate-x-[8px] -translate-y-[4px]"
      >
        {/* Core Cursor SVG - Futuristic 3D Arrow */}
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`drop-shadow-[0_8px_16px_rgba(45,212,191,0.4)] ${isHoveringAI ? 'drop-shadow-[0_0_20px_rgba(129,140,248,0.8)]' : ''}`}
        >
          {/* Base shadow layer */}
          <path d="M12 8L38 24L20 28L12 42L12 8Z" fill="#1E1B4B" opacity="0.6" style={{ transform: 'translate(2px, 4px)' }} />
          
          {/* Violet-blue depth (Left/Bottom side) */}
          <path d="M8 4L34 20L16 24L8 38L8 4Z" fill="url(#depth-grad)" />
          
          {/* Turquoise/Cyan main surface (Top side) */}
          <path d="M8 4L34 20L18 20L12 30L8 4Z" fill="url(#surface-grad)" />
          
          {/* Highlight Edge */}
          <path d="M8 4L34 20" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
          <path d="M8 4L12 30" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          
          {/* Subtly glowing orange energy accent */}
          <path d="M16 12L24 16L18 18L26 22" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                className={`${isClicking ? 'opacity-100' : 'opacity-70'} shadow-[0_0_8px_#FB923C]`} />
                
          {/* AI Core Gem (Glows when hovering AI elements) */}
          <circle cx="14" cy="14" r="2" fill={isHoveringAI ? "#818CF8" : "#2DD4BF"} 
                  className={isHoveringAI ? "animate-pulse" : ""} 
                  filter="blur(0.5px)" />

          <defs>
            <linearGradient id="surface-grad" x1="8" y1="4" x2="34" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2DD4BF" />
              <stop offset="1" stopColor="#0D9488" />
            </linearGradient>
            <linearGradient id="depth-grad" x1="16" y1="24" x2="34" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4338CA" />
              <stop offset="1" stopColor="#312E81" />
            </linearGradient>
          </defs>
        </svg>

        {/* Trail effect (renders only when moving fast or clicking) */}
        <motion.div 
          className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-tl from-orange-400 to-transparent rounded-full blur-[10px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isClicking ? 0.6 : 0, scale: isClicking ? 1.5 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};
