// Runs before every build: snapshots the public GitHub repos into src/data/repos.json.
// If GitHub is unreachable the previous snapshot is kept, so a build never fails because of it.
import { writeFileSync } from 'node:fs'

const USER = 'Silver2er0'
const headers = { Accept: 'application/vnd.github+json', ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }) }

try {
  const res = await fetch(`https://api.github.com/users/${USER}/repos?type=owner&per_page=100&sort=pushed`, { headers })
  if (!res.ok) throw new Error(`GitHub responded ${res.status}`)
  const repos = (await res.json())
    .filter((r) => !r.fork && !r.archived && !r.private && r.name !== USER)
    .map((r) => ({ name: r.name, description: r.description, language: r.language, stars: r.stargazers_count, url: r.html_url, pushedAt: r.pushed_at }))
  writeFileSync(new URL('../src/data/repos.json', import.meta.url), `${JSON.stringify(repos, null, 2)}\n`)
  console.log(`Saved ${repos.length} public repositories`)
} catch (error) {
  console.warn(`Keeping previous repos.json: ${error.message}`)
}
