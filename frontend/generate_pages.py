import os

base_dir = "/Users/aizen/Desktop/caps/ai-menor/src/app/(marketing)"

files = {
    f"{base_dir}/layout.tsx": """import React from 'react';
import Link from 'next/link';
import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--main)] font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-[var(--main)]" />
            <span className="font-bold text-xl tracking-tight">Aevora Mentor</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[var(--fade)]">
            <Link href="/features" className="hover:text-[var(--main)] transition-colors">Features</Link>
            <Link href="/how-it-works" className="hover:text-[var(--main)] transition-colors">How it Works</Link>
            <Link href="/for-students" className="hover:text-[var(--main)] transition-colors">Students</Link>
            <Link href="/for-mentors" className="hover:text-[var(--main)] transition-colors">Mentors</Link>
            <Link href="/about" className="hover:text-[var(--main)] transition-colors">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
            <Button variant="default">Get Started</Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--fade)]">
        <div className="container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-6 w-6 text-[var(--main)]" />
              <span className="font-bold text-lg text-[var(--main)]">Aevora</span>
            </div>
            <p className="text-sm">Intelligent mentoring for the modern era.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--main)] mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-[var(--main)]">Features</Link></li>
              <li><Link href="/how-it-works" className="hover:text-[var(--main)]">How it Works</Link></li>
              <li><Link href="/pricing" className="hover:text-[var(--main)]">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--main)] mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[var(--main)]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--main)]">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--main)]">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--main)] mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-[var(--main)]">Privacy Policy</Link></li>
              <li><Link href="/security" className="hover:text-[var(--main)]">Security</Link></li>
              <li><Link href="/terms" className="hover:text-[var(--main)]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--border)] py-6 mt-8">
          <p className="text-center text-sm text-[var(--muted)]">© 2026 Aevora Mentor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
""",
    f"{base_dir}/page.tsx": """'use client';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import { Brain, Users, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full pt-24 pb-32 px-4 text-center max-w-5xl mx-auto flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge variant="secondary" className="mb-6 py-1.5 px-4 rounded-full bg-[var(--elevated)] border border-[var(--border)] text-[var(--main)]">
            <Sparkles className="w-4 h-4 mr-2 inline" /> Introducing Aevora 2.0
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-manrope text-[var(--main)]">
            Intelligent Mentoring, <br/>
            <span className="text-[var(--fade)]">Elevated.</span>
          </h1>
          <p className="text-xl text-[var(--fade)] mb-10 max-w-2xl mx-auto">
            Experience the synergy of AI precision and human empathy. Aevora connects you with top-tier mentors and accelerates your learning with intelligent insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full group">
              Start Learning <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-full">
              Explore Features
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Abstract Dashboard / Mock Conversation */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl overflow-hidden"
        >
          <div className="h-12 border-b border-[var(--border)] bg-[var(--elevated)] flex items-center px-4 space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8 bg-[var(--surface)]">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--elevated)] flex items-center justify-center shrink-0 border border-[var(--border)]">
                  <span className="text-sm font-bold">You</span>
                </div>
                <div className="bg-[var(--elevated)] p-4 rounded-2xl rounded-tl-sm text-[var(--fade)] border border-[var(--border)]">
                  How can I optimize this React component for better rendering performance?
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--contrast)] text-[var(--background)] flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="bg-[var(--background)] p-4 rounded-2xl rounded-tl-sm text-[var(--main)] border border-[var(--border)] shadow-sm">
                  Let's analyze the re-renders. I notice you're passing a new object reference in the props on every render. We should memoize that with `useMemo`. Here's a rewritten snippet...
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-[var(--border)] pt-8 md:pt-0">
              <h3 className="text-2xl font-bold font-manrope">AI Co-pilot</h3>
              <p className="text-[var(--fade)]">Get instant, context-aware assistance while you learn. The AI mentor understands your codebase and helps you push through blockers immediately.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-[var(--main)]"><Zap className="w-5 h-5 mr-3 text-[var(--contrast)]" /> Real-time code analysis</li>
                <li className="flex items-center text-[var(--main)]"><Zap className="w-5 h-5 mr-3 text-[var(--contrast)]" /> Personalized learning paths</li>
                <li className="flex items-center text-[var(--main)]"><Zap className="w-5 h-5 mr-3 text-[var(--contrast)]" /> 24/7 unblocking</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Pillars */}
      <section className="w-full bg-[var(--elevated)] py-32 border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-manrope mb-4">The Triad of Success</h2>
            <p className="text-[var(--fade)] max-w-2xl mx-auto">Aevora brings together the three essential elements for unparalleled growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[var(--surface)] border-[var(--border)] hover:border-[var(--contrast)] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--background)] rounded-xl flex items-center justify-center mb-4 border border-[var(--border)]">
                  <Users className="w-6 h-6 text-[var(--contrast)]" />
                </div>
                <CardTitle className="font-manrope text-xl">The Student</CardTitle>
              </CardHeader>
              <CardContent className="text-[var(--fade)]">
                Driven by curiosity. You set the goals, we provide the ultimate environment for you to thrive and achieve mastery.
              </CardContent>
            </Card>
            <Card className="bg-[var(--surface)] border-[var(--border)] hover:border-[var(--contrast)] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--background)] rounded-xl flex items-center justify-center mb-4 border border-[var(--border)]">
                  <Brain className="w-6 h-6 text-[var(--contrast)]" />
                </div>
                <CardTitle className="font-manrope text-xl">AI Mentor</CardTitle>
              </CardHeader>
              <CardContent className="text-[var(--fade)]">
                Always available. Analyzes your learning patterns, provides instant feedback, and curates customized study materials.
              </CardContent>
            </Card>
            <Card className="bg-[var(--surface)] border-[var(--border)] hover:border-[var(--contrast)] transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--background)] rounded-xl flex items-center justify-center mb-4 border border-[var(--border)]">
                  <ShieldCheck className="w-6 h-6 text-[var(--contrast)]" />
                </div>
                <CardTitle className="font-manrope text-xl">Human Mentor</CardTitle>
              </CardHeader>
              <CardContent className="text-[var(--fade)]">
                Industry veterans who provide strategic guidance, review complex architectures, and offer career-defining advice.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
""",
    f"{base_dir}/about/page.tsx": """import React from 'react';
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-5xl font-bold font-manrope mb-8 text-[var(--main)]">About Aevora Mentor</h1>
      <p className="text-xl text-[var(--fade)] mb-8 leading-relaxed">
        We built Aevora to bridge the gap between self-paced learning and expensive bootcamps. By combining the immediacy of AI with the irreplaceable insight of human experts, we're redefining how knowledge is transferred.
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
""",
    f"{base_dir}/features/page.tsx": """import React from 'react';
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
""",
    f"{base_dir}/how-it-works/page.tsx": """import React from 'react';
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
""",
    f"{base_dir}/for-students/page.tsx": """import React from 'react';
import { Button } from '@/components/ui/Button';

export default function ForStudentsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl text-center">
      <h1 className="text-5xl md:text-6xl font-bold font-manrope mb-8">Level up your skills. <br/>Faster than ever.</h1>
      <p className="text-xl text-[var(--fade)] mb-12 max-w-2xl mx-auto">
        Stop getting stuck on tutorials. Start building real applications with intelligent guidance every step of the way.
      </p>
      <Button size="lg" className="rounded-full h-14 px-8 text-lg">Join as a Student</Button>
    </div>
  );
}
""",
    f"{base_dir}/for-mentors/page.tsx": """import React from 'react';
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
""",
    f"{base_dir}/privacy/page.tsx": """import React from 'react';
export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-3xl prose prose-invert">
      <h1 className="text-4xl font-bold font-manrope mb-8">Privacy Policy</h1>
      <p className="text-[var(--fade)] mb-4">Last updated: September 16, 2026</p>
      <div className="space-y-6 text-[var(--fade)]">
        <p>At Aevora Mentor, we take your privacy seriously. This policy describes how we collect, use, and handle your personal information.</p>
        <h2 className="text-2xl font-bold text-[var(--main)] mt-8 mb-4">Data Collection</h2>
        <p>We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us.</p>
        <h2 className="text-2xl font-bold text-[var(--main)] mt-8 mb-4">How We Use Data</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, specifically to personalize your AI mentorship experience.</p>
      </div>
    </div>
  );
}
""",
    f"{base_dir}/security/page.tsx": """import React from 'react';
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
            <p className="text-[var(--fade)]">All communication between you and your mentors is encrypted in transit and at rest.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[var(--surface)] rounded-full flex items-center justify-center shrink-0 border border-[var(--border)]">
            🛡️
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">SOC 2 Compliant</h3>
            <p className="text-[var(--fade)]">Our infrastructure meets the highest standards for security, availability, and confidentiality.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
""",
    f"{base_dir}/contact/page.tsx": """import React from 'react';
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
          <Input placeholder="Jane Doe" className="bg-[var(--background)]" />
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
"""
}

for filepath, content in files.items():
    with open(filepath, 'w') as f:
        f.write(content)

print("Created all pages.")
