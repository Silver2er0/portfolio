import { GithubRepos } from './components/GithubRepos'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Section } from './components/Section'
import { profile } from './data/profile'

const YEAR = new Date().getFullYear()

export default function App() {
  const contacts = [
    profile.email && { label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin, text: profile.linkedin.replace(/^https?:\/\/(www\.)?/, '') },
    { label: 'GitHub', href: profile.github, text: profile.github.replace('https://', '') },
  ].filter((c) => !!c)

  return (
    <>
      <Header />
      <main id="top">
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-8">
          {profile.openToWork && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              <span className="size-2 rounded-full bg-emerald-500" /> Open to work
            </p>
          )}
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-2 text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            {profile.title} <span className="text-base font-normal text-slate-500">· {profile.location}</span>
          </p>
          <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href={profile.cv} className="btn" download>
              Download CV
            </a>
            <a href="#contact" className="btn">
              Contact me
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="max-w-3xl space-y-4 text-slate-600 dark:text-slate-400">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(profile.skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-2 text-sm font-semibold text-slate-500">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Featured projects">
          <Projects />
        </Section>

        <Section id="experience" title="Experience">
            <ol className="space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
              {profile.experience.map((e) => (
                <li key={e.role + e.company} className="relative">
                  <span className="absolute top-1.5 -left-[1.9rem] size-3 rounded-full bg-indigo-500" />
                  <h3 className="font-semibold">
                    {e.role} · {e.company}
                  </h3>
                  <p className="text-sm text-slate-500">{e.period}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <div className="mt-12 space-y-6 text-sm text-slate-600 dark:text-slate-400">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Education</h3>
                {profile.education.map((e) => (
                  <p key={e.degree}>
                    <b className="text-slate-900 dark:text-slate-100">{e.degree}</b> · {e.school} · {e.period}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Certifications</h3>
                <ul className="list-disc pl-5">
                  {profile.certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <p>
                <b className="text-slate-900 dark:text-slate-100">Languages:</b> {profile.languages}
              </p>
            </div>
          </Section>

        <Section id="github" title="More on GitHub">
          <GithubRepos />
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn mt-6">
            All repositories
          </a>
        </Section>

        <Section id="contact" title="Get in touch">
          <p className="mb-4 max-w-xl text-slate-600 dark:text-slate-400">I am looking for my next role. If you have an opening or want to talk about something I built, I would love to hear from you.</p>
          <ul className="space-y-2">
            {contacts.map((c) => (
              <li key={c.label}>
                <span className="inline-block w-24 text-sm text-slate-500">{c.label}</span>
                <a href={c.href} className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">
                  {c.text}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-800">
        © {YEAR} {profile.name}. Built with React, Vite and Tailwind CSS.
      </footer>
    </>
  )
}
