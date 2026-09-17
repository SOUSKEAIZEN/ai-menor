"use client";

import React, { useState } from 'react';
import { MessageSquare, Paperclip, Mic, Send, Lightbulb, BookOpen, Clock, Target, AlertTriangle } from 'lucide-react';
import { useDemoStore } from '../../../store/demo-state';

export default function AIMentor() {
  const { user, goals, subjects } = useDemoStore();
  const [activeMode, setActiveMode] = useState('Analyze');

  const activeGoalsCount = goals.filter(g => g.status === 'Active').length;
  const weakSubjects = subjects.filter(s => s.status === 'Needs Attention');

  const modes = ['Learn', 'Analyze', 'Plan', 'Practice', 'Review', 'Reflect', 'Mentor Prep'];

  return (
    <div className="flex h-[calc(100vh-6rem)] gap-6 -m-6 p-6">
      {/* Left Panel: History */}
      <div className="w-72 border border-[var(--border)] rounded-2xl bg-[var(--surface)] flex-col hidden lg:flex shadow-sm">
        <div className="p-4 border-b border-[var(--border)]">
          <h2 className="font-semibold text-[var(--contrast)]">Conversation History</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-6">
          <div>
            <p className="px-3 py-2 text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">Today</p>
            <div className="space-y-1">
              <button className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-[var(--contrast)] bg-[var(--elevated)]">Analyze my progress</button>
              <button className="w-full text-left px-3 py-2 rounded-xl text-sm text-[var(--muted)] hover:bg-[var(--fade)] transition-colors">Help me plan my week</button>
            </div>
          </div>
          <div>
            <p className="px-3 py-2 text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">Yesterday</p>
            <div className="space-y-1">
              <button className="w-full text-left px-3 py-2 rounded-xl text-sm text-[var(--muted)] hover:bg-[var(--fade)] transition-colors">Explain my attendance</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Center Panel: Chat */}
      <div className="flex-1 border border-[var(--border)] rounded-2xl bg-[var(--surface)] flex flex-col shadow-sm relative overflow-hidden">
        <div className="p-4 border-b border-[var(--border)] flex items-center justify-between bg-white/50 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--main)]/10 text-[var(--main)] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-semibold text-[var(--contrast)]">AI Mentor</h2>
              <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 block"></span> Online & Ready
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 p-8 flex flex-col items-center justify-center text-center overflow-y-auto">
          <div className="w-16 h-16 rounded-2xl bg-[var(--main)]/10 text-[var(--main)] flex items-center justify-center mb-6">
            <Lightbulb className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-[var(--contrast)] mb-2">How can I help you today?</h3>
          <p className="text-[var(--muted)] max-w-md mb-6">I&apos;m your personal AI mentor. I can help you analyze your progress, plan your studies, or answer questions about your subjects.</p>
          
          {/* Modes Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl">
            {modes.map(mode => (
              <button
                key={mode}
                onClick={() => setActiveMode(mode)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeMode === mode 
                    ? 'bg-[var(--main)] text-white shadow-md' 
                    : 'bg-[var(--fade)] text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--contrast)]'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            {[
              "Analyze my current academic progress",
              "Create a study plan for this week",
              `How can I improve my ${weakSubjects[0]?.name || 'grades'}?`,
              "Summarize my recent attendance"
            ].map((prompt, i) => (
              <button key={i} className="p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)] text-sm font-medium text-[var(--contrast)] hover:border-[var(--main)] hover:bg-[var(--main)]/5 transition-all text-left">
                {prompt}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="max-w-4xl mx-auto relative flex items-end gap-2 bg-[var(--fade)] p-2 rounded-2xl border border-[var(--border)] focus-within:border-[var(--main)] focus-within:ring-2 focus-within:ring-[var(--main)]/20 transition-all">
            <button className="p-3 text-[var(--muted)] hover:text-[var(--main)] transition-colors rounded-xl hover:bg-[var(--surface)]">
              <Paperclip className="w-5 h-5" />
            </button>
            <textarea 
              placeholder={`Ask me anything in ${activeMode} mode...`}
              className="flex-1 max-h-32 min-h-[44px] bg-transparent border-none focus:ring-0 resize-none py-3 text-[var(--contrast)] text-sm outline-none"
              rows={1}
            />
            <div className="flex items-center gap-2">
              <button className="p-3 text-[var(--muted)] hover:text-[var(--main)] transition-colors rounded-xl hover:bg-[var(--surface)]">
                <Mic className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[var(--main)] text-white rounded-xl shadow-md shadow-[var(--main)]/20 hover:opacity-90 transition-opacity">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Panel: Context */}
      <div className="w-80 border border-[var(--border)] rounded-2xl bg-[var(--surface)] flex-col hidden xl:flex shadow-sm">
        <div className="p-4 border-b border-[var(--border)]">
          <h2 className="font-semibold text-[var(--contrast)]">Student Context</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)]">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-4 h-4 text-[var(--main)]" />
              <h3 className="font-medium text-sm text-[var(--contrast)]">Academic</h3>
            </div>
            <p className="text-xs text-[var(--muted)]">GPA: {user.gpa} | Subjects Passed: {user.subjectsPassed}</p>
          </div>
          
          <div className="p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)]">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-4 h-4 text-[var(--main)]" />
              <h3 className="font-medium text-sm text-[var(--contrast)]">Attendance</h3>
            </div>
            <p className="text-xs text-[var(--muted)]">Overall: {user.overallAttendance}%</p>
          </div>

          <div className="p-4 border border-[var(--border)] rounded-xl bg-[var(--fade)]">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-4 h-4 text-[var(--main)]" />
              <h3 className="font-medium text-sm text-[var(--contrast)]">Goals</h3>
            </div>
            <p className="text-xs text-[var(--muted)]">{activeGoalsCount} Active Goals</p>
          </div>

          {weakSubjects.length > 0 && (
            <div className="p-4 border border-amber-500/30 rounded-xl bg-amber-500/5">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <h3 className="font-medium text-sm text-[var(--contrast)]">Needs Attention</h3>
              </div>
              <div className="space-y-1">
                {weakSubjects.map(sub => (
                  <p key={sub.id} className="text-xs text-[var(--muted)]">• {sub.name} (Att: {sub.attendance}%)</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
