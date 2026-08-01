# 🍬 Pet Candy Puzzle

A responsive landing page for the Pet Candy Puzzle mobile game, built with Vite and vanilla JavaScript, implemented pixel-for-pixel from the Figma design.

Live demo: https://dianapri0303.github.io/STPP-394/

## ✨ Features

- 📱 Responsive design (mobile 375px / desktop 1440px, mobile-first)
- 🎨 Pixel-perfect implementation of the Figma design
- 🍔 Fixed header with a burger menu on mobile
- 🐾 Drag-to-scroll Characters carousel
- ❓ Interactive FAQ accordion
- 🚀 Call-to-Action section with a Google Play link
- 📄 Privacy Policy and Terms of Service pages
- 🖼️ Optimized images and an SVG icon sprite
- ♿ Semantic, accessible HTML (no class selectors in JS — only `data-*`/`id`)

## 🛠️ Tech stack

- HTML5 / CSS3
- JavaScript (ES6, vanilla — no frameworks)
- Vite
- PostCSS (`postcss-sort-media-queries`)
- vite-plugin-image-optimizer, SVGO

## 🌿 Git workflow

- Branches: main ← dev ← feat/* — all merges go through a Pull Request, no direct pushes to main or dev.
- Commits follow Conventional Commits (`feat:`, fix:, chore:, `docs:`), written in English.
- One CSS/JS file per section — keeps changes isolated and avoids merge conflicts between contributors.

## 🚀 Getting started

```bash
# clone the repository
git clone <repository-url>
cd pet-candy-puzzle

# install dependencies
npm install

# run the dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

## 📑 Sections

- Header (with burger menu)
- Hero
- About
- How to Play
- Features
- Characters
- FAQ
- Call to Action
- Footer

Plus two standalone pages: **Privacy Policy** and **Terms of Service**.

## 🎨 Design

Built from the provided Figma design, with values (spacing, typography, colors) taken directly from the design file — mobile-first at 375px and 1440px breakpoints.

## 👩‍💻 Authors

Diana Prihozhyna & Kateryna Nehoda

---

⭐ If you like this project, don't forget to give it a star!
