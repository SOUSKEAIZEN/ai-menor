import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Brain, Code, MessageSquare, LineChart } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    { icon: <Brain />, title: "AI-Powered Code Review", desc: "Get instant feedback on your PRs." },
    { icon: <MessageSquare />, title: "1-on-1 Human Sessions", desc: "Book time with industry leaders." },
    { icon: <Code />, title: "Interactive Workspaces", desc: "Code directly in the browser with your mentor." },
    { icon: <LineChart />, title: "Progress Tracking", desc: "Visualize your skill growth over time." }
  ];

  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <h1 className="text-5xl font-bold font-manrope mb-4 text-center">Features</h1>
      <p className="text-xl text-[var(--fade)] mb-16 text-center max-w-2xl mx-auto">Everything you need to accelerate your career.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <Card key={i} className="bg-[var(--surface)] border-[var(--border)]">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-[var(--elevated)] rounded-xl border border-[var(--border)] text-[var(--contrast)]">
                {f.icon}
              </div>
              <CardTitle className="text-2xl">{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--fade)]">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
