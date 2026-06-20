# California AI Visual Inspection — Opportunity & Account Map

An interactive territory map of California manufacturers — Fortune 500 and high-growth
startups — whose quality-inspection profile is a strong fit for deep-learning / edge AI
visual inspection.

**Prepared by Aerwin Apollo Perez.**

**Live site → https://aerwinapollo01.github.io/ca-vision-inspection-map/**

A single-page static site with an interactive map of **90 California companies** — from
Fortune 500 anchors to high-growth startups — across 7 industries. Explore them on a live
map or as filterable cards, with the fit reasoning and a "how to win" play for every account.

## Features

- **Interactive map** (Leaflet + marker clustering) — every account plotted by location and
  colored by fit; click a marker for its reasoning and win strategy. Markers cluster at the
  state level and spread out as you zoom in.
- **Per-account intelligence** — each company carries what it makes, **why** it fits (the
  reasoning behind its rating), and **how to win** it (the wedge / sales play).
- **Filter & search** — by industry, region, and company type, or search by name/city; the
  map and card list stay in sync.
- **Sort** — best-fit first, A–Z, or by region.

## Why this exists

AI-powered visual inspection is one of the most tangible ways a factory adopts AI — it directly
improves yield, scrap, throughput, and labor. Deep-learning vision catches the defects that
*vary* part to part, where traditional rule-based machine vision struggles. California holds the
densest and most regulated manufacturing base in the U.S., which makes it the highest-leverage
territory for this technology. This map lays out where the demand concentrates.

## What an ideal account looks like

Every fit rating ("Very High" / "High") reflects how well a company matches these signals:

- High-volume or zero-defect production
- Defects with real-world variation (where rule-based vision struggles)
- High cost of an escape — safety, recall, or expensive scrap
- Labor-heavy manual inspection ripe for augmentation
- Multi-line / multi-site — a first-station win that becomes a rollout

## Industries covered

Aerospace, Defense & Space · Semiconductor & Electronics · Medical Devices ·
EV, Battery & Energy · Robotics, Drones & eVTOL · Food, Beverage & Packaging ·
Industrial & Advanced Manufacturing

## Tech

- Plain HTML, CSS, and vanilla JavaScript — no build step, no framework
- [Leaflet](https://leafletjs.com/) + MarkerCluster (via CDN) with CARTO basemap tiles
- Responsive layout with light/dark mode (`prefers-color-scheme`); the map switches basemaps to match
- Accessible: skip link, labeled controls, live region for result counts
- Data lives in [`data.js`](data.js) (company records + city coordinates); UI logic in [`app.js`](app.js)

## Run locally

Any static server works, for example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Hosting

The site is published with GitHub Pages from the `main` branch and is live at
**https://aerwinapollo01.github.io/ca-vision-inspection-map/**. Pushes to `main` redeploy
it automatically.

## Note on data

The company list is illustrative and compiled from public information; locations reflect a
principal California site, not necessarily headquarters, and map coordinates are approximate
city centroids. Fit ratings, reasoning, and win strategies are the author's own analysis of
suitability for visual-inspection use cases.
