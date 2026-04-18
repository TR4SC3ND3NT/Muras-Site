"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle, Loader2, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser, type AuthState } from "@/app/actions/auth";

const initial: AuthState = { status: "idle" };

export function RegisterForm() {
  const [state, formAction] = useActionState(registerUser, initial);
  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Aigerim Bektur"
          aria-invalid={Boolean(fieldErrors.name) || undefined}
        />
        {fieldErrors.name && (
          <p className="text-xs text-red-400">{fieldErrors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="nomad@steppe.kg"
          aria-invalid={Boolean(fieldErrors.email) || undefined}
        />
        {fieldErrors.email && (
          <p className="text-xs text-red-400">{fieldErrors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          placeholder="At least 8 characters"
          aria-invalid={Boolean(fieldErrors.password) || undefined}
        />
        {fieldErrors.password && (
          <p className="text-xs text-red-400">{fieldErrors.password}</p>
        )}
      </div>

      {state.status === "error" && !Object.keys(fieldErrors).length && (
        <FormBanner kind="error" message={state.message} />
      )}
      {state.status === "success" && (
        <FormBanner kind="success" message={state.message} />
      )}

      <SubmitButton label="Create Nomad Account" />

      <p className="text-center text-[11px] text-white/40">
        By creating an account you agree to our Terms and acknowledge our
        Privacy Policy.
      </p>
    </form>
  );
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-ember text-sm font-medium text-white shadow-[0_0_40px_-6px_rgba(255,69,0,0.85)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_-2px_rgba(255,69,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:opacity-70 disabled:hover:translate-y-0"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ember via-ember-soft to-ember opacity-0 transition-opacity group-hover:opacity-100"
      />
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Creating account…
        </>
      ) : (
        <>
          {label}
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
}

function FormBanner({
  kind,
  message,
}: {
  kind: "success" | "error";
  message: string;
}) {
  const Icon = kind === "success" ? CheckCircle2 : AlertCircle;
  const tone =
    kind === "success"
      ? "border-gold/30 bg-gold/10 text-gold"
      : "border-red-500/30 bg-red-500/10 text-red-300";
  return (
    <div
      role={kind === "error" ? "alert" : "status"}
      className={`flex items-start gap-2 rounded-xl border px-3 py-2.5 text-xs backdrop-blur-xl ${tone}`}
    >
      <Icon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
      <span>{message}</span>
    </div>
  );
}
