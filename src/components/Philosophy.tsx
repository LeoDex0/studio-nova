"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

export default function Philosophy() {
  return (
    <section id="studio" className="relative overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
              alt="Detail of a minimal interior with natural materials"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-line" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-bright">
              The Studio
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 font-display text-3xl font-medium leading-tight text-bone sm:text-[2.6rem]">
              &ldquo;We design for the way light moves through a room across a
              single day &mdash; not just how a photograph looks on the day it&apos;s
              taken.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-bone-dim sm:text-base">
              Founded in 2016, Studio Nova is a small architecture and interior
              design practice working across residential, hospitality and
              workplace projects. We keep every studio intentionally small so
              that every project gets the same level of attention: careful
              material selection, honest detailing and a design process built
              around how a space will actually be lived in.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              <div>
                <p className="font-display text-3xl font-medium text-gold-bright sm:text-4xl">
                  60+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-bone-dim">
                  Projects delivered
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium text-gold-bright sm:text-4xl">
                  9
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-bone-dim">
                  Years in practice
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium text-gold-bright sm:text-4xl">
                  12
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-bone-dim">
                  Design awards
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
