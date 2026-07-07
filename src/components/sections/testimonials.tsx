"use client";

import { Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Rajesh Kumar",
    business: "Kumar Electronics",
    location: "Delhi",
    quote: "Revenue growth was consistent in 6 months after switching to ResellerPro. The WhatsApp automation alone saves me hours daily.",
    rating: 5,
    revenue: "Steady growth in 3 months",
  },
  {
    name: "Priya Sharma",
    business: "TechSolutions Inc",
    location: "Bangalore",
    quote: "EKODRIX built our SaaS platform with precision. The code quality is exceptional and the platform scales as we grow.",
    rating: 5,
    revenue: "Growing user base",
  },
  {
    name: "Habitek Team",
    business: "Habitek Interiors",
    location: "Kerala",
    quote: "Our online presence finally matches the quality of our interior designs. EKODRIX captured our brand essence perfectly.",
    rating: 5,
    revenue: "3x enquiry growth",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#111111] overflow-hidden border-t border-white/5">
      
      {/* Background glow lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10">
        <div className="w-full h-[300px] bg-gradient-to-r from-transparent via-ekodrix-green to-transparent opacity-20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <ScrollReveal type="fade-up" threshold={0.1}>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
              <span className="w-2 h-2 rounded-full bg-ekodrix-green shadow-[0_0_8px_rgba(40,179,106,0.8)] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-white/70 uppercase font-mono">Feedback</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal type="fade-up" delay={0.1} threshold={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.15] tracking-tight text-[#FAFAFA] mb-6 max-w-3xl mx-auto">
              Trusted by ambitious{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ekodrix-green to-ekodrix-green-light">
                founders
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              type="fade-up"
              delay={index * 0.15}
              threshold={0.1}
              className="h-full group"
            >
              <div className="bg-[#0A0A0A]/60 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-ekodrix-green/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:bg-[#111] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                
                <div className="absolute -top-6 -right-6 text-white/5 group-hover:text-ekodrix-green/5 transition-colors duration-500">
                  <Quote className="w-32 h-32 rotate-12" />
                </div>

                <div className="flex gap-1 mb-6 relative z-10">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-ekodrix-green text-ekodrix-green" />
                  ))}
                </div>

                <p className="text-white/80 mb-8 leading-relaxed font-light relative z-10 text-[0.95rem]">
                  "{testimonial.quote}"
                </p>

                <div className="mt-auto border-t border-white/10 pt-6 flex items-center justify-between relative z-10">
                  <div>
                    <p className="font-bold font-display text-[#FAFAFA] text-lg">{testimonial.name}</p>
                    <p className="text-xs text-white/50">{testimonial.business}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[0.65rem] uppercase tracking-widest text-ekodrix-green/70 bg-ekodrix-green/10 px-2 py-1 rounded">
                      {testimonial.revenue}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
