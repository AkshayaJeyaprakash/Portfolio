# Akshaya Jeyaprakash: Portfolio

Astro site with a "robot perception" hero. Deploys to GitHub Pages at
`https://akshayajeyaprakash.github.io/Portfolio/`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321/Portfolio/
npm run build    # outputs to dist/
```

## Editing content

All text lives in `src/data/`, so you never need to touch the layout to update content.

| File | What's in it |
| --- | --- |
| `src/data/profile.ts` | Name, headline, about text, stats, links |
| `src/data/projects.ts` | Featured robotics projects + their media |
| `src/data/experience.ts` | Jobs, research roles, education |
| `src/data/research.ts` | Publications, skills, archive projects, awards, workshops |

## Adding the missing media (placeholders)

Any media file that doesn't exist yet shows a "NO SIGNAL" placeholder (in `npm run dev`
it also prints the exact path it expects). Drop the file at that path and it appears
automatically, with no code changes.

| Drop file here | Shows up on |
| --- | --- |
| `public/resume.pdf` | Adds a "Résumé" button to the hero |

Tips: keep videos under ~20 MB (H.264 MP4, 1080p or 720p). To use a YouTube video instead of
a file, change the entry in `projects.ts` to `{ kind: 'youtube', id: '<video id>', caption: '…' }`.

## Deploying

1. Push this project to the `main` branch of `github.com/AkshayaJeyaprakash/Portfolio`.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Every push to `main` rebuilds and publishes the site (`.github/workflows/deploy.yml`).
