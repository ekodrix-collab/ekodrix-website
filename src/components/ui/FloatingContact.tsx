"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, ShieldCheck, MessageSquare } from "lucide-react";
import Image from "next/image";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    // Check if teaser was already hidden in this session
    const teaserHidden = sessionStorage.getItem("ekodrix_teaser_hidden");
    
    if (!teaserHidden) {
      const timer = setTimeout(() => {
        setShowTeaser(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (pathname?.startsWith("/ekodrix-panel") || pathname?.startsWith("/cms")) return null;

  const handleCloseTeaser = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTeaser(false);
    sessionStorage.setItem("ekodrix_teaser_hidden", "true");
  };

  const openWhatsAppWithText = (customText?: string) => {
    const text = customText || "Hi Muhammed Siyad! I'm interested in discussing a software project with Ekodrix.";
    const message = encodeURIComponent(text);
    window.open(`https://wa.me/917736767759?text=${message}`, "_blank");
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    openWhatsAppWithText();
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">
      <AnimatePresence>
        {/* Chat Window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="w-[360px] max-w-[calc(100vw-2rem)] bg-[#121212] border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#1e1e1e] p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-ekodrix-green to-ekodrix-green-light p-[1px]">
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center overflow-hidden relative">
                      <Image 
                        src="https://cdn.sanity.io/images/3sq1n5yp/production/7912555a6e49b893da054692929d8538997a1d64-640x640.png?auto=format&w=128&q=85" 
                        alt="CEO"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-ekodrix-green rounded-full border-2 border-[#1e1e1e] animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-sm">Muhammed Siyad</h4>
                    <span className="text-[10px] px-1.5 py-0.2 bg-ekodrix-green/10 text-ekodrix-green rounded font-medium">CEO</span>
                  </div>
                  <p className="text-[0.68rem] text-gray-400">🇦🇪 UAE • GCC • Global • 🇮🇳 Online Now</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
                aria-label="Minimize chat window"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Content / Chat Body */}
            <div className="p-5 bg-[url('https://i.pinimg.com/originals/ab/ab/60/abab600fbc98f1f540c49747ba94a45a.jpg')] bg-repeat bg-[length:200px] bg-fixed relative">
              <div className="absolute inset-0 bg-[#0c0c0c]/92 pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-3.5 rounded-2xl rounded-tl-none"
                >
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Hello! 👋 Welcome to <span className="text-ekodrix-green font-semibold">Ekodrix</span>. We build world-class web, mobile, and enterprise platforms for businesses across UAE, Saudi Arabia, USA, Australia, and India.
                  </p>
                </motion.div>

                <div className="pt-1">
                  <p className="text-[11px] text-gray-400 font-medium mb-2">Select your project desk:</p>
                  <div className="space-y-1.5">
                    <button
                      onClick={() => openWhatsAppWithText("Hi Muhammed Siyad! Reaching out from UAE/GCC for a web or software development project.")}
                      className="w-full text-left text-xs px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-ekodrix-green/40 text-gray-200 transition-all flex items-center justify-between"
                    >
                      <span>🇦🇪 🇸🇦 UAE & GCC Inquiry</span>
                      <span className="text-ekodrix-green text-[10px]">Start →</span>
                    </button>
                    <button
                      onClick={() => openWhatsAppWithText("Hi Muhammed Siyad! Reaching out from USA/Worldwide for software development & tech consulting.")}
                      className="w-full text-left text-xs px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 text-gray-200 transition-all flex items-center justify-between"
                    >
                      <span>🇺🇸 🌐 USA / Global Inquiry</span>
                      <span className="text-blue-400 text-[10px]">Start →</span>
                    </button>
                    <button
                      onClick={() => openWhatsAppWithText("Hi Muhammed Siyad! I need an instant quote and consultation for my project.")}
                      className="w-full text-left text-xs px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-ekodrix-green/40 text-gray-200 transition-all flex items-center justify-between"
                    >
                      <span>⚡ Instant Proposal / Estimate</span>
                      <span className="text-ekodrix-green text-[10px]">Start →</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-3.5 bg-[#121212] border-t border-white/5">
              <button 
                onClick={openWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_-5px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.5)] active:scale-[0.98] text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Direct WhatsApp with CEO</span>
              </button>
              <div className="flex items-center justify-center gap-2 mt-2.5 opacity-40">
                <ShieldCheck className="w-3 h-3 text-white" />
                <span className="text-[0.6rem] text-white font-medium uppercase tracking-tighter">Fast response • NDA Protected</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Floating Bubble */}
        {!isOpen && (
          <div className="relative">
            {/* Teaser Bubble */}
            <AnimatePresence>
              {showTeaser && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 20 }}
                  className="absolute bottom-20 right-0 mb-2 w-max max-w-[240px]"
                >
                  <div className="relative bg-white text-black px-5 py-3 rounded-2xl rounded-br-none shadow-2xl font-medium text-sm leading-snug">
                    Hi! 👋 Ready to automate your business flow?
                    <button 
                      onClick={handleCloseTeaser}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-[10px] border border-white/10 shadow-lg hover:bg-gray-800 transition-colors"
                      aria-label="Close message teaser"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <div className="absolute -bottom-2 right-0 w-4 h-4 bg-white transform rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_15px_30px_rgba(37,211,102,0.3)] relative group overflow-hidden"
              aria-label="Contact us on WhatsApp"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <MessageCircle className="w-8 h-8 text-white fill-current" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
                </span>
              </div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Minimize2({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M8 3v5H3" />
      <path d="M16 3v5h5" />
      <path d="M16 21v-5h5" />
      <path d="M8 21v-5H3" />
    </svg>
  );
}
