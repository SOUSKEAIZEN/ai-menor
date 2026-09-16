import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search, Send } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="space-y-6 h-[calc(100vh-10rem)] flex flex-col">
      <PageHeader title="Messages" />
      <div className="flex-1 flex gap-6 overflow-hidden">
         <Card className="w-1/3 flex flex-col">
            <div className="p-4 border-b border-[var(--border)]">
               <div className="relative">
                  <Search className="absolute left-3 top-2.5 text-[var(--muted)]" size={16} />
                  <Input placeholder="Search messages..." className="pl-9 text-sm" />
               </div>
            </div>
            <div className="flex-1 overflow-y-auto">
               <div className="p-4 border-b border-[var(--border)] bg-[var(--fade)] cursor-pointer">
                  <div className="font-medium text-sm">ABC</div>
                  <div className="text-xs text-[var(--muted)] truncate">Thanks for the help today!</div>
               </div>
               <div className="p-4 border-b border-[var(--border)] hover:bg-[var(--fade)] cursor-pointer">
                  <div className="font-medium text-sm">ABC</div>
                  <div className="text-xs text-[var(--muted)] truncate">Can we reschedule?</div>
               </div>
            </div>
         </Card>
         <Card className="flex-1 flex flex-col">
            <div className="p-4 border-b border-[var(--border)]">
               <h3 className="font-bold">ABC</h3>
               <p className="text-xs text-[var(--muted)]">Computer Science Student</p>
            </div>
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
               <div className="self-end bg-[var(--fade)] p-3 rounded-lg max-w-[70%]">
                  <p className="text-sm">Make sure you review chapter 4 before the quiz.</p>
               </div>
               <div className="self-start bg-[var(--surface)] border border-[var(--border)] p-3 rounded-lg max-w-[70%]">
                  <p className="text-sm">Thanks for the help today! I will review it.</p>
               </div>
            </div>
            <div className="p-4 border-t border-[var(--border)] flex gap-2">
               <Input placeholder="Type a message..." className="flex-1" />
               <Button><Send size={16} /></Button>
            </div>
         </Card>
      </div>
    </div>
  );
}
