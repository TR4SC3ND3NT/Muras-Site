import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { ChromeFooter } from "@/components/ChromeFooter";
import { ScrollReveal } from "@/components/ScrollReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muras: Nomad's Path — Your Digital Compass to Nomadic Antiquity",
  description:
    "Discover sacred mazars, decode ancient petroglyphs, and travel according to the stars. Muras gamifies cultural exploration across Kyrgyzstan.",
  applicationName: "Muras",
  keywords: [
    "Kyrgyzstan",
    "cultural tourism",
    "petroglyphs",
    "nomadic heritage",
    "Tian Shan",
    "AR travel",
  ],
  openGraph: {
    title: "Muras: Nomad's Path",
    description:
      "Your Digital Compass to Nomadic Antiquity. Synchronize with the Steppe.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-neutral-950 text-white selection:bg-ember/40">
        <Navbar />
        <ScrollReveal>{children}</ScrollReveal>
        <ChromeFooter />
      </body>
    </html>
  );
}
