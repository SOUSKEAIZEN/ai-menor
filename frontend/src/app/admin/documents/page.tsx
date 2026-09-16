"use client";
import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Upload, FileText, MoreHorizontal, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const docs = [
  { id: 1, name: 'CS101_Syllabus_Fall2026.pdf', subject: 'CS101', version: 'v1.2', status: 'Ready', uploaded: '2026-08-15' },
  { id: 2, name: 'University_Policies_2026.docx', subject: 'General', version: 'v3.0', status: 'Processing', uploaded: '2026-09-10' },
  { id: 3, name: 'Math202_Midterm_Guidelines.pdf', subject: 'MATH202', version: 'v1.0', status: 'Ready', uploaded: '2026-09-12' },
  { id: 4, name: 'Physics_Lab_Manual_v2.pdf', subject: 'PHYS101', version: 'v2.0', status: 'Failed', uploaded: '2026-09-15' },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader title="Knowledge Base" description="Manage RAG documents and institutional knowledge." />
        <Button className="flex items-center bg-[var(--main)] text-white hover:opacity-90">
          <Upload className="w-4 h-4 mr-2" /> Upload Document
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-[var(--muted)] uppercase bg-[var(--elevated)] border-b border-[var(--border)]">
              <tr>
                <th className="px-6 py-4 font-medium">Document</th>
                <th className="px-6 py-4 font-medium">Subject</th>
                <th className="px-6 py-4 font-medium">Version</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Uploaded</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {docs.map((doc) => (
                <tr key={doc.id} className="hover:bg-[var(--elevated)] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-[var(--muted)]" />
                      <span className="font-medium text-[var(--contrast)]">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[var(--contrast)]">{doc.subject}</td>
                  <td className="px-6 py-4 text-[var(--muted)]">{doc.version}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1.5">
                      {doc.status === 'Ready' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                      {doc.status === 'Processing' && <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />}
                      {doc.status === 'Failed' && <AlertCircle className="w-4 h-4 text-red-500" />}
                      <span className={`text-sm ${
                        doc.status === 'Ready' ? 'text-green-500' :
                        doc.status === 'Processing' ? 'text-blue-500' : 'text-red-500'
                      }`}>{doc.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[var(--muted)]">{doc.uploaded}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
