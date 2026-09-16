import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Mail, ArrowRight, RefreshCw } from 'lucide-react';

export default function VerifyEmailPage() {
  return (
    <div className="space-y-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-[var(--surface)] text-[var(--main)] rounded-2xl flex items-center justify-center mb-4">
        <Mail size={32} />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Check your email</h1>
        <p className="text-[var(--muted)] max-w-sm mx-auto">
          We sent a verification link to <span className="font-medium text-[var(--main)]">name@example.com</span>.
          Please click the link to verify your account.
        </p>
      </div>

      <div className="space-y-4 w-full pt-4">
        <Button className="w-full" size="lg" asChild>
          <Link href="/onboarding">
            Continue to Onboarding
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <Button variant="outline" className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Resend verification email
        </Button>
      </div>

      <p className="text-sm text-[var(--muted)] mt-8">
        Back to{' '}
        <Link href="/login" className="font-medium text-[var(--main)] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
