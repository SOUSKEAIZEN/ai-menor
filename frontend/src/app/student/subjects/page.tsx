"use client";

import React from 'react';
import { Search, Filter, Plus, BookOpen, Clock, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import { useDemoStore } from '@/store/demo-state';

const COLORS = ['bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-orange-500', 'bg-pink-500'];

export default function Subjects() {
  const { subjects } = useDemoStore();

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--main)]">My Subjects</h1>
          <p className="text-[var(--muted)] mt-2">Manage and track your enrolled courses.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
            <input type="text" placeholder="Search subjects..." className="pl-9 pr-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main)]" />
          </div>
          <button className="p-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-[var(--muted)] hover:text-[var(--main)] transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--main)] text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> Add Subject
          </button>
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((sub, index) => {
          const color = COLORS[index % COLORS.length];
          return (
            <Link key={sub.id} href={`/student/subjects/${sub.id}`} className="block group">
              <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] hover:border-[var(--main)] hover:shadow-md transition-all h-full flex flex-col relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${color}`}></div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--fade)] flex items-center justify-center text-[var(--contrast)] group-hover:bg-[var(--main)]/10 group-hover:text-[var(--main)] transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 bg-[var(--fade)] text-[var(--muted)] text-xs font-medium rounded-lg">{sub.code}</span>
                </div>
                
                <h3 className="text-lg font-bold text-[var(--contrast)] mb-1 group-hover:text-[var(--main)] transition-colors">{sub.name}</h3>
                <p className="text-sm text-[var(--muted)] mb-6">{sub.credits} Credits • Core Subject</p>
                
                <div className="mt-auto space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1.5"><span className="text-[var(--muted)] flex items-center gap-1"><BarChart2 className="w-3 h-3"/> Progress</span><span className="font-medium text-[var(--contrast)]">{sub.progress}%</span></div>
                    <div className="h-2 w-full bg-[var(--fade)] rounded-full overflow-hidden"><div className={`h-full ${color}`} style={{ width: `${sub.progress}%` }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5"><span className="text-[var(--muted)] flex items-center gap-1"><Clock className="w-3 h-3"/> Attendance</span><span className="font-medium text-[var(--contrast)]">{sub.attendance}%</span></div>
                    <div className="h-2 w-full bg-[var(--fade)] rounded-full overflow-hidden"><div className="h-full bg-green-500" style={{ width: `${sub.attendance}%` }} /></div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
