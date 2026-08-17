'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto">
      {/* Section Heading */}
      <h2 className="section-heading">
        <span className="text-green font-mono text-xl sm:text-2xl mr-3 font-normal">03.</span>
        <span>Where I&apos;ve Worked</span>
      </h2>

      {/* Tabs Container */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {/* Left Tabs List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-navy-lightest shrink-0 scrollbar-none">
          {experiences.map((exp, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`py-3 px-5 text-left font-mono text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:mb-0 md:-ml-[2px] ${
                  isActive
                    ? 'text-green border-green bg-navy-light/40 font-medium'
                    : 'text-slate border-transparent hover:text-green hover:bg-navy-light/20'
                }`}
              >
                {exp.company}
              </button>
            );
          })}
        </div>

        {/* Right Tab Content */}
        <div className="flex-1 min-h-[340px] p-2 sm:p-4 animate-fade-in">
          {experiences[activeTab] && (
            <div className="space-y-5">
              {/* Job Title & Company Link */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-lightest flex flex-wrap items-center gap-2">
                  <span>{experiences[activeTab].role}</span>
                  <a
                    href={experiences[activeTab].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green hover:underline inline-flex items-center gap-1 font-medium group"
                  >
                    <span>@ {experiences[activeTab].company}</span>
                    <ExternalLink className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>

                {/* Dates & Location */}
                <div className="flex flex-wrap items-center gap-4 mt-2 font-mono text-xs sm:text-sm text-slate">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-green" />
                    {experiences[activeTab].period}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {experiences[activeTab].location}
                  </span>
                </div>
              </div>

              {/* Bulleted Achievements */}
              <ul className="space-y-3 text-sm sm:text-base text-slate">
                {experiences[activeTab].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green text-sm mt-1 shrink-0">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-3 py-1 rounded bg-navy-light border border-navy-lightest text-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
