'use client';

import React, { useState } from 'react';
import { Folder, Github, ExternalLink, Sparkles, Database, Globe, Cpu, Layers } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'DATA' | 'AI' | 'WEB'>('ALL');
  const [showAllCards, setShowAllCards] = useState(false);

  const featured = portfolioData.featuredProjects;
  const noteworthy = portfolioData.noteworthyProjects;

  const filteredNoteworthy = noteworthy.filter((project) => {
    if (filter === 'ALL') return true;
    const techStr = project.technologies.join(' ').toLowerCase();
    if (filter === 'DATA') return techStr.includes('sql') || techStr.includes('etl') || techStr.includes('pandas') || techStr.includes('data');
    if (filter === 'AI') return techStr.includes('series') || techStr.includes('stats') || techStr.includes('model') || techStr.includes('ml');
    if (filter === 'WEB') return techStr.includes('javascript') || techStr.includes('html') || techStr.includes('leaflet') || techStr.includes('word');
    return true;
  });

  const displayedNoteworthy = showAllCards ? filteredNoteworthy : filteredNoteworthy.slice(0, 6);

  // const renderFeaturedGraphic = (id: string) => {
  //   switch (id) {
  //     case 'pact':
  //       return (
  //         <div className="w-full h-full bg-navy-light border border-navy-lightest rounded-lg p-6 flex flex-col justify-between font-mono text-xs overflow-hidden relative group-hover:border-green/50 transition-colors">
  //           <div className="flex items-center justify-between text-slate pb-3 border-b border-navy-lightest">
  //             <span className="text-green flex items-center gap-2 font-semibold">
  //               <Cpu className="w-4 h-4" /> PACT Throughput Engine
  //             </span>
  //             <span className="text-[11px] bg-green-tint text-green px-2 py-0.5 rounded border border-green/30">
  //               Phi-3-mini
  //             </span>
  //           </div>

  //           <div className="space-y-2.5 py-4 text-slate-light text-[11px] sm:text-xs">
  //             <div className="flex items-center justify-between bg-navy/80 p-2.5 rounded">
  //               <span>Input Prompt Stream</span>
  //               <span className="text-slate">tokens: 256</span>
  //             </div>
  //             <div className="flex items-center justify-between bg-navy/80 p-2.5 rounded border-l-2 border-green">
  //               <span>Reasoning Early-Exit Classifier</span>
  //               <span className="text-green font-bold">READY (71%)</span>
  //             </div>
  //             <div className="flex items-center justify-between bg-navy/80 p-2.5 rounded">
  //               <span>Dynamic Agent Pruning</span>
  //               <span className="text-cyan-300">Pruned 4 intermediate hops</span>
  //             </div>
  //           </div>

  //           <div className="pt-3 border-t border-navy-lightest flex items-center justify-between text-[11px] text-slate">
  //             <span>Latency Reduction: ~42%</span>
  //             <span className="text-green">PyTorch + Hugging Face</span>
  //           </div>
  //         </div>
  //       );

  //     case 'smarthub':
  //       return (
  //         <div className="w-full h-full bg-navy-light border border-navy-lightest rounded-lg p-6 flex flex-col justify-between font-mono text-xs overflow-hidden relative group-hover:border-green/50 transition-colors">
  //           <div className="flex items-center justify-between text-slate pb-3 border-b border-navy-lightest">
  //             <span className="text-green flex items-center gap-2 font-semibold">
  //               <Database className="w-4 h-4" /> SMARTHUB Data Architecture
  //             </span>
  //             <span className="text-[11px] bg-navy text-slate-light px-2 py-0.5 rounded border border-navy-lightest">
  //               USDA + IL Schools
  //             </span>
  //           </div>

  //           <div className="space-y-2 py-3 text-[11px]">
  //             <div className="p-2 rounded bg-navy/80 text-slate-light flex items-center justify-between">
  //               <span>1. Ingestion &amp; Schema Mapping</span>
  //               <span className="text-green">✓ Cleaned</span>
  //             </div>
  //             <div className="p-2 rounded bg-navy/80 text-slate-light flex items-center justify-between">
  //               <span>2. Cross-Source Entity Matching</span>
  //               <span className="text-green">✓ Resolved</span>
  //             </div>
  //             <div className="p-2 rounded bg-navy/80 text-slate-light flex items-center justify-between">
  //               <span>3. Nutrient Aggregation</span>
  //               <span className="text-green">✓ Validated</span>
  //             </div>
  //           </div>

  //           <div className="pt-3 border-t border-navy-lightest flex items-center justify-between text-[11px] text-slate">
  //             <span>Dr. Naiman Khan Lab</span>
  //             <span className="text-green">UIUC Research</span>
  //           </div>
  //         </div>
  //       );

  //     case 'texus':
  //       return (
  //         <div className="w-full h-full bg-navy-light border border-navy-lightest rounded-lg p-6 flex flex-col justify-between font-mono text-xs overflow-hidden relative group-hover:border-green/50 transition-colors">
  //           <div className="flex items-center justify-between text-slate pb-3 border-b border-navy-lightest">
  //             <span className="text-green flex items-center gap-2 font-semibold">
  //               <Globe className="w-4 h-4" /> Texus 2023 Ticketing Platform
  //             </span>
  //             <span className="text-[11px] bg-green-tint text-green px-2 py-0.5 rounded border border-green/30">
  //               Razorpay PCI Gateway
  //             </span>
  //           </div>

  //           <div className="grid grid-cols-2 gap-3 py-4">
  //             <div className="bg-navy/90 p-3 rounded border border-navy-lightest text-center">
  //               <div className="text-slate text-[10px]">REGISTERED USERS</div>
  //               <div className="text-lg font-bold text-slate-lightest mt-1">10,000+</div>
  //             </div>
  //             <div className="bg-navy/90 p-3 rounded border border-navy-lightest text-center">
  //               <div className="text-slate text-[10px]">PAYMENTS PROCESSED</div>
  //               <div className="text-lg font-bold text-green mt-1">100% Success</div>
  //             </div>
  //           </div>

  //           <div className="pt-3 border-t border-navy-lightest flex items-center justify-between text-[11px] text-slate">
  //             <span>Web Dev Team Lead</span>
  //             <span className="text-green">React + Node + MongoDB</span>
  //           </div>
  //         </div>
  //       );

  //     case 'wildfire':
  //     default:
  //       return (
  //         <div className="w-full h-full bg-navy-light border border-navy-lightest rounded-lg p-6 flex flex-col justify-between font-mono text-xs overflow-hidden relative group-hover:border-green/50 transition-colors">
  //           <div className="flex items-center justify-between text-slate pb-3 border-b border-navy-lightest">
  //             <span className="text-green flex items-center gap-2 font-semibold">
  //               <Layers className="w-4 h-4" /> Wildfire Satellite Classifier
  //             </span>
  //             <span className="text-[11px] bg-navy text-slate-light px-2 py-0.5 rounded border border-navy-lightest">
  //               Statistical ML
  //             </span>
  //           </div>

  //           <div className="space-y-2 py-3 text-[11px]">
  //             <div className="flex justify-between bg-navy/80 p-2 rounded">
  //               <span>Feature Validation</span>
  //               <span className="text-green">Statsmodels EDA</span>
  //             </div>
  //             <div className="flex justify-between bg-navy/80 p-2 rounded">
  //               <span>Ensemble Architecture</span>
  //               <span className="text-slate-lightest">Random Forests</span>
  //             </div>
  //           </div>

  //           <div className="pt-3 border-t border-navy-lightest flex items-center justify-between text-[11px] text-slate">
  //             <span>Multi-Source Satellite Image ML</span>
  //             <span className="text-green">Scikit-Learn</span>
  //           </div>
  //         </div>
  //       );
  //   }
  // };

  return (
    <section id="projects" className="py-24 max-w-4xl mx-auto">
      {/* Section Heading */}
      <h2 className="section-heading">
        <span className="text-green font-mono text-xl sm:text-2xl mr-3 font-normal">04.</span>
        <span>Some Things I&apos;ve Built</span>
      </h2>

      {/* Featured Projects List */}
      <div className="space-y-24 mt-12">
        {featured.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center group"
            >
              {/* Visual Box */}


              {/* Text Description Box */}
              <div
                className={`z-10 md:col-span-7 flex flex-col ${isEven
                  ? 'md:col-start-6 md:items-end md:text-right'
                  : 'md:col-start-1 md:row-start-1 md:items-start md:text-left'
                  }`}
              >
                <span className="font-mono text-green text-xs tracking-wider mb-1">
                  {project.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-lightest hover:text-green transition-colors mb-4">
                  {project.title}
                </h3>

                {/* Floating Card */}
                <div className="p-6 rounded-lg bg-navy-light/95 border border-navy-lightest text-slate text-sm sm:text-base shadow-2xl leading-relaxed mb-4 backdrop-blur-md">
                  <p>{project.description}</p>
                  {project.stats && (
                    <div className="mt-3 pt-3 border-t border-navy-lightest font-mono text-xs text-green flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{project.stats}</span>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <ul
                  className={`flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-slate-light mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'
                    }`}
                >
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>

                {/* Project Links */}
                <div className="flex items-center gap-4 text-slate hover:text-slate-lightest">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green transition-colors p-1"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green transition-colors p-1"
                      aria-label="External Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>


    </section>
  );
};
