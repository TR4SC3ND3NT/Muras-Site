"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Apple, Play, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowOrb } from "@/components/primitives/GlowOrb";
import { PhoneMockup } from "@/components/primitives/PhoneMockup";
import { narrative, season } from "@/lib/mockData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden"
    >
      {/* ambient orbs */}
      <GlowOrb
        color="ember"
        size={640}
        className="-top-40 -left-40"
        speed="slow"
      />
      <GlowOrb
        color="gold"
        size={520}
        className="-bottom-48 -right-24"
        speed="fast"
      />

      {/* ethno grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* main grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-12 md:px-12 md:pb-32 md:pt-20 lg:grid-cols-2 lg:gap-20">
        {/* copy column */}
        <div className="relative">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs tracking-widest text-white/70 backdrop-blur-xl"
          >
            <Sparkles className="h-3 w-3 text-gold" />
            <span className="uppercase">{narrative.eyebrow}</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Your Digital Compass to{" "}
            <span className="text-gradient-ember">Nomadic Antiquity</span>.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-base text-white/60 md:text-lg"
          >
            {narrative.subheadline}
          </motion.p>

          {/* season strip */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
              <Sparkles className="h-4 w-4 text-gold" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Current season
              </div>
              <div className="text-sm font-medium text-white">
                {season.label}{" "}
                <span className="text-white/50">({season.month})</span>
              </div>
            </div>
            <div className="hidden max-w-[260px] text-xs text-white/50 sm:block">
              {season.meaning}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" className="group" asChild>
              <Link href="/register">
                <Apple className="h-4 w-4" />
                Download App
                <span className="opacity-60">· iOS / Android</span>
                <Play className="h-3 w-3 opacity-60" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="group" asChild>
              <Link href="/demo">
                Try Web Demo
                <ChevronRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>

          {/* social proof line */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex items-center gap-4 text-xs text-white/40"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-neutral-950 bg-gradient-to-br from-ember/70 to-gold/70"
                />
              ))}
            </div>
            <span>
              Trusted by 12k+ travelers across the Tian Shan corridor.
            </span>
          </motion.div>
        </div>

        {/* phone column */}
        <div className="relative flex items-center justify-center">
          <PhoneMockup />
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/40"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
