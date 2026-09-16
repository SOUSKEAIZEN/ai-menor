import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { CalendarCheck, AlertCircle } from 'lucide-react';

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Attendance</h1>
      <p className="text-[var(--muted)]">Keep track of your class presence.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-[var(--border)] rounded-lg text-[var(--muted)]">
              [Calendar Component: Highlighting present/absent days]
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 text-center">
              <CalendarCheck className="w-12 h-12 mx-auto text-[var(--contrast)] mb-4" />
              <div className="text-4xl font-bold">94%</div>
              <p className="text-sm text-[var(--muted)] mt-2">Overall Attendance Rate</p>
            </CardContent>
          </Card>
          
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="p-4 flex gap-4">
              <AlertCircle className="text-red-500 shrink-0" />
              <div>
                <h4 className="font-bold text-red-500">Warning</h4>
                <p className="text-sm mt-1">You have missed 2 consecutive classes for Quantum Physics.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
