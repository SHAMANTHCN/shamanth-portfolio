<!-- ============================================================
     SHAMANTH C N — PORTFOLIO README
     Cyberpunk · Neon · Professional
============================================================ -->

<div align="center">

```
███████╗ ██████╗███╗   ██╗
██╔════╝██╔════╝████╗  ██║
███████╗██║     ██╔██╗ ██║
╚════██║██║     ██║╚██╗██║
███████║╚██████╗██║ ╚████║
╚══════╝ ╚═════╝╚═╝  ╚═══╝
```

# ⚡ SHAMANTH C N — CYBERSECURITY PORTFOLIO

<img src="https://img.shields.io/badge/STATUS-LIVE-00f5ff?style=for-the-badge&labelColor=050508&color=00f5ff" />
<img src="https://img.shields.io/badge/ROLE-Cybersecurity%20Analyst-bf5fff?style=for-the-badge&labelColor=050508" />
<img src="https://img.shields.io/badge/LOCATION-Bangalore%2C%20IN-ff2d78?style=for-the-badge&labelColor=050508" />

<br/>

> *"Built from scratch. Every pixel, every animation, every line of code — crafted with purpose."*

<br/>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=050508)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=050508)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0080?style=flat-square&logo=framer&logoColor=white&labelColor=050508)](https://www.framer.com/motion)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=flat-square&logo=javascript&logoColor=black&labelColor=050508)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## `// 01.` WHAT IS THIS?

This is my **personal cybersecurity & data analyst portfolio website** — a fully custom, production-ready web application built with a futuristic anime-cyberpunk aesthetic. It showcases my skills, work experience, projects, and certifications in an interactive, visually immersive format designed to make an impression on recruiters.

The design philosophy: **a futuristic cybersecurity dashboard meets anime aesthetics** — dark void backgrounds, neon cyan/violet/pink accents, glassmorphism cards, real-time canvas animations, and smooth micro-interactions throughout.

---

## `// 02.` LIVE DEMO

```
🌐  https://shamanth-portfolio.vercel.app
```

---

## `// 03.` TECH STACK

### Frontend Framework

| Technology | Version | Why I Used It |
|:-----------|:--------|:--------------|
| **React** | 18.3 | Component-based architecture — each section is its own isolated, reusable component |
| **Vite** | 5.4 | Lightning-fast dev server with HMR — no wasted time waiting for rebuilds |
| **Framer Motion** | 11.3 | Production-grade animations with `whileInView`, `whileHover`, spring physics |

### Styling Approach

| Approach | Reason |
|:---------|:-------|
| **Inline styles + CSS-in-JS** | Zero external CSS dependencies — full control over every property |
| **CSS Custom Properties** | Design tokens (`--cyan`, `--violet`, `--void`) for consistent theming across all 11 components |
| **Google Fonts** | Orbitron (display), Rajdhani (body), JetBrains Mono (code/labels) |

### Animation Engine

| Feature | Method |
|:--------|:-------|
| Background particles + grid | Native **Canvas API** with `requestAnimationFrame` — no Three.js overhead |
| Scroll reveal animations | Custom `useInView` hook using **IntersectionObserver API** |
| Page entry loading screen | `requestAnimationFrame` progress loop with CSS opacity transition |
| Hover micro-interactions | Inline `onMouseEnter`/`onMouseLeave` state updates |
| Avatar hover swap | CSS `opacity` + `transform: scale()` cross-fade between two images |
| Project card 3D tilt | Mouse position → `perspective() rotateX() rotateY()` transform |

---

## `// 04.` PROJECT STRUCTURE

```
shamanth-portfolio/
│
├── 📄 index.html                  ← Vite entry point (12 lines only)
├── 📦 package.json                ← Dependencies declaration
├── ⚙️  vite.config.js              ← Vite + React plugin config
│
├── 📁 public/
│   ├── 🖼️  avatar-normal.png       ← Anime pixel-art portrait
│   └── 🖼️  avatar-hover.png        ← Cyberpunk ninja hover state
│
└── 📁 src/
    ├── 🚀 main.jsx                ← React DOM root mount
    ├── 🏗️  App.jsx                 ← Root component — assembles all sections
    ├── 🎨 index.css               ← Design tokens + Google Fonts import
    │
    ├── 📁 data/
    │   └── 📊 portfolioData.js    ← ALL content lives here (edit this to update anything)
    │
    ├── 📁 hooks/
    │   └── 🪝 useInView.js        ← Custom IntersectionObserver hook for scroll animations
    │
    └── 📁 components/
        ├── 🌌 CyberBackground.jsx  ← Canvas: animated particle grid + connecting lines
        ├── ⏳ LoadingScreen.jsx    ← Entry animation with progress bar
        ├── 🧭 Navbar.jsx           ← Sticky nav with active link tracking
        ├── 🦸 Hero.jsx             ← Typing animation + terminal card + stats
        ├── 👤 About.jsx            ← Dual avatar hover-swap + skill tags
        ├── 🛡️  Skills.jsx           ← 4 categories: progress bars + chip grid
        ├── 📅 Experience.jsx       ← Animated vertical timeline
        ├── 🗂️  Projects.jsx         ← 3D tilt cards with glow effects
        ├── 🏆 Certifications.jsx   ← Animated credential cards
        ├── 📬 Contact.jsx          ← Links + One Piece Easter egg
        └── 🦶 Footer.jsx           ← Social icons + copyright
```

---

## `// 05.` HOW I BUILT IT — STEP BY STEP

### Phase 1 — Design System First
Before writing a single component, I established the design tokens in `index.css`:
- **Color palette**: `#050508` void background, `#00f5ff` cyan, `#bf5fff` violet, `#ff2d78` pink
- **Typography scale**: 3 fonts, each with a specific purpose (display / body / mono)
- **CSS custom properties** so every component references the same source of truth

### Phase 2 — Canvas Background
The animated background is built entirely with the **native Canvas 2D API** — no libraries. I wrote a `Particle` class that handles position, velocity, reset-on-boundary, and rendering. The `connect()` function draws lines between particles within 125px of each other, with opacity inversely proportional to distance. A `drawGrid()` function overlays a subtle 60px dot grid. Everything runs in a `requestAnimationFrame` loop.

### Phase 3 — Data Architecture
All content (name, skills, experience, projects, certifications) lives in a single `portfolioData.js` file. Components import only what they need. This means updating any content requires changing **one file only** — no hunting through components.

### Phase 4 — Component Development
Each section was built as a standalone React functional component. I used:
- **`useState`** for hover states, typed text state, and loading progress
- **`useEffect`** for timers, event listeners, and IntersectionObserver setup
- **`useRef`** for direct canvas DOM access and tilt card calculations

### Phase 5 — Scroll Animations
I built a custom `useInView` hook that wraps `IntersectionObserver`. When a component enters the viewport, `inView` flips to `true`, triggering CSS transitions on `opacity` and `transform`. This is lighter and more controllable than using a library.

### Phase 6 — Advanced Interactions

**Typing animation** (`Hero.jsx`): A custom `useTyped` hook cycles through role titles using `setTimeout` chains — incrementing `ci` (char index) to type, then decrementing to delete, then advancing to the next role.

**Avatar hover swap** (`About.jsx`): Two `<img>` tags stacked absolutely. On hover, the normal image fades out (`opacity: 0, scale(1.08)`) while the cyberpunk image fades in (`opacity: 1, scale(1)`). A scanline overlay and "cyber mode activated" label animate in simultaneously.

**3D tilt cards** (`Projects.jsx`): On `mousemove`, I calculate the cursor offset from the card center, normalize it to `[-1, 1]`, and multiply by a rotation factor. This gets applied as `perspective(800px) rotateX(Xdeg) rotateY(Ydeg)` — creating a genuine parallax tilt with no library.

**Loading screen** (`LoadingScreen.jsx`): Uses `requestAnimationFrame` with `performance.now()` for a smooth 0→100% progress bar over 1.8 seconds, then fades out with a CSS opacity transition.

### Phase 7 — One Piece Easter Egg
The straw hat in the Contact section is a fully hand-coded SVG — no images, no assets. The hat consists of:
- Elliptical brim with a `radialGradient` fill and straw texture lines
- Dome crown using a quadratic bezier `path`
- Red band with hover neon glow
- Smiley face (eyes + smile arc)
- Orbit rings, floating particles, and a click counter

All glow effects use SVG `<filter>` `feGaussianBlur` + `feComposite`. The entire hat is a React component that accepts a `hovered` prop and transitions all colors, strokes, and filter intensities simultaneously.

### Phase 8 — Deployment
```bash
npm run build          # Vite bundles + minifies → /dist
# Push to GitHub → Vercel auto-deploys from main branch
```

---

## `// 06.` KEY FEATURES

```
✅  Full cyberpunk / anime aesthetic — dark + neon
✅  Canvas-based animated particle background (no Three.js)
✅  Loading screen with animated progress bar
✅  Typing animation cycling through 5 roles
✅  Dual-image avatar with crossfade hover effect
✅  Scroll-triggered reveal animations on every section
✅  Animated skill progress bars (4 categories)
✅  Tools & Platforms chip grid
✅  Vertical animated experience timeline
✅  3D tilt parallax project cards
✅  One Piece straw hat SVG Easter egg (interactive)
✅  GitHub, LinkedIn, Email, Phone links
✅  Mobile responsive with hamburger menu
✅  Zero external CSS frameworks (no Tailwind, no Bootstrap)
✅  All content centralised in portfolioData.js
✅  Deployed on Vercel with auto-deploy from GitHub
```

---

## `// 07.` PACKAGES USED

```json
{
  "dependencies": {
    "react":         "^18.3.1",   // UI component framework
    "react-dom":     "^18.3.1",   // React DOM renderer
    "framer-motion": "^11.3.0"    // Animation library
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",  // Vite plugin for React JSX
    "vite":                 "^5.4.0"   // Build tool + dev server
  }
}
```

**That's it. 2 runtime dependencies, 2 dev dependencies. No bloat.**

---

## `// 08.` GETTING STARTED LOCALLY

```bash
# 1. Clone the repo
git clone https://github.com/SHAMANTHCN/shamanth-portfolio.git
cd shamanth-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → Open http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## `// 09.` CUSTOMISATION

To update any content, edit **only this one file**:

```
src/data/portfolioData.js
```

| What to change | Where in the file |
|:---------------|:------------------|
| Name, email, phone, links | `personal` object |
| Typed role titles | `typedRoles` array |
| Skill categories & percentages | `skillCategories` array |
| Work experience / education | `experiences` array |
| Projects | `projects` array |
| Certifications | `certifications` array |

---

## `// 10.` DESIGN CREDITS

| Asset | Source |
|:------|:-------|
| Fonts | Google Fonts (Orbitron, Rajdhani, JetBrains Mono) |
| Avatar Normal | Gemini AI — pixel/anime portrait style |
| Avatar Hover | Gemini AI — cyberpunk ninja style |
| Straw Hat SVG | Hand-coded from scratch (SVG paths + gradients) |
| All icons | Inline SVGs — no icon library |
| Color palette | Custom designed |

---

## `// 11.` CONTACT

<div align="center">

| Platform | Link |
|:---------|:-----|
| 📧 Email | shamanth886@gmail.com |
| 💼 LinkedIn | [shamanth-c-n-799990312](https://www.linkedin.com/in/shamanth-c-n-799990312/) |
| 🐙 GitHub | [SHAMANTHCN](https://github.com/SHAMANTHCN) |
| 📍 Location | Bangalore, Karnataka, India |

<br/>

```
╔══════════════════════════════════════════════╗
║  Built by Shamanth C N  ·  © 2026           ║
║  Open to cybersecurity & data analyst roles  ║
╚══════════════════════════════════════════════╝
```

</div>

---

<div align="center">
<sub>If this portfolio helped you or inspired your own — drop a ⭐ on the repo!</sub>
</div>
