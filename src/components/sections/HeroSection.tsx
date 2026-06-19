"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, MessageSquare, Code2, Cpu, Gamepad2 } from "lucide-react";

const floatingIcons = [
  { icon: Code2, delay: 0, x: -120, y: -80, color: "text-neon-blue" },
  { icon: Cpu, delay: 0.5, x: 120, y: -60, color: "text-neon-purple" },
  { icon: Gamepad2, delay: 1, x: -80, y: 100, color: "text-neon-blue" },
];

export function HeroSection() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-blue/8 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-purple/8 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/3 blur-3xl" />

      {/* Cyber lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px cyber-line-h opacity-30" />
      <div className="absolute bottom-1/3 left-0 right-0 h-px cyber-line-h opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-neon-blue/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          <span className="font-mono text-xs text-neon-blue tracking-widest uppercase">
            Available for Work
          </span>
        </motion.div>

        {/* Profile avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed border-neon-blue/20"
            />
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full border-2 border-neon-blue/30 overflow-hidden relative bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-neon-subtle" />
              <span className="font-display font-bold text-5xl neon-text relative z-10">
                S
              </span>
            </div>
            {/* Status dot */}
            <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-400 border-2 border-dark-bg" />

            {/* Floating tech icons */}
            {floatingIcons.map(({ icon: Icon, delay, x, y, color }, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -8, 0],
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
                className={`absolute glass-card w-10 h-10 rounded-xl flex items-center justify-center ${color}`}
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <Icon size={18} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="font-mono text-neon-blue text-sm tracking-widest uppercase mb-2">
            Hello, World! I&apos;m
          </p>
          <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl text-white mb-4 tracking-tight">
            Shin
          </h1>
        </motion.div>

        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-white/60 font-mono mb-8 h-8 flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              "JavaScript Developer",
              2000,
              "Bot Developer",
              2000,
              "AI Learner 🌱",
              2000,
              "Python Explorer 🐍",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-neon-blue"
            preRenderFirstString
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          JavaScript developer yang fokus di{" "}
          <span className="text-neon-blue">bot WhatsApp & Telegram</span>. Sedang
          aktif belajar{" "}
          <span className="text-neon-purple">Python dan AI integration</span> untuk
          membangun tools yang lebih cerdas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("projects")}
            className="btn-primary px-8 py-3.5 rounded-xl text-dark-bg font-semibold flex items-center justify-center gap-2"
          >
            <Code2 size={18} />
            Lihat Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("contact")}
            className="btn-outline px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <MessageSquare size={18} />
            Hubungi Saya
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-3 gap-4 mt-16 max-w-md mx-auto"
        >
          {[
            { value: "3+", label: "Tahun" },
            { value: "15+", label: "Project" },
            { value: "10+", label: "Teknologi" },
          ].map(({ value, label }) => (
            <div key={label} className="glass-card rounded-xl p-4 text-center">
              <p className="font-display font-bold text-2xl neon-text">{value}</p>
              <p className="text-white/40 text-xs font-mono mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, y: { duration: 1.5, repeat: Infinity } }}
        onClick={() => handleScroll("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-neon-blue transition-colors"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
