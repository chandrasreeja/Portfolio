'use client';

import React from 'react';
import { Terminal } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export const About: React.FC = () => {
  const quickSkills = [
    'Python',
    'C++',
    'Numpy & Pandas',
    'SQL & Relational Schemas',
    'ETL Pipelines & Automation',
    'Data Cleaning & Validation',
    'Tableau, Power BI',
    'Applied ML & LLMs',
    'TypeScript',
    'Angular',
    'CPanel',
    'AWS',
    'Kafka',
    'JSON'
  ];

  return (
    <section id="about" className="py-24 max-w-4xl mx-auto">
      {/* Section Heading */}
      <h2 className="section-heading">
        <span className="text-green font-mono text-xl sm:text-2xl mr-3 font-normal">01.</span>
        <span>About Me</span>
      </h2>

      <div className="items-start">
        {/* Left Column: Narrative Text */}
        <div className="lg:col-span-7 space-y-4 text-slate text-base sm:text-lg leading-relaxed">
          {/* <p>
            Hello! My name is <span className="text-green font-medium">Chandra Sreeja</span> and I enjoy building scalable data pipelines, automated analytics systems, and high-performance ML workflows that solve real-world problems.
          </p> */}

          <p>
            Currently, I’m a full-time Master of Computer Science student at the <span className="text-green font-medium">University of Illinois Urbana-Champaign</span> and a <span className="text-green font-medium">Data Engineering Intern</span> at <span className="text-green font-medium">ADM</span>, where I work on data pipelines involving data cleaning, transformation, structuring, and storage to prepare large-scale datasets for downstream processing and analysis.
          </p>

          <p>
            My previous experience includes working at <span className="text-green font-medium">Barclays</span>, where I navigated the complexities of large-scale data systems, building ETL pipelines, automating workflows, and developing analytics solutions for credit risk.
          </p>

          <p>Beyond work, I’m passionate about research and solving real-world problems with data. I’ve worked with <span className="text-green font-medium">Dr. Naiman Khan</span> at <span className="text-green font-medium">UIUC</span> on a research project involving large-scale nutrition datasets.</p>

          <p className="pt-2">
            Few technologies I’m experienced in:
          </p>

          {/* 2-Column Skill Highlights */}
          <ul className="grid grid-cols-2 gap-2 pt-2 font-mono text-xs sm:text-sm text-slate-light">
            {quickSkills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green text-xs">▹</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Interactive Developer Profile Card */}

      </div>
    </section>
  );
};
