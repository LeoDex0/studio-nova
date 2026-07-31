"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowDown, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const MARQUEE_ITEMS = [
  "Architecture",
  "Interior Design",
  "3D Visualization",
  "Renovation",
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) lenis?.scrollTo(el as HTMLElement, { offset: -40, duration: 1.3 });
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-deep"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-16">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Minimal, light-filled interior with warm timber and stone"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.75)_0%,rgba(5,4,3,0.45)_35%,rgba(5,4,3,0.85)_85%,#050403_100%)]" />
      <div className="grain absolute inset-0" aria-hidden />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-6 pb-16 pt-40 sm:px-10 sm:pb-24 sm:pt-48"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-gold-deep/60 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-bone-dim sm:mb-7 sm:text-[0.7rem]"
        >
          Architecture &amp; Interior Design Studio
        </motion.div>

        <h1 className="max-w-4xl font-display text-[3rem] font-medium leading-[0.98] tracking-tight text-bone sm:text-[5.5rem] lg:text-[7rem]">
          {["Spaces that", "speak in"].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE }}
              className="block overflow-hidden"
            >
              {line}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
            className="block italic text-gold-bright"
          >
            quiet luxury.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          className="mt-7 max-w-md text-balance text-base text-bone-dim sm:mt-9 sm:text-lg"
        >
          Studio Nova designs residences, hospitality interiors and workplaces
          shaped by light, material honesty and restraint.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          className="mt-9 flex flex-col items-start gap-4 sm:mt-11 sm:flex-row sm:items-center"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#work")}
            className="inline-flex items-center gap-2 rounded-full bg-gold-bright px-7 py-3.5 text-sm font-semibold text-ink-deep shadow-[0_8px_30px_-8px_rgba(220,174,121,0.55)] transition-colors hover:bg-bone"
          >
            View Our Work
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-7 py-3.5 text-sm font-semibold text-bone transition-colors hover:border-gold-bright hover:text-gold-bright"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo("#work")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="animate-float absolute bottom-32 right-8 z-10 hidden text-bone-dim sm:right-10 sm:flex sm:flex-col sm:items-center sm:gap-2"
        aria-label="Scroll down"
      >
        <span className="[writing-mode:vertical-rl] text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4" />
      </motion.button>

      <div className="relative z-10 border-t border-line bg-ink-deep/60 py-4 backdrop-blur-sm">
        <div className="no-scrollbar flex w-full overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
              (item, i) => (
                <span
                  key={i}
                  className="flex shrink-0 items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-bone-dim"
                >
                  {item}
                  <span className="h-1 w-1 rounded-full bg-gold-deep" />
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
