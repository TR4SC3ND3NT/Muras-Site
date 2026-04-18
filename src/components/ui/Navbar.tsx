"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { app } from "@/lib/mockData";

type NavLink = { href: string; label: string };

const NAV_LINKS: NavLink[] = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/demo", label: "Live Demo" },
  { href: "/community", label: "Community" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Hide navbar entirely on auth pages for a focused experience
  if (pathname?.startsWith("/login") || pathname?.startsWith("/register")) {
    return null;
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        "border-b backdrop-blur-xl",
        scrolled
          ? "border-white/10 bg-neutral-950/75"
          : "border-transparent bg-neutral-950/30"
      )}
    >
      {/* accent stripe */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, rgba(255,69,0,0.4), rgba(255,215,0,0.4), rgba(255,69,0,0.4), transparent)",
        }}
      />

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-12">
        {/* logo */}
        <Link
          href="/"
          aria-label="Muras home"
          className="group flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ember to-gold text-neutral-950 shadow-[0_0_24px_-4px_rgba(255,69,0,0.6)] transition-transform group-hover:scale-105">
            <span className="text-sm font-bold">M</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-widest text-white">
              {app.name.toUpperCase()}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-white/40">
              {app.tagline.toUpperCase()}
            </span>
          </span>
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname?.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {l.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.06]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/login"
            className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-ember px-5 text-sm font-medium text-white shadow-[0_0_24px_-6px_rgba(255,69,0,0.8)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_-2px_rgba(255,69,0,0.9)]"
          >
            Sign up
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur-xl transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 top-full z-50 border-b border-white/10 bg-neutral-950/95 px-6 py-6 backdrop-blur-2xl">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition-colors",
                      active
                        ? "border-white/15 bg-white/[0.05] text-white"
                        : "border-transparent text-white/70 hover:border-white/10 hover:bg-white/[0.03] hover:text-white"
                    )}
                  >
                    {l.label}
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </Link>
                );
              })}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-sm font-medium text-white backdrop-blur-xl"
              >
                Log in
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full bg-ember text-sm font-medium text-white shadow-[0_0_24px_-6px_rgba(255,69,0,0.8)]"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
