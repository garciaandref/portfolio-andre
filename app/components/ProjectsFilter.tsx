<<<<<<< HEAD
"use client";

import { useMemo, useState } from "react";
import type { Repo } from "../lib/github";
import ProjectCard from "./ProjectCard";

type Props = {
  repos: Repo[];
};

export default function ProjectsFilter({ repos }: Props) {
  const [search, setSearch] = useState("");

  const filteredRepos = useMemo(() => {
    if (!search) return repos;

    return repos.filter((repo) =>
      repo.language?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [repos, search]);

  return (
    <>
      {/* 🔍 SEARCH */}
      <div className="mb-12 flex justify-center">
        <input
          type="text"
          placeholder="Filtrar por tecnologia (ex: React, Next, Node...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-xl border border-white/10 bg-black/40 px-5 py-3 text-sm text-white placeholder-white/40 backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      {/* 📦 GRID */}
      {filteredRepos.length === 0 ? (
        <p className="text-center text-white/50">Nenhum projeto encontrado</p>
      ) : (
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </>
  );
}
=======
"use client";

import { useMemo, useState } from "react";
import type { Repo } from "../lib/github";
import ProjectCard from "./ProjectCard";

type Props = {
  repos: Repo[];
};

export default function ProjectsFilter({ repos }: Props) {
  const [search, setSearch] = useState("");

  const filteredRepos = useMemo(() => {
    if (!search) return repos;

    return repos.filter((repo) =>
      repo.language?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [repos, search]);

  return (
    <>
      {/* 🔍 SEARCH */}
      <div className="mb-12 flex justify-center">
        <input
          type="text"
          placeholder="Filtrar por tecnologia (ex: React, Next, Node...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-xl border border-white/10 bg-black/40 px-5 py-3 text-sm text-white placeholder-white/40 backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      {filteredRepos.length === 0 ? (
        <p className="text-center text-white/50">Nenhum projeto encontrado</p>
      ) : (
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </>
  );
}
>>>>>>> 41a3204 (alteracao de componentes)
