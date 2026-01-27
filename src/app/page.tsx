import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { ResellerPro } from "@/components/sections/resellerpro";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { SuccessStories } from "@/components/sections/success-stories";
import { CTA } from "@/components/sections/cta";
import { Metrics } from "@/components/sections/metrics";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-ekodrix-charcoal-dark">
      <Hero />
      
      <ScrollReveal type="fade-up" delay={0.1}>
        <Metrics />
      </ScrollReveal>

      <ScrollReveal type="blur-in" threshold={0.2}>
        <Services />
      </ScrollReveal>

      <ScrollReveal type="slide-left" threshold={0.2}>
        <Process />
      </ScrollReveal>

      <ScrollReveal type="scale-in" threshold={0.1}>
        <ResellerPro />
      </ScrollReveal>

      <ScrollReveal type="slide-right" threshold={0.2}>
        <CaseStudies />
      </ScrollReveal>

      <ScrollReveal type="fade-up" threshold={0.2}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal type="blur-in" threshold={0.2}>
        <SuccessStories />
      </ScrollReveal>

      <ScrollReveal type="fade-down" threshold={0.1}>
        <CTA />
      </ScrollReveal>
    </main>
  );
}
