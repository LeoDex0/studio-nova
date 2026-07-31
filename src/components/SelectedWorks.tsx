"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MapPin, X } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SelectedWorks() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-bright">
                Selected Works
              </span>
              <h2 className="mt-3 max-w-lg font-display text-4xl font-medium text-bone sm:text-5xl">
                A portfolio built on restraint.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-bone-dim">
              Six projects spanning private residences, hospitality and
              workplace design. Click any project for details.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <button
                onClick={() => setActive(project)}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-sm text-left"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/10 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                  <div>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
                      {project.category}
                    </span>
                    <h3 className="mt-1.5 font-display text-2xl font-medium text-bone sm:text-[1.7rem]">
                      {project.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bone/30 text-bone transition-all duration-300 group-hover:border-gold-bright group-hover:bg-gold-bright group-hover:text-ink-deep">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-deep/90 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-sm border border-line bg-ink-soft sm:grid-cols-2"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink-deep/70 text-bone transition-colors hover:bg-gold-bright hover:text-ink-deep"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative aspect-[4/5] sm:aspect-auto">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
                  {active.category} &middot; {active.year}
                </span>
                <h3 className="mt-3 font-display text-3xl font-medium text-bone sm:text-4xl">
                  {active.title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-bone-dim">
                  <MapPin className="h-3.5 w-3.5" />
                  {active.location}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-bone-dim">
                  {active.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
