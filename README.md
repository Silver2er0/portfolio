# Ahmad Allahham - Portfolio

Personal portfolio built with **React 19, Vite, TypeScript and Tailwind CSS 4**, deployed as a static site on Vercel.

- All content lives in `src/data/profile.ts` (bio, skills, experience, education, featured projects)
- **GitHub integration at build time:** `scripts/fetch-github.mjs` snapshots the public repositories into `src/data/repos.json` before each build (no runtime API calls, no rate limits for visitors; if GitHub is down the previous snapshot is kept)
- Dark mode (system default, no flash on load), responsive, semantic HTML

```bash
npm install
npm run dev
npm run build   # fetches repos, type-checks, bundles
```

## License

MIT
