import React from 'react';
export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-5xl font-bold font-manrope mb-12 text-center">How It Works</h1>
      <div className="space-y-12">
        {[
          { step: "01", title: "Sign Up & Set Goals", desc: "Tell us what you want to learn and your current skill level." },
          { step: "02", title: "Meet Your AI Co-pilot", desc: "Start learning immediately with custom-tailored interactive paths." },
          { step: "03", title: "Match with a Human Mentor", desc: "We'll pair you with a senior developer to guide your big-picture strategy." },
          { step: "04", title: "Build & Iterate", desc: "Build real projects, get reviews, and iterate until you reach mastery." }
        ].map((s, i) => (
          <div key={i} className="flex gap-8 items-start bg-[var(--elevated)] p-8 rounded-3xl border border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--contrast)]/20 font-manrope">{s.step}</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-[var(--fade)]">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
