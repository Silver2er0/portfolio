import repos from '../data/repos.json'
import { profile, projects } from '../data/profile'

const FEATURED = new Set(projects.map((p) => p.repo))
const rest = repos.filter((r) => !FEATURED.has(r.name) && r.name !== 'dev')
const notable = profile.notableRepos.flatMap((name) => rest.filter((r) => r.name === name))
const small = rest.filter((r) => !profile.notableRepos.includes(r.name))

export function GithubRepos() {
  return (
    <div className="space-y-8">
      <div className="grid gap-3 sm:grid-cols-2">
        {notable.map((r) => (
          <a key={r.name} href={r.url} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-400 dark:border-slate-800">
            <p className="font-semibold">{r.name}</p>
            <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{r.description ?? 'No description'}</p>
            <p className="mt-3 flex gap-3 text-xs text-slate-500">
              {r.language && <span>{r.language}</span>}
              {r.stars > 0 && <span>★ {r.stars}</span>}
            </p>
          </a>
        ))}
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-slate-500">Smaller experiments and learning projects</h3>
        <div className="flex flex-wrap gap-2">
          {small.map((r) => (
            <a key={r.name} href={r.url} target="_blank" rel="noreferrer" title={r.description ?? undefined} className="chip hover:bg-indigo-100 dark:hover:bg-indigo-950">
              {r.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
