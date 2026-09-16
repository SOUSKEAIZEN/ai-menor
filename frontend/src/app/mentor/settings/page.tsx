import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card } from '@/components/ui/Card';
import { Tabs } from '@/components/ui/Tabs';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Manage app preferences and configurations." />
      <Tabs tabs={[
        { id: 'general', label: 'General', content: <div className="p-4"><Card className="p-4"><p>General settings...</p></Card></div> },
        { id: 'notifications', label: 'Notifications', content: <div className="p-4"><Card className="p-4"><p>Notification preferences...</p></Card></div> },
        { id: 'privacy', label: 'Privacy', content: <div className="p-4"><Card className="p-4"><p>Privacy settings...</p></Card></div> }
      ]} />
    </div>
  );
}
