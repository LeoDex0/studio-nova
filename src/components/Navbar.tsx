"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#studio", label: "Studio" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) lenis?.scrollTo(el as HTMLElement, { offset: -40, duration: 1.3 });
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#top");
          }}
          className="font-display text-xl font-semibold tracking-wide text-bone sm:text-2xl"
        >
          Studio<span className="text-gold-bright"> Nova</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="text-[0.75rem] font-medium uppercase tracking-[0.18em] text-bone-dim transition-colors hover:text-gold-bright"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("#contact")}
          className="hidden rounded-full border border-gold-deep px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-bone transition-colors hover:border-gold-bright hover:text-gold-bright lg:inline-flex"
        >
          Start a Project
        </button>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-bone lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="block w-full py-3 text-left text-sm font-medium uppercase tracking-[0.18em] text-bone-dim transition-colors hover:text-gold-bright"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
