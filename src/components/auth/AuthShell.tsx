import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GlowOrb } from "@/components/primitives/GlowOrb";
import { app } from "@/lib/mockData";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export function AuthShell({
  eyebrow,
  title,
  subtitle,
  children,
  footer,
}: Props) {
  return (
    <div className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-16 md:py-24">
      {/* atmospheric glows */}
      <GlowOrb
        color="ember"
        size={620}
        className="-top-40 -left-40"
        speed="slow"
      />
      <GlowOrb
        color="gold"
        size={520}
        className="-bottom-48 -right-24"
        speed="fast"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
      />

      {/* top-left brand + back link */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ember to-gold text-neutral-950 shadow-[0_0_24px_-4px_rgba(255,69,0,0.6)] transition-transform group-hover:scale-105">
            <span className="text-sm font-bold">M</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-widest text-white">
              {app.name.toUpperCase()}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-white/40">
              {app.tagline.toUpperCase()}
            </span>
          </div>
        </Link>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl transition-all hover:-translate-x-0.5 hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          Home
        </Link>
      </div>

      {/* card */}
      <div className="relative w-full max-w-md">
        {/* card halo */}
        <div
          aria-hidden
          className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-ember/30 via-transparent to-gold/20 opacity-60 blur-3xl"
        />

        <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-8 shadow-[0_40px_120px_-30px_rgba(255,69,0,0.4)] backdrop-blur-2xl md:p-10">
          {/* top accent stripe */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px opacity-80"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent, rgba(255,69,0,0.6), rgba(255,215,0,0.6), rgba(255,69,0,0.6), transparent)",
            }}
          />
          {/* corner glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-ember/15 blur-3xl" />

          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.3em] text-ember">
              {eyebrow}
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-white/55">{subtitle}</p>

            <div className="mt-8">{children}</div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-white/55">{footer}</div>
      </div>
    </div>
  );
}
