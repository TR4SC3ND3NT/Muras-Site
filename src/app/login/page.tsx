import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log in — Muras",
  description: "Sign in to your Muras Nomad's Path account.",
};

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to Muras"
      subtitle="Continue your journey across the steppe."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-ember underline-offset-4 transition hover:underline"
          >
            Sign up
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
