import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function AuditLogsPage() {
  const logs = [
    { id: 1, time: '2026-09-16 10:24', actor: 'admin@aevora.edu', action: 'CREATE', resource: 'User', status: 'Success' },
    { id: 2, time: '2026-09-16 10:15', actor: 'system', action: 'UPDATE', resource: 'VectorIndex', status: 'Success' },
    { id: 3, time: '2026-09-16 09:45', actor: 'j.doe@aevora.edu', action: 'DELETE', resource: 'Document', status: 'Failed' },
    { id: 4, time: '2026-09-16 08:30', actor: 'admin@aevora.edu', action: 'LOGIN', resource: 'Session', status: 'Success' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Audit Logs" description="Security and system activity records" />

      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b border-[var(--border)] flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--muted)]" />
              <Input placeholder="Search logs..." className="pl-9" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[var(--fade)] text-[var(--muted)] uppercase">
                <tr>
                  <th className="px-6 py-3">Timestamp</th>
                  <th className="px-6 py-3">Actor</th>
                  <th className="px-6 py-3">Action</th>
                  <th className="px-6 py-3">Resource</th>
                  <th className="px-6 py-3">Result</th>
                </tr>
              </thead>
              <tbody>
                {logs.map(log => (
                  <tr key={log.id} className="border-b border-[var(--border)] hover:bg-[var(--fade)]/50">
                    <td className="px-6 py-4 whitespace-nowrap text-[var(--muted)]">{log.time}</td>
                    <td className="px-6 py-4 font-medium">{log.actor}</td>
                    <td className="px-6 py-4"><span className="text-xs font-mono bg-[var(--fade)] px-2 py-1 rounded">{log.action}</span></td>
                    <td className="px-6 py-4">{log.resource}</td>
                    <td className="px-6 py-4">
                      <Badge variant={log.status === 'Success' ? 'success' : 'danger'}>{log.status}</Badge>
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
