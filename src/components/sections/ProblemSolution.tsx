"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Leaf } from "lucide-react";
import { problem, solution } from "@/lib/mockData";

const viewport = { once: true, amount: 0.3 };

export function ProblemSolution() {
  return (
    <section id="problem" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
            The tension, the answer
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Old paths. <span className="text-gradient-gold">New custodians.</span>
          </h2>
        </motion.div>

        {/* pain / cure grid */}
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-10">
          {/* connector line between cards on md+ */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-8 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block"
          />

          {/* Pain */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10"
          >
            {/* ember wash */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-ember/15 blur-3xl transition duration-700 group-hover:bg-ember/25" />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-[11px] uppercase tracking-widest text-ember">
                <AlertTriangle className="h-3 w-3" />
                {problem.kicker}
              </div>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                {problem.title}
              </h3>
              <p className="mt-4 text-white/65 md:text-lg">{problem.body}</p>

              <ul className="mt-8 space-y-3 text-sm text-white/60">
                {[
                  "Sacred rules invisible on tourist maps",
                  "Guidebooks lag reality by a decade",
                  "Unsupervised sites, rising vandalism",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-6 flex-shrink-0 rounded bg-ember/60" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* Cure */}
          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10"
          >
            <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gold/15 blur-3xl transition duration-700 group-hover:bg-gold/25" />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-widest text-gold">
                <Leaf className="h-3 w-3" />
                {solution.kicker}
              </div>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                {solution.title}
              </h3>
              <p className="mt-4 text-white/65 md:text-lg">{solution.body}</p>

              <ul className="mt-8 space-y-3 text-sm text-white/60">
                {[
                  "Urker (Pleiades) season-aware routing",
                  "AI-driven cultural custodianship",
                  "Gamified stewardship of every site",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-6 flex-shrink-0 rounded bg-gold/70" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
