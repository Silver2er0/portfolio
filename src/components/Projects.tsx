import { profile, projects } from '../data/profile'

export function Projects() {
  return (
    <div className="grid gap-8">
      {projects.map((p, i) => (
        <article key={p.name} className="grid items-center gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-2 dark:border-slate-800 dark:bg-slate-900">
          <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" className={`aspect-[4/3] h-full w-full object-cover object-top ${i % 2 ? 'md:order-2' : ''}`} />
          <div className="space-y-4 p-6">
            <div>
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">{p.tagline}</p>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{p.description}</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Live demo
                </a>
              )}
              <a href={`${profile.github}/${p.repo}`} target="_blank" rel="noreferrer" className="btn">
                Source code
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
