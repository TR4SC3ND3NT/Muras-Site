import { ArrowRight } from "lucide-react";
import { steps } from "@/lib/mockData";

export function StepByStep() {
  return (
    <section id="how" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
            How it works
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Three moves from{" "}
            <span className="text-gradient-ember">intent</span> to{" "}
            <span className="text-gradient-gold">heritage</span>.
          </h2>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
          />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <div key={step.number} className="reveal relative">
                  <div className="relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ember to-gold opacity-80 blur-md" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-neutral-950 text-sm font-mono font-semibold text-white shadow-[0_0_24px_-4px_rgba(255,69,0,0.6)]">
                      {step.number}
                    </div>
                  </div>

                  {!isLast && (
                    <div className="absolute right-0 top-6 hidden translate-x-1/2 text-white/30 lg:block">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}

                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                    <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-48 rounded-full bg-ember/10 blur-3xl transition duration-500 group-hover:bg-ember/20" />
                    <div className="relative">
                      <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition group-hover:border-ember/30 group-hover:text-ember">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-white md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/60 md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reveal relative mx-auto mt-20 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ember/10 via-white/[0.03] to-gold/10 p-8 text-center backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-20 left-1/4 h-40 w-40 rounded-full bg-ember/30 blur-3xl" />
            <div className="absolute -bottom-20 right-1/4 h-40 w-40 rounded-full bg-gold/30 blur-3xl" />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              The steppe is already calling.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              Join the custodians of Kyrgyzstan&apos;s living museum. Every
              walk preserves the path for the next nomad.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ember px-7 text-sm font-medium text-white shadow-[0_0_30px_-6px_rgba(255,69,0,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-4px_rgba(255,69,0,0.9)]"
              >
                Download Muras
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Try Web Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
