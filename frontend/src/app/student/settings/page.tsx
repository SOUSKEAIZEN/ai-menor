import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto mt-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Settings className="w-5 h-5" /> Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-[var(--muted)]">Receive daily summary emails.</p>
            </div>
            <div className="w-12 h-6 bg-[var(--contrast)] rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Dark Mode</h4>
              <p className="text-sm text-[var(--muted)]">Toggle application theme.</p>
            </div>
            <div className="w-12 h-6 bg-[var(--fade)] rounded-full relative cursor-pointer border border-[var(--border)]">
              <div className="w-4 h-4 bg-[var(--muted)] rounded-full absolute left-1 top-1"></div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-[var(--border)]">
            <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-500/10 hover:text-red-500">Sign Out</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
