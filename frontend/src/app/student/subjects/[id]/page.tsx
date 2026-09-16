import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FileText, Video, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SubjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/student/subjects">
          <Button variant="outline" size="icon"><ArrowLeft className="w-4 h-4" /></Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">Advanced Calculus</h1>
          <div className="flex gap-2 mt-2">
            <Badge>MATH 301</Badge>
            <Badge variant="outline">Current Grade: A</Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--muted)]">This course covers multivariable calculus, including partial derivatives, multiple integrals, and vector calculus.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Materials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-3 hover:bg-[var(--fade)] rounded-lg transition-colors border border-transparent hover:border-[var(--border)] cursor-pointer">
                <FileText className="text-[var(--contrast)]" />
                <div>
                  <p className="font-medium">Chapter 4 Notes: Partial Derivatives</p>
                  <p className="text-xs text-[var(--muted)]">Uploaded 2 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 hover:bg-[var(--fade)] rounded-lg transition-colors border border-transparent hover:border-[var(--border)] cursor-pointer">
                <Video className="text-[var(--contrast)]" />
                <div>
                  <p className="font-medium">Lecture 12 Recording</p>
                  <p className="text-xs text-[var(--muted)]">Uploaded 3 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Assignments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-[var(--fade)] rounded-lg border border-[var(--border)]">
                <h4 className="font-bold">Problem Set 4</h4>
                <p className="text-sm text-red-500 mt-1">Due in 2 days</p>
              </div>
              <div className="p-4 bg-[var(--fade)] rounded-lg border border-[var(--border)]">
                <h4 className="font-bold">Midterm Exam</h4>
                <p className="text-sm text-[var(--muted)] mt-1">Due in 2 weeks</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
