import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { UserCircle, Mail, MessageSquare } from 'lucide-react';

export default function MentorPage() {
  return (
    <div className="space-y-6 flex justify-center mt-10">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-24 h-24 rounded-full bg-[var(--fade)] mx-auto mb-4 flex items-center justify-center border-4 border-[var(--surface)] shadow-lg">
            <UserCircle className="w-16 h-16 text-[var(--muted)]" />
          </div>
          <CardTitle className="text-2xl">Dr. Sarah Jenkins</CardTitle>
          <p className="text-[var(--contrast)] font-medium mt-1">Academic Advisor</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-[var(--muted)] text-sm">
            Ph.D. in Physics. Expert in guiding STEM students towards academic excellence and career preparation.
          </p>
          <div className="flex gap-4">
            <Button className="flex-1 gap-2"><MessageSquare className="w-4 h-4" /> Message</Button>
            <Button variant="outline" className="flex-1 gap-2"><Mail className="w-4 h-4" /> Email</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
