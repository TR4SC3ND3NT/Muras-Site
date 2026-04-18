import { cn } from "@/lib/utils";

type GlowOrbProps = {
  color?: "ember" | "gold";
  size?: number;
  className?: string;
  speed?: "slow" | "fast";
};

export function GlowOrb({
  color = "ember",
  size = 500,
  className,
  speed = "slow",
}: GlowOrbProps) {
  const hex =
    color === "ember" ? "rgba(255,69,0,0.55)" : "rgba(255,215,0,0.45)";
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[120px] mix-blend-screen will-change-transform",
        speed === "slow"
          ? "animate-[float-slow_14s_ease-in-out_infinite]"
          : "animate-[float-fast_9s_ease-in-out_infinite]",
        className
      )}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at center, ${hex} 0%, transparent 70%)`,
      }}
    />
  );
}
