"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
      >
        André Garcia
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 max-w-xl text-gray-400"
      >
        Desenvolvedor Front-end focado em experiências digitais modernas,
        performáticas e impactantes.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-10 rounded-full border border-cyan-400 px-8 py-3 text-sm tracking-widest uppercase hover:bg-cyan-400 hover:text-black transition"
      >
        Ver Projetos
      </motion.button>
    </section>
  );
}
