export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
};

export async function getGithubRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/garciaandref/repos?sort=updated",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    console.error("GitHub API error:", res.status);
    return [];
  }

  const data: Repo[] = await res.json();

  return data.filter((repo) => !repo.fork);
}
