"use client";

import { Reveal } from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Concept",
    description:
      "We start with how you want to live or work in the space: site visits, mood boards and an initial spatial concept.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Detailed drawings, material palettes and 3D visualization, refined together across a few focused review rounds.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "We manage contractors and craftspeople on your behalf, keeping the build faithful to the approved design.",
  },
  {
    number: "04",
    title: "Handover",
    description:
      "Final styling, a full walkthrough and a materials dossier, so the space is easy to live with and to maintain.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-bright">
            Process
          </span>
          <h2 className="mt-3 max-w-lg font-display text-4xl font-medium text-bone sm:text-5xl">
            How a project unfolds.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="relative">
              <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold-deep bg-ink-soft font-display text-lg text-gold-bright">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-medium text-bone sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-dim">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
