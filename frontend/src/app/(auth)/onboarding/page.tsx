import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { User, Briefcase, GraduationCap, MapPin, ArrowRight } from 'lucide-react';

export default function OnboardingPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Complete your profile</h1>
        <p className="text-[var(--muted)]">
          Tell us a bit more about yourself to get the best experience.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="firstName">
              First name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
              <Input id="firstName" placeholder="John" className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="lastName">
              Last name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
              <Input id="lastName" placeholder="Doe" className="pl-9" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="role">
            Current Role
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="role" placeholder="e.g. Software Engineer" className="pl-9" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="education">
            Education / Institution
          </label>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="education" placeholder="e.g. Stanford University" className="pl-9" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="location">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-[var(--muted)]" />
            <Input id="location" placeholder="e.g. San Francisco, CA" className="pl-9" />
          </div>
        </div>
        
        <Button className="w-full mt-6" size="lg" asChild>
          <Link href="/student/dashboard">
            Complete Profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/student/dashboard" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--main)]">
          Skip for now
        </Link>
      </div>
    </div>
  );
}
