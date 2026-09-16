"use client";
import React from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <PageHeader title="Platform Settings" description="Configure global application preferences and parameters." />

      <Card>
        <CardHeader>
          <CardTitle>Institution Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--contrast)]">Institution Name</label>
              <Input defaultValue="AI mentor University" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--contrast)]">Short Code</label>
              <Input defaultValue="AEV" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--contrast)]">Contact Email</label>
              <Input defaultValue="support@aevora.edu" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--contrast)]">Timezone</label>
              <select className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-md px-3 py-2 text-sm text-[var(--contrast)] outline-none focus:border-[var(--main)]">
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC+0 (London)</option>
              </select>
            </div>
          </div>
          <div className="pt-4 flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security & Authentication</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
            <div>
              <p className="font-medium text-[var(--contrast)]">Single Sign-On (SSO)</p>
              <p className="text-sm text-[var(--muted)]">Allow users to log in using identity providers (SAML, OAuth).</p>
            </div>
            <div className="w-10 h-5 bg-[var(--main)] rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5" />
            </div>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
            <div>
              <p className="font-medium text-[var(--contrast)]">Require Two-Factor Auth (2FA)</p>
              <p className="text-sm text-[var(--muted)]">Enforce 2FA for all administrative accounts.</p>
            </div>
            <div className="w-10 h-5 bg-[var(--main)] rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5" />
            </div>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-[var(--contrast)]">Session Timeout</p>
              <p className="text-sm text-[var(--muted)]">Automatically log out inactive users.</p>
            </div>
            <select className="bg-[var(--surface)] border border-[var(--border)] rounded-md px-3 py-1.5 text-sm text-[var(--contrast)] outline-none">
              <option>15 Minutes</option>
              <option>30 Minutes</option>
              <option>1 Hour</option>
              <option>4 Hours</option>
            </select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
