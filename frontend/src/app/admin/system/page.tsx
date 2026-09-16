import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function SystemPage() {
  const services = [
    { name: 'Frontend Application', status: 'operational', uptime: '99.99%', latency: '45ms' },
    { name: 'Core API Services', status: 'operational', uptime: '99.95%', latency: '120ms' },
    { name: 'PostgreSQL Database', status: 'operational', uptime: '99.99%', latency: '12ms' },
    { name: 'Vector Database', status: 'operational', uptime: '99.90%', latency: '85ms' },
    { name: 'AI Provider (OpenAI)', status: 'degraded', uptime: '98.50%', latency: '1200ms' },
    { name: 'Background Workers', status: 'operational', uptime: '99.99%', latency: '-' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="System Health" description="Real-time status of platform services" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <Card key={service.name}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">{service.name}</CardTitle>
                <Badge variant={service.status === 'operational' ? 'success' : 'warning'}>
                  {service.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mt-4">
                <span className="text-[var(--muted)]">Uptime (30d)</span>
                <span className="font-medium">{service.uptime}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-[var(--muted)]">Latency</span>
                <span className="font-medium">{service.latency}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
