import type { Metadata } from "next";
import { Features } from "@/components/sections/Features";
import { BackToHome } from "@/components/ui/BackToHome";

export const metadata: Metadata = {
  title: "Features — Muras: Nomad's Path",
  description:
    "AI-driven routing, AR petroglyph scanning, offline survival maps, and multilingual lore.",
};

export default function FeaturesPage() {
  return (
    <>
      <div className="px-6 pt-10 md:px-12 md:pt-12">
        <BackToHome />
      </div>
      <Features />
    </>
  );
}
