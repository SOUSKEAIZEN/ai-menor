import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-xl">
      <h1 className="text-4xl font-bold font-manrope mb-4 text-center">Contact Us</h1>
      <p className="text-[var(--fade)] text-center mb-12">Have a question? We'd love to hear from you.</p>
      
      <form className="space-y-6 bg-[var(--surface)] p-8 rounded-3xl border border-[var(--border)]">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <Input placeholder="ESHA KHANNA" className="bg-[var(--background)]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <Input type="email" placeholder="jane@example.com" className="bg-[var(--background)]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea 
            className="flex w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm placeholder:text-[var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--contrast)] min-h-[120px]"
            placeholder="How can we help?"
          ></textarea>
        </div>
        <Button className="w-full">Send Message</Button>
      </form>
    </div>
  );
}
