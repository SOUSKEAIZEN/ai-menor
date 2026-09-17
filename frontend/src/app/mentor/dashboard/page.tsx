"use client";

import React, { useState } from 'react';
import { 
  Users, AlertTriangle, Calendar, CheckSquare, TrendingDown, 
  TrendingUp, Activity, MessageSquare, Plus, Check, X, ShieldAlert,
  Brain, FileText, Target, BookOpen, Presentation, Phone
} from 'lucide-react';
import Link from 'next/link';
import { useDemoStore } from '@/store/demo-state';

export default function MentorDashboard() {
  const { 
    mentor, 
    mentees, 
    mentoringPriorities, 
    mentorMeetings, 
    mentorFollowUps, 
    interventionOutcomes,
    dismissPriority,
    actionPriority,
    completeFollowUp
  } = useDemoStore();

  const [activeTab, setActiveTab] = useState<'priorities' | 'followups' | 'outcomes'>('priorities');

  const pendingPriorities = mentoringPriorities.filter(p => p.status === 'Pending');
  const pendingFollowUps = mentorFollowUps.filter(f => f.status !== 'Completed');
  const todaysMeetings = mentorMeetings.filter(m => m.date === 'Today' && m.status === 'Scheduled');
  const atRiskStudents = mentees.filter(m => m.status === 'At Risk' || m.status === 'Needs Attention');

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gradient">Good morning, {mentor.name.split(' ')[0]}</h1>
        <p className="text-[var(--muted)]">Your AI Co-pilot has prepared today's mentoring priorities.</p>
      </header>
      
      {/* Top statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="p-6 rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-[var(--muted)]">Total Assigned</h3>
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-[var(--contrast)]">{mentees.length}</p>
          <p className="text-xs text-[var(--muted)] mt-2">Active students</p>
        </div>
        <div className="p-6 rounded-3xl border border-orange-500/20 bg-orange-500/5 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-orange-500">Need Attention</h3>
            <AlertTriangle className="w-5 h-5 text-orange-500" />
          </div>
          <p className="text-3xl font-bold text-orange-500">{atRiskStudents.length}</p>
          <p className="text-xs text-[var(--muted)] mt-2">At risk or falling behind</p>
        </div>
        <div className="p-6 rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-[var(--muted)]">Today's Meetings</h3>
            <Calendar className="w-5 h-5 text-indigo-500" />
          </div>
          <p className="text-3xl font-bold text-[var(--contrast)]">{todaysMeetings.length}</p>
          <p className="text-xs text-[var(--muted)] mt-2">Scheduled for today</p>
        </div>
        <div className="p-6 rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-[var(--muted)]">Pending Follow-ups</h3>
            <CheckSquare className="w-5 h-5 text-[var(--main)]" />
          </div>
          <p className="text-3xl font-bold text-[var(--contrast)]">{pendingFollowUps.length}</p>
          <p className="text-xs text-[var(--muted)] mt-2">{pendingFollowUps.filter(f => f.status === 'Overdue').length} overdue</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Workflow Tabs */}
          <div className="flex gap-2 p-1.5 bg-surface/50 backdrop-blur-md border border-border/40 rounded-2xl overflow-x-auto custom-scrollbar">
            <button 
              onClick={() => setActiveTab('priorities')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${activeTab === 'priorities' ? 'bg-[var(--main)] text-white shadow-md' : 'text-[var(--muted)] hover:text-[var(--contrast)] hover:bg-surface'}`}
            >
              AI Priorities
              {pendingPriorities.length > 0 && <span className="ml-2 px-1.5 py-0.5 rounded-full bg-white/20 text-xs">{pendingPriorities.length}</span>}
            </button>
            <button 
              onClick={() => setActiveTab('followups')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${activeTab === 'followups' ? 'bg-[var(--main)] text-white shadow-md' : 'text-[var(--muted)] hover:text-[var(--contrast)] hover:bg-surface'}`}
            >
              Follow-ups
              {pendingFollowUps.length > 0 && <span className="ml-2 px-1.5 py-0.5 rounded-full bg-white/20 text-xs">{pendingFollowUps.length}</span>}
            </button>
            <button 
              onClick={() => setActiveTab('outcomes')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${activeTab === 'outcomes' ? 'bg-[var(--main)] text-white shadow-md' : 'text-[var(--muted)] hover:text-[var(--contrast)] hover:bg-surface'}`}
            >
              Outcomes
            </button>
          </div>

          {activeTab === 'priorities' && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[var(--contrast)] flex items-center gap-2">
                  <Brain className="w-6 h-6 text-indigo-500" />
                  Mentoring Priorities
                </h2>
                <span className="text-sm text-[var(--muted)]">AI-generated evidence</span>
              </div>
              
              {pendingPriorities.length === 0 ? (
                <div className="p-8 text-center rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3 opacity-50" />
                  <p className="text-[var(--contrast)] font-medium">All caught up!</p>
                  <p className="text-sm text-[var(--muted)]">No pending AI priorities.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingPriorities.map(priority => {
                    const mentee = mentees.find(m => m.id === priority.menteeId);
                    return (
                      <div key={priority.id} className="p-5 md:p-6 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-md shadow-sm transition-all relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Student Brief */}
                          <div className="md:w-1/3 space-y-3">
                            <div className="flex items-center gap-3">
                               <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-[var(--main)] shrink-0 shadow-sm">
                                  {priority.menteeName.charAt(0)}
                               </div>
                               <div>
                                  <Link href={`/mentor/students/${priority.menteeId}`} className="font-bold text-[var(--contrast)] hover:text-[var(--main)] transition-colors">{priority.menteeName}</Link>
                                  <div className="flex gap-2 text-xs mt-0.5">
                                    <span className="text-[var(--muted)]">GPA: {mentee?.gpa}</span>
                                    <span className={mentee?.trend === 'down' ? 'text-red-500' : 'text-green-500'}>Att: {mentee?.attendance}%</span>
                                  </div>
                               </div>
                            </div>
                            <div className="text-xs text-[var(--muted)] bg-surface/50 p-2 rounded-xl border border-border/40">
                              <span className="font-semibold text-indigo-500 block mb-1">AI Brief:</span>
                              {mentee?.aiBrief}
                            </div>
                          </div>
                          
                          {/* AI Evidence & Action */}
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                               <div className="flex items-center gap-2 mb-2">
                                 <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold border border-indigo-500/20 uppercase tracking-wider">{priority.type} Alert</span>
                               </div>
                               <h3 className="text-lg font-bold text-[var(--contrast)] mb-1">{priority.suggestion}</h3>
                               <p className="text-sm text-[var(--muted)] bg-[var(--background)]/50 p-3 rounded-xl border border-border/40 flex items-start gap-2">
                                 <FileText className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                                 {priority.evidence}
                               </p>
                            </div>
                            
                            <div className="mt-4 flex flex-wrap items-center gap-2">
                               <button 
                                 onClick={() => actionPriority(priority.id, 'Schedule 1:1 Review')}
                                 className="px-4 py-2 rounded-xl bg-[var(--main)] text-white text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                               >
                                 Schedule 1:1
                               </button>
                               <button 
                                 onClick={() => actionPriority(priority.id, 'Assign Support')}
                                 className="px-4 py-2 rounded-xl bg-surface border border-border/60 text-[var(--contrast)] text-sm font-medium hover:bg-surface/80 transition-colors"
                               >
                                 Assign Support
                               </button>
                               <button 
                                 onClick={() => dismissPriority(priority.id)}
                                 className="px-4 py-2 rounded-xl text-[var(--muted)] hover:text-red-500 text-sm font-medium transition-colors ml-auto flex items-center gap-1"
                               >
                                 <X className="w-4 h-4" /> Dismiss
                               </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          )}

          {activeTab === 'followups' && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[var(--contrast)]">Pending Follow-ups</h2>
              <div className="grid grid-cols-1 gap-3">
                {pendingFollowUps.length === 0 ? (
                  <div className="p-8 text-center rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md">
                    <p className="text-[var(--muted)]">No pending follow-ups.</p>
                  </div>
                ) : (
                  pendingFollowUps.map(f => (
                    <div key={f.id} className="p-4 rounded-2xl border border-border/40 bg-surface/40 backdrop-blur-md flex items-center justify-between group hover:border-[var(--main)]/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => completeFollowUp(f.id)}
                          className="w-6 h-6 rounded-full border-2 border-[var(--muted)] flex items-center justify-center text-transparent hover:border-green-500 hover:text-green-500 transition-colors"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <div>
                          <p className="font-medium text-[var(--contrast)]">{f.task}</p>
                          <div className="flex items-center gap-2 text-xs mt-1">
                            <span className="font-medium text-[var(--main)]">{f.menteeName}</span>
                            <span className="text-border/40">•</span>
                            <span className={f.status === 'Overdue' ? 'text-red-500 font-medium' : 'text-[var(--muted)]'}>Due: {f.dueDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          )}

          {activeTab === 'outcomes' && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[var(--contrast)]">Intervention Outcomes</h2>
              <div className="grid grid-cols-1 gap-4">
                {interventionOutcomes.map(outcome => (
                  <div key={outcome.id} className="p-5 rounded-2xl border border-border/40 bg-surface/40 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-sm transition-shadow">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-[var(--contrast)]">{outcome.menteeName}</span>
                        <span className="text-xs text-[var(--muted)]">{outcome.date}</span>
                      </div>
                      <p className="text-sm text-[var(--muted)]">Action: {outcome.intervention}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-xl text-sm font-medium border flex items-center gap-2 ${
                      outcome.status === 'Positive' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                      outcome.status === 'Negative' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 
                      'bg-gray-500/10 text-gray-500 border-gray-500/20'
                    }`}>
                      {outcome.status === 'Positive' && <TrendingUp className="w-4 h-4" />}
                      {outcome.status === 'Negative' && <TrendingDown className="w-4 h-4" />}
                      {outcome.status === 'Neutral' && <Activity className="w-4 h-4" />}
                      {outcome.outcome}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Today's Meetings */}
          <section className="p-6 rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md shadow-sm">
            <h2 className="text-lg font-bold text-[var(--contrast)] mb-4 flex items-center gap-2">
              <Presentation className="w-5 h-5 text-indigo-500" /> Today's Meetings
            </h2>
            <div className="space-y-4">
              {todaysMeetings.length === 0 ? (
                <p className="text-sm text-[var(--muted)]">No meetings scheduled for today.</p>
              ) : (
                todaysMeetings.map(mtg => (
                  <div key={mtg.id} className="p-4 rounded-2xl bg-background/50 border border-border/40 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--main)] rounded-l-2xl"></div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-[var(--contrast)]">{mtg.menteeName}</h4>
                      <span className="text-xs font-bold text-[var(--main)] bg-[var(--main)]/10 px-2 py-0.5 rounded-full">{mtg.time}</span>
                    </div>
                    <p className="text-xs text-[var(--muted)] mb-3">{mtg.purpose}</p>
                    <div className="flex items-center justify-between text-xs font-medium text-[var(--contrast)]">
                      <span className="flex items-center gap-1.5 bg-surface px-2 py-1 rounded-lg border border-border/40">
                        {mtg.type === 'Online' ? <Phone className="w-3 h-3 text-indigo-400" /> : <Users className="w-3 h-3 text-orange-400" />}
                        {mtg.location}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
            <button className="w-full mt-4 py-2.5 rounded-xl border border-dashed border-border text-sm font-medium text-[var(--muted)] hover:text-[var(--contrast)] hover:border-border/80 transition-colors flex items-center justify-center gap-2">
              <Plus className="w-4 h-4" /> Schedule Meeting
            </button>
          </section>

          {/* Mentee Roster Overview */}
          <section className="p-6 rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[var(--contrast)] flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--main)]" /> Priority Watchlist
              </h2>
              <Link href="/mentor/students" className="text-xs font-bold text-[var(--main)] hover:underline">View All</Link>
            </div>
            <div className="space-y-3">
              {atRiskStudents.map(student => (
                <div key={student.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-background/50 transition-colors border border-transparent hover:border-border/40 group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-[var(--main)] text-sm shrink-0 shadow-sm">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[var(--contrast)] group-hover:text-[var(--main)] transition-colors">{student.name}</p>
                      <p className={`text-xs ${student.status === 'At Risk' ? 'text-red-500' : 'text-orange-500'}`}>{student.status}</p>
                    </div>
                  </div>
                  <Link href={`/mentor/messages`} className="p-2 rounded-lg text-[var(--muted)] hover:bg-[var(--main)]/10 hover:text-[var(--main)] transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

// Dummy icon for CheckCircle since lucide-react might not export it directly as CheckCircle in all versions
function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
