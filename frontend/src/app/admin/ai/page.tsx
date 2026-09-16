"use client";
import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Bot, Settings2, ShieldCheck, Database, SlidersHorizontal } from 'lucide-react';

export default function AIPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader title="AI Management" description="Configure models, prompts, RAG settings, and monitor AI safety." />
        <Button variant="outline"><Settings2 className="w-4 h-4 mr-2" /> Global Settings</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-[var(--main)] shadow-sm shadow-[var(--main)]/10">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-[var(--main)]/10 text-[var(--main)] rounded-lg">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--contrast)]">Current Model</h3>
                <p className="text-sm text-[var(--muted)]">GPT-4o (Default)</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-[var(--muted)]">Latency (avg)</span><span className="font-medium text-[var(--contrast)]">840ms</span></div>
              <div className="flex justify-between"><span className="text-[var(--muted)]">Success Rate</span><span className="font-medium text-[var(--contrast)]">99.8%</span></div>
              <div className="flex justify-between"><span className="text-[var(--muted)]">Tokens Used (30d)</span><span className="font-medium text-[var(--contrast)]">42.5M</span></div>
            </div>
            <Button className="w-full mt-4" variant="outline">Change Model</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--contrast)]">RAG Status</h3>
                <p className="text-sm text-[var(--muted)]">Pinecone Vector DB</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-[var(--muted)]">Total Vectors</span><span className="font-medium text-[var(--contrast)]">1.2M</span></div>
              <div className="flex justify-between"><span className="text-[var(--muted)]">Sync Status</span><span className="font-medium text-green-500">Up to date</span></div>
              <div className="flex justify-between"><span className="text-[var(--muted)]">Last Sync</span><span className="font-medium text-[var(--contrast)]">10 mins ago</span></div>
            </div>
            <Button className="w-full mt-4" variant="outline">Manage Vectors</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-500/10 text-green-500 rounded-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--contrast)]">Safety & Eval</h3>
                <p className="text-sm text-[var(--muted)]">Guardrails Active</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-[var(--muted)]">Blocked Prompts</span><span className="font-medium text-[var(--contrast)]">143 (0.1%)</span></div>
              <div className="flex justify-between"><span className="text-[var(--muted)]">Hallucination Rate</span><span className="font-medium text-[var(--contrast)]">&lt; 0.5%</span></div>
              <div className="flex justify-between"><span className="text-[var(--muted)]">Toxicity Score</span><span className="font-medium text-[var(--contrast)]">0.001</span></div>
            </div>
            <Button className="w-full mt-4" variant="outline">View Safety Logs</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Prompt Versioning</CardTitle>
          <Button variant="ghost" size="icon"><SlidersHorizontal className="w-4 h-4" /></Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'System Core Prompt', version: 'v3.2', status: 'Active (Production)', updated: '2 days ago' },
              { name: 'RAG Context Template', version: 'v1.5', status: 'Active (Production)', updated: '1 week ago' },
              { name: 'Academic Advisor Persona', version: 'v2.0-beta', status: 'A/B Testing (20%)', updated: '5 hours ago' },
            ].map((p, i) => (
              <div key={i} className="flex justify-between items-center p-4 border border-[var(--border)] rounded-lg bg-[var(--elevated)]">
                <div>
                  <h4 className="font-medium text-[var(--contrast)]">{p.name}</h4>
                  <p className="text-xs text-[var(--muted)] mt-1">Version {p.version} • Last updated {p.updated}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${p.status.includes('Active') ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                    {p.status}
                  </span>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
