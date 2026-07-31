"use client";

import { Quote } from "lucide-react";
import { Reveal, RevealStagger, StaggerItem } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Studio Nova understood exactly what we wanted before we could fully explain it ourselves. The result feels inevitable, like the house was always meant to look this way.",
    name: "Elena R.",
    role: "Villa Aurelia, Lake Como",
  },
  {
    quote:
      "Sharp, calm and completely on top of every detail during the build. Our office finally feels like a place people want to spend time in.",
    name: "Marcus T.",
    role: "Meridian HQ, London",
  },
  {
    quote:
      "They pushed back on a few of our early ideas, and every single time they were right. Worth every conversation.",
    name: "Sofia B.",
    role: "Casa Lumen, Ibiza",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-bright">
            Client Words
          </span>
          <h2 className="mt-3 max-w-lg font-display text-4xl font-medium text-bone sm:text-5xl">
            Trusted by people we&apos;ve built for.
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem
              key={t.name}
              className="flex flex-col justify-between rounded-sm border border-line bg-ink-soft p-8"
            >
              <div>
                <Quote className="h-6 w-6 text-gold-deep" />
                <p className="mt-5 text-[0.95rem] leading-relaxed text-bone-dim">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-8 border-t border-line pt-5">
                <p className="font-display text-lg text-bone">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-bone-dim/70">
                  {t.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
