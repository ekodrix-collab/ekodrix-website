"use client";

import { useState, useEffect } from "react";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { Lock, ShieldCheck, ArrowRight, User, LogOut, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CMSStudioPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME || "ekodrix-user";
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "Ekodrix@2026!";

  useEffect(() => {
    setMounted(true);
    const sessionAuth = sessionStorage.getItem("ekodrix_cms_authenticated");
    if (sessionAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (usernameInput === adminUsername && passwordInput === adminPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem("ekodrix_cms_authenticated", "true");
      setError("");
    } else {
      setError("Invalid username or password. Access Denied.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("ekodrix_cms_authenticated");
    setIsAuthenticated(false);
    setUsernameInput("");
    setPasswordInput("");
  };

  if (!mounted) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#121212] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-ekodrix-green/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center mb-8 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-ekodrix-green/10 border border-ekodrix-green/30 flex items-center justify-center mx-auto mb-4 text-ekodrix-green shadow-lg shadow-ekodrix-green/10">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 font-display">
              Ekodrix Content CMS
            </h1>
            <p className="text-sm text-gray-400">
              Sanity Studio CMS. Please sign in to manage website content & media.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 relative z-10">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={usernameInput}
                  onChange={(e) => {
                    setUsernameInput(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter username (ekodrix-user)"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green transition-colors text-sm"
                />
                <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter password..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-ekodrix-green transition-colors text-sm"
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-2.5 text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-ekodrix-green text-[#0a0a0a] font-bold text-sm hover:scale-[1.02] hover:shadow-lg hover:shadow-ekodrix-green/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Sign In to CMS Studio
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-ekodrix-green" />
              <span>Ekodrix CMS Security</span>
            </div>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
              Back to Home
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col bg-white">
      {/* CMS Control Bar */}
      <div className="bg-[#121212] border-b border-white/10 px-4 py-2 flex items-center justify-between z-50 text-xs text-white">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-ekodrix-green animate-pulse" />
          <span className="font-semibold tracking-wide">Ekodrix Sanity CMS</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-400">User: <strong className="text-gray-200">{adminUsername}</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5 text-ekodrix-green" />
            <span>Open Website</span>
          </Link>
          <button
            onClick={handleLogout}
            className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 hover:text-red-300 transition-all flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock & Sign Out</span>
          </button>
        </div>
      </div>

      <div className="flex-1 w-full h-full">
        <NextStudio config={config} />
      </div>
    </div>
  );
}
