"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TIMELINE } from "@/lib/data";

export function ExperienceSection() {
  const { ref, inView } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl" />

      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-neon-blue text-xs tracking-widest uppercase mb-3">
            — Journey —
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Experience Timeline
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Perjalanan belajar dan berkembang dalam dunia teknologi.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/50 via-neon-purple/50 to-transparent" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 pl-16 sm:pl-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className="sm:w-[calc(50%-2rem)]">
                  <div className="glass-card rounded-xl p-5 hover:border-neon-blue/30 transition-all">
                    {/* Year badge */}
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="font-mono text-xs px-2 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-mono rounded-md bg-neon-purple/10 text-neon-purple border border-neon-purple/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 sm:left-1/2 top-6 sm:-translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                    className="w-5 h-5 rounded-full border-2 border-neon-blue bg-dark-bg flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-neon-blue" />
                  </motion.div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>

          {/* Timeline end */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: TIMELINE.length * 0.15 + 0.3 }}
            className="relative flex justify-center mt-8 pl-16 sm:pl-0"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-dashed border-neon-purple/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
              </div>
              <span className="font-mono text-xs text-white/30">To be continued...</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
