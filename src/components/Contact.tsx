"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div
        aria-hidden
        className="animate-spin-slow pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full border border-gold-deep/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(220,174,121,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-bright">
            Get In Touch
          </span>
          <h2 className="mt-3 max-w-md font-display text-4xl font-medium leading-tight text-bone sm:text-5xl">
            Let&apos;s create something timeless.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone-dim">
            Tell us about your project and we&apos;ll get back to you within
            two business days to arrange an initial call.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href="mailto:hello@studionova.com"
              className="flex items-center gap-3 text-sm text-bone-dim transition-colors hover:text-gold-bright"
            >
              <Mail className="h-4 w-4 text-gold-bright" />
              hello@studionova.com
            </a>
            <a
              href="tel:+390212345678"
              className="flex items-center gap-3 text-sm text-bone-dim transition-colors hover:text-gold-bright"
            >
              <Phone className="h-4 w-4 text-gold-bright" />
              +39 02 1234 5678
            </a>
            <span className="flex items-center gap-3 text-sm text-bone-dim">
              <MapPin className="h-4 w-4 text-gold-bright" />
              Via Brera 12, Milan, Italy
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-5 rounded-sm border border-line bg-ink p-7 sm:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-bone-dim">
                  Name
                </span>
                <input
                  required
                  type="text"
                  placeholder="Jane Doe"
                  className="rounded-sm border border-line bg-transparent px-4 py-3 text-sm text-bone outline-none placeholder:text-bone-dim/50 focus:border-gold-bright"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-bone-dim">
                  Email
                </span>
                <input
                  required
                  type="email"
                  placeholder="jane@email.com"
                  className="rounded-sm border border-line bg-transparent px-4 py-3 text-sm text-bone outline-none placeholder:text-bone-dim/50 focus:border-gold-bright"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-bone-dim">
                Project Type
              </span>
              <input
                type="text"
                placeholder="Residence, hospitality, workplace..."
                className="rounded-sm border border-line bg-transparent px-4 py-3 text-sm text-bone outline-none placeholder:text-bone-dim/50 focus:border-gold-bright"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-bone-dim">
                Message
              </span>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your space and timeline..."
                className="resize-none rounded-sm border border-line bg-transparent px-4 py-3 text-sm text-bone outline-none placeholder:text-bone-dim/50 focus:border-gold-bright"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-bright px-7 py-3.5 text-sm font-semibold text-ink-deep transition-colors hover:bg-bone"
            >
              {sent ? "Message Sent" : "Send Message"}
              {!sent && <ArrowRight className="h-4 w-4" strokeWidth={2.4} />}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
