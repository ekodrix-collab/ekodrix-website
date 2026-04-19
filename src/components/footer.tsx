"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { EkodrixLogo } from "@/components/logos/ekodrix-logo";

const footerLinks = {
  product: [
    { href: "/resellerpro", label: "ResellerPro" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Case Studies" },
    { href: "/pricing", label: "Pricing" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com/ekodrix", icon: Instagram, label: "Instagram" },
  // { href: "https://twitter.com/ekodrix", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/company/ekodrix", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:hello@ekodrix.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-ekodrix-charcoal-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <EkodrixLogo size="sm" showTagline />
            <p className="text-sm text-gray-400 mb-4 mt-4">
              Elite engineering for ambitious brands.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-ekodrix-green transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-ekodrix-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-ekodrix-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-ekodrix-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} EKODRIX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
