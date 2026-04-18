"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPinned, Mountain, Route, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { mapSites, type MapSite } from "@/lib/mockData";

export function WebPreview() {
  const [active, setActive] = useState<MapSite | null>(null);

  return (
    <section id="demo" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
            Live Demo
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Experience the Path{" "}
            <span className="text-gradient-ember">(Live Demo)</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/55 md:text-base">
            Tap a pin to uncover its lore. Each location is anchored to real
            coordinates and verified by on-site custodians.
          </p>
        </div>

        {/* map container */}
        <div className="reveal group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] via-neutral-950 to-white/[0.02] p-0 shadow-[0_40px_120px_-30px_rgba(255,69,0,0.3)] backdrop-blur-xl md:rounded-[2.5rem]">
          {/* map frame */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[inherit]">
            <MapBackdrop />

            {/* pins */}
            {mapSites.map((site, idx) => (
              <MapPin
                key={site.id}
                site={site}
                index={idx}
                onOpen={() => setActive(site)}
              />
            ))}

            {/* legend / HUD */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white/70 backdrop-blur-xl md:left-6 md:top-6">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
              Live · Tian Shan corridor
            </div>

            <div className="absolute right-4 top-4 hidden items-center gap-3 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] text-white/60 backdrop-blur-xl md:right-6 md:top-6 md:flex">
              <Route className="h-3 w-3" />
              3 checkpoints
              <span className="h-3 w-px bg-white/15" />
              <Mountain className="h-3 w-3 text-gold" />
              avg 2,107 m
            </div>

            {/* bottom hint */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-6 py-5 text-xs text-white/60 md:px-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                Tap a glowing marker to open its archive
              </div>
              <div className="hidden font-mono text-[10px] text-white/40 md:block">
                42.6°N · 76.2°E
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single shared dialog, controlled by `active` */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent>
          {active && (
            <>
              <div className="relative h-28 overflow-hidden bg-gradient-to-br from-ember/30 via-neutral-950 to-gold/20">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 40%, rgba(255,69,0,0.6), transparent 50%), radial-gradient(circle at 80% 60%, rgba(255,215,0,0.4), transparent 50%)",
                  }}
                />
                <div className="absolute inset-0 opacity-20" style={topoStyle} />
                <div className="relative flex h-full items-end justify-between px-6 pb-4">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70 backdrop-blur-xl">
                    <MapPinned className="h-3 w-3 text-ember" />
                    {active.era}
                  </div>
                  {active.altitude && (
                    <div className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] text-white/70 backdrop-blur-xl">
                      {active.altitude}
                    </div>
                  )}
                </div>
              </div>

              <DialogHeader>
                <DialogTitle>{active.name}</DialogTitle>
                <DialogDescription>{active.subtitle}</DialogDescription>
              </DialogHeader>

              <DialogBody>
                <p className="text-sm leading-relaxed text-white/75">
                  {active.lore}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-widest text-white/40">
                  <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                    <div className="text-white/50">Coords</div>
                    <div className="mt-1 font-mono text-white/80">
                      {active.coords.x.toFixed(1)}, {active.coords.y.toFixed(1)}
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                    <div className="text-white/50">Era</div>
                    <div className="mt-1 text-white/80">
                      {active.era.split("·")[0].trim()}
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                    <div className="text-white/50">Season fit</div>
                    <div className="mt-1 text-gold">High</div>
                  </div>
                </div>
              </DialogBody>

              <DialogFooter>
                <Button variant="ghost" size="sm">
                  Save to journey
                </Button>
                <Button size="sm">Open in app</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

const topoStyle: React.CSSProperties = {
  backgroundImage:
    "repeating-radial-gradient(circle at 30% 60%, rgba(255,255,255,0.06) 0 2px, transparent 2px 22px), repeating-radial-gradient(circle at 70% 30%, rgba(255,255,255,0.04) 0 2px, transparent 2px 28px)",
};

function MapBackdrop() {
  return (
    <>
      {/* base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,69,0,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,215,0,0.08),transparent_60%),linear-gradient(to_bottom,#0a0a0a,#111)]" />

      {/* topographic contour lines */}
      <div className="absolute inset-0 opacity-[0.22]" style={topoStyle} />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* SVG terrain outlines — stylized lake and ridges */}
      <svg
        viewBox="0 0 1000 600"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ridge" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,215,0,0.15)" />
            <stop offset="100%" stopColor="rgba(255,69,0,0.05)" />
          </linearGradient>
          <linearGradient id="lake" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(120,180,255,0.18)" />
            <stop offset="100%" stopColor="rgba(60,120,200,0.08)" />
          </linearGradient>
        </defs>
        {/* lake Issyk-Kul abstraction */}
        <path
          d="M 420 200 Q 520 170 680 200 Q 780 220 740 260 Q 640 300 520 280 Q 400 260 420 200 Z"
          fill="url(#lake)"
          stroke="rgba(120,180,255,0.3)"
          strokeWidth="1"
        />
        {/* ridges */}
        <path
          d="M 100 480 Q 250 380 380 430 Q 500 480 620 420 Q 760 360 900 440"
          stroke="url(#ridge)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 60 540 Q 220 460 360 500 Q 520 540 680 480 Q 840 420 980 500"
          stroke="rgba(255,69,0,0.2)"
          strokeWidth="1"
          fill="none"
        />
        {/* route line between pins */}
        <path
          d="M 620 228 Q 520 320 420 348 Q 340 400 280 468"
          stroke="rgba(255,215,0,0.5)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          fill="none"
        />
      </svg>

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
    </>
  );
}

function MapPin({
  site,
  index,
  onOpen,
}: {
  site: MapSite;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: 0.3 + index * 0.15,
        type: "spring",
        stiffness: 180,
        damping: 16,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        left: `${site.coords.x}%`,
        top: `${site.coords.y}%`,
      }}
      className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
      aria-label={`Open ${site.name}`}
    >
      {/* pulse rings */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="absolute h-12 w-12 animate-ping rounded-full bg-ember/30" />
        <span className="absolute h-8 w-8 animate-pulse rounded-full bg-ember/50" />
      </span>

      {/* core pin */}
      <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-ember to-gold shadow-[0_0_20px_-2px_rgba(255,69,0,0.9)] ring-2 ring-white/30 transition-all group-hover:shadow-[0_0_30px_0px_rgba(255,215,0,0.8)]">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      </span>

      {/* tooltip label */}
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[10px] font-medium tracking-wide text-white/90 opacity-0 shadow-xl backdrop-blur-xl transition-opacity group-hover:opacity-100">
        {site.name}
      </span>
    </motion.button>
  );
}
