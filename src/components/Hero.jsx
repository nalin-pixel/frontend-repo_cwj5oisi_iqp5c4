import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[84vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial glow overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
          PG Certification • Design & Technology
        </span>
        <h1 className="font-display max-w-4xl bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
          Launch your design career at the intersection of creativity and code
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          A modern, industry-backed program blending product design, UI engineering, and emerging tech.
          Learn by building interactive experiences, portfolios, and real client-ready projects.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#admissions"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-fuchsia-500/20 transition hover:translate-y-[-2px] hover:bg-fuchsia-100"
          >
            Apply Now
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#curriculum"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            View Curriculum
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 text-left text-white/80 sm:grid-cols-4">
          {[
            { label: '6 months', sub: 'Program length' },
            { label: 'Live + On-Demand', sub: 'Flexible learning' },
            { label: 'Career Support', sub: 'Portfolio & interview' },
            { label: 'Industry Mentors', sub: 'Weekly reviews' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
              <div className="text-sm text-white/60">{item.sub}</div>
              <div className="mt-1 text-lg font-semibold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
