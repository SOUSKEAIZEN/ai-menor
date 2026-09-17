"use client";
import React, { use } from 'react';
import { useDemoStore } from '@/store/demo-state';
import { Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function TaskDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const taskId = parseInt(unwrappedParams.id, 10);
  const tasks = useDemoStore((state) => state.tasks);
  const completeTask = useDemoStore((state) => state.completeTask);
  
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return (
      <div className="space-y-6 max-w-5xl mx-auto">
        <header>
          <h1 className="text-2xl font-bold text-[var(--main)]">Task Not Found</h1>
          <Link href="/student/tasks" className="text-[var(--main)] underline mt-4 inline-block">Back to Tasks</Link>
        </header>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      <header className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <Link href="/student/tasks" className="text-[var(--muted)] hover:text-[var(--main)] text-sm mb-4 inline-block">&larr; Back to Tasks</Link>
          <h1 className="text-3xl font-bold text-[var(--main)]">{task.title}</h1>
          <p className="text-[var(--muted)] mt-2">Subject: {task.subjectName} ({task.subjectId.toUpperCase()})</p>
        </div>
        <button 
          onClick={() => completeTask(task.id)}
          disabled={task.status === 'Completed'}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-opacity ${task.status === 'Completed' ? 'bg-green-500 text-white opacity-50 cursor-not-allowed' : 'bg-[var(--main)] text-white hover:opacity-90'}`}
        >
          {task.status === 'Completed' ? (
            <>
              <CheckCircle2 className="w-4 h-4" /> Completed
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4" /> Mark as Completed
            </>
          )}
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
          <div className="flex items-center gap-2 text-[var(--muted)] mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Due Date</span>
          </div>
          <p className="font-semibold text-[var(--contrast)]">{task.due}</p>
        </div>

        <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
          <div className="flex items-center gap-2 text-[var(--muted)] mb-2">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">Priority</span>
          </div>
          <p className={`font-semibold ${task.priority === 'High' ? 'text-orange-500' : task.priority === 'Medium' ? 'text-blue-500' : 'text-green-500'}`}>
            {task.priority}
          </p>
        </div>

        <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
          <div className="flex items-center gap-2 text-[var(--muted)] mb-2">
            <span className="text-sm">Status</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${task.status === 'Pending' ? 'bg-orange-500/10 text-orange-500' : task.status === 'Completed' ? 'bg-green-500/10 text-green-500' : task.status === 'Overdue' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
            {task.status}
          </span>
        </div>
      </div>

      <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm">
        <h3 className="text-lg font-bold text-[var(--contrast)] mb-4">Progress</h3>
        <div className="flex justify-between text-sm text-[var(--muted)] mb-2">
          <span>Current Progress</span>
          <span className="font-medium text-[var(--contrast)]">{task.progress}%</span>
        </div>
        <div className="h-3 w-full bg-[var(--fade)] rounded-full overflow-hidden">
          <div className="h-full bg-[var(--main)] transition-all duration-300" style={{ width: `${task.progress}%` }} />
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-[var(--muted)]">Estimated effort: <span className="font-medium text-[var(--contrast)]">{task.effort}</span></span>
        </div>
      </div>
    </div>
  );
}
