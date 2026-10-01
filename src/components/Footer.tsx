const SOCIALS = [
  {
    label: "Instagram",
    path: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428A4.9 4.9 0 0 1 3.678 3.678 4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2m0 1.802c-2.67 0-2.987.01-4.04.059-.976.045-1.505.207-1.858.344-.467.181-.8.398-1.15.748-.35.35-.567.683-.748 1.15-.137.353-.3.882-.344 1.857-.05 1.054-.06 1.37-.06 4.04s.01 2.987.06 4.04c.045.976.207 1.505.344 1.858.181.466.398.8.748 1.15.35.35.683.566 1.15.747.353.137.882.3 1.857.344 1.054.05 1.37.06 4.04.06s2.988-.01 4.04-.06c.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.566-.683.747-1.15.137-.352.3-.881.344-1.857.05-1.053.06-1.37.06-4.04s-.01-2.986-.06-4.04c-.045-.975-.207-1.504-.344-1.857a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.352-.137-.881-.3-1.857-.344-1.053-.05-1.37-.06-4.04-.06M12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27m0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m6.538-2.006a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0",
  },
  {
    label: "LinkedIn",
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V10.1H5.67v8.24zM7.01 8.98a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1M18.34 18.34v-4.52c0-2.42-1.29-3.55-3.02-3.55-1.39 0-2.01.77-2.36 1.3v-1.11h-2.67c.03.7 0 8.24 0 8.24h2.67v-4.6c0-.25.02-.5.1-.68.2-.5.66-1.03 1.44-1.03 1.02 0 1.43.78 1.43 1.92v4.39z",
  },
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#studio", label: "Studio" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-deep py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-bone">
            Studio<span className="text-gold-bright"> Nova</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone-dim">
            Architecture and interior design for residences, hospitality and
            workplaces built to last.
          </p>
          <div className="mt-6 flex items-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-bone-dim transition-colors hover:border-gold-bright hover:text-gold-bright"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:flex sm:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bone-dim/70">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-bone-dim transition-colors hover:text-gold-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bone-dim/70">
              Studio
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-bone-dim">
              <li>Via Brera 12</li>
              <li>Milan, Italy</li>
              <li>hello@studionova.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-line px-6 pt-6 text-xs text-bone-dim/60 sm:px-10">
        © {new Date().getFullYear()} Studio Nova. All rights reserved.{" · "}<a href="https://leodex.dev/" className="underline-offset-2 hover:underline">Website by LeoDex</a>
      </div>
    </footer>
  );
}
