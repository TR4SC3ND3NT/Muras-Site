import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white",
          "placeholder:text-white/35",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-xl",
          "transition-all duration-200",
          "focus-visible:border-ember/40 focus-visible:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-[invalid=true]:border-red-500/50 aria-[invalid=true]:ring-red-500/20",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
