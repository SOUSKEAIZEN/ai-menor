import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Plus, CheckCircle, Clock } from 'lucide-react';

export default function InterventionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-contrast">Interventions</h2>
          <p className="text-muted">Track active intervention plans and their outcomes.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> New Plan</Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Interventions</CardTitle>
            <CardDescription>Plans currently in progress.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="p-4 border border-border rounded-lg space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-contrast">Academic Recovery Plan - Student {i}</h4>
                      <p className="text-sm text-muted">Started Oct 1, 2023 • Target: Nov 15, 2023</p>
                    </div>
                    <Badge variant="ai">In Progress</Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Milestones:</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Attend tutoring twice a week
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <Clock className="h-4 w-4 text-orange-500" /> Submit all remaining assignments
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">Update Progress</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}