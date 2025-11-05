import React from 'react';
import Hero from './components/Hero';
import ProgramHighlights from './components/ProgramHighlights';
import Curriculum from './components/Curriculum';
import AdmissionsCTA from './components/AdmissionsCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <Hero />
      <ProgramHighlights />
      <Curriculum />
      <AdmissionsCTA />
      <Footer />
    </div>
  );
}
