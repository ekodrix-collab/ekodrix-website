"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, ShieldCheck, MessageSquare } from "lucide-react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  const handleCloseTeaser = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTeaser(false);
    sessionStorage.setItem("ekodrix_teaser_hidden", "true");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Ekodrix team! I'm interested in discussing a project. Can we talk?");
    window.open(`https://wa.me/917736767759?text=${message}`, "_blank");
    setIsOpen(false);
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
            className="w-[340px] bg-[#121212] border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
          >
            {/* Header omitted for brevity in replace tool, but will be kept intact */}
            <div className="bg-[#1e1e1e] p-5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ekodrix-green to-ekodrix-green-light p-[1px]">
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center overflow-hidden">
                      <img 
                        src="/team/image.png" 
                        alt="CEO"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://ui-avatars.com/api/?name=Siyad+Aslam&background=10b981&color=fff";
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-ekodrix-green rounded-full border-2 border-[#1e1e1e] animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Siyad Aslam</h4>
                  <p className="text-[0.7rem] text-ekodrix-green font-medium uppercase tracking-widest opacity-80">CEO • Online Now</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Content / Chat Body */}
            <div className="p-6 bg-[url('https://i.pinimg.com/originals/ab/ab/60/abab600fbc98f1f540c49747ba94a45a.jpg')] bg-repeat bg-[length:200px] bg-fixed">
              <div className="absolute inset-0 bg-[#0c0c0c]/90 pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl rounded-tl-none max-w-[85%]"
                >
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Hello! 👋 We specialize in building <span className="text-ekodrix-green font-medium">high-performance</span> software and manufacturing workflows.
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl rounded-tl-none max-w-[85%]"
                >
                  <p className="text-sm text-gray-200 leading-relaxed">
                    How can I help you scale your business today?
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 bg-[#121212] border-t border-white/5">
              <button 
                onClick={openWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_10px_20px_-5px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </button>
              <div className="flex items-center justify-center gap-2 mt-4 opacity-30">
                <ShieldCheck className="w-3 h-3 text-white" />
                <span className="text-[0.6rem] text-white font-medium uppercase tracking-tighter">Your data is secure</span>
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
