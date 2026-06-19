"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bot, BrainCircuit, Code2, Gamepad2, Terminal, Zap } from "lucide-react";

const focuses = [
  {
    icon: Bot,
    title: "Bot Development",
    desc: "WhatsApp & Telegram bot dengan Node.js — ini home turf saya.",
    color: "neon-blue",
  },
  {
    icon: Code2,
    title: "JavaScript / Node.js",
    desc: "Stack utama saya untuk backend, scripting, dan automation.",
    color: "neon-purple",
  },
  {
    icon: BrainCircuit,
    title: "Belajar AI 🌱",
    desc: "Sedang aktif eksplorasi AI integration, Gemini & OpenAI API.",
    color: "neon-blue",
  },
  {
    icon: Gamepad2,
    title: "Belajar Python 🌱",
    desc: "Python sebagai pintu masuk ke dunia AI/ML dan game dev.",
    color: "neon-purple",
  },
];

const traits = [
  "Self-taught",
  "Bot Builder",
  "JS Enthusiast",
  "AI Curious",
  "Fast Learner",
  "Open Source",
];

export function AboutSection() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-neon-blue text-xs tracking-widest uppercase mb-3">
            — About Me —
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Who Am I?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3 mb-6">
                <Terminal size={20} className="text-neon-blue" />
                <span className="font-mono text-sm text-white/50">about_shin.js</span>
              </div>

              <p className="text-white/70 leading-relaxed text-base">
                Halo! Saya{" "}
                <span className="text-neon-blue font-semibold">Shin</span>, developer
                yang mulai perjalanan coding dari{" "}
                <span className="text-neon-purple font-medium">JavaScript</span> dan
                langsung jatuh cinta dengan ekosistemnya — terutama Node.js dan dunia
                bot development.
              </p>
              <p className="text-white/70 leading-relaxed text-base">
                Saya sudah cukup dalam di{" "}
                <span className="text-neon-blue font-medium">
                  WhatsApp & Telegram bot
                </span>{" "}
                menggunakan Baileys dan Telegraf.js. Belakangan ini saya mulai aktif
                belajar{" "}
                <span className="text-neon-purple font-medium">Python</span> dan{" "}
                <span className="text-neon-purple font-medium">AI integration</span>{" "}
                karena ingin bisa membangun tools yang lebih cerdas.
              </p>
              <p className="text-white/70 leading-relaxed text-base">
                Masih banyak yang ingin saya pelajari, tapi itulah yang bikin coding
                seru — selalu ada hal baru untuk dieksplorasi. 🚀
              </p>

              {/* Learning note */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-neon-blue/5 border border-neon-blue/15">
                <span className="text-lg">🌱</span>
                <p className="text-white/50 text-xs leading-relaxed">
                  Saat ini aktif belajar:{" "}
                  <span className="text-neon-blue">Python · FastAPI · AI/ML · Prompt Engineering</span>
                </p>
              </div>

              {/* Traits */}
              <div className="flex flex-wrap gap-2 pt-2">
                {traits.map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Focus cards */}
          <div className="grid grid-cols-2 gap-4">
            {focuses.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card rounded-xl p-5 cursor-default"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-${item.color}/10 border border-${item.color}/20 flex items-center justify-center mb-3`}
                >
                  <item.icon size={20} className={`text-${item.color}`} />
                </div>
                <h3 className="font-display font-semibold text-sm text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
