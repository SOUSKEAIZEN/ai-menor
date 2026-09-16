import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail, ArrowLeft, KeyRound } from 'lucide-react';

export default function ForgotPasswordPage() {
  return (
    <div className="space-y-6">
      <div className="w-12 h-12 bg-[var(--surface)] text-[var(--main)] rounded-xl flex items-center justify-center mb-6">
        <KeyRound size={24} />
      </div>

      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Forgot password?</h1>
        <p className="text-[var(--muted)]">
          No worries, we&apos;ll send you reset instructions.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="email" placeholder="name@example.com" type="email" className="pl-9" />
          </div>
        </div>
        
        <Button className="w-full mt-6" size="lg" asChild>
          <Link href="/reset-password">
            Reset password
          </Link>
        </Button>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/login" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--main)] flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to log in
        </Link>
      </div>
    </div>
  );
}
