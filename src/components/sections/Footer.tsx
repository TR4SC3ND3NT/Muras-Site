import { Apple, Play, Shield, Mail, Globe } from "lucide-react";
import { app, policyAlignment } from "@/lib/mockData";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "Live demo", href: "#demo" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Heritage",
    links: [
      { label: "Petroglyph archive", href: "#" },
      { label: "Sacred mazars", href: "#" },
      { label: "Ministry of Culture", href: "#" },
      { label: "Press kit", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Data ethics", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      {/* top accent stripe */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, rgba(255,69,0,0.5), rgba(255,215,0,0.5), rgba(255,69,0,0.5), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* brand + CTAs */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ember to-gold text-neutral-950 shadow-[0_0_30px_-6px_rgba(255,69,0,0.6)]">
                <span className="text-sm font-bold">M</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-widest text-white">
                  {app.name.toUpperCase()}
                </div>
                <div className="text-[10px] tracking-[0.25em] text-white/40">
                  {app.tagline.toUpperCase()}
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-xs text-sm text-white/55">
              Your digital compass to nomadic antiquity. Built for custodians,
              not tourists.
            </p>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white text-xs font-medium text-neutral-950 transition hover:bg-white/90"
                style={{ paddingInline: "1.125rem" }}
              >
                <Apple className="h-4 w-4" />
                App Store
              </a>
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 text-xs font-medium text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                Google Play
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-white/50">
              <a
                href="#"
                aria-label="Website"
                className="transition hover:text-white"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Contact"
                className="transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <div className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
                {col.title}
              </div>
              <ul className="space-y-3 text-sm text-white/65">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="transition hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {app.fullName} · Built for the steppe.
          </div>
          <div className="flex items-center gap-4">
            <span>Made in Bishkek, KG</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>v1.0 · Chyn Kuran release</span>
          </div>
        </div>
      </div>

      {/* policy alignment banner */}
      <div className="relative border-t border-white/10 bg-gradient-to-r from-ember/[0.08] via-white/[0.02] to-gold/[0.08]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,69,0,0.05) 0 2px, transparent 2px 12px)",
          }}
        />
        <div className="relative mx-auto flex max-w-7xl items-center gap-4 px-6 py-5 md:px-12">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
            <Shield className="h-4 w-4" />
          </div>
          <p className="text-xs leading-relaxed text-white/70 md:text-sm">
            {policyAlignment}
          </p>
        </div>
      </div>
    </footer>
  );
}
