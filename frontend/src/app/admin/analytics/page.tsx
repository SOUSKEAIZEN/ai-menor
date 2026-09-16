import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Institutional Analytics" description="Data and trends across the platform" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {['Total Enrollment', 'Avg Attendance', 'Risk Interventions', 'Mentor Hours'].map(stat => (
          <Card key={stat}>
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-[var(--muted)]">{stat}</h3>
              <p className="text-3xl font-bold mt-2">--</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Academic Trends</CardTitle></CardHeader>
          <CardContent className="h-72 flex items-center justify-center border border-dashed border-[var(--border)] rounded-md m-6 mt-0 text-[var(--muted)]">
            Trend Chart Placeholder
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Risk Distribution</CardTitle></CardHeader>
          <CardContent className="h-72 flex items-center justify-center border border-dashed border-[var(--border)] rounded-md m-6 mt-0 text-[var(--muted)]">
            Distribution Chart Placeholder
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
