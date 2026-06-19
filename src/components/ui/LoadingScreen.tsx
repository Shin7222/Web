"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-blue/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-neon-purple/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-2xl border border-neon-blue/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-neon-subtle" />
                <span className="font-display font-bold text-3xl neon-text relative z-10">
                  S
                </span>
              </div>
              {/* Orbiting dot */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-neon-blue"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{
                  top: "50%",
                  left: "50%",
                  marginTop: -6,
                  marginLeft: -6,
                  transformOrigin: "6px 46px",
                }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <p className="font-mono text-sm text-neon-blue tracking-widest uppercase mb-1">
                Initializing Portfolio
              </p>
              <h1 className="font-display text-2xl font-bold text-white">
                shin
              </h1>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "240px" }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-60 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full loading-bar rounded-full"
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <span className="font-mono text-xs text-white/40">
                {Math.min(Math.floor(progress), 100)}%
              </span>
            </motion.div>

            {/* Status text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-mono text-xs text-white/30"
            >
              {progress < 40
                ? "Loading assets..."
                : progress < 70
                ? "Building interface..."
                : progress < 90
                ? "Almost ready..."
                : "Welcome!"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
