import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Calendar as CalendarIcon, Clock, Video, Plus } from 'lucide-react';

export default function MeetingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-contrast">Meetings</h2>
          <p className="text-muted">Schedule and manage your 1-on-1 sessions.</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> Schedule Meeting</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-border rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-blend text-main p-3 rounded-lg text-center min-w-[60px]">
                        <div className="text-xs font-semibold uppercase">Oct</div>
                        <div className="text-lg font-bold">{12 + i}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-contrast">Check-in: Student {i}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted mt-1">
                          <Clock className="h-4 w-4" /> 2:00 PM - 2:30 PM
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted mt-1">
                          <Video className="h-4 w-4" /> Zoom Link
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Reschedule</Button>
                      <Button size="sm">Join</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Quick view of your schedule.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] flex items-center justify-center border border-border rounded-lg bg-surface/50 text-muted text-sm">
                [Calendar Component Placeholder]
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}