import { app } from "@/lib/mockData";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-ember to-gold text-neutral-950">
            <span className="text-xs font-bold">M</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-widest text-white">
              {app.name.toUpperCase()}
            </div>
            <div className="text-[10px] tracking-[0.25em] text-white/40">
              {app.tagline.toUpperCase()}
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-6 text-xs text-white/50">
          <a href="#problem" className="hover:text-white">
            Problem
          </a>
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#how" className="hover:text-white">
            How it works
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Press kit
          </a>
        </nav>

        <div className="text-[11px] text-white/40">
          © {new Date().getFullYear()} {app.fullName} · Built for the steppe.
        </div>
      </div>
    </footer>
  );
}
