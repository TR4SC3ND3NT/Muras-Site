"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, motion } from "framer-motion";
import { metrics } from "@/lib/mockData";

export function Metrics() {
  return (
    <section className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* glass banner container */}
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.04] p-10 backdrop-blur-2xl md:rounded-[2.5rem] md:p-16">
          {/* orbs behind */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-ember/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />

          {/* ethno pattern stripe */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[2px] opacity-80"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent, rgba(255,69,0,0.8), rgba(255,215,0,0.8), rgba(255,69,0,0.8), transparent)",
            }}
          />

          <div className="relative">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
                Trust &amp; scale
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Built with archaeologists.{" "}
                <span className="text-gradient-gold">Proven in the field.</span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {metrics.map((m, idx) => (
                <MetricCard
                  key={m.label}
                  value={m.value}
                  suffix={m.suffix}
                  label={m.label}
                  hint={m.hint}
                  decimals={"decimals" in m ? m.decimals : 0}
                  accent={idx === 1 ? "gold" : "ember"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  value,
  suffix,
  label,
  hint,
  decimals = 0,
  accent,
}: {
  value: number;
  suffix: string;
  label: string;
  hint: string;
  decimals?: number;
  accent: "ember" | "gold";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(() => format(0, decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(format(v, decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  const tint =
    accent === "ember"
      ? "from-ember/20 via-transparent to-transparent text-ember"
      : "from-gold/20 via-transparent to-transparent text-gold";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-xl transition-colors hover:border-white/20"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${tint} opacity-60 transition-opacity group-hover:opacity-100`}
      />
      <div className="relative">
        <div className="flex items-baseline justify-center gap-1 font-sans">
          <span
            className={`text-5xl font-semibold tracking-tight md:text-6xl ${
              accent === "ember" ? "text-gradient-ember" : "text-gradient-gold"
            }`}
          >
            {display}
          </span>
          <span className="text-2xl font-medium text-white/70 md:text-3xl">
            {suffix}
          </span>
        </div>
        <div className="mt-4 text-sm font-medium text-white md:text-base">
          {label}
        </div>
        <div className="mt-2 text-xs text-white/50">{hint}</div>
      </div>
    </motion.div>
  );
}

function format(v: number, decimals: number) {
  if (decimals > 0) return v.toFixed(decimals);
  return Math.round(v).toLocaleString();
}
