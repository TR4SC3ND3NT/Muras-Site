import type { Metadata } from "next";
import { StepByStep } from "@/components/sections/StepByStep";
import { BackToHome } from "@/components/ui/BackToHome";

export const metadata: Metadata = {
  title: "How it works — Muras: Nomad's Path",
  description:
    "Set your intent, follow the path, unlock heritage. Three moves from intent to legacy.",
};

export default function HowItWorksPage() {
  return (
    <>
      <div className="px-6 pt-10 md:px-12 md:pt-12">
        <BackToHome />
      </div>
      <StepByStep />
    </>
  );
}
