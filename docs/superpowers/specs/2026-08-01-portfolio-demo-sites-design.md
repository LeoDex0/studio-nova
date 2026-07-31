# Portfolio Demo Sites — Design Spec

## Purpose
Build additional standalone demo websites (one per folder under `D:\BaseAI\`) that look like real client work, to be showcased as portfolio pieces on Upwork/Fiverr and a personal portfolio site. Each is a self-contained Next.js app, no shared backend, no real client data.

## Sites in this batch

### 1. Studio Nova — Architecture & Interior Design studio
- Folder: `D:\BaseAI\dlaportfolio1`, port 3015
- Vibe: dark, cinematic, editorial luxury. Full-bleed photography, large serif display type, scroll-driven reveals, inertia smooth-scroll.
- Sections: Hero, Selected Works (gallery grid + lightbox), Studio/Philosophy, Services (4 cards), Process (timeline), Testimonials, Contact/CTA + footer.

### 2. PrimeEstate — Real Estate agency
- Folder: `D:\BaseAI\PrimeEstate`, port 3016
- Vibe: clean, trustworthy, premium. Light theme, navy/gold accents, large property photography, map-style layout cues.
- Sections: Hero w/ search-style CTA, Featured Listings (property cards w/ price, beds/baths, hover zoom), Why Us (stats/USPs), Agent/Team, Testimonials, Contact/CTA + footer.

### 3. PulseFit — Fitness / gym studio
- Folder: `D:\BaseAI\PulseFit`, port 3017
- Vibe: bold, energetic, high-contrast. Dark background with a vivid accent (electric green or orange), heavy sans-serif type, diagonal/angular shapes, punchy motion.
- Sections: Hero, Programs/Classes (cards), Class Schedule (table/grid), Trainers, Results/Testimonials, Membership Pricing (3 tiers), Contact/CTA + footer.

## Shared technical approach (matches existing sibling projects OknaRimini/LaSiesta)
- Next.js 16, React 19, TypeScript, Tailwind CSS v4
- GSAP + `@gsap/react` (ScrollTrigger) for scroll-driven reveal animations
- Lenis for smooth inertia scrolling
- `motion` (Framer Motion) for micro-interactions and hover/tap states
- `lucide-react` for icons, `clsx` for conditional classNames
- Images: curated Unsplash remote URLs via `next/image` (remotePatterns configured), matching each site's theme
- No backend, no real forms submission (UI only, decorative submit)
- Each site is single-page (all sections on `/`), fully responsive, dark/light per site's vibe above

## Out of scope
- No CMS, no database, no auth, no payments, no real hosting/deploy step (local dev only for now)
- No shared component library between the three sites — each is independent, small amount of duplication is acceptable
