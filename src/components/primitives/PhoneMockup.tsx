"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles } from "lucide-react";
import { calendarWidget, season } from "@/lib/mockData";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function buildMonthGrid() {
  // April 2026 starts on Wednesday (day index 3, Sun=0). Render 35 cells.
  const startOffset = 3;
  const daysInMonth = 30;
  return Array.from({ length: 35 }, (_, i) => {
    const day = i - startOffset + 1;
    return day >= 1 && day <= daysInMonth ? day : null;
  });
}

export function PhoneMockup() {
  const grid = buildMonthGrid();
  const events = new Map(calendarWidget.events.map((e) => [e.day, e.label]));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className="relative mx-auto w-[320px] md:w-[360px]"
      style={{ perspective: 1200 }}
    >
      {/* ambient outer glow */}
      <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-ember/30 via-transparent to-gold/20 blur-3xl" />

      {/* phone frame */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-[3rem] border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 shadow-[0_30px_80px_-20px_rgba(255,69,0,0.35)] backdrop-blur-2xl"
      >
        {/* inner bezel */}
        <div className="relative overflow-hidden rounded-[2.4rem] bg-neutral-950/90 ring-1 ring-white/10">
          {/* notch */}
          <div className="pointer-events-none absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black/90" />

          {/* screen */}
          <div className="relative px-5 pb-6 pt-12">
            {/* app header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-ember/20 ring-1 ring-ember/30">
                  <Compass className="h-4 w-4 text-ember" />
                </div>
                <div className="text-[11px] font-semibold tracking-widest text-white/80">
                  MURAS
                </div>
              </div>
              <div className="text-[10px] text-white/40">
                {season.calendar}
              </div>
            </div>

            {/* month card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ember">
                    Current Season
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <div className="text-xl font-semibold text-white">
                      {calendarWidget.monthName}
                    </div>
                    <div className="text-xs text-white/50">
                      {calendarWidget.romanized}
                    </div>
                  </div>
                </div>
                <Sparkles className="h-4 w-4 text-gold" />
              </div>

              {/* weekday heads */}
              <div className="mb-1 grid grid-cols-7 text-center text-[9px] text-white/40">
                {WEEKDAYS.map((d, i) => (
                  <div key={i} className="py-1">
                    {d}
                  </div>
                ))}
              </div>

              {/* day grid */}
              <div className="grid grid-cols-7 gap-1">
                {grid.map((day, i) => {
                  const isHighlight = day === calendarWidget.highlight;
                  const hasEvent = day !== null && events.has(day);
                  return (
                    <div
                      key={i}
                      className={`relative aspect-square rounded-md text-center text-[10px] leading-[1.9] ${
                        day === null
                          ? "text-transparent"
                          : isHighlight
                          ? "bg-ember text-white shadow-[0_0_18px_-2px_rgba(255,69,0,0.8)]"
                          : "text-white/70 hover:bg-white/5"
                      }`}
                    >
                      {day ?? "·"}
                      {hasEvent && !isHighlight && (
                        <span className="absolute bottom-[3px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* route cta */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-gradient-to-r from-ember/15 to-gold/10 px-4 py-3">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">
                  Today&apos;s route
                </div>
                <div className="text-sm font-medium text-white">
                  Tash Rabat → Kel-Suu
                </div>
              </div>
              <div className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white">
                6h
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute -left-8 top-24 hidden rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-[10px] text-white/80 shadow-xl backdrop-blur-xl md:flex md:items-center md:gap-2"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
        Live petroglyph nearby
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute -right-6 bottom-28 hidden rounded-2xl border border-gold/30 bg-gold/10 px-3 py-2 text-[10px] text-gold shadow-xl backdrop-blur-xl md:block"
      >
        +1 Heritage Badge
      </motion.div>
    </motion.div>
  );
}
