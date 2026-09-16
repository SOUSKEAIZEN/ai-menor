import React from 'react';
import { Button } from '@/components/ui/Button';

export default function ForMentorsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl text-center">
      <h1 className="text-5xl md:text-6xl font-bold font-manrope mb-8">Share your expertise. <br/>Multiply your impact.</h1>
      <p className="text-xl text-[var(--fade)] mb-12 max-w-2xl mx-auto">
        Join our network of elite mentors. With our AI handling the basic questions, you focus on high-impact architectural guidance.
      </p>
      <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-[var(--border)]">Apply to Mentor</Button>
    </div>
  );
}
