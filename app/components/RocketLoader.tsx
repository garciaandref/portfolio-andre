"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function useMouseParallax(intensity = 30) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * intensity;
      const y = (e.clientY / window.innerHeight - 0.5) * intensity;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [intensity]);

  return pos;
}

export default function RocketLoader() {
  const [visible, setVisible] = useState(true);
  const mouse = useMouseParallax(40);

  const { scrollY } = useScroll();
  const starY = useTransform(scrollY, [0, 300], [0, -80]);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#02030a] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.6, duration: 0.6 }}
    >
      {/* 🌌 NEBULOSA COM PARALLAX DE MOUSE */}
      <motion.div
        className="nebula"
        style={{
          x: mouse.x,
          y: mouse.y,
        }}
      />

      {/* ⭐ ESTRELAS COM PARALLAX DE SCROLL */}
      <motion.div style={{ y: starY }}>
        <div className="stars stars-sm" />
        <div className="stars stars-md" />
        <div className="stars stars-lg" />
      </motion.div>

      {/* 🛸 NAVE ESPACIAL – CRESCE NO CENTRO */}
      <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
        <motion.div
          initial={{
            x: "-120vw",
            y: 120,
            scale: 0.45,
            opacity: 0,
          }}
          animate={{
            x: ["-120vw", "-40vw", "0vw", "60vw", "120vw"],
            y: [140, -80, 0, -100, -180],
            scale: [0.45, 0.85, 1.25, 0.8, 0.4], // 👈 pico no meio
            rotate: [0, 6, -4, 4, 0],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 3.6,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="relative"
        >
          {/* 🌈 RASTRO */}
          <div className="ufo-trail" />

          {/* 🛸 NAVE */}
          <img
            src="/ufo.svg"
            alt="UFO"
            className="w-28 h-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
