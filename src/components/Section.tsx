import type { ReactNode } from 'react'

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}
