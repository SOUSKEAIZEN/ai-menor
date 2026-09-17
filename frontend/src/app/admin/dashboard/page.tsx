"use client";

import React, { useState } from 'react';
import { 
  Users, GraduationCap, Server, Activity, FileText, BrainCircuit, 
  AlertTriangle, ShieldCheck, ShieldAlert, ChevronRight, BarChart3, Database,
  Cpu, MessageSquare, CheckCircle, Clock, Zap, BookOpen, AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'ai' | 'health'>('overview');

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gradient">System Overview</h1>
        <p className="text-[var(--muted)]">Central control and monitoring center for the AI Mentor platform.</p>
      </header>

      {/* Top statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <StatCard icon={GraduationCap} label="Students" value="1,248" color="text-blue-500" />
        <StatCard icon={Users} label="Mentors" value="42" color="text-indigo-500" />
        <StatCard icon={AlertTriangle} label="At-Risk" value="18" color="text-red-500" bg="bg-red-500/10" border="border-red-500/20" />
        <StatCard icon={Activity} label="Interventions" value="34" color="text-orange-500" />
        <StatCard icon={FileText} label="Documents" value="156" color="text-emerald-500" />
        <StatCard icon={BrainCircuit} label="AI Usage" value="12.4k" color="text-purple-500" />
        <StatCard icon={Server} label="System Health" value="99.9%" color="text-green-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Navigation Tabs */}
          <div className="flex gap-2 p-1.5 bg-surface/50 backdrop-blur-md border border-border/40 rounded-2xl overflow-x-auto custom-scrollbar">
            <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} label="Institution Overview" />
            <TabButton active={activeTab === 'ai'} onClick={() => setActiveTab('ai')} label="AI Monitoring" />
            <TabButton active={activeTab === 'health'} onClick={() => setActiveTab('health')} label="Attention Required" />
          </div>

          {activeTab === 'overview' && (
            <section className="space-y-6">
              {/* Institution & Mentoring Overview */}
              <div className="p-6 rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[var(--contrast)] flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-indigo-500" />
                    Institution & Mentoring Growth
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Academic Performance Chart (Mock) */}
                  <div>
                    <h3 className="text-sm font-medium text-[var(--muted)] mb-4">Academic Performance Trends</h3>
                    <div className="flex items-end gap-2 h-40">
                      {[65, 70, 68, 75, 82, 85, 90].map((h, i) => (
                        <div key={i} className="flex-1 bg-indigo-500/10 rounded-t-lg relative group transition-all hover:bg-indigo-500/20">
                          <div 
                            className="absolute bottom-0 w-full bg-gradient-to-t from-[var(--main)] to-indigo-400 rounded-t-lg transition-all duration-500"
                            style={{ height: `${h}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-[var(--muted)]">
                      <span>Week 1</span>
                      <span>Current</span>
                    </div>
                  </div>

                  {/* Intervention Outcomes */}
                  <div>
                    <h3 className="text-sm font-medium text-[var(--muted)] mb-4">Intervention Outcomes</h3>
                    <div className="space-y-4">
                      <ProgressBar label="Positive Improvement" value={68} color="bg-green-500" />
                      <ProgressBar label="Neutral / In Progress" value={22} color="bg-orange-500" />
                      <ProgressBar label="Negative / Escalated" value={10} color="bg-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'ai' && (
            <section className="space-y-6">
              {/* AI Monitoring */}
              <div className="p-6 rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md shadow-sm">
                <h2 className="text-xl font-bold text-[var(--contrast)] flex items-center gap-2 mb-6">
                  <BrainCircuit className="w-6 h-6 text-purple-500" />
                  AI Intelligence & RAG Status
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-background/50 border border-border/40 text-center">
                    <p className="text-xs text-[var(--muted)] mb-1">Active Convos</p>
                    <p className="text-2xl font-bold text-[var(--contrast)]">142</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-background/50 border border-border/40 text-center">
                    <p className="text-xs text-[var(--muted)] mb-1">Avg Latency</p>
                    <p className="text-2xl font-bold text-green-500">1.2s</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-background/50 border border-border/40 text-center">
                    <p className="text-xs text-[var(--muted)] mb-1">Model Health</p>
                    <p className="text-sm font-bold text-[var(--contrast)] mt-2">GPT-4o</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-background/50 border border-border/40 text-center">
                    <p className="text-xs text-[var(--muted)] mb-1">Quality Score</p>
                    <p className="text-2xl font-bold text-indigo-500">4.8/5</p>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-[var(--contrast)] mb-3">RAG Knowledge Base Status</h3>
                <div className="p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-emerald-500" />
                    <div>
                      <p className="font-bold text-sm text-[var(--contrast)]">Vector Database Indexed</p>
                      <p className="text-xs text-[var(--muted)]">Last updated 2 minutes ago • 156 documents embedded</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-full border border-emerald-500/20">Synced</span>
                </div>

                <h3 className="text-sm font-bold text-[var(--contrast)] mb-3">Recent AI Interventions</h3>
                <div className="space-y-3">
                  {[
                    { student: 'ABC 2', action: 'Generated custom Study Plan for OS', time: '10 mins ago', status: 'Success' },
                    { student: 'ABC 3', action: 'Answered complex Data Structures query', time: '25 mins ago', status: 'Success' },
                    { student: 'ABC 6', action: 'Flagged attendance pattern to Mentor', time: '1 hour ago', status: 'Alert Sent' },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-background/50 border border-transparent hover:border-border/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-4 h-4 text-[var(--muted)]" />
                        <div>
                          <p className="text-sm font-medium text-[var(--contrast)]">{log.action}</p>
                          <p className="text-xs text-[var(--muted)]">{log.student} • {log.time}</p>
                        </div>
                      </div>
                      <span className="text-xs text-[var(--muted)] bg-surface px-2 py-1 rounded-lg">{log.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeTab === 'health' && (
            <section className="space-y-6">
              {/* Mentoring Health / Attention Required */}
              <div className="p-6 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-md shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[var(--contrast)] flex items-center gap-2">
                    <ShieldAlert className="w-6 h-6 text-red-500" />
                    Attention Required
                  </h2>
                  <span className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-bold rounded-full border border-red-500/20">3 Critical Alerts</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'ABC 4', issue: 'Failed 3 consecutive quizzes', type: 'Academic', action: 'View Student' },
                    { name: 'ABC 7', issue: 'Attendance dropped to 65%', type: 'Attendance', action: 'Review Alert' },
                    { name: 'ABC 8', issue: 'Requested emergency tutoring', type: 'Support', action: 'Open Intervention' },
                  ].map((alert, i) => (
                    <div key={i} className="p-4 md:p-5 rounded-2xl bg-surface border border-red-500/10 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-red-500/30 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--contrast)] group-hover:text-red-500 transition-colors">{alert.name}</h4>
                          <p className="text-sm text-[var(--muted)]">{alert.issue}</p>
                          <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded border border-border/40 text-[var(--muted)] uppercase tracking-wide">
                            {alert.type}
                          </span>
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-xl bg-red-500 text-white text-sm font-medium shadow-sm hover:shadow-md hover:bg-red-600 transition-all text-center">
                        {alert.action}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          
          {/* System Health */}
          <section className="p-6 rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md shadow-sm">
            <h2 className="text-lg font-bold text-[var(--contrast)] mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-500" /> System Health
            </h2>
            <div className="space-y-4">
              <HealthItem name="Application UI" status="Healthy" icon={Server} color="text-green-500" />
              <HealthItem name="PostgreSQL Database" status="Healthy" icon={Database} color="text-green-500" />
              <HealthItem name="AI Mentor Engine" status="Healthy" icon={Cpu} color="text-green-500" />
              <HealthItem name="Push Notifications" status="Healthy" icon={Zap} color="text-green-500" />
              <HealthItem name="Background Jobs" status="Warning (1 failed)" icon={Clock} color="text-orange-500" />
            </div>
          </section>

          {/* Recent Activity & Audit Logs */}
          <section className="p-6 rounded-3xl border border-border/40 bg-surface/40 backdrop-blur-md shadow-sm">
            <h2 className="text-lg font-bold text-[var(--contrast)] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-500" /> Audit Logs
            </h2>
            <div className="space-y-5 relative before:absolute before:inset-y-0 before:left-2 before:w-px before:bg-border/40 ml-2 pl-6">
              {[
                { event: 'AI Model updated to v2.4', time: '10m ago', admin: 'System' },
                { event: 'New syllabus doc embedded', time: '1h ago', admin: 'Prof. Davis' },
                { event: 'Mentor role granted to Esha', time: '3h ago', admin: 'SuperAdmin' },
                { event: 'Auth configuration modified', time: 'Yesterday', admin: 'SuperAdmin' },
              ].map((log, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[var(--main)] border-2 border-background"></div>
                  <p className="text-sm font-medium text-[var(--contrast)]">{log.event}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">{log.admin} • {log.time}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2.5 rounded-xl border border-border/40 bg-background/50 text-sm font-medium text-[var(--contrast)] hover:bg-surface transition-colors">
              View Full Logs
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color, bg = 'bg-surface/40', border = 'border-border/40' }: { icon: IconType, label: string, value: string, color: string, bg?: string, border?: string }) {
  return (
    <div className={`p-4 rounded-3xl border ${border} ${bg} backdrop-blur-md shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center`}>
      <Icon className={`w-6 h-6 ${color} mb-2`} />
      <p className="text-2xl font-bold text-[var(--contrast)] leading-none mb-1">{value}</p>
      <p className="text-[10px] sm:text-xs text-[var(--muted)] font-medium uppercase tracking-wide">{label}</p>
    </div>
  );
}

type IconType = React.ElementType;

function TabButton({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex-1 min-w-[150px] py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${active ? 'bg-[var(--main)] text-white shadow-md' : 'text-[var(--muted)] hover:text-[var(--contrast)] hover:bg-surface'}`}
    >
      {label}
    </button>
  );
}

function ProgressBar({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-medium mb-1.5">
        <span className="text-[var(--contrast)]">{label}</span>
        <span className="text-[var(--muted)]">{value}%</span>
      </div>
      <div className="h-2 w-full bg-[var(--fade)] rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function HealthItem({ name, status, icon: Icon, color }: { name: string, status: string, icon: IconType, color: string }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-background/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-surface border border-border/40 flex items-center justify-center">
          <Icon className={`w-4 h-4 ${color}`} />
        </div>
        <span className="text-sm font-medium text-[var(--contrast)]">{name}</span>
      </div>
      <span className={`text-xs font-bold ${color}`}>{status}</span>
    </div>
  );
}
