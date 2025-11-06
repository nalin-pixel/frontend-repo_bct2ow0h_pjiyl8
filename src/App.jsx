import React from 'react';
import Hero from './components/Hero';
import PromptSection from './components/PromptSection';
import Examples from './components/Examples';
import Platforms from './components/Platforms';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <PromptSection />
      <Examples />
      <Platforms />
      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/60">
          Built for creating an AI that talks with video responses. Use the system prompt above and pick a platform to get started.
        </div>
      </footer>
    </div>
  );
}
