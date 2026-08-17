'use client';

import React from 'react';
import { ArrowDown, Terminal, Send, Database, GitBranch, Sparkles } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
      <div className="max-w-4xl">
        {/* Monospace Greeting */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-green text-sm sm:text-base tracking-wide">
            Hey, my name is
          </span>
          {/* <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-green-tint text-green border border-green/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-ping" />
            <span>Open to Opportunities</span>
          </span> */}
        </div>

        {/* Big Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-lightest tracking-tight leading-none mb-3">
          {portfolioData.personal.name}.
        </h1>

        {/* Big Tagline Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate tracking-tight leading-tight mb-6">
          {portfolioData.personal.tagline}
        </h2>

        {/* Narrative Bio */}
        <p className="text-slate text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
          I&apos;m a <span className="text-green font-medium">Data Engineer </span> and a Master&apos;s Student at the{' '}
          <span className="text-green font-medium">University of Illinois Urbana-Champaign.</span> I enjoy turning messy data into meaningful insights, building things that automate the boring stuff, and solving real-world problems along the way. Occasionally, I spend way too long figuring out why a perfectly good pipeline decided to break :)
        </p>

        {/* Action Buttons */}


        {/* Developer Quick Stats Bar */}
        {/* <div className="mt-14 pt-8 border-t border-navy-lightest grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-navy-light text-green border border-navy-lightest">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs text-slate">FOCUS</div>
              <div className="text-sm font-semibold text-slate-lightest">Data Engineering</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-navy-light text-green border border-navy-lightest">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs text-slate">GRADUATE</div>
              <div className="text-sm font-semibold text-slate-lightest">UIUC MS CS (3.69)</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-navy-light text-green border border-navy-lightest">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs text-slate">EXPERIENCE</div>
              <div className="text-sm font-semibold text-slate-lightest">2+ Yrs Barclays &amp; ADM</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-navy-light text-green border border-navy-lightest">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs text-slate">RESEARCH</div>
              <div className="text-sm font-semibold text-slate-lightest">SMARTHUB &amp; LLMs</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
