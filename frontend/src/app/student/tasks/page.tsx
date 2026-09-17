"use client";
import React from 'react';
import { Search, Plus, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useDemoStore } from '@/store/demo-state';

export default function Tasks() {
  const tasks = useDemoStore((state) => state.tasks);
  const completeTask = useDemoStore((state) => state.completeTask);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--main)]">My Tasks</h1>
          <p className="text-[var(--muted)] mt-2">Track your assignments, projects, and deadlines.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
            <input type="text" placeholder="Search tasks..." className="pl-9 pr-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main)]" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--main)] text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> Create Task
          </button>
        </div>
      </header>
      
      <div className="flex gap-4 border-b border-[var(--border)] pb-2 overflow-x-auto">
        {['All', 'Today', 'Upcoming', 'Completed', 'Overdue'].map((tab, i) => (
          <button key={tab} className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg ${i === 0 ? 'bg-[var(--main)] text-white' : 'text-[var(--muted)] hover:bg-[var(--fade)]'}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tasks.map(task => (
          <div key={task.id} className="p-5 border border-[var(--border)] rounded-2xl bg-[var(--surface)] hover:border-[var(--main)] transition-colors flex flex-col md:flex-row md:items-center gap-6 group">
            <div className="flex-1 flex gap-4">
              <button 
                onClick={() => completeTask(task.id)}
                className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${task.status === 'Completed' ? 'bg-green-500 border-green-500 text-white' : 'border-[var(--muted)] group-hover:border-[var(--main)]'}`}
              >
                {task.status === 'Completed' && <CheckCircle2 className="w-4 h-4" />}
              </button>
              <div>
                <Link href={`/student/tasks/${task.id}`} className="font-semibold text-lg text-[var(--contrast)] group-hover:text-[var(--main)] transition-colors block">{task.title}</Link>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-[var(--muted)]">
                  <span className="px-2 py-1 bg-[var(--fade)] rounded-md">{task.subjectId}</span>
                  <span className="flex items-center gap-1 text-orange-500"><AlertCircle className="w-3 h-3" /> {task.priority} Priority</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Due {task.due}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-48 space-y-2">
               <div className="flex justify-between text-xs text-[var(--muted)]">
                 <span>Progress</span>
                 <span className="font-medium text-[var(--contrast)]">{task.progress}%</span>
               </div>
               <div className="h-2 w-full bg-[var(--fade)] rounded-full overflow-hidden">
                 <div className="h-full bg-[var(--main)]" style={{ width: `${task.progress}%` }} />
               </div>
            </div>
            
            <div className="md:w-32 flex justify-end">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.status === 'Pending' ? 'bg-orange-500/10 text-orange-500' : task.status === 'Completed' ? 'bg-green-500/10 text-green-500' : task.status === 'Overdue' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
