import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="space-y-4 flex flex-col justify-center h-full">
      <div className="text-center sm:text-left space-y-1 mb-4">
        <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
        <p className="text-[var(--muted)]">Enter your details below to create your account</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" className="w-full">
          Student
        </Button>
        <Button variant="outline" className="w-full">
          Mentor
        </Button>
      </div>

      <div className="space-y-3 mt-3">
        <div className="space-y-1.5">
          <label className="text-sm font-medium leading-none" htmlFor="name">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="name" placeholder="ABC" type="text" className="pl-9" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium leading-none" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="email" placeholder="name@example.com" type="email" className="pl-9" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium leading-none" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="password" type="password" className="pl-9" placeholder="••••••••" />
          </div>
        </div>
        
        <Button className="w-full mt-4" size="default" asChild>
          <Link href="/verify-email">
            Create Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <p className="px-2 text-center text-xs text-[var(--muted)] mt-4 leading-relaxed">
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

      <p className="px-2 text-center text-sm text-[var(--muted)] mt-2">
        Already have an account?{' '}
        <Link href="/login" className="font-medium text-[var(--main)] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
