import { getGithubRepos } from "../lib/github";
import ProjectsFilter from "./ProjectsFilter";

export default async function Projects() {
  const repos = await getGithubRepos();

  return (
    <section id="projects" className="relative z-10 px-6 py-32">
      <h2 className="mb-16 text-center text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
        Projetos
      </h2>

      <ProjectsFilter repos={repos} />
    </section>
  );
}
