"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { linkedinProfile } from "../lib/linkedin";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutMe() {
  const [mounted, setMounted] = useState(true);

  return (
    <section id="about" className="relative z-10 px-6 py-32">
      <motion.div
        className="mx-auto max-w-5xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* TÍTULO */}
        <motion.h2
          variants={item}
          className="mb-16 text-center text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
        >
          Quem sou eu
        </motion.h2>

        {/* CARD */}
        <motion.div
          variants={item}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-10 backdrop-blur"
        >
          {/* GLOW */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

          {/* GRID */}
          <div className="relative grid gap-10 md:grid-cols-[220px_1fr]">
            {/* 📸 AVATAR GITHUB */}
            <motion.div
              variants={item}
              className="relative mx-auto flex justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl" />

              <Image
                src={`https://github.com/${linkedinProfile.githubUsername}.png`}
                alt={linkedinProfile.name}
                width={192}
                height={192}
                className="relative z-10 h-48 w-48 rounded-full border-4 border-white/10 object-cover
                  shadow-[0_0_30px_rgba(34,211,238,0.35)]"
              />
            </motion.div>

            {/* 🧠 CONTEÚDO */}
            <div>
              <motion.h3
                variants={item}
                className="text-2xl font-semibold text-white"
              >
                {linkedinProfile.name}
              </motion.h3>

              <motion.p variants={item} className="mt-2 text-cyan-400">
                {linkedinProfile.headline}
              </motion.p>

              <motion.p variants={item} className="mt-1 text-sm text-white/50">
                {linkedinProfile.location}
              </motion.p>

              <motion.p
                variants={item}
                className="mt-6 whitespace-pre-line text-white/80 leading-relaxed"
              >
                {linkedinProfile.about.trim()}
              </motion.p>

              {/* SKILLS */}
              <motion.div
                variants={container}
                className="mt-8 flex flex-wrap gap-3"
              >
                {linkedinProfile.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-full border border-white/10 px-4 py-1 text-xs text-white/70
                      hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* LINK */}
              <motion.a
                variants={item}
                href={linkedinProfile.profileUrl}
                target="_blank"
                className="mt-10 inline-block rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Ver perfil no LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
