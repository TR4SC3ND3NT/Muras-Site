import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Features } from "@/components/sections/Features";
import { StepByStep } from "@/components/sections/StepByStep";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ProblemSolution />
      <Features />
      <StepByStep />
      <Footer />
    </main>
  );
}
