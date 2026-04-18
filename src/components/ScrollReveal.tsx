"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: React.ReactNode;
};

export function ScrollReveal({ children }: Props) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>(".reveal");
      if (!targets.length) return;

      // Seed the initial state so SSR content is consistent post-mount.
      gsap.set(targets, { y: 50, opacity: 0 });

      ScrollTrigger.batch(targets, {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
            overwrite: "auto",
          }),
        // once: elements don't re-hide when scrolling back up
      });

      // Ensure positions recalc after images/fonts settle
      ScrollTrigger.refresh();
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
