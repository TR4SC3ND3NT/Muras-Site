"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/sections/Footer";

export function ChromeFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith("/login") || pathname?.startsWith("/register")) {
    return null;
  }
  return <Footer />;
}
