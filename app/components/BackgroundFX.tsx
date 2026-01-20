"use client";

import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, -120, 0], y: [0, -80, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </div>
  );
}
