import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-contrast">Settings</h2>
        <p className="text-muted">Manage your notification preferences and account settings.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Choose what updates you want to receive.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { title: 'New Alerts', desc: 'Receive an email when a high-priority alert is generated.' },
            { title: 'Student Messages', desc: 'Get notified when a student sends you a message.' },
            { title: 'Meeting Reminders', desc: 'Receive a reminder 15 minutes before a meeting.' },
            { title: 'Weekly Summary', desc: 'Get a weekly digest of your roster\'s activity.' }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0 last:pb-0">
              <div>
                <p className="font-medium text-contrast">{item.title}</p>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
              <div className="w-10 h-6 bg-main rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your password and authentication.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-contrast">Change Password</p>
              <p className="text-sm text-muted">Last changed 3 months ago</p>
            </div>
            <Button variant="outline">Update</Button>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-border">
            <div>
              <p className="font-medium text-contrast">Two-Factor Authentication</p>
              <p className="text-sm text-muted">Add an extra layer of security to your account</p>
            </div>
            <Button variant="outline">Enable</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}