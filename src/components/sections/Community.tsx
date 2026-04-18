"use client";

import { motion } from "framer-motion";
import {
  Send,
  BookOpen,
  UploadCloud,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { community } from "@/lib/mockData";

export function Community() {
  const [side1, side2] = community.sides;

  return (
    <section id="community" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
            Community &amp; support
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A living{" "}
            <span className="text-gradient-ember">digital custodianship</span>.
          </h2>
        </div>

        {/* bento grid */}
        <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-2 lg:gap-6">
          {/* main: Telegram hub */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="reveal group relative overflow-hidden rounded-3xl border border-ember/30 bg-gradient-to-br from-ember/15 via-white/[0.04] to-gold/10 p-8 backdrop-blur-xl lg:col-span-2 lg:row-span-2 lg:p-12"
          >
            {/* orbs */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-ember/30 blur-3xl transition duration-700 group-hover:bg-ember/40" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />

            {/* chat bubbles pattern */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-6 opacity-40">
              <ChatBubblesPattern />
            </div>

            <div className="relative flex h-full flex-col">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[11px] uppercase tracking-widest text-white/80 backdrop-blur-xl">
                <Users className="h-3 w-3 text-ember" />
                5,000+ nomads
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-xl">
                  <Send className="h-5 w-5 text-ember" />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                  {community.main.handle}
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white md:text-4xl">
                {community.main.name}
              </h3>
              <p className="mt-4 max-w-lg text-base text-white/65 md:text-lg">
                {community.main.body}
              </p>

              {/* CTA: glowing ember */}
              <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row sm:items-center">
                <a
                  href="#"
                  className="group/btn inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ember px-6 text-sm font-medium text-white shadow-[0_0_40px_-4px_rgba(255,69,0,0.9)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_0px_rgba(255,69,0,1)]"
                >
                  <Send className="h-4 w-4" />
                  {community.main.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
                <div className="flex items-center gap-3 text-xs text-white/50">
                  <div className="flex -space-x-1.5">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-6 w-6 rounded-full border-2 border-neutral-950 bg-gradient-to-br from-ember/70 to-gold/70"
                      />
                    ))}
                  </div>
                  Active in the last hour
                </div>
              </div>
            </div>
          </motion.div>

          {/* side 1: Etiquette */}
          <BentoSide
            icon={BookOpen}
            title={side1.title}
            body={side1.body}
            cta={side1.cta}
            accent="gold"
          />

          {/* side 2: Crowdsource */}
          <BentoSide
            icon={UploadCloud}
            title={side2.title}
            body={side2.body}
            cta={side2.cta}
            accent="ember"
          />
        </div>
      </div>
    </section>
  );
}

function BentoSide({
  icon: Icon,
  title,
  body,
  cta,
  accent,
}: {
  icon: typeof BookOpen;
  title: string;
  body: string;
  cta: string;
  accent: "ember" | "gold";
}) {
  const tint =
    accent === "ember"
      ? "bg-ember/15 text-ember ring-ember/30"
      : "bg-gold/15 text-gold ring-gold/30";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-colors hover:border-white/20 md:p-8"
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-opacity group-hover:opacity-100 ${
          accent === "ember" ? "bg-ember/15 opacity-50" : "bg-gold/15 opacity-50"
        }`}
      />

      <div className="relative flex h-full flex-col">
        <div
          className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-transform group-hover:scale-110 ${tint}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h4 className="text-lg font-semibold text-white md:text-xl">{title}</h4>
        <p className="mt-3 text-sm text-white/60">{body}</p>
        <a
          href="#"
          className={`mt-6 inline-flex w-fit items-center gap-1 text-xs font-medium ${
            accent === "ember" ? "text-ember" : "text-gold"
          }`}
        >
          {cta}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.div>
  );
}

function ChatBubblesPattern() {
  return (
    <svg
      viewBox="0 0 220 260"
      className="h-full w-[220px] max-w-[40%]"
      aria-hidden
    >
      <defs>
        <linearGradient id="bubble-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,69,0,0.4)" />
          <stop offset="100%" stopColor="rgba(255,215,0,0.25)" />
        </linearGradient>
      </defs>
      <g fill="url(#bubble-grad)" stroke="rgba(255,255,255,0.15)">
        <rect x="12" y="12" width="130" height="30" rx="15" />
        <rect x="60" y="56" width="160" height="30" rx="15" />
        <rect x="4" y="100" width="150" height="30" rx="15" />
        <rect x="76" y="144" width="140" height="30" rx="15" />
        <rect x="20" y="188" width="120" height="30" rx="15" />
        <rect x="70" y="228" width="130" height="24" rx="12" />
      </g>
    </svg>
  );
}
