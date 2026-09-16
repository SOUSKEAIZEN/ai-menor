import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function MeetingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <PageHeader title="Meetings" description="Schedule and manage student meetings." />
         <Button>Schedule Meeting</Button>
      </div>
      <Card title="Upcoming Meetings" className="p-4">
         <div className="space-y-3">
            <div className="p-3 border border-[var(--border)] rounded-md flex justify-between items-center">
               <div>
                  <div className="font-medium">1:1 with ABC</div>
                  <div className="text-xs text-[var(--muted)]">Tomorrow, 10:00 AM - 10:30 AM</div>
               </div>
               <Button variant="outline" size="sm">Join Video</Button>
            </div>
         </div>
      </Card>
    </div>
  );
}
