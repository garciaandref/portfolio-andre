"use client";

import { motion } from "framer-motion";

export default function SpaceshipLoader() {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-cyan-400"
      >
        <ellipse
          cx="100"
          cy="110"
          rx="70"
          ry="30"
          stroke="currentColor"
          strokeWidth="6"
        />
        <ellipse
          cx="100"
          cy="90"
          rx="40"
          ry="20"
          stroke="currentColor"
          strokeWidth="6"
        />
        <circle cx="100" cy="90" r="10" stroke="currentColor" strokeWidth="6" />
      </svg>

      <span className="text-xs text-white/60">Carregando projetos…</span>
    </motion.div>
  );
}
