"use client";

import { Building2, Home, Paintbrush, Box } from "lucide-react";
import { Reveal, RevealStagger, StaggerItem } from "./Reveal";

const SERVICES = [
  {
    icon: Home,
    title: "Interior Design",
    description:
      "Full interior concepts, material palettes and furniture selection for homes that feel considered, not decorated.",
  },
  {
    icon: Building2,
    title: "Architecture",
    description:
      "New builds and structural renovations, from early massing studies through to construction drawings.",
  },
  {
    icon: Box,
    title: "3D Visualization",
    description:
      "Photoreal renders and walkthroughs that let you experience a space long before the first wall goes up.",
  },
  {
    icon: Paintbrush,
    title: "Renovation & Styling",
    description:
      "End-to-end renovation management and final styling, so the finished space matches the render.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-bright">
            Services
          </span>
          <h2 className="mt-3 max-w-lg font-display text-4xl font-medium text-bone sm:text-5xl">
            What we do.
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-line sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem
                key={service.title}
                className="group flex flex-col gap-5 bg-ink-soft p-8 transition-colors duration-300 hover:bg-ink-deep sm:p-9"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-deep/50 text-gold-bright transition-colors duration-300 group-hover:border-gold-bright group-hover:bg-gold-bright group-hover:text-ink-deep">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl font-medium text-bone sm:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-bone-dim">
                  {service.description}
                </p>
              </StaggerItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
