import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Check, Clock, FileText } from 'lucide-react';
import Link from 'next/link';

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/student/tasks">
          <Button variant="outline" size="icon"><ArrowLeft className="w-4 h-4" /></Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Calculus Assignment 4</h1>
          <p className="text-[var(--muted)]">MATH 301</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Complete problems 1 through 15 on page 142 of the textbook. Show all your work for partial credit.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Submission</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-[var(--border)] rounded-lg p-8 flex flex-col items-center justify-center text-[var(--muted)]">
                <FileText className="w-8 h-8 mb-2" />
                <p>Drag and drop your PDF here, or click to browse</p>
                <Button className="mt-4" variant="outline">Select File</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[var(--muted)]">Due Date</span>
                <span className="flex items-center gap-1 font-medium text-red-500"><Clock className="w-4 h-4" /> Tomorrow, 11:59 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--muted)]">Status</span>
                <span className="font-medium text-yellow-500">Pending</span>
              </div>
              <Button className="w-full mt-4 gap-2"><Check className="w-4 h-4" /> Mark as Complete</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
