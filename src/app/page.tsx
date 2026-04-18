import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Features } from "@/components/sections/Features";
import { WebPreview } from "@/components/sections/WebPreview";
import { Metrics } from "@/components/sections/Metrics";
import { StepByStep } from "@/components/sections/StepByStep";
import { Community } from "@/components/sections/Community";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ScrollReveal>
        <ProblemSolution />
        <Features />
        <WebPreview />
        <Metrics />
        <StepByStep />
        <Community />
        <Footer />
      </ScrollReveal>
    </main>
  );
}
