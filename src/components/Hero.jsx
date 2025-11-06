import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20">
            <Rocket className="h-4 w-4 text-violet-300" />
            AI Talking Avatar Starter
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Build an AI that talks with video responses
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
            Human-like lip sync, expressions, and tone. Use this prompt to power a virtual human that replies with video, voice, and a transcript.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#prompt"
              className="inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-semibold shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              View System Prompt
            </a>
            <a
              href="#platforms"
              className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-4 py-2 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Choose a Platform
            </a>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] w-full rounded-2xl overflow-hidden ring-1 ring-white/10">
          {/* Spline 3D scene */}
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradient overlay to enhance readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-purple-500/10" />
        </div>
      </div>
    </section>
  );
}
