# Shin Portfolio — Next.js Futuristic Developer Portfolio

Portfolio website modern dan futuristik untuk developer, dibangun dengan Next.js 14, TypeScript, Tailwind CSS, dan Framer Motion.

## ✨ Fitur

- 🌙 **Dark Mode Futuristik** — Tema gelap dengan neon blue dan neon purple
- 💎 **Glassmorphism** — Efek kaca modern pada cards dan navbar
- 🎭 **Framer Motion** — Animasi halus dan scroll reveal
- 📱 **Fully Responsive** — Optimal di semua ukuran layar
- ⚡ **Loading Screen** — Animated loading dengan progress bar
- 🔤 **Type Animation** — Typing effect pada hero title
- 🔍 **SEO Friendly** — Meta tags dan OpenGraph optimized
- 🧹 **Clean Code** — TypeScript strict mode, reusable components

## 🏗️ Struktur Folder

```
shin-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & custom utilities
│   │   ├── layout.tsx           # Root layout dengan metadata SEO
│   │   └── page.tsx             # Home page — merangkai semua sections
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Navbar responsive dengan scroll detection
│   │   │   └── Footer.tsx       # Footer dengan social links
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Hero: avatar, name, CTA, stats
│   │   │   ├── AboutSection.tsx      # About me: bio, focus areas
│   │   │   ├── SkillsSection.tsx     # Skills: filtered cards + progress bar
│   │   │   ├── ProjectsSection.tsx   # Projects: 6 project cards
│   │   │   ├── ExperienceSection.tsx # Timeline experience
│   │   │   └── ContactSection.tsx    # Contact: email + social links
│   │   │
│   │   └── ui/
│   │       └── LoadingScreen.tsx     # Animated loading screen
│   │
│   ├── hooks/
│   │   └── useScrollReveal.ts   # Custom hook untuk scroll animation
│   │
│   ├── lib/
│   │   ├── data.ts              # Data: projects, skills, timeline, contacts
│   │   └── utils.ts             # Utility functions (cn, getCategoryColor)
│   │
│   └── types/
│       └── index.ts             # TypeScript type definitions
│
├── public/
│   └── images/                  # Project images (SVG placeholders)
│
├── tailwind.config.ts           # Tailwind konfigurasi + custom tokens
├── next.config.mjs              # Next.js konfigurasi
├── tsconfig.json                # TypeScript konfigurasi
├── postcss.config.mjs           # PostCSS konfigurasi
└── package.json                 # Dependencies
```

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Install & Run

```bash
# Clone atau ekstrak project
cd shin-portfolio

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Tokens

| Token | Value | Keterangan |
|-------|-------|-----------|
| `neon-blue` | `#00D4FF` | Warna aksen utama |
| `neon-purple` | `#BF5FFF` | Warna aksen sekunder |
| `dark-bg` | `#050510` | Background utama |
| `dark-card` | `#0A0A1A` | Background card |

## 🛠️ Kustomisasi

### Ubah Data Personal

Edit file `src/lib/data.ts`:
- `PROJECTS` — Tambah/edit project cards
- `SKILLS` — Ubah skill dan level
- `TIMELINE` — Edit experience timeline
- `CONTACT_INFO` — Update contact details
- `NAV_ITEMS` — Edit navigasi

### Ubah Tema Warna

Edit `tailwind.config.ts` di bagian `colors`:
```ts
colors: {
  "neon-blue": "#00D4FF",    // Ubah sesuai preferensi
  "neon-purple": "#BF5FFF",  // Ubah sesuai preferensi
}
```

## 📦 Teknologi

- **Next.js 14** — React framework dengan App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first CSS
- **Framer Motion** — Animation library
- **react-type-animation** — Typing effect
- **react-intersection-observer** — Scroll detection
- **lucide-react** — Icon library

## 📄 License

MIT — Free to use and modify.
