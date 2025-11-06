import React from 'react';
import { Layers, ExternalLink } from 'lucide-react';

const platforms = [
  { name: 'Pika Labs', url: 'https://pika.art', note: 'Great for generative video; use text + reference face.' },
  { name: 'Synthesia', url: 'https://www.synthesia.io', note: 'Business-grade talking avatars with templates.' },
  { name: 'HeyGen', url: 'https://www.heygen.com', note: 'Fast talking head videos with instant voice cloning.' },
  { name: 'Runway', url: 'https://runwayml.com', note: 'Advanced video tools and Gen-3 models.' },
];

export default function Platforms() {
  return (
    <section id="platforms" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
            <Layers className="h-5 w-5 text-violet-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Choose a platform</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl bg-zinc-900 ring-1 ring-white/10 p-5 transition hover:bg-zinc-900/80"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">{p.name}</span>
                <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white" />
              </div>
              <p className="mt-2 text-sm text-white/70">{p.note}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
