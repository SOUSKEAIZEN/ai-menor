import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function InterventionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <PageHeader title="Interventions" description="Track and manage student interventions." />
         <Button>Create Intervention</Button>
      </div>
      <Card title="Active Interventions" className="p-4">
         <p className="text-[var(--muted)] text-sm mb-4">You have 3 active interventions.</p>
         <div className="space-y-2">
            <div className="p-3 border border-[var(--border)] rounded-md flex justify-between items-center">
               <div>
                  <div className="font-medium">ABC - Tutoring Required</div>
                  <div className="text-xs text-[var(--muted)]">Follow-up on Oct 12</div>
               </div>
               <Button variant="outline" size="sm">Update</Button>
            </div>
         </div>
      </Card>
    </div>
  );
}
