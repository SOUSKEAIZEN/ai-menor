import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail, Lock, ArrowRight, User, Shield, GraduationCap } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="space-y-4 flex flex-col justify-center h-full">
      <div className="text-center sm:text-left space-y-1 mb-4">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-[var(--muted)]">Enter your credentials to access your account</p>
      </div>

      <div className="space-y-3">
        <div className="space-y-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="email" placeholder="name@example.com" type="email" className="pl-9" />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
              Password
            </label>
            <Link href="/forgot-password" className="text-sm font-medium text-[var(--main)] hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="password" type="password" className="pl-9" placeholder="••••••••" />
          </div>
        </div>
        
        <Link href="/student/dashboard">
          <Button className="w-full mt-4" size="default">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-[var(--border)]" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[var(--background)] px-2 text-[var(--muted)]">
            Or continue with demo
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Link href="/student/dashboard" className="w-full">
          <Button variant="outline" className="w-full px-0 text-xs sm:text-sm">
            <GraduationCap className="mr-2 h-4 w-4" />
            Student
          </Button>
        </Link>
        <Link href="/mentor/dashboard" className="w-full">
          <Button variant="outline" className="w-full px-0 text-xs sm:text-sm">
            <User className="mr-2 h-4 w-4" />
            Mentor
          </Button>
        </Link>
        <Link href="/admin/dashboard" className="w-full">
          <Button variant="outline" className="w-full px-0 text-xs sm:text-sm">
            <Shield className="mr-2 h-4 w-4" />
            Admin
          </Button>
        </Link>
      </div>

      <p className="px-2 text-center text-sm text-[var(--muted)] mt-4">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="font-medium text-[var(--main)] hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
