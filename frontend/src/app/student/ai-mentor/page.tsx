import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export default function AIMentorPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Sparkles className="text-[var(--contrast)]" />
            AI Mentor Workspace
          </h1>
          <p className="text-[var(--muted)] mt-1">Your premium 24/7 personalized tutor.</p>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        <Card className="flex-1 flex flex-col overflow-hidden">
          <CardHeader className="border-b border-[var(--border)]">
            <CardTitle>Conversation</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[var(--contrast)]/20 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-[var(--contrast)]" />
              </div>
              <div className="bg-[var(--fade)] p-4 rounded-2xl rounded-tl-sm border border-[var(--border)]">
                <p>Hello! I'm your AI Mentor. I noticed you've been working on Physics lately. Do you want to review the concepts from chapter 4?</p>
              </div>
            </div>
            
            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-[var(--main)] text-[var(--background)] flex items-center justify-center shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div className="bg-[var(--contrast)] text-white p-4 rounded-2xl rounded-tr-sm">
                <p>Yes, I'm having trouble understanding torque.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[var(--contrast)]/20 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-[var(--contrast)]" />
              </div>
              <div className="bg-[var(--fade)] p-4 rounded-2xl rounded-tl-sm border border-[var(--border)] max-w-[80%]">
                <p>No problem! Let's break it down. Torque is the rotational equivalent of linear force...</p>
              </div>
            </div>
          </CardContent>
          <div className="p-4 border-t border-[var(--border)] bg-[var(--surface)]">
            <div className="flex gap-2">
              <Input placeholder="Ask anything..." className="flex-1" />
              <Button size="icon"><Send className="w-4 h-4" /></Button>
            </div>
          </div>
        </Card>
        
        <div className="w-80 hidden lg:flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Suggested Prompts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-left text-sm h-auto py-3">Explain a complex topic</Button>
              <Button variant="outline" className="w-full justify-start text-left text-sm h-auto py-3">Generate practice questions</Button>
              <Button variant="outline" className="w-full justify-start text-left text-sm h-auto py-3">Help me plan my study schedule</Button>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Current Context</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--muted)]">The AI is currently referencing:</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--contrast)]"></span>
                  Physics 101 Syllabus
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--contrast)]"></span>
                  Recent Quiz 3 Results
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
