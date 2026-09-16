"use client";
import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Search, Filter, Download } from 'lucide-react';

const logs = [
  { id: 'AL-1092', timestamp: '2026-09-16 14:32:01', actor: 'admin@aevora.com', action: 'UPDATE', resource: 'UserRole (ID: 402)', result: 'SUCCESS' },
  { id: 'AL-1091', timestamp: '2026-09-16 14:15:22', actor: 'system', action: 'SYNC', resource: 'VectorDB_Pinecone', result: 'SUCCESS' },
  { id: 'AL-1090', timestamp: '2026-09-16 13:45:10', actor: 'jsmith@faculty.edu', action: 'UPLOAD', resource: 'Document (Syllabus.pdf)', result: 'SUCCESS' },
  { id: 'AL-1089', timestamp: '2026-09-16 13:42:05', actor: 'jsmith@faculty.edu', action: 'LOGIN', resource: 'AuthSession', result: 'FAILED' },
  { id: 'AL-1088', timestamp: '2026-09-16 12:00:00', actor: 'cron', action: 'EXECUTE', resource: 'DailyReportJob', result: 'SUCCESS' },
];

export default function AuditLogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader title="Audit Logs" description="Review system activity, administrative actions, and security events." />
        <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export CSV</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-[var(--border)] flex gap-4 bg-[var(--surface)]">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
              <Input placeholder="Search logs by actor, action, or resource..." className="pl-9" />
            </div>
            <Input type="date" className="w-auto" />
            <Button variant="outline" size="icon"><Filter className="w-4 h-4" /></Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left font-mono">
              <thead className="text-xs text-[var(--muted)] uppercase bg-[var(--elevated)] border-b border-[var(--border)] font-sans">
                <tr>
                  <th className="px-6 py-4 font-medium">Timestamp</th>
                  <th className="px-6 py-4 font-medium">Actor</th>
                  <th className="px-6 py-4 font-medium">Action</th>
                  <th className="px-6 py-4 font-medium">Resource</th>
                  <th className="px-6 py-4 font-medium">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-[var(--elevated)] transition-colors">
                    <td className="px-6 py-3 text-[var(--muted)] text-xs">{log.timestamp}</td>
                    <td className="px-6 py-3 text-[var(--contrast)] text-xs">{log.actor}</td>
                    <td className="px-6 py-3">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded bg-[var(--elevated)] border border-[var(--border)] ${
                        log.action === 'UPDATE' ? 'text-blue-500' :
                        log.action === 'UPLOAD' ? 'text-purple-500' :
                        log.action === 'FAILED' ? 'text-red-500' : 'text-[var(--contrast)]'
                      }`}>
                        {log.action}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-[var(--contrast)] text-xs">{log.resource}</td>
                    <td className="px-6 py-3">
                      <span className={`text-xs ${log.result === 'SUCCESS' ? 'text-green-500' : 'text-red-500'}`}>
                        {log.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
