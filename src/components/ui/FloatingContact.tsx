"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Send, Minimize2 } from "lucide-react";
import { toast } from "sonner";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Initial check for dismissal
  useEffect(() => {
    const dismissed = localStorage.getItem("ekodrix_contact_dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
    }
  }, []);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      // Don't show if dismissed or manually interacted
      if (hasInteracted || isDismissed) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      // Unveil when user has scrolled ~70% of the page
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

      if (scrollPercentage > 0.7) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasInteracted, isDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasInteracted(true);
    // Persist dismissal
    localStorage.setItem("ekodrix_contact_dismissed", "true");
    setIsDismissed(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    console.log("Sending email to: contact@ekodrix.com");
    
    // Show success toast
    toast.success("Message sent successfully!", {
      description: "We'll be in touch with you at contact@ekodrix.com shortly.",
      duration: 5000,
    });

    setIsMinimized(true);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end">
      <AnimatePresence mode="wait">
        {!isMinimized ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[320px] bg-ekodrix-charcoal-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-ekodrix-green/10 to-transparent border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-ekodrix-green animate-pulse absolute top-0 right-0" />
                  <MessageSquare className="w-5 h-5 text-ekodrix-green" />
                </div>
                <span className="font-semibold text-white text-sm">Let's Build Something</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                  aria-label="Minimize"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                Ready to scale? Drop us a line and get a quote in 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-ekodrix-green/50 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <textarea 
                    placeholder="Tell us about your project..."
                    required
                    rows={2}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-ekodrix-green/50 transition-colors resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-ekodrix-green hover:bg-ekodrix-green-light text-ekodrix-charcoal-dark font-medium py-2 rounded-lg text-sm transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsMinimized(false)}
              className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-ekodrix-green text-ekodrix-charcoal-dark shadow-lg shadow-ekodrix-green/20 hover:shadow-ekodrix-green/40 transition-shadow"
            >
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <MessageSquare className="w-6 h-6" />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-4 bg-white text-ekodrix-charcoal-dark px-3 py-1.5 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Get in touch
                <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
