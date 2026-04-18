"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/mockData";

const viewport = { once: true, amount: 0.2 };

export function Features() {
  return (
    <section
      id="features"
      className="relative px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
              Core Features
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              One app. <span className="text-gradient-ember">Four sacred tools.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/55 md:text-base">
            Each feature is tuned to the rhythm of the steppe — built with
            anthropologists, coded for the road.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            const isEmber = f.accent === "ember";
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 md:p-9"
              >
                {/* accent wash */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                    isEmber
                      ? "bg-ember/20 opacity-40"
                      : "bg-gold/15 opacity-40"
                  }`}
                />

                {/* border shimmer on hover */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    isEmber ? "ring-1 ring-ember/30" : "ring-1 ring-gold/30"
                  }`}
                />

                <div className="relative">
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition-all duration-300 group-hover:scale-110 ${
                      isEmber
                        ? "bg-ember/15 ring-ember/30 text-ember"
                        : "bg-gold/15 ring-gold/30 text-gold"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="mb-2 flex items-baseline gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                      0{idx + 1}
                    </span>
                    <div
                      className={`h-px flex-1 bg-gradient-to-r ${
                        isEmber
                          ? "from-ember/40"
                          : "from-gold/40"
                      } to-transparent`}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                    {f.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
