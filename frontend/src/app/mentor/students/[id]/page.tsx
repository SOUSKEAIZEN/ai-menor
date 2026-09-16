"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Mail, Calendar, Activity, BookOpen, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function StudentDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/mentor/students">
          <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
        </Link>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-contrast">Jane Doe</h2>
          <p className="text-muted">B.S. Computer Science • Sophomore</p>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline"><Mail className="mr-2 h-4 w-4" /> Message</Button>
          <Button><Calendar className="mr-2 h-4 w-4" /> Schedule</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-muted">Status</div>
                <Badge variant="warning" className="mt-1">At Risk</Badge>
              </div>
              <div>
                <div className="text-sm text-muted">GPA</div>
                <div className="font-semibold text-contrast">3.1</div>
              </div>
              <div>
                <div className="text-sm text-muted">Last Meeting</div>
                <div className="font-semibold text-contrast">Oct 12, 2023</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Missed Assignment</p>
                  <p className="text-xs text-muted">CS 201 - Data Structures</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Progress</CardTitle>
              <CardDescription>Credit completion and GPA trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-border rounded-lg bg-surface/50 text-muted">
                [Recharts Line Graph Here]
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-main"></div>
                    <div>
                      <p className="text-sm font-medium">Meeting Notes Added</p>
                      <p className="text-sm text-muted">Discussed study habits and upcoming midterms.</p>
                      <p className="text-xs text-muted mt-1">2 days ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}