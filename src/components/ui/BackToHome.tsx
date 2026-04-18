import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackToHome({ label = "Back to Home" }: { label?: string }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl transition-all hover:-translate-x-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
      {label}
    </Link>
  );
}
