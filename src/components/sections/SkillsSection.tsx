"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SKILLS } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "JS / Frontend" },
  { key: "backend", label: "Backend / Bot" },
  { key: "ai", label: "AI 🌱" },
  { key: "tools", label: "DevTools" },
] as const;

function getLevelMeta(level: number): { label: string; color: string } {
  if (level >= 80) return { label: "Confident", color: "bg-neon-blue/10 text-neon-blue border-neon-blue/20" };
  if (level >= 60) return { label: "Intermediate", color: "bg-neon-purple/10 text-neon-purple border-neon-purple/20" };
  return { label: "Learning 🌱", color: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20" };
}

export function SkillsSection() {
  const { ref, inView } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = SKILLS.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="font-mono text-neon-blue text-xs tracking-widest uppercase mb-3">
            — Technical Skills —
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            My Toolkit
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            JavaScript adalah rumah saya. Python dan AI sedang saya pelajari dengan serius.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {[
            { color: "bg-neon-blue/10 text-neon-blue border-neon-blue/20", label: "Confident" },
            { color: "bg-neon-purple/10 text-neon-purple border-neon-purple/20", label: "Intermediate" },
            { color: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20", label: "Learning 🌱" },
          ].map((l) => (
            <span key={l.label} className={cn("text-xs font-mono px-2.5 py-1 rounded-full border", l.color)}>
              {l.label}
            </span>
          ))}
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-200",
                activeCategory === cat.key
                  ? "bg-gradient-neon text-dark-bg font-semibold"
                  : "glass border border-white/10 text-white/50 hover:text-white hover:border-white/20"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => {
            const meta = getLevelMeta(skill.level);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                layout
                className="glass-card rounded-xl p-5"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-display font-semibold text-white text-sm">
                      {skill.name}
                    </p>
                    <p className="text-white/30 text-xs font-mono mt-0.5">
                      {skill.category === "frontend"
                        ? "JS / Frontend"
                        : skill.category === "backend"
                        ? "Backend / Bot"
                        : skill.category === "ai"
                        ? "AI & ML"
                        : "DevTools"}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-bold text-white/40">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="skill-bar h-1.5 rounded-full mb-2">
                  <motion.div
                    className="skill-progress h-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                  />
                </div>

                <div className="flex justify-end">
                  <span className={cn("text-xs font-mono px-2 py-0.5 rounded-full border", meta.color)}>
                    {meta.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
