import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { ResellerPro } from "@/components/sections/resellerpro";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { SuccessStories } from "@/components/sections/success-stories";
import { CTA } from "@/components/sections/cta";
import { Metrics } from "@/components/sections/metrics";

export default function Home() {
  return (
    <main className="min-h-screen bg-ekodrix-charcoal-dark">
      <Hero />
      <Metrics />
      <Services />
      <Process />
      <ResellerPro />
      <CaseStudies />
      <Testimonials />
      <SuccessStories />
      <CTA />
    </main>
  );
}
