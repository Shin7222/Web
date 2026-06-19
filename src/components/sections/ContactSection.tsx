"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Mail, MessageCircle, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "@/lib/data";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    color: "neon-blue",
    description: "Drop me a message anytime",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shin",
    href: CONTACT_INFO.github,
    color: "neon-purple",
    description: "Check out my repositories",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shin",
    href: CONTACT_INFO.linkedin,
    color: "neon-blue",
    description: "Connect professionally",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    value: CONTACT_INFO.discord,
    href: "#",
    color: "neon-purple",
    description: "Chat with me on Discord",
  },
];

export function ContactSection() {
  const { ref, inView } = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl" />

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-neon-blue text-xs tracking-widest uppercase mb-3">
            — Get In Touch —
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto leading-relaxed">
            Tertarik untuk berkolaborasi atau punya project menarik? Jangan ragu untuk
            menghubungi saya! Saya selalu terbuka untuk kesempatan baru.
          </p>
        </motion.div>

        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-8 mb-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-neon-subtle opacity-30" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-neon mx-auto flex items-center justify-center mb-4">
              <Mail size={28} className="text-dark-bg" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2">
              Kirim Email
            </h3>
            <p className="text-white/50 text-sm mb-6">
              Cara terbaik untuk menghubungi saya
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <span className="font-mono text-neon-blue text-sm px-4 py-2 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                {CONTACT_INFO.email}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-white/60 hover:text-white text-sm font-mono transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy
                  </>
                )}
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${CONTACT_INFO.email}`}
                className="btn-primary px-6 py-2 rounded-lg text-sm font-medium text-dark-bg flex items-center gap-2"
              >
                <ExternalLink size={14} />
                Send Email
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card rounded-xl p-5 flex items-center gap-4 group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-${social.color}/10 border border-${social.color}/20 flex items-center justify-center flex-shrink-0 group-hover:bg-${social.color}/20 transition-colors`}
              >
                <social.icon
                  size={22}
                  className={`text-${social.color}`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-white text-sm">
                  {social.label}
                </p>
                <p className="text-white/40 text-xs font-mono truncate">
                  {social.value}
                </p>
                <p className="text-white/30 text-xs mt-0.5">{social.description}</p>
              </div>
              <ExternalLink
                size={14}
                className="text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
