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
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full pt-24 pb-32 px-4 text-center max-w-5xl mx-auto flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="secondary" className="mb-6 py-1.5 px-4 rounded-full bg-[var(--elevated)] border border-[var(--border)] text-[var(--main)]">
            <Sparkles className="w-4 h-4 mr-2 inline" /> Introducing AI mentor 2.0
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-manrope text-[var(--main)]">
            Intelligent Mentoring, <br/>
            <span className="text-[var(--muted)]">Elevated.</span>
          </h1>
          <p className="text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto">
            Experience the synergy of AI precision and human empathy. AI mentor connects you with top-tier mentors and accelerates your learning with intelligent insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/student/dashboard">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full group">
                Start Learning <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full">
                Explore Features
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Abstract Dashboard / Mock Conversation */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl overflow-hidden"
        >
          <div className="h-12 border-b border-[var(--border)] bg-[var(--elevated)] flex items-center px-4 space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8 bg-[var(--surface)]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--elevated)] flex items-center justify-center shrink-0 border border-[var(--border)]">
                  <span className="text-sm font-bold">You</span>
                </div>
                <div className="bg-[var(--elevated)] p-4 rounded-2xl rounded-tl-sm text-[var(--muted)] border border-[var(--border)]">
                  How can I optimize this React component for better rendering performance?
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--contrast)] text-[var(--background)] flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="bg-[var(--background)] p-4 rounded-2xl rounded-tl-sm text-[var(--main)] border border-[var(--border)] shadow-sm">
                  Let's analyze the re-renders. I notice you're passing a new object reference in the props on every render. We should memoize that with `useMemo`. Here's a rewritten snippet...
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-[var(--border)] pt-8 md:pt-0">
              <h3 className="text-2xl font-bold font-manrope">AI Co-pilot</h3>
              <p className="text-[var(--muted)]">Get instant, context-aware assistance while you learn. The AI mentor understands your codebase and helps you push through blockers immediately.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-[var(--main)]"><Zap className="w-5 h-5 mr-3 text-[var(--contrast)]" /> Real-time code analysis</li>
                <li className="flex items-center text-[var(--main)]"><Zap className="w-5 h-5 mr-3 text-[var(--contrast)]" /> Personalized learning paths</li>
                <li className="flex items-center text-[var(--main)]"><Zap className="w-5 h-5 mr-3 text-[var(--contrast)]" /> 24/7 unblocking</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Pillars */}
      <section className="w-full bg-[var(--elevated)] py-32 border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-manrope mb-4">The Triad of Success</h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">AI mentor brings together the three essential elements for unparalleled growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[var(--surface)] border-[var(--border)] hover:border-[var(--contrast)] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--background)] rounded-xl flex items-center justify-center mb-4 border border-[var(--border)]">
                  <Users className="w-6 h-6 text-[var(--contrast)]" />
                </div>
                <CardTitle className="font-manrope text-xl">The Student</CardTitle>
              </CardHeader>
              <CardContent className="text-[var(--muted)]">
                Driven by curiosity. You set the goals, we provide the ultimate environment for you to thrive and achieve mastery.
              </CardContent>
            </Card>
            <Card className="bg-[var(--surface)] border-[var(--border)] hover:border-[var(--contrast)] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--background)] rounded-xl flex items-center justify-center mb-4 border border-[var(--border)]">
                  <Brain className="w-6 h-6 text-[var(--contrast)]" />
                </div>
                <CardTitle className="font-manrope text-xl">AI Mentor</CardTitle>
              </CardHeader>
              <CardContent className="text-[var(--muted)]">
                Always available. Analyzes your learning patterns, provides instant feedback, and curates customized study materials.
              </CardContent>
            </Card>
            <Card className="bg-[var(--surface)] border-[var(--border)] hover:border-[var(--contrast)] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--background)] rounded-xl flex items-center justify-center mb-4 border border-[var(--border)]">
                  <ShieldCheck className="w-6 h-6 text-[var(--contrast)]" />
                </div>
                <CardTitle className="font-manrope text-xl">Human Mentor</CardTitle>
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
