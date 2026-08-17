'use client';

import React from 'react';
import { Database, Code2, LineChart, Brain, Layout, CheckCircle2 } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Database: <Database className="w-5 h-5 text-green" />,
    Code2: <Code2 className="w-5 h-5 text-green" />,
    LineChart: <LineChart className="w-5 h-5 text-green" />,
    Brain: <Brain className="w-5 h-5 text-green" />,
    Layout: <Layout className="w-5 h-5 text-green" />,
  };

  return (
    <section id="skills" className="py-24 max-w-4xl mx-auto">
      {/* Section Heading */}
      <h2 className="section-heading">
        <span className="text-green font-mono text-xl sm:text-2xl mr-3 font-normal">05.</span>
        <span>Technical Skills</span>
      </h2>

      {/* <p className="text-slate text-base sm:text-lg max-w-2xl mb-12">
        A structured breakdown of my core technical proficiencies across enterprise data engineering, analytical programming, machine learning, and web visualization.
      </p> */}

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.skills.map((category, index) => (
          <div
            key={index}
            className="rounded-lg bg-navy-light border border-navy-lightest p-6 shadow-xl hover:border-green/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-navy-lightest">
                <div className="p-2 rounded bg-navy border border-navy-lightest">
                  {iconMap[category.icon] || <Database className="w-5 h-5 text-green" />}
                </div>
                <h3 className="text-base font-bold text-slate-lightest">
                  {category.category}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-xs px-3 py-1 rounded bg-navy border border-navy-lightest text-slate-light hover:text-green hover:border-green/40 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-green text-[10px]">▹</span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Status */}
            {/* <div className="mt-6 pt-3 border-t border-navy-lightest/60 flex items-center justify-between text-[11px] font-mono text-slate">
              <span>{category.skills.length} skills</span>
              <span className="text-green flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified
              </span>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};
