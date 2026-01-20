import { Metadata } from "next";
import { CaseStudies } from "@/components/sections/case-studies";

export const metadata: Metadata = {
  title: "Case Studies - EKODRIX",
  description: "Explore our portfolio of successful projects and case studies.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-20">
      <CaseStudies />
    </main>
  );
}
