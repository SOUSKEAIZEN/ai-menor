"use client";
import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/Card';
import { CheckCircle2, Server, Database, Globe, Cpu, Clock, BellRing } from 'lucide-react';

export default function SystemPage() {
  const services = [
    { name: 'Frontend Application', icon: Globe, status: 'Operational', uptime: '99.99%', latency: '45ms' },
    { name: 'Core API Services', icon: Server, status: 'Operational', uptime: '99.95%', latency: '120ms' },
    { name: 'PostgreSQL Database', icon: Database, status: 'Operational', uptime: '99.99%', latency: '15ms' },
    { name: 'AI Inference Engine', icon: Cpu, status: 'Operational', uptime: '99.90%', latency: '850ms' },
    { name: 'Background Workers', icon: Clock, status: 'Operational', uptime: '100%', latency: 'N/A' },
    { name: 'Notification Service', icon: BellRing, status: 'Operational', uptime: '99.98%', latency: '35ms' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="System Health" description="Monitor the status and performance of core platform services." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[var(--elevated)] rounded-md border border-[var(--border)]">
                      <Icon className="w-5 h-5 text-[var(--contrast)]" />
                    </div>
                    <h3 className="font-medium text-[var(--contrast)]">{service.name}</h3>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium text-green-500">{service.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm border-t border-[var(--border)] pt-4 mt-2">
                  <div>
                    <p className="text-[var(--muted)] text-xs mb-1">Uptime (30d)</p>
                    <p className="font-medium text-[var(--contrast)]">{service.uptime}</p>
                  </div>
                  <div>
                    <p className="text-[var(--muted)] text-xs mb-1">Avg Latency</p>
                    <p className="font-medium text-[var(--contrast)]">{service.latency}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
