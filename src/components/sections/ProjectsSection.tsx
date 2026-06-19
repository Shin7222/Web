"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, Github, Star } from "lucide-react";

export function ProjectsSection() {
  const { ref, inView } = useScrollReveal();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // SVG placeholder images for projects (colored icons)
  const projectColors = [
    { bg: "from-blue-900/50 to-cyan-900/30", accent: "#00D4FF" },
    { bg: "from-purple-900/50 to-pink-900/30", accent: "#BF5FFF" },
    { bg: "from-indigo-900/50 to-blue-900/30", accent: "#6366F1" },
    { bg: "from-teal-900/50 to-green-900/30", accent: "#2DD4BF" },
    { bg: "from-orange-900/50 to-yellow-900/30", accent: "#F59E0B" },
    { bg: "from-rose-900/50 to-purple-900/30", accent: "#F43F5E" },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-neon-blue text-xs tracking-widest uppercase mb-3">
            — Portfolio —
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Koleksi project yang telah saya bangun dengan passion dan dedikasi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const color = projectColors[i % projectColors.length];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* Project image placeholder */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${color.bg} overflow-hidden`}
                >
                  {/* Decorative elements inside card image */}
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-20 blur-2xl"
                    style={{ background: color.accent }}
                  />
                  {/* Project index */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="font-mono text-xs px-2 py-1 rounded-full border"
                      style={{
                        color: color.accent,
                        borderColor: `${color.accent}40`,
                        background: `${color.accent}10`,
                      }}
                    >
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1 items-end">
                    {project.featured && (
                      <span className="flex items-center gap-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono px-2 py-1 rounded-full">
                        <Star size={10} />
                        Featured
                      </span>
                    )}
                    {project.learning && (
                      <span className="flex items-center gap-1 bg-green-400/10 border border-green-400/30 text-green-400 text-xs font-mono px-2 py-1 rounded-full">
                        🌱 Learning
                      </span>
                    )}
                  </div>
                  {/* Center icon text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-display font-bold text-5xl opacity-30"
                      style={{ color: color.accent }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-dark-bg/60 backdrop-blur-sm flex items-center justify-center gap-4"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={12} />
                          Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={12} />
                          GitHub
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-base text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono rounded-md bg-white/5 text-white/40 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-mono btn-outline"
                    >
                      <ExternalLink size={12} />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-mono glass border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
