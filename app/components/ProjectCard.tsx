"use client";

import { motion } from "framer-motion";
import { Repo } from "../lib/github";

type Props = {
  repo: Repo;
};

export default function ProjectCard({ repo }: Props) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.06, rotateX: 6, rotateY: -6 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/10 to-purple-600/10 opacity-0 transition group-hover:opacity-100" />

      <h3 className="relative z-10 text-lg font-semibold">{repo.name}</h3>

      <p className="relative z-10 mt-3 text-sm text-gray-400 line-clamp-3">
        {repo.description}
      </p>

      <div className="relative z-10 mt-6 flex items-center justify-between text-xs text-gray-400">
        <span>{repo.language ?? "N/A"}</span>
        <span>⭐ {repo.stargazers_count}</span>
      </div>
    </motion.a>
  );
}
