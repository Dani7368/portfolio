# Daniella Lawi — Portfolio

Personal portfolio of **Daniella Lawi**, Full-Stack Developer.
Live: https://dani7368.github.io/portfolio/

## Stack

- React 18 + Vite 5
- Plain CSS design tokens (`src/styles/global.css`), Inter typeface, purple palette
- No CSS framework, animation library or 3D

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/portfolio/
npm run build      # production build into dist/
npm run preview    # serve dist at http://localhost:4173/portfolio/
npm run lint
```

## Editing content

All professional content lives in `src/data/content.js` and follows the approved CV.

- **Add a project:** append an object to `projects` with the same shape as SafeNet.
- **Add a resume download:** put the PDF in `public/` and set `person.resumePdf` to its filename. The button only appears when this value is set.

## Structure

```
src/
  data/content.js          content (single source of truth)
  styles/global.css        design tokens, layout, components
  hooks/motion.js          reveal-on-scroll, reduced-motion handling
  components/              Nav, Hero, About, Experience (timeline), Projects,
                           Architecture (SafeNet pipeline), Skills, Education, Contact, Footer
public/                    favicon.svg, og-image.png
```

## Deployment

`.github/workflows/deploy.yml` builds with `npm ci && npm run build` and publishes `dist/` to GitHub Pages on every push to `main`.
