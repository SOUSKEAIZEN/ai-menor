import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <PageHeader title="Mentor Profile" description="Manage your personal information and expertise." />
      <Card title="Personal Information" className="p-6">
         <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Full Name</label>
                  <div className="text-sm font-medium">ESHA KHANNA</div>
               </div>
               <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Department</label>
                  <div className="text-sm font-medium">Computer Science</div>
               </div>
               <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Email</label>
                  <div className="text-sm font-medium">jane.doe@university.edu</div>
               </div>
               <div>
                  <label className="block text-xs font-medium text-[var(--muted)] mb-1">Role</label>
                  <div className="text-sm font-medium">Senior Academic Mentor</div>
               </div>
            </div>
         </div>
      </Card>
    </div>
  );
}
