import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="text-center sm:text-left space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
        <p className="text-[var(--muted)]">Enter your details below to create your account</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full">
          Student
        </Button>
        <Button variant="outline" className="w-full">
          Mentor
        </Button>
      </div>

      <div className="space-y-4 mt-6">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="name">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="name" placeholder="John Doe" type="text" className="pl-9" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="email" placeholder="name@example.com" type="email" className="pl-9" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="password" type="password" className="pl-9" placeholder="••••••••" />
          </div>
        </div>
        
        <Button className="w-full mt-6" size="lg" asChild>
          <Link href="/verify-email">
            Create Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <p className="px-8 text-center text-sm text-[var(--muted)] mt-8">
        By clicking continue, you agree to our{' '}
        <Link href="/terms" className="underline underline-offset-4 hover:text-[var(--main)]">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-[var(--main)]">
          Privacy Policy
        </Link>
        .
      </p>

      <p className="px-8 text-center text-sm text-[var(--muted)]">
        Already have an account?{' '}
        <Link href="/login" className="font-medium text-[var(--main)] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
