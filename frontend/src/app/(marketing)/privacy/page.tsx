import React from 'react';
export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl prose prose-invert">
      <h1 className="text-4xl font-bold font-manrope mb-8">Privacy Policy</h1>
      <p className="text-[var(--muted)] mb-4">Last updated: September 16, 2026</p>
      <div className="space-y-6 text-[var(--muted)]">
        <p>At AI mentor, we take your privacy seriously. This policy describes how we collect, use, and handle your personal information.</p>
        <h2 className="text-2xl font-bold text-[var(--main)] mt-8 mb-4">Data Collection</h2>
        <p>We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us.</p>
        <h2 className="text-2xl font-bold text-[var(--main)] mt-8 mb-4">How We Use Data</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, specifically to personalize your AI mentorship experience.</p>
      </div>
    </div>
  );
}
