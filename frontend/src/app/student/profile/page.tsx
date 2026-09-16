import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { User } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto mt-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-[var(--fade)] flex items-center justify-center">
              <User className="w-10 h-10 text-[var(--muted)]" />
            </div>
            <Button variant="outline" size="sm">Change Avatar</Button>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">Full Name</label>
            <Input defaultValue="Alex Student" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">Email</label>
            <Input defaultValue="alex@university.edu" type="email" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--muted)]">Student ID</label>
            <Input defaultValue="STU-987654" disabled />
          </div>
          
          <Button className="mt-4">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
