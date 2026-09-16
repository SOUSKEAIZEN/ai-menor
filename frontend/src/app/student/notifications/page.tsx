import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Bell } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Notifications</h1>
      
      <Card>
        <CardContent className="p-0 divide-y divide-[var(--border)]">
          <div className="p-4 hover:bg-[var(--fade)] transition-colors">
            <h4 className="font-bold flex items-center gap-2"><Bell className="w-4 h-4 text-[var(--contrast)]" /> Assignment Due Tomorrow</h4>
            <p className="text-sm text-[var(--muted)] mt-1">Calculus Assignment 4 is due tomorrow at 11:59 PM.</p>
          </div>
          <div className="p-4 hover:bg-[var(--fade)] transition-colors opacity-70">
            <h4 className="font-bold flex items-center gap-2"><Bell className="w-4 h-4" /> Grade Updated</h4>
            <p className="text-sm text-[var(--muted)] mt-1">Your Midterm grade for Physics has been posted.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
