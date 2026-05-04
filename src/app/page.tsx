import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { ResellerPro } from "@/components/sections/resellerpro";
import { Metrics } from "@/components/sections/metrics";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Portfolio } from "@/components/sections/portfolio";
import { CTA } from "@/components/sections/cta";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ResellerPro />
      <Metrics />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
    </main>
  );
}
