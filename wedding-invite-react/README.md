# Wedding Invitation – React (Vite)

Mobile-first wedding invitation: tap-to-open gate, flower burst, background music,
English / Tamil toggle, countdown, program, add-to-calendar buttons and a slow auto-scroll (phones only).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview
```

## Deploy to Vercel

**Option A – Git (recommended)**
1. Push this folder to a GitHub repository.
2. In Vercel: *Add New → Project → Import* the repo.
3. Vercel auto-detects **Vite** (build: `npm run build`, output: `dist`). Click **Deploy**.

**Option B – CLI**
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Where to edit

| What | File |
| --- | --- |
| Names, parents, date (English + Tamil) | `src/components/Hero.jsx` |
| Countdown time + venue | `src/components/Countdown.jsx` |
| Event times & places | `src/components/Program.jsx` |
| Map links, calendar links | `src/content.js` |
| Auto-scroll speed | `src/lib/useAutoScroll.js` (`SPEED`) |
| Colours, fonts, layout | `src/styles.css` |
| Music | replace `public/bgm.mp3` |
| Photos | `public/couple.jpg`, `public/hero-top.webp`, `public/hero-bottom.webp` |

Text is written as `t('English', 'தமிழ்')` – change both versions together.
