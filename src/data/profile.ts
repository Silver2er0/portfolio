import bazaar from '../assets/bazaar.jpg'
import docmind from '../assets/docmind.jpg'
import flowboard from '../assets/flowboard.jpg'
import pulse from '../assets/pulse.jpg'

const GITHUB = 'https://github.com/Silver2er0'

export const profile = {
  name: 'Ahmad Allahham',
  title: 'Full-Stack Developer',
  tagline: 'I build and ship full-stack web apps with React, NestJS and Next.js, from database schema to production deploy.',
  openToWork: true,
  about: [
    'I am a full-stack developer who likes owning a feature end to end: modelling the data, designing the API, building the interface and putting it live with CI behind it.',
    'The four projects below are deployed, tested and documented, and each one uses a different technique: payments, WebSockets, server-side rendering and retrieval-augmented generation.',
  ],
  email: '',
  linkedin: '',
  github: GITHUB,
  cv: '/cv.pdf',
  skills: {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zustand', 'TanStack Query'],
    Backend: ['NestJS', 'Node.js', 'REST', 'WebSockets (Socket.IO)', 'Server-Sent Events', 'Prisma', 'JWT auth'],
    Data: ['PostgreSQL', 'pgvector', 'SQL'],
    'Tools & delivery': ['Git & GitHub Actions', 'Docker', 'Vercel', 'Render', 'Vitest', 'Stripe'],
  } as Record<string, string[]>,
  /** Shown as cards under "More on GitHub"; every other public repo is grouped into small chips. */
  notableRepos: ['MLD-B2B', 'Ecommerce-Shop', 'Food-store', 'dia-finetuning'],
  experience: [] as { role: string; company: string; period: string; points: string[] }[],
  education: [] as { degree: string; school: string; period: string }[],
}

export type Project = {
  name: string
  repo: string
  tagline: string
  description: string
  highlights: string[]
  stack: string[]
  image: string
  live?: string
}

export const projects: Project[] = [
  {
    name: 'Bazaar',
    repo: 'bazaar-marketplace',
    tagline: 'Full-stack online marketplace',
    description: 'Buyers browse and purchase, sellers manage a catalog, admins moderate. Stripe Checkout with webhooks, role-based access and image uploads.',
    highlights: ['Stripe Checkout + idempotent webhook handling', 'Buyer / seller / admin roles on API and UI', 'Search, filters and pagination driven by the URL'],
    stack: ['React', 'NestJS', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind'],
    image: bazaar,
    live: 'https://bazaar-marketplace-tan.vercel.app',
  },
  {
    name: 'Pulse',
    repo: 'pulse-chat',
    tagline: 'Real-time chat over WebSockets',
    description: 'Slack-style channels and direct messages with live presence, typing indicators, read receipts and unread badges.',
    highlights: ['NestJS Socket.IO gateway authenticated with the same JWT', 'Optimistic UI confirmed by server acknowledgements', 'e2e test with two real socket clients'],
    stack: ['React', 'NestJS', 'Socket.IO', 'PostgreSQL', 'Zustand'],
    image: pulse,
  },
  {
    name: 'Flowboard',
    repo: 'flowboard',
    tagline: 'Server-rendered kanban job tracker',
    description: 'Drag job applications through your pipeline, see conversion stats and export to CSV. Every visitor can try a private demo sandbox.',
    highlights: ['Next.js App Router with Server Components and Server Actions', 'Drag and drop with optimistic updates and fractional ordering', 'Own session layer: bcrypt + signed httpOnly JWT cookie'],
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    image: flowboard,
  },
  {
    name: 'DocMind',
    repo: 'docmind',
    tagline: 'Chat with your PDFs (RAG)',
    description: 'Upload a PDF and ask questions. Answers stream in with page citations, grounded in the document by vector search.',
    highlights: ['Chunking, embeddings and cosine search with pgvector', 'Answers streamed to the browser over Server-Sent Events', 'Rate limits, per-visitor isolation and a daily AI budget'],
    stack: ['NestJS', 'React', 'PostgreSQL', 'pgvector', 'Gemini', 'SSE'],
    image: docmind,
  },
]
