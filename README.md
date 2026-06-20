# California AI Visual Inspection — Opportunity & Account Map

An interactive territory map of California manufacturers — Fortune 500 and high-growth
startups — whose quality-inspection profile is a strong fit for deep-learning / edge AI
visual inspection.

**Prepared by Aerwin Apollo Perez.**

It's a single-page, dependency-free static site: filter ~50 accounts by industry, region,
and company type, search by name or city, and sort by fit. Built to be readable, accessible,
and deployable anywhere static files are served.

## Why this exists

AI-powered visual inspection is one of the most tangible ways a factory adopts AI — it directly
improves yield, scrap, throughput, and labor. Deep-learning vision catches the defects that
*vary* part to part, where traditional rule-based machine vision struggles. California holds the
densest and most regulated manufacturing base in the U.S., which makes it the highest-leverage
territory for this technology. This map lays out where the demand concentrates.

## What an ideal account looks like

- High-volume or zero-defect production
- Defects with real-world variation (where rule-based vision struggles)
- High cost of an escape — safety, recall, or expensive scrap
- Labor-heavy manual inspection ripe for augmentation
- Multi-line / multi-site — a first-station win that becomes a rollout

## Tech

- Plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no dependencies
- Responsive layout with light/dark mode (`prefers-color-scheme`)
- Accessible: skip link, labeled controls, live region for result counts
- Data lives in [`data.js`](data.js); UI logic in [`app.js`](app.js)

## Run locally

Any static server works, for example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo and push:
   ```bash
   git remote add origin https://github.com/<your-username>/ca-vision-inspection-map.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   then select `main` / `root` and save.
3. The site goes live at `https://<your-username>.github.io/ca-vision-inspection-map/`.

## Note on data

The company list is illustrative and compiled from public information; locations reflect
principal California sites, not necessarily headquarters. Fit ratings are the author's
assessment of suitability for visual-inspection use cases.
