# 🏟️ American Dream — Interactive Partnerships Deck

A cinematic, interactive sales pitch website for **American Dream** — the largest entertainment and retail destination in North America (3M sq ft, East Rutherford, NJ). Built as a modern alternative to static PDF pitch decks, this web experience lets potential partners explore the property through immersive visuals and non-linear navigation.

![TanStack Start](https://img.shields.io/badge/TanStack_Start-React-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat-square)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square)

---

## ✨ Features

- **Cinematic Full-Screen Hero** — Ken Burns slow-zoom animation with film grain overlay and vignette
- **Non-Linear Navigation** — 8 sections explorable in any order (not a forced slideshow)
- **Scroll-Triggered Animations** — Elements fade-in as you scroll using IntersectionObserver
- **Gold Gradient Text Effects** — Custom oklch-based champagne gold shimmer
- **Responsive Design** — Desktop nav + mobile hamburger menu
- **Interactive Partner Form** — Track selector (Leasing / Sponsorship / Events) with dynamic placeholders
- **Bottom Progress Bar** — Shows current section with "Next →" navigation
- **Infinite Marquee Ticker** — Auto-scrolling brand categories
- **SEO Optimized** — Open Graph, meta descriptions, and semantic HTML on every page

---

## 🗂️ Project Structure

```
destination-pitch/
├── src/
│   ├── assets/              # High-res images (hero, retail, luxury, etc.)
│   ├── components/
│   │   ├── deck/            # 3 custom pitch-deck components
│   │   │   ├── DeckLayout.tsx    # Main shell — header, nav, footer, progress bar
│   │   │   ├── Cinematic.tsx     # Full-bleed image with Ken Burns + grain
│   │   │   └── Section.tsx       # Reveal animations, Stat cards, CTA buttons
│   │   └── ui/              # shadcn/ui components (Radix-based primitives)
│   ├── hooks/
│   │   └── use-mobile.tsx   # Responsive breakpoint detection (768px)
│   ├── lib/
│   │   └── utils.ts         # Tailwind class merging utility (clsx + tailwind-merge)
│   ├── routes/              # File-based routing (TanStack Router)
│   │   ├── __root.tsx       # Root layout — HTML shell, fonts, meta tags
│   │   ├── index.tsx        # Home — cinematic hero, stats, tile grid
│   │   ├── why.tsx          # Why Here — location & audience data
│   │   ├── retail.tsx       # Retail — 4 leasing paths
│   │   ├── luxury.tsx       # The Avenue — luxury wing
│   │   ├── dining.tsx       # Dining — chef-driven concepts
│   │   ├── attractions.tsx  # Attractions — theme park, water park, ski, aquarium
│   │   ├── events.tsx       # Events — bookable venues, past activations
│   │   └── partner.tsx      # Partner — sponsorship tiers + contact form
│   ├── styles.css           # Global design system (oklch colors, animations)
│   ├── router.tsx           # Router factory + error boundary
│   └── routeTree.gen.ts     # Auto-generated route tree (DO NOT EDIT)
├── vite.config.ts           # Vite + TanStack Start + Nitro + Tailwind config
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── components.json          # shadcn/ui configuration
```

---

## 🛠️ Tech Stack

| Layer            | Technology                                                        |
| ---------------- | ----------------------------------------------------------------- |
| **Framework**    | [TanStack Start](https://tanstack.com/start) (React, SSR-ready)  |
| **Routing**      | TanStack Router — file-based, type-safe routing                   |
| **Styling**      | Tailwind CSS v4 + custom oklch design tokens                      |
| **UI Library**   | [shadcn/ui](https://ui.shadcn.com) (New York style, Radix-based) |
| **Build Tool**   | Vite 7                                                            |
| **Language**     | TypeScript 5.8                                                    |
| **Server**       | Nitro (for Vercel/Node.js deployment)                             |
| **Fonts**        | Google Fonts — Fraunces (display) + Inter (body)                  |
| **Deployment**   | Vercel                                                            |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/aashish1601/LIAT_assignment.git

# 2. Navigate into the project
cd LIAT_assignment

# 3. Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser. The app supports hot module replacement — changes reflect instantly.

### Building for Production

```bash
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📜 Available Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Start local dev server with hot reload       |
| `npm run build`    | Production build (outputs to `.output/`)     |
| `npm run build:dev`| Development-mode build (no minification)     |
| `npm run preview`  | Preview the production build locally         |
| `npm run lint`     | Run ESLint checks                            |
| `npm run format`   | Auto-format code with Prettier               |

---

## 🎨 Design System

The visual identity is built around a **cinematic luxury** aesthetic:

- **Color Palette:** oklch color space — deep ink backgrounds (`oklch(0.12 0.012 270)`) + champagne gold accents (`oklch(0.82 0.13 82)`)
- **Typography:** `Fraunces` serif for headings (elegant, editorial feel), `Inter` sans-serif for body
- **Custom CSS Utilities:**
  - `.gold-text` — Gradient gold shimmer via `background-clip: text`
  - `.grain::after` — Film grain noise overlay (inline SVG filter)
  - `.vignette::before` — Radial gradient dark edges
  - `.kenburns` — 18s slow pan/zoom on hero images
  - `.reveal` / `.reveal.in` — Scroll-triggered fade-up animation
  - `.marquee` — Infinite horizontal scroll

---

## 📄 Pages Overview

| #  | Route           | Content                                              |
| -- | --------------- | ---------------------------------------------------- |
| 01 | `/`             | Cinematic hero, key stats, navigation tile grid      |
| 02 | `/why`          | Location advantages, audience demographics           |
| 03 | `/retail`       | 4 leasing paths (flagship, specialty, pop-up, F&B)   |
| 04 | `/luxury`       | "The Avenue" luxury wing positioning                 |
| 05 | `/dining`       | 100+ chef-driven dining concepts                     |
| 06 | `/attractions`  | Theme park, water park, ski slope, aquarium           |
| 07 | `/events`       | Bookable venues + past brand activations             |
| 08 | `/partner`      | Sponsorship tiers + interactive contact form          |

---

## 🏗️ Architecture Highlights

- **File-Based Routing** — Each file in `src/routes/` auto-generates a route via TanStack Router
- **3 Custom Components** — `DeckLayout` (shell), `Cinematic` (hero sections), `Section` (Reveal, Stat, CTA)
- **No Backend Required** — Purely client-side pitch deck; the partner form is a UI demo (no server submission)
- **Path Alias** — `@/*` maps to `src/*` for clean imports
- **SSR-Ready** — TanStack Start supports server-side rendering, deployed via Nitro on Vercel

---

## 🌐 Deployment

This project is deployed on **Vercel** using Nitro as the server adapter.

To deploy your own instance:

1. Push to GitHub
2. Import the repo in [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel auto-detects the build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** Auto-detected (`.output/`)
4. Deploy ✅

---

## 📝 License

This project is private and built for assignment/demonstration purposes.
