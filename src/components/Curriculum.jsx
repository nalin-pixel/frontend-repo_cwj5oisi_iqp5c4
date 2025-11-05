import React from 'react';

const modules = [
  {
    week: 'Weeks 1–3',
    title: 'Foundations: Research, IA, and Visual Systems',
    points: [
      'User research essentials and problem framing',
      'Information architecture, flows, and usability',
      'Design tokens, grids, and responsive rules',
    ],
  },
  {
    week: 'Weeks 4–6',
    title: 'Interface Design & Prototyping',
    points: [
      'Figma power workflows and component libraries',
      'Interaction patterns, motion, and microcopy',
      'Accessibility and inclusive design practices',
    ],
  },
  {
    week: 'Weeks 7–9',
    title: 'Design to Code: Frontend for Designers',
    points: [
      'Modern CSS with Tailwind and design systems',
      'React components, state, and data fetching',
      'Prototyping interactive experiences with 3D',
    ],
  },
  {
    week: 'Weeks 10–12',
    title: 'Capstone & Career',
    points: [
      'End-to-end case study with real constraints',
      'Portfolio storytelling and metrics',
      'Interview prep, whiteboarding, and reviews',
    ],
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative mx-auto max-w-7xl px-6 py-16 text-white">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Curriculum at a glance</h2>
          <p className="mt-2 max-w-2xl text-white/70">Structured in 12 weeks with live mentorship, async labs, and studio-style critiques.</p>
        </div>
        <a href="#admissions" className="hidden rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10 sm:inline-block">Join the next cohort</a>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {modules.map((m) => (
          <div key={m.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/40 p-6 shadow-inner">
            <div className="text-xs uppercase tracking-wide text-fuchsia-300/80">{m.week}</div>
            <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {m.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
