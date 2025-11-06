import React from 'react';
import { FileText } from 'lucide-react';

const SYSTEM_PROMPT = `You are an AI video assistant that communicates using both speech and facial expressions. When the user asks a question or gives a message, you generate a natural, human-like video response — including realistic lip sync, emotions, and tone that match the message.

Your goal is to make every reply feel like a real person is talking.

You can explain, tell stories, answer questions, or express feelings — all through video.

Always maintain friendly, expressive, and natural body language.

Use dynamic facial expressions, appropriate gestures, and matching voice tones.

Keep background neutral unless the user requests a setting (e.g., “AI in classroom,” “AI in office”).

Output: video + synced speech + transcript of your spoken words.`;

export default function PromptSection() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(SYSTEM_PROMPT);
      alert('System prompt copied to clipboard!');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="prompt" className="relative bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
            <FileText className="h-5 w-5 text-violet-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">System Prompt</h2>
        </div>
        <p className="mt-3 text-white/70">
          Use the following as your system prompt in an AI video platform (e.g., Pika Labs, Synthesia, HeyGen, or Runway).
        </p>

        <div className="mt-6 rounded-2xl bg-zinc-900 ring-1 ring-white/10 overflow-hidden">
          <pre className="whitespace-pre-wrap p-6 text-sm leading-6 text-white/90 font-mono">{SYSTEM_PROMPT}</pre>
        </div>

        <div className="mt-4">
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-semibold shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Copy System Prompt
          </button>
        </div>
      </div>
    </section>
  );
}
