import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { ResellerPro } from "@/components/sections/resellerpro";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Metrics } from "@/components/sections/metrics";

export default function Home() {
  return (
    <main className="min-h-screen bg-ekodrix-charcoal-dark">
      <Hero />
      <Metrics />
      <Services />
      <ResellerPro />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </main>
  );
}
