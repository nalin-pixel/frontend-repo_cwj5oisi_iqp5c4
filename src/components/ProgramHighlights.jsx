import React from 'react';

const highlights = [
  {
    title: 'Human-centered + Systems thinking',
    desc: 'Master research, IA, and design systems to craft cohesive multi-platform experiences.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Design + Code fluency',
    desc: 'Prototype with modern tools and translate designs into accessible, production-ready UI.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 18 6-6-6-6"/>
        <path d="m8 6-6 6 6 6"/>
      </svg>
    ),
  },
  {
    title: 'Real-world portfolio',
    desc: 'Ship case studies with metrics, code repos, and walkthroughs that stand out to recruiters.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z"/>
        <path d="M4 9h16"/>
      </svg>
    ),
  },
  {
    title: 'Career acceleration',
    desc: 'Interview prep, personal branding, and referrals with ongoing alumni community support.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22"/>
        <path d="M17 5H9.5a4.5 4.5 0 1 0 0 9H15a4 4 0 1 1 0 8H6"/>
      </svg>
    ),
  },
];

export default function ProgramHighlights() {
  return (
    <section className="relative mx-auto -mt-10 max-w-7xl px-6 pb-20">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 text-white shadow-lg shadow-slate-950/40 backdrop-blur-md">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
              {h.icon}
            </div>
            <h3 className="text-lg font-semibold">{h.title}</h3>
            <p className="mt-2 text-sm text-white/70">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
