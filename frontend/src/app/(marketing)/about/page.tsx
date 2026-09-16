import React from 'react';
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-5xl font-bold font-manrope mb-8 text-[var(--main)]">About AI mentor</h1>
      <p className="text-xl text-[var(--fade)] mb-8 leading-relaxed">
        We built AI mentor to bridge the gap between self-paced learning and expensive bootcamps. By combining the immediacy of AI with the irreplaceable insight of human experts, we're redefining how knowledge is transferred.
      </p>
      <div className="h-64 bg-[var(--elevated)] rounded-3xl border border-[var(--border)] flex items-center justify-center mb-12">
        <span className="text-[var(--muted)] font-manrope">Team Photo placeholder</span>
      </div>
      <h2 className="text-3xl font-bold font-manrope mb-6 text-[var(--main)]">Our Mission</h2>
      <p className="text-[var(--fade)] leading-relaxed mb-8">
        To empower every individual with accessible, intelligent, and personalized mentorship, enabling them to build the future.
      </p>
    </div>
  );
}
