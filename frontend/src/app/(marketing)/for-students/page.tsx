import React from 'react';
import { Button } from '@/components/ui/Button';

export default function ForStudentsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl text-center">
      <h1 className="text-5xl md:text-6xl font-bold font-manrope mb-8">Level up your skills. <br/>Faster than ever.</h1>
      <p className="text-xl text-[var(--muted)] mb-12 max-w-2xl mx-auto">
        Stop getting stuck on tutorials. Start building real applications with intelligent guidance every step of the way.
      </p>
      <Button size="lg" className="rounded-full h-14 px-8 text-lg">Join as a Student</Button>
    </div>
  );
}
