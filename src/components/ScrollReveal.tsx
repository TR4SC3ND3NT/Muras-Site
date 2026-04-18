"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: React.ReactNode;
};

export function ScrollReveal({ children }: Props) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>(".reveal");
      if (!targets.length) return;

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
      });

      ScrollTrigger.refresh();
    },
    { scope, dependencies: [pathname] }
  );

  return <div ref={scope}>{children}</div>;
}
