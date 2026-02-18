"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-ekodrix-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/70">
            Trusted by founders and businesses worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-[#111] rounded-xl p-6 border border-white/10 hover:border-ekodrix-green shadow-sm hover:shadow-lg transition-all"
            >
              <Quote className="w-8 h-8 text-ekodrix-green mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-white mb-6 italic">"{testimonial.quote}"</p>

              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/70">{testimonial.business}</p>
                <p className="text-xs text-white/60">{testimonial.location}</p>
                <p className="text-xs text-ekodrix-green mt-2 font-semibold">
                  {testimonial.revenue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
