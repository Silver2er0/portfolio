import bazaar from '../assets/bazaar.jpg'
import docmind from '../assets/docmind.jpg'
import flowboard from '../assets/flowboard.jpg'
import pulse from '../assets/pulse.jpg'

const GITHUB = 'https://github.com/Silver2er0'

export const profile = {
  name: 'Ahmad Allahham',
  title: 'Software Engineer',
  tagline: 'I build web apps and AI-powered products, from React frontends and Node.js backends to AI agent pipelines and on-device inference.',
  location: 'Dubai, UAE',
  openToWork: true,
  about: [
    'Software engineer with 3+ years of experience shipping web and mobile applications and AI-powered solutions. I have led a team of 15 engineers, delivered projects on time, and bridged frontend work with backend services and AI integration.',
    'At FYI.AI I designed an AI agent pipeline (speech-to-text, LLM, text-to-speech), deployed Dockerized microservices and ran models on NVIDIA Jetson devices. On the side I build and deploy full-stack projects: the four below are live, tested and documented, and each uses a different technique (payments, WebSockets, server-side rendering and retrieval-augmented generation).',
  ],
  email: 'ahmadallaham250@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ahmad-allahham-ab9635229',
  github: GITHUB,
  cv: '/cv.pdf',
  skills: {
    Frontend: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5 / CSS3 / SCSS', 'Tailwind CSS', 'Redux', 'Context API', 'QML'],
    Backend: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'WebSockets', 'Python', 'FastAPI', 'Django', 'Java', 'C++', 'C#', 'PHP'],
    'AI & data': ['LLM integration', 'AI agents (STT / LLM / TTS)', 'RAG & pgvector', 'NLP', 'CNN', 'OpenCV', 'Pandas', 'NVIDIA Jetson'],
    'Databases & tools': ['PostgreSQL', 'MySQL', 'Firebase', 'Prisma', 'Docker', 'Microservices', 'GitHub Actions', 'Postman', 'Vercel / Render'],
  } as Record<string, string[]>,
  /** Shown as cards under "More on GitHub"; every other public repo is grouped into small chips. */
  notableRepos: ['MLD-B2B', 'Ecommerce-Shop', 'Food-store', 'dia-finetuning'],
  experience: [
    {
      role: 'Software Engineer',
      company: 'FYI.AI',
      period: 'Mar 2024 - Present · Dubai, UAE',
      points: [
        'Maintained and enhanced a production application for 18+ months across Java, C++ and Node.js.',
        'Designed and implemented a complete AI agent pipeline for speech-to-text, LLM integration and text-to-speech with Python and FastAPI.',
        'Built and deployed AI-driven microservices with Docker, giving a scalable, modular architecture with better performance and reliability.',
        'Developed Node.js / Express endpoints and microservices for core functionality and cross-service communication.',
        'Flashed and configured NVIDIA Jetson devices for on-device AI model inference.',
        'Built and delivered a white-label version of the app for ASU: personalized education with lecture content, AI personas and adaptive learning flows.',
        'Delivered accessibility enhancements for text and calls, AI-automated reminder calls and real-time chat.',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'AMMRHA Foundation',
      period: 'Mar 2022 - Nov 2023 · Damascus, Syria',
      points: [
        'Led a technical team of 15 engineers and delivered 10+ projects with a 100% on-time quality record.',
        'Worked with senior leadership to align product releases with company objectives (20% improvement in organizational alignment).',
        'Introduced a post-launch evaluation process that cut compliance issues by 20% and saved about 10 hours per project.',
        'Built and shipped web applications with React.js, Node.js, Tailwind CSS and MySQL.',
        'Owned the full frontend lifecycle: component architecture, state management, API integration and testing.',
      ],
    },
  ] as { role: string; company: string; period: string; points: string[] }[],
  education: [{ degree: 'B.Sc. Information Technology in Artificial Intelligence', school: 'ASPU, Damascus, Syria', period: 'Sep 2018 - May 2023' }],
  certifications: ['Exploratory Data Analysis for Machine Learning (May 2023)', 'World Robot Olympiad Participant (Aug 2019)'],
  languages: 'English (fluent), Arabic (native)',
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
    live: 'https://flowboard-app-eight.vercel.app',
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
