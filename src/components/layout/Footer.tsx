"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export function Footer() {
  const socials = [
    { icon: Github, href: "https://github.com/shin-dev", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shin-dev", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shin@example.com", label: "Email" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ];

  return (
    <footer className="relative border-t border-white/5 py-12 px-4">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg border border-neon-blue/40 flex items-center justify-center bg-gradient-neon-subtle">
                <span className="font-display font-bold text-sm neon-text">S</span>
              </div>
              <span className="font-display font-semibold text-white">
                shin
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Python Developer · AI Enthusiast · Game Developer. Building the
              future, one line of code at a time.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white/60 text-xs font-mono uppercase tracking-widest mb-3">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/40 hover:text-neon-blue text-sm transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-white/60 text-xs font-mono uppercase tracking-widest mb-3">
              Connect
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-white/50 hover:text-neon-blue transition-colors"
                  title={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs font-mono">
            © {new Date().getFullYear()} Shin. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-mono">
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
