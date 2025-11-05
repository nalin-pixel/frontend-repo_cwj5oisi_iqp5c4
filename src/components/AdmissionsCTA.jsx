import React from 'react';

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="relative mx-auto max-w-7xl px-6 pb-16 text-white">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/30 via-purple-600/20 to-cyan-600/30 p-8 shadow-xl">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" />
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Admissions open — Limited seats</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            We review applications on a rolling basis. Scholarships available for early applicants and underrepresented groups.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-black/20 p-4">
              <div className="text-sm text-white/70">Application deadline</div>
              <div className="text-lg font-semibold">31 Dec 2025</div>
            </div>
            <div className="rounded-xl bg-black/20 p-4">
              <div className="text-sm text-white/70">Program starts</div>
              <div className="text-lg font-semibold">Mid Jan 2026</div>
            </div>
            <div className="rounded-xl bg-black/20 p-4">
              <div className="text-sm text-white/70">Format</div>
              <div className="text-lg font-semibold">Live online + Projects</div>
            </div>
          </div>
          <form className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-5">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="col-span-1 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none backdrop-blur-sm focus:border-white/40 sm:col-span-2"
              aria-label="Full name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="col-span-1 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none backdrop-blur-sm focus:border-white/40 sm:col-span-2"
              aria-label="Email"
            />
            <button
              type="button"
              className="col-span-1 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:translate-y-[-2px] hover:bg-cyan-100"
              onClick={() => alert('Thanks! We have received your interest. Our admissions team will reach out soon.')}
            >
              Submit
            </button>
          </form>
          <p className="mt-3 text-xs text-white/70">By submitting, you agree to our terms and privacy policy.</p>
        </div>
      </div>
    </section>
  );
}
