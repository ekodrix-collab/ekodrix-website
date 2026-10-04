"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "United Arab Emirates",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate lead capture & state transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ekodrix-green/10 border border-ekodrix-green/20 text-ekodrix-green text-xs font-semibold uppercase tracking-wider mb-4">
              🇦🇪 UAE • 🇸🇦 GCC • 🇺🇸 Global • 🇮🇳 India Desk
            </div>
            <h1 className="text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-ekodrix-green to-ekodrix-green-light">
              Get in Touch with Engineering Leadership
            </h1>
            <p className="text-xl text-gray-400">
              Direct consultation with our executive team. Serving clients across UAE, GCC, USA, Australia & India.
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
                  <h3 className="font-semibold mb-1">Direct Inquiries</h3>
                  <a href="mailto:hello@ekodrix.com" className="text-gray-400 hover:text-white transition-colors">
                    hello@ekodrix.com
                  </a>
                </div>

                <div>
                  <Phone className="w-6 h-6 text-ekodrix-green mb-2" />
                  <h3 className="font-semibold mb-1">Global & GCC Phone / WhatsApp</h3>
                  <a href="tel:+917736767759" className="text-gray-400 hover:text-white transition-colors block mb-2">
                    +91 77367 67759
                  </a>
                  <a
                    href="https://wa.me/917736767759"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 transition-all"
                  >
                    💬 Quick WhatsApp Chat
                  </a>
                </div>

                <div>
                  <MapPin className="w-6 h-6 text-ekodrix-green mb-2" />
                  <h3 className="font-semibold mb-1">Client Desks & Hubs</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-400">
                      <strong className="text-white">🇦🇪 UAE & GCC Client Desk</strong><br />
                      Dubai, Abu Dhabi & Riyadh remote consultation
                    </p>
                    <p className="text-gray-400">
                      <strong className="text-white">🌐 Global Tech Delivery</strong><br />
                      USA, UK & Australia timezone overlap
                    </p>
                    <p className="text-gray-400">
                      <strong className="text-white">🇮🇳 Development Headquarters</strong><br />
                      Kondotty, Malappuram, Kerala, India
                    </p>
                    <a 
                      href="https://share.google/yvUulZGGd8pqPi9cv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ekodrix-green hover:underline mt-1 font-medium text-xs"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      View Headquarters on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 border border-ekodrix-green/30 text-center flex flex-col justify-center items-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-ekodrix-green/20 flex items-center justify-center text-ekodrix-green text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-gray-400 text-sm">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our technical leadership will review your requirements and reach out within 24 hours.
                </p>
                <a
                  href={`https://wa.me/917736767759?text=${encodeURIComponent(`Hi Ekodrix team, I just submitted an inquiry for ${formData.company || 'my project'}. Let's discuss!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all"
                >
                  💬 Fast Track on WhatsApp
                </a>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 border border-white/10 space-y-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ekodrix-green transition-colors text-sm"
                    placeholder="e.g. Tariq Al-Mansoor / John Smith"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ekodrix-green transition-colors text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium mb-1.5">
                      Country / Region *
                    </label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#181818] border border-white/10 text-white focus:outline-none focus:border-ekodrix-green transition-colors text-sm"
                    >
                      <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
                      <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                      <option value="Qatar">🇶🇦 Qatar</option>
                      <option value="Kuwait">🇰🇼 Kuwait</option>
                      <option value="Oman">🇴🇲 Oman</option>
                      <option value="Bahrain">🇧🇭 Bahrain</option>
                      <option value="United States">🇺🇸 United States</option>
                      <option value="United Kingdom">🇬🇧 United Kingdom</option>
                      <option value="Australia">🇦🇺 Australia</option>
                      <option value="Canada">🇨🇦 Canada</option>
                      <option value="Singapore">🇸🇬 Singapore</option>
                      <option value="India">🇮🇳 India</option>
                      <option value="Other">🌐 Other International</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ekodrix-green transition-colors text-sm"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Project Details & Scope *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-ekodrix-green transition-colors resize-none text-sm"
                    placeholder="Tell us about your goals, timeline, and platform requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 rounded-xl bg-ekodrix-green text-[#0a0a0a] font-bold hover:scale-[1.02] hover:shadow-lg hover:shadow-ekodrix-green/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
                  <Send className="w-4 h-4" />
                </button>
              </motion.form>
            )}
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
