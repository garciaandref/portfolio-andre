"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const paths = [
  // esquerda → direita (curva)
  "M -100 200 C 300 50, 600 350, 1200 200",
  // direita → esquerda
  "M 1200 300 C 800 100, 400 500, -200 250",
  // baixo → cima
  "M 600 900 C 500 600, 700 300, 600 -200",
  // cima → baixo
  "M 400 -200 C 600 300, 300 600, 500 1000",
];

export default function FlyingShip() {
  const [active, setActive] = useState(false);
  const [path, setPath] = useState(paths[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPath(paths[Math.floor(Math.random() * paths.length)]);
      setActive(true);

      setTimeout(() => setActive(false), 5000);
    }, 15000); // aparece a cada 15s

    return () => clearInterval(interval);
  }, []);

  if (!active) return null;

  return (
    <motion.svg
      className="pointer-events-none fixed inset-0 z-[9998]"
      viewBox="0 0 1200 900"
      fill="none"
    >
      <motion.path d={path} fill="none" stroke="transparent" />

      <motion.image
        href="/ship.svg"
        width="80"
        height="80"
        initial={{
          offsetDistance: "0%",
          scale: 0.6,
          opacity: 0,
        }}
        animate={{
          offsetDistance: "100%",
          scale: [0.6, 1.2, 0.8],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
        style={{
          offsetPath: `path("${path}")`,
          offsetRotate: "auto",
        }}
      />
    </motion.svg>
  );
}
