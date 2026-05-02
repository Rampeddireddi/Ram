# Personal Portfolio Website

**Author:** Pansaramanna Peddireddi  

A responsive single-page portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. It presents a hero introduction, about copy, skills, featured projects with GitHub links, and contact actions. Motion includes parallax on decorative layers, scroll-triggered reveals, staggered skill badges, alternating project cards, and an optional cursor glow on large screens.

**Live site:** _Add your deployed URL after publishing (e.g. Vercel or Netlify)._  

---

## Tech stack

| Layer | Technology |
|-------|------------|
| UI | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Animation | Framer Motion 12 |
| Linting | ESLint 10 |

---

## Page sections

| Section | File | What it shows |
|---------|------|----------------|
| **Hero** | `src/sections/HeroSection.jsx` | Name, role, short bio, primary CTAs (View Projects, Open Resume), GitHub / LinkedIn, sidebar nav on desktop |
| **About** | `src/sections/AboutSection.jsx` | Short bio text |
| **Skills** | `src/sections/SkillsSection.jsx` | Skills as animated badge chips |
| **Projects** | `src/sections/ProjectsSection.jsx` | At least three projects: title, tech stack, bullet highlights, GitHub repo link |
| **Contact** | `src/sections/ContactSection.jsx` | Email (`mailto:`), GitHub profile, LinkedIn |

Content (copy, links, resume path) lives in **`src/data/portfolioData.js`** (resume PDF is imported via `Resume.pdf?url`).

---

## What is a parallax effect?

**Parallax** is when foreground and background (or decorative layers) appear to move at **different rates** as you scroll, which adds depth. Here we do **not** move the whole page faster or slower; we tie **`translateY` / `translateX`** on background blobs and images to **scroll progress** so those layers drift slightly relative to the content.

### How we implement it (Framer Motion)

1. **`useRef`** — Attach to the section so Framer knows which element to measure.
2. **`useScroll`** — Tracks **`scrollYProgress`** from `0` to `1` as that section moves through the viewport (with configurable `offset`).
3. **`useTransform`** — Maps scroll progress to pixel offsets (e.g. `y` from `0` to `-40`).
4. **`useReducedMotion`** — If the user prefers reduced motion, parallax offsets are set to **0** so nothing extra moves.

Decorative elements use **`style={{ y: parallaxY }}`** (and optionally **`x`**) on **`motion`** nodes so only **`transform`** updates—good for performance.

### Example (Hero — parallax on glow + code image)

```jsx
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sectionRef = useRef(null);
const shouldReduceMotion = useReducedMotion();
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"],
});
const parallaxY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -40]);
const parallaxX = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 22]);

return (
  <section ref={sectionRef}>
    <motion.div aria-hidden style={{ y: parallaxY }} className="absolute ... rounded-full blur-3xl" />
    <motion.img aria-hidden style={{ y: parallaxY, x: parallaxX }} src={codeSnippetBg} alt="" />
    {/* ... */}
  </section>
);
```

**About** uses the same idea for the large background illustration: `useScroll` + `useTransform` for **`y`** only.

---

## Animation patterns used (with snippets)

### 1. Fade + slide in when the section enters the viewport (`whileInView`)

Used on **About, Skills, Projects, Contact** sections and the **Hero** title.

```jsx
<motion.section
  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
  {/* ... */}
</motion.section>
```

### 2. Scroll-linked “breathing” scale on sections (`useSpring` + `useTransform`)

As the section crosses the viewport, scale goes **1 → ~1.05 → 1** (subtle depth). Applied to **About, Skills, Projects, Contact**.

```jsx
const sectionScaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
const sectionScale = useSpring(shouldReduceMotion ? 1 : sectionScaleRaw, {
  stiffness: 130,
  damping: 24,
  mass: 0.45,
});

<motion.section style={{ scale: sectionScale }}>{/* ... */}</motion.section>
```

### 3. Staggered reveal for skill badges (`variants`)

Parent orchestrates **`staggerChildren`**; each **`motion.span`** uses **`itemVariants`**.

```jsx
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

<motion.div
  variants={shouldReduceMotion ? undefined : listVariants}
  initial={shouldReduceMotion ? false : "hidden"}
  whileInView={shouldReduceMotion ? undefined : "visible"}
  viewport={{ once: true, amount: 0.2 }}
>
  {skills.map((skill) => (
    <motion.span key={skill} variants={shouldReduceMotion ? undefined : itemVariants}>
      {skill}
    </motion.span>
  ))}
</motion.div>
```

### 4. Project cards — alternating horizontal slide + staggered delay

Even index slides from the left, odd from the right; **`delay: index * 0.1`** staggers the list.

```jsx
<motion.article
  initial={shouldReduceMotion ? false : { opacity: 0, y: 22, x: index % 2 === 0 ? -14 : 14 }}
  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, x: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{
    duration: 0.55,
    delay: shouldReduceMotion ? 0 : index * 0.1,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  {/* ... */}
</motion.article>
```

### 5. Cursor-following gradient (desktop only, disabled for reduced motion)

```jsx
const mouseX = useMotionValue(-1000);
const mouseY = useMotionValue(-1000);
const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.14), ...)`;

<motion.div className="pointer-events-none fixed inset-0" style={{ background }} />
```

---

## Packages installed

### Production (`dependencies`)

| Package | Purpose |
|---------|---------|
| `react` | UI library |
| `react-dom` | React DOM renderer |
| `framer-motion` | Declarative animations, scroll hooks, gestures |

### Development (`devDependencies`)

| Package | Purpose |
|---------|---------|
| `vite` | Dev server and production build |
| `@vitejs/plugin-react` | React support in Vite |
| `tailwindcss` | Utility-first CSS |
| `@tailwindcss/vite` | Tailwind 4 Vite integration |
| `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals` | Linting |
| `postcss`, `autoprefixer` | CSS toolchain (used by the stack as needed) |
| `@types/react`, `@types/react-dom` | Type hints for editors (JS project) |

Install everything:

```bash
npm install
```

---

## Project structure

```
Portfolio/
├── index.html                 # HTML shell
├── package.json
├── vite.config.js             # Vite + React + Tailwind plugins
├── eslint.config.js
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx               # Entry: mounts React, imports global CSS
│   ├── index.css              # Tailwind import + global tokens / base styles
│   ├── App.jsx                # Layout: CursorGlow + Hero aside + scroll column
│   ├── assets/
│   │   └── backgrounds/       # Decorative PNGs for hero/about
│   ├── components/
│   │   ├── CursorGlow.jsx     # Mouse-follow radial gradient
│   │   └── Navbar.jsx         # Optional sticky nav (not wired in App currently)
│   ├── data/
│   │   ├── portfolioData.js   # Name, role, about, skills, projects, contact, resume import
│   │   ├── Resume.pdf         # Bundled via ?url import
│   │   └── navigationLinks.js
│   └── sections/
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── SkillsSection.jsx
│       ├── ProjectsSection.jsx
│       └── ContactSection.jsx
└── README.md
```

---

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview   # optional: serve dist/ locally
```

### Lint

```bash
npm run lint
```

---

## Accessibility note

Components use **`useReducedMotion()`** from Framer Motion to skip or simplify motion when the user enables “reduce motion” in the OS. For coursework that also requires a **global CSS** `prefers-reduced-motion` block, add it to `src/index.css` alongside this behavior.
