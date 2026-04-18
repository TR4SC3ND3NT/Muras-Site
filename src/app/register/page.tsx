import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create account — Muras",
  description: "Join the modern nomads of Muras: Nomad's Path.",
};

export default function RegisterPage() {
  return (
    <AuthShell
      eyebrow="Become a custodian"
      title="Create your nomad account"
      subtitle="One account. Every sacred path. Offline forever."
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-ember underline-offset-4 transition hover:underline"
          >
            Log in
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}
