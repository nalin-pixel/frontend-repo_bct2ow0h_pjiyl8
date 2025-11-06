import React from 'react';
import { PlayCircle } from 'lucide-react';

const examples = [
  'Tell me about black holes in space.',
  'Explain this math problem in a video.',
  'Can you greet me like a teacher?',
  'Make a short motivational video for my day.'
];

export default function Examples() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
            <PlayCircle className="h-5 w-5 text-violet-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Try these prompts</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {examples.map((ex, i) => (
            <div key={i} className="rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-900/60 ring-1 ring-white/10 p-4">
              <p className="text-sm text-white/90">“{ex}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
