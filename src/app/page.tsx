import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { ResellerPro } from "@/components/sections/resellerpro";
import { Metrics } from "@/components/sections/metrics";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CaseStudies } from "@/components/sections/case-studies";
import { CTA } from "@/components/sections/cta";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal type="fade-up" threshold={0.1}>
        <Services />
      </ScrollReveal>
      <ScrollReveal type="fade-up" threshold={0.1}>
        <ResellerPro />
      </ScrollReveal>
      <ScrollReveal type="fade-up" threshold={0.1}>
        <Metrics />
      </ScrollReveal>
      <ScrollReveal type="fade-up" threshold={0.1}>
        <Process />
      </ScrollReveal>
      <ScrollReveal type="fade-up" threshold={0.1}>
        <CaseStudies />
      </ScrollReveal>
      <ScrollReveal type="fade-up" threshold={0.1}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal type="slide-down" threshold={0.1}>
        <CTA />
      </ScrollReveal>
    </main>
  );
}
