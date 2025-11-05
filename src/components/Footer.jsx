import React from 'react';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-10 pt-8 text-white/70">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-sm font-semibold text-white">Design & Technology PG Certification</div>
          <div className="text-xs">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
        <div className="flex gap-4 text-xs">
          <a href="#curriculum" className="hover:text-white">Curriculum</a>
          <a href="#admissions" className="hover:text-white">Admissions</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
