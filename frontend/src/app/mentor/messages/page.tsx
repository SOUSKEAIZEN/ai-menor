import React from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Search, Send, Paperclip } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-12rem)] flex gap-4">
      {/* Sidebar */}
      <Card className="w-1/3 flex flex-col overflow-hidden hidden md:flex">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted" />
            <Input type="search" placeholder="Search messages..." className="pl-8" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`p-4 border-b border-border cursor-pointer hover:bg-surface/50 ${i === 1 ? 'bg-surface/80' : ''}`}>
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold text-sm">Student Name {i}</span>
                <span className="text-xs text-muted">10:42 AM</span>
              </div>
              <p className="text-sm text-muted truncate">Thanks for the feedback on my recent essay...</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-border flex justify-between items-center bg-surface/50">
          <div>
            <h3 className="font-semibold text-contrast">Student Name 1</h3>
            <p className="text-xs text-green-500">Online</p>
          </div>
          <Button variant="outline" size="sm">View Profile</Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex justify-center">
            <span className="text-xs text-muted bg-surface px-2 py-1 rounded-full">Today</span>
          </div>
          <div className="flex gap-3 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-blend flex items-center justify-center text-xs font-bold text-main shrink-0">S1</div>
            <div className="bg-surface border border-border p-3 rounded-2xl rounded-tl-none text-sm text-contrast">
              Hi Mentor, I was wondering if we could reschedule our meeting for tomorrow?
            </div>
          </div>
          <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-main flex items-center justify-center text-xs font-bold text-white shrink-0">M</div>
            <div className="bg-main text-white p-3 rounded-2xl rounded-tr-none text-sm">
              Sure! Does 3 PM work for you?
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border bg-surface/50">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="shrink-0"><Paperclip className="h-5 w-5" /></Button>
            <Input placeholder="Type a message..." className="flex-1" />
            <Button size="icon" className="shrink-0"><Send className="h-4 w-4" /></Button>
          </div>
        </div>
      </Card>
    </div>
  );
}