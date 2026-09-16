import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { CheckSquare, Clock } from 'lucide-react';

export default function TasksPage() {
  const tasks = [
    { id: '1', title: 'Calculus Assignment 4', course: 'MATH 301', due: 'Tomorrow', status: 'pending' },
    { id: '2', title: 'Physics Lab Report', course: 'PHYS 402', due: 'In 3 days', status: 'in-progress' },
    { id: '3', title: 'Read Chapter 5', course: 'CS 201', due: 'Next week', status: 'completed' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Tasks</h1>
          <p className="text-[var(--muted)]">Manage your assignments and homework.</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-[var(--border)]">
            {tasks.map(task => (
              <Link href={`/student/tasks/${task.id}`} key={task.id} className="block hover:bg-[var(--fade)] transition-colors p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${task.status === 'completed' ? 'bg-[var(--contrast)] border-[var(--contrast)] text-white' : 'border-[var(--muted)]'}`}>
                      {task.status === 'completed' && <CheckSquare className="w-3 h-3" />}
                    </div>
                    <div>
                      <h4 className={`font-medium ${task.status === 'completed' ? 'line-through text-[var(--muted)]' : ''}`}>{task.title}</h4>
                      <p className="text-xs text-[var(--muted)]">{task.course}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <Clock className="w-4 h-4" />
                    {task.due}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
