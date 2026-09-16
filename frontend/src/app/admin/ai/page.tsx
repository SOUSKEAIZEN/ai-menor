import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Bot, Zap, Shield, Database } from 'lucide-react';

export default function AIPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="AI Management" description="Configure and monitor AI models, prompts, and safety" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex flex-col gap-2">
            <Bot className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-[var(--muted)]">Active Model</span>
            <span className="font-bold text-lg">GPT-4 Turbo</span>
            <Badge variant="success" className="w-fit">Operational</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-[var(--muted)]">Tokens Used (24h)</span>
            <span className="font-bold text-lg">1.2M</span>
            <span className="text-xs text-[var(--muted)]">~$12.40 estimated</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col gap-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm text-[var(--muted)]">Safety Filters</span>
            <span className="font-bold text-lg">Strict Mode</span>
            <span className="text-xs text-[var(--muted)]">0 blocks today</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col gap-2">
            <Database className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-[var(--muted)]">Vector Store</span>
            <span className="font-bold text-lg">Connected</span>
            <span className="text-xs text-[var(--muted)]">8,391 embeddings</span>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <Card>
          <CardHeader><CardTitle>Prompt Versions</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-[var(--border)] rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">System_Tutor_v3.2</span>
                  <Badge variant="success">Active</Badge>
                </div>
                <p className="text-sm text-[var(--muted)] truncate">You are an academic mentor. Your goal is to guide...</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Evaluation Metrics</CardTitle></CardHeader>
          <CardContent className="h-48 flex items-center justify-center border border-dashed border-[var(--border)] rounded-md text-[var(--muted)]">
            Evaluation Chart Placeholder
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
