"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Repo } from "../lib/github";

const ITEMS_PER_LOAD = 3;

export default function ProjectsFilter({ repos }: { repos: Repo[] }) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [expanded, setExpanded] = useState(false);

  const visibleRepos = repos.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
    setExpanded(true);
  };

  const collapse = () => {
    setVisibleCount(ITEMS_PER_LOAD);
    setExpanded(false);

    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* GRID ORIGINAL DOS CARDS */}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleRepos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>

      {/* BOTÕES */}
      <div className="mt-16 flex justify-center gap-6">
        {visibleCount < repos.length && (
          <button
            onClick={showMore}
            className="
              relative overflow-hidden
              rounded-xl px-8 py-3
              bg-gradient-to-r from-cyan-400 to-purple-600
              text-black font-semibold

              transition-all duration-500 ease-out
              hover:scale-[1.06]
              active:scale-95

              before:absolute before:inset-0
              before:bg-white/20 before:opacity-0
              before:transition-opacity before:duration-500
              hover:before:opacity-100
            "
          >
            Mostrar mais
          </button>
        )}

        {expanded && (
          <button
            onClick={collapse}
            className="
              relative overflow-hidden
              rounded-xl px-8 py-3
              border border-white/20
              text-white/70

              transition-all duration-500 ease-out
              hover:scale-[1.05]
              active:scale-95

              hover:border-cyan-400
              hover:text-cyan-400
            "
          >
            Recolher projetos
          </button>
        )}
      </div>
    </>
  );
}
