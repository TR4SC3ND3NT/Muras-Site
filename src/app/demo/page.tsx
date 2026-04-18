import type { Metadata } from "next";
import { WebPreview } from "@/components/sections/WebPreview";
import { BackToHome } from "@/components/ui/BackToHome";

export const metadata: Metadata = {
  title: "Live Demo — Muras: Nomad's Path",
  description:
    "Walk through an interactive map of sacred mazars, springs, and petroglyph sites.",
};

export default function DemoPage() {
  return (
    <>
      <div className="px-6 pt-10 md:px-12 md:pt-12">
        <BackToHome />
      </div>
      <WebPreview />
    </>
  );
}
