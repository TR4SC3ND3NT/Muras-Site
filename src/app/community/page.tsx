import type { Metadata } from "next";
import { Community } from "@/components/sections/Community";
import { BackToHome } from "@/components/ui/BackToHome";

export const metadata: Metadata = {
  title: "Community — Muras: Nomad's Path",
  description:
    "Join 5,000+ modern nomads, learn the rules, contribute to the heritage archive.",
};

export default function CommunityPage() {
  return (
    <>
      <div className="px-6 pt-10 md:px-12 md:pt-12">
        <BackToHome />
      </div>
      <Community />
    </>
  );
}
