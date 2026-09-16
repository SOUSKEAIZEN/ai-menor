import React from 'react';
export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl">
      <h1 className="text-4xl font-bold font-manrope mb-8">Security</h1>
      <div className="bg-[var(--elevated)] border border-[var(--border)] rounded-2xl p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[var(--surface)] rounded-full flex items-center justify-center shrink-0 border border-[var(--border)]">
            🔒
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
            <p className="text-[var(--muted)]">All communication between you and your mentors is encrypted in transit and at rest.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[var(--surface)] rounded-full flex items-center justify-center shrink-0 border border-[var(--border)]">
            🛡️
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">SOC 2 Compliant</h3>
            <p className="text-[var(--muted)]">Our infrastructure meets the highest standards for security, availability, and confidentiality.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
