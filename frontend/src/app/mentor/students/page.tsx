"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Search, Filter, MoreHorizontal, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-contrast">Students</h2>
          <p className="text-muted">Manage your student roster and monitor progress.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
          <Button>Add Student</Button>
        </div>
      </div>

      <Card>
        <CardHeader className="py-4">
          <div className="flex items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted" />
              <Input type="search" placeholder="Search students..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted uppercase bg-surface border-b border-border">
                <tr>
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Progress</th>
                  <th className="px-6 py-3 font-medium">Last Contact</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="bg-background border-b border-border hover:bg-fade/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-contrast">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blend flex items-center justify-center text-main font-bold text-xs">
                          JD
                        </div>
                        <div>
                          <div className="font-semibold">Jane Doe {i}</div>
                          <div className="text-xs text-muted">B.S. Computer Science</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={i % 2 === 0 ? "success" : "warning"}>
                        {i % 2 === 0 ? "On Track" : "At Risk"}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-full bg-surface rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-main h-2.5 rounded-full" style={{ width: `${50 + i * 10}%` }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted">2 days ago</td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/mentor/students/${i}`}>
                        <Button variant="ghost" size="sm">
                          View <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
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