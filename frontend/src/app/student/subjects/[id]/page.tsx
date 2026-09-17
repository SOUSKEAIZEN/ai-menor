"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDemoStore } from '@/store/demo-state';
import { ChevronLeft, BookOpen, Target } from 'lucide-react';

export default function SubjectDetail() {
  const params = useParams();
  const router = useRouter();
  const { subjects } = useDemoStore();
  
  const id = params?.id as string;
  const subject = subjects.find(s => s.id === id);

  if (!subject) {
    return (
      <div className="p-8 text-center text-[var(--muted)]">
        Subject not found.
        <button onClick={() => router.back()} className="mt-4 block mx-auto text-[var(--main)] hover:underline">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <button 
        onClick={() => router.back()} 
        className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--main)] transition-colors text-sm font-medium"
      >
        <ChevronLeft className="w-4 h-4" /> Back to Subjects
      </button>

      <header className="p-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-[var(--main)]">
          <BookOpen className="w-32 h-32" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-[var(--fade)] text-[var(--muted)] text-sm font-medium rounded-lg">
                {subject.code}
              </span>
              <span className={`px-3 py-1 text-sm font-medium rounded-lg ${
                subject.status === 'Strong' ? 'bg-green-500/10 text-green-500' :
                subject.status === 'Average' ? 'bg-blue-500/10 text-blue-500' : 'bg-orange-500/10 text-orange-500'
              }`}>
                {subject.status}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[var(--contrast)]">{subject.name}</h1>
            <p className="text-[var(--muted)] mt-2">{subject.credits} Credits</p>
          </div>
          
          <div className="flex gap-4">
            <div className="text-center px-6 border-r border-[var(--border)]">
              <p className="text-sm text-[var(--muted)] mb-1">Progress</p>
              <p className="text-2xl font-bold text-[var(--main)]">{subject.progress}%</p>
            </div>
            <div className="text-center px-2">
              <p className="text-sm text-[var(--muted)] mb-1">Attendance</p>
              <p className="text-2xl font-bold text-green-500">{subject.attendance}%</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-[var(--contrast)] flex items-center gap-2">
            <Target className="w-5 h-5 text-[var(--main)]" /> Course Topics
          </h2>
          <div className="space-y-6">
            {subject.topics.map((topic, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-[var(--contrast)]">{topic.name}</span>
                  <span className="text-[var(--muted)]">{topic.progress}%</span>
                </div>
                <div className="h-2 w-full bg-[var(--fade)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--main)] transition-all" style={{ width: `${topic.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-[var(--contrast)]">Overview</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              This course covers key concepts in {subject.name}. Your current status is evaluated as 
              <span className="font-bold"> {subject.status}</span>. Keep focusing on the uncompleted topics to 
              ensure full coverage before final exams.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
