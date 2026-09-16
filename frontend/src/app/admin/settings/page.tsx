import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Platform configuration and preferences" />

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="institution">Institution</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-6">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Platform Settings</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 items-center gap-4 border-b border-[var(--border)] pb-4">
                    <div className="col-span-1">
                      <p className="font-medium">Maintenance Mode</p>
                      <p className="text-sm text-[var(--muted)]">Disable access for non-admins</p>
                    </div>
                    <div className="col-span-2 flex justify-end">
                      <div className="w-10 h-6 bg-[var(--fade)] rounded-full border border-[var(--border)]"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4 border-b border-[var(--border)] pb-4">
                    <div className="col-span-1">
                      <p className="font-medium">Default Language</p>
                    </div>
                    <div className="col-span-2 flex justify-end">
                       <select className="bg-[var(--surface)] border border-[var(--border)] rounded px-3 py-1.5 text-sm">
                         <option>English (US)</option>
                       </select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
