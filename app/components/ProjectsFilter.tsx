"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Repo } from "../lib/github";
import { motion, AnimatePresence } from "framer-motion";
import SpaceshipLoader from "./SpaceshipLoader";

type Props = {
  repos: Repo[];
};

const INITIAL_COUNT = 6;
const LOAD_STEP = 3;

export default function ProjectsFilter({ repos }: Props) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [loading, setLoading] = useState(false);

  const visibleRepos = repos.slice(0, visibleCount);

  function handleLoadMore() {
    if (visibleCount >= repos.length) {
      setVisibleCount(INITIAL_COUNT);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + LOAD_STEP, repos.length));
      setLoading(false);
    }, 1200);
  }

  const isAllVisible = visibleCount >= repos.length;

  return (
    <>
      {/* GRID (INALTERADO) */}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleRepos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>

      {/* LOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SpaceshipLoader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTÃO */}
      {!loading && repos.length > INITIAL_COUNT && (
        <div className="mt-16 text-center">
          <button
            onClick={handleLoadMore}
            className="rounded-xl bg-cyan-500 px-8 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            {isAllVisible ? "Mostrar menos" : "Ver mais projetos"}
          </button>
        </div>
      )}
    </>
  );
}
