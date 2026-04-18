"use server";

import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

export type AuthState =
  | { status: "idle" }
  | { status: "success"; message: string; user?: { id: number; name: string; email: string } }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email: string): string | null {
  if (!email) return "Email is required.";
  if (!EMAIL_RE.test(email)) return "That doesn't look like a valid email.";
  return null;
}

function validatePassword(password: string): string | null {
  if (!password) return "Password is required.";
  if (password.length < 8) return "Password must be at least 8 characters.";
  return null;
}

export async function registerUser(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Full name is required.";
  const emailErr = validateEmail(email);
  if (emailErr) fieldErrors.email = emailErr;
  const passErr = validatePassword(password);
  if (passErr) fieldErrors.password = passErr;

  if (Object.keys(fieldErrors).length) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors,
    };
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const inserted = await db
      .insert(users)
      .values({ name, email, passwordHash })
      .returning({ id: users.id, name: users.name, email: users.email });
    const user = inserted[0];
    return {
      status: "success",
      message: `Welcome, ${user.name}. Your nomad account is live.`,
      user,
    };
  } catch (err) {
    const code =
      typeof err === "object" && err && "code" in err
        ? String((err as { code?: unknown }).code)
        : "";
    if (code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        status: "error",
        message: "That email is already registered.",
        fieldErrors: { email: "Already registered." },
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}

export async function loginUser(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  const fieldErrors: Record<string, string> = {};
  const emailErr = validateEmail(email);
  if (emailErr) fieldErrors.email = emailErr;
  if (!password) fieldErrors.password = "Password is required.";

  if (Object.keys(fieldErrors).length) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors,
    };
  }

  const found = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  const user = found[0];
  // Constant-time-ish: always run bcrypt to avoid trivial timing oracle.
  const dummyHash =
    "$2b$10$CwTycUXWue0Thq9StjUM0uJ8.B5RrL3JvZGJp3M9N/GJW2Kq7wqLO";
  const ok = await bcrypt.compare(password, user?.passwordHash ?? dummyHash);
  if (!user || !ok) {
    return { status: "error", message: "Invalid email or password." };
  }

  return {
    status: "success",
    message: `Welcome back, ${user.name}.`,
    user: { id: user.id, name: user.name, email: user.email },
  };
}
