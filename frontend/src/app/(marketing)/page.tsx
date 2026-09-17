'use client';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import { Brain, Users, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center ambient-bg">
      <div className="ambient-blob-1"></div>
      <div className="ambient-blob-2"></div>
      
      {/* Hero Section */}
      <section className="w-full pt-24 pb-32 px-4 text-center max-w-5xl mx-auto flex flex-col items-center relative z-10 perspective-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="secondary" className="mb-6 py-1.5 px-4 rounded-full bg-elevated/50 backdrop-blur-md border border-[var(--border)] text-[var(--main)] shadow-sm">
            <Sparkles className="w-4 h-4 mr-2 inline" /> Introducing AI mentor 2.0
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-manrope text-[var(--main)]">
            Intelligent Mentoring, <br/>
            <span className="text-gradient">Elevated.</span>
          </h1>
          <p className="text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the synergy of AI precision and human empathy. AI mentor connects you with top-tier mentors and accelerates your learning with intelligent insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/student/dashboard">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full group">
                Start Learning <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full glass-card hover:bg-[var(--surface)]">
                Explore Features
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Abstract Dashboard / Mock Conversation with 3D Effect */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-32 perspective-container">
        <motion.div 
          initial={{ opacity: 0, rotateX: 20, y: 100 }} 
          animate={{ opacity: 1, rotateX: 0, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
          whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
          className="rounded-3xl border border-[var(--border)]/40 glass-panel shadow-[0_20px_50px_rgba(79,70,229,0.15)]  overflow-hidden transform-3d transition-transform duration-500 relative z-10"
        >
          <div className="h-12 border-b border-[var(--border)] bg-elevated/50 backdrop-blur-xl flex items-center px-4 space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm"></div>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8 bg-surface/40 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--surface)] flex items-center justify-center shrink-0 border border-[var(--border)] shadow-sm">
                  <span className="text-sm font-bold text-[var(--main)]">You</span>
                </div>
                <div className="bg-elevated/60 backdrop-blur-md p-4 rounded-2xl rounded-tl-sm text-[var(--contrast)] border border-[var(--border)] shadow-sm">
                  How can I optimize this React component for better rendering performance?
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--main)] to-indigo-700 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="bg-blend/50 backdrop-blur-md p-4 rounded-2xl rounded-tl-sm text-[var(--contrast)] border border-indigo-200  shadow-md">
                  Let's analyze the re-renders. I notice you're passing a new object reference in the props on every render. We should memoize that with `useMemo`. Here's a rewritten snippet...
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-[var(--border)] pt-8 md:pt-0">
              <h3 className="text-2xl font-bold font-manrope text-gradient">AI Co-pilot</h3>
              <p className="text-[var(--muted)]">Get instant, context-aware assistance while you learn. The AI mentor understands your codebase and helps you push through blockers immediately.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-[var(--contrast)]"><Zap className="w-5 h-5 mr-3 text-yellow-500 drop-shadow-md" /> Real-time code analysis</li>
                <li className="flex items-center text-[var(--contrast)]"><Zap className="w-5 h-5 mr-3 text-yellow-500 drop-shadow-md" /> Personalized learning paths</li>
                <li className="flex items-center text-[var(--contrast)]"><Zap className="w-5 h-5 mr-3 text-yellow-500 drop-shadow-md" /> 24/7 unblocking</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Pillars */}
      <section className="w-full bg-[var(--elevated)]/30 backdrop-blur-xl py-32 border-y border-[var(--border)] relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-manrope mb-4 text-gradient">The Triad of Success</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">AI mentor brings together the three essential elements for unparalleled growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:ring-2 hover:ring-[var(--main)]/50">
              <CardHeader>
                <div className="w-12 h-12 bg-elevated/50 rounded-xl flex items-center justify-center mb-4 border border-[var(--border)] shadow-sm">
                  <Users className="w-6 h-6 text-[var(--main)]" />
                </div>
                <CardTitle className="font-manrope text-xl text-[var(--main)]">The Student</CardTitle>
              </CardHeader>
              <CardContent className="text-[var(--muted)]">
                Driven by curiosity. You set the goals, we provide the ultimate environment for you to thrive and achieve mastery.
              </CardContent>
            </Card>
            <Card className="hover:ring-2 hover:ring-[var(--main)]/50">
              <CardHeader>
                <div className="w-12 h-12 bg-elevated/50 rounded-xl flex items-center justify-center mb-4 border border-[var(--border)] shadow-sm">
                  <Brain className="w-6 h-6 text-[var(--main)]" />
                </div>
                <CardTitle className="font-manrope text-xl text-[var(--main)]">AI Mentor</CardTitle>
              </CardHeader>
              <CardContent className="text-[var(--muted)]">
                Always available. Analyzes your learning patterns, provides instant feedback, and curates customized study materials.
              </CardContent>
            </Card>
            <Card className="hover:ring-2 hover:ring-[var(--main)]/50">
              <CardHeader>
                <div className="w-12 h-12 bg-elevated/50 rounded-xl flex items-center justify-center mb-4 border border-[var(--border)] shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[var(--main)]" />
                </div>
                <CardTitle className="font-manrope text-xl text-[var(--main)]">Human Mentor</CardTitle>
              </CardHeader>
              <CardContent className="text-[var(--muted)]">
                Industry veterans who provide strategic guidance, review complex architectures, and offer career-defining advice.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
