"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen pt-20">
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-ekodrix-green to-ekodrix-green-light">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400">
              Let's discuss your project and turn your vision into reality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-2xl p-8 border border-white/10 space-y-6">
                <div>
                  <Mail className="w-6 h-6 text-ekodrix-green mb-2" />
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:hello@ekodrix.com" className="text-gray-400 hover:text-white transition-colors">
                    hello@ekodrix.com
                  </a>
                </div>

                <div>
                  <Phone className="w-6 h-6 text-ekodrix-green mb-2" />
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+917736767759" className="text-gray-400 hover:text-white transition-colors">
                    +91 77367 67759
                  </a>
                </div>

                <div>
                  <MapPin className="w-6 h-6 text-ekodrix-green mb-2" />
                  <h3 className="font-semibold mb-1">Locations</h3>
                  <div className="space-y-4 text-sm">
                    <p className="text-gray-400">
                      <strong className="text-white">Headquarters</strong><br />
                      Kondotty, Malappuram, Kerala
                    </p>
                    <p className="text-gray-400">
                      <strong className="text-white">Engineering Center</strong><br />
                      Bangalore, India
                    </p>
                    <a 
                      href="https://share.google/yvUulZGGd8pqPi9cv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ekodrix-green hover:underline mt-2 font-medium"
                    >
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-white/10 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ekodrix-green transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ekodrix-green transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ekodrix-green transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ekodrix-green transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-xl bg-ekodrix-green text-[#0a0a0a] font-bold hover:scale-[1.02] hover:shadow-lg hover:shadow-ekodrix-green/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </motion.form>
          </div>
          {/* Map Section */}
          <motion.div
            className="mt-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl h-[450px] relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Ekodrix%20Software%20Solutions%20Kondotty&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ekodrix Location Map"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
