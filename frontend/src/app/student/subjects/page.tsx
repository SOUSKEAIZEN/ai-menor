import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function SubjectsPage() {
  const subjects = [
    { id: '1', name: 'Advanced Calculus', code: 'MATH 301', grade: 'A', status: 'Ongoing' },
    { id: '2', name: 'Quantum Physics', code: 'PHYS 402', grade: 'B+', status: 'Ongoing' },
    { id: '3', name: 'Data Structures', code: 'CS 201', grade: 'A-', status: 'Ongoing' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Subjects</h1>
      <p className="text-[var(--muted)]">Your currently enrolled courses.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map(sub => (
          <Link href={`/student/subjects/${sub.id}`} key={sub.id}>
            <Card className="hover:border-[var(--contrast)] transition-colors cursor-pointer h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-[var(--fade)] flex items-center justify-center text-[var(--contrast)] mb-2">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <Badge variant="outline">{sub.code}</Badge>
                </div>
                <CardTitle className="text-lg">{sub.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-[var(--border)]">
                  <div>
                    <p className="text-xs text-[var(--muted)]">Current Grade</p>
                    <p className="font-bold text-lg">{sub.grade}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[var(--muted)]" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
