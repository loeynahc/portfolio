# 🌿 My Portfolio — Next.js + Vercel

A clean, modern portfolio built with Next.js 14, TypeScript, and CSS Modules.  
Designed to showcase both coding skills and creative hobbies.

---

## 🗂 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css       ← Design tokens & base styles
│   │   ├── layout.tsx        ← Root layout & metadata
│   │   └── page.tsx          ← Main page (assembles all sections)
│   ├── components/
│   │   ├── Nav.tsx / .css    ← Sticky navigation with mobile menu
│   │   ├── Hero.tsx / .css   ← Landing section
│   │   ├── About.tsx / .css  ← About me + stats
│   │   ├── Skills.tsx / .css ← Tech skills grid
│   │   ├── Projects.tsx      ← Project cards (dark section)
│   │   ├── Crafts.tsx / .css ← Photo gallery / hobby showcase
│   │   ├── Contact.tsx       ← Contact links
│   │   ├── Footer.tsx        ← Footer
│   │   ├── Reveal.tsx        ← Scroll-triggered fade-in wrapper
│   │   └── useReveal.ts      ← IntersectionObserver hook
│   └── data/
│       └── portfolio.ts      ← ✏️ EDIT THIS to customise everything
├── public/
│   └── crafts/               ← Drop your craft photos here
├── package.json
├── next.config.js
├── tsconfig.json
└── vercel.json
```

---

## ✏️ How to Customise

**Almost everything lives in one file: `src/data/portfolio.ts`**

1. Update `personal` — your name, bio, email, social links
2. Update `skills` — your actual tech stack
3. Update `projects` — your real projects with URLs
4. Update `crafts` — uncomment the `image` field and point to your photos

### Adding craft photos:
1. Put your images in `/public/crafts/` (e.g. `keycaps.jpg`)
2. In `portfolio.ts`, uncomment the image line:
   ```ts
   image: '/crafts/keycaps.jpg',
   ```

---

## 🖥 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

---

## 🚀 Deploying to Vercel (Free)

### Step 1 — Push to GitHub
```bash
# In the portfolio folder:
git init
git add .
git commit -m "Initial portfolio"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Connect to Vercel
1. Go to **[vercel.com](https://vercel.com)** and sign in (use your GitHub account)
2. Click **"Add New Project"**
3. Click **"Import"** next to your `portfolio` repo
4. Leave all settings as defaults — Vercel auto-detects Next.js ✅
5. Click **"Deploy"**

### Step 3 — Your site is live! 🎉
You'll get a URL like `yourname.vercel.app` in about 60 seconds.

### Step 4 — Custom domain (optional, free)
In Vercel → Project Settings → Domains → add your own domain.

### Auto-deploy on every push:
After setup, every `git push` to `main` automatically redeploys your site. No extra steps!

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| CSS Modules | Scoped, component-level styles |
| Vercel | Free hosting with auto-deploy |

---

## 📸 Tips for the Crafts Gallery

- Aim for consistent aspect ratios (landscape works best for the mosaic)
- Recommended sizes: 800×600px minimum
- File names: `keycaps.jpg`, `crochet.jpg`, `3d-model.jpg`, `photography.jpg`
- Place in `/public/crafts/` and reference as `/crafts/filename.jpg`

---

*Built with Next.js · Hosted on Vercel · Made with care and too much tea ☕*
