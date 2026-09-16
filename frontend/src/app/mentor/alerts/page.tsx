import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle, Clock, BookOpen, Target, CheckCircle2 } from 'lucide-react';

const alertCategories = [
  { name: 'Academic', icon: BookOpen, color: 'text-blue-500', count: 5 },
  { name: 'Attendance', icon: Clock, color: 'text-orange-500', count: 3 },
  { name: 'Engagement', icon: AlertTriangle, color: 'text-red-500', count: 2 },
  { name: 'Goal', icon: Target, color: 'text-green-500', count: 1 },
];

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-contrast">Alerts</h2>
          <p className="text-muted">Review and manage student alerts.</p>
        </div>
        <Button>Acknowledge All</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {alertCategories.map((cat) => (
          <Card key={cat.name}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3 rounded-full bg-surface border border-border`}>
                <cat.icon className={`h-6 w-6 ${cat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted">{cat.name}</p>
                <h3 className="text-2xl font-bold">{cat.count}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Alerts</CardTitle>
          <CardDescription>Prioritized list of alerts requiring your attention.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-border rounded-lg hover:bg-surface/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {i % 2 === 0 ? <Clock className="h-5 w-5 text-orange-500" /> : <AlertTriangle className="h-5 w-5 text-red-500" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-contrast">Student Name {i}</h4>
                      <Badge variant={i % 2 === 0 ? "warning" : "danger"}>High Priority</Badge>
                    </div>
                    <p className="text-sm text-muted mt-1">Missed 3 consecutive classes in CS 101.</p>
                    <p className="text-xs text-muted mt-2">Generated 2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto">View Details</Button>
                  <Button variant="secondary" className="w-full sm:w-auto" size="icon"><CheckCircle2 className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}