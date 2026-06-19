import type { Project, Skill, TimelineItem, NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  // JS/TS — Main stack
  { name: "JavaScript", level: 88, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "Next.js", level: 72, category: "frontend" },
  // Bot & automation
  { name: "Baileys (WA Bot)", level: 82, category: "backend" },
  { name: "Telegraf (TG Bot)", level: 80, category: "backend" },
  // Python — learning
  { name: "Python", level: 52, category: "backend" },
  { name: "FastAPI", level: 40, category: "backend" },
  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "Linux", level: 78, category: "tools" },
  { name: "SQL", level: 70, category: "tools" },
  // AI — learning
  { name: "AI Integration", level: 55, category: "ai" },
  { name: "Prompt Engineering", level: 60, category: "ai" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "WhatsApp Bot Multi-Feature",
    description:
      "Bot WhatsApp full-featured menggunakan Baileys & Node.js. Fitur: auto-reply, downloader media, sticker maker, AI chat, group management, dan command system yang extensible.",
    tech: ["JavaScript", "Node.js", "Baileys", "OpenAI API"],
    image: "/images/project-wa.svg",
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Telegram Bot Toolkit",
    description:
      "Bot Telegram serbaguna berbasis Telegraf.js dengan sistem plugin modular. Fitur: inline query, callback keyboard, file handler, scheduler pesan, dan integrasi REST API eksternal.",
    tech: ["JavaScript", "Node.js", "Telegraf.js", "MongoDB"],
    image: "/images/project-tg.svg",
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Universal Video Downloader",
    description:
      "Tool CLI Node.js untuk mengunduh video dari YouTube, TikTok, dan Instagram. Mendukung pilihan resolusi, audio-only mode, dan batch download dari file teks.",
    tech: ["JavaScript", "Node.js", "yt-dlp", "FFmpeg"],
    image: "/images/project-downloader.svg",
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Subtitle Translator AI",
    description:
      "Aplikasi terjemahan subtitle otomatis menggunakan Gemini API. Mendukung format SRT/VTT, batch processing, dan preservasi timing subtitle asli. Dibangun dengan Python — salah satu project belajar Python pertama saya.",
    tech: ["Python", "Gemini API", "pysrt", "CLI"],
    image: "/images/project-subtitle.svg",
    demo: "#",
    github: "#",
    learning: true,
  },
  {
    id: 5,
    title: "Visual Novel Memory Architect",
    description:
      "Engine visual novel berbasis Python + Pygame dengan sistem memori AI dinamis dan percabangan cerita non-linear. Project eksplorasi game dev & AI integration.",
    tech: ["Python", "Pygame", "OpenAI API", "JSON"],
    image: "/images/project-vn.svg",
    demo: "#",
    github: "#",
    learning: true,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Website portfolio ini sendiri — dibangun dengan Next.js, TypeScript, Tailwind CSS, dan Framer Motion untuk animasi yang halus dan desain futuristik.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/project-portfolio.svg",
    demo: "#",
    github: "#",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2022",
    title: "Awal Perjalanan — JavaScript",
    description:
      "Memulai coding dengan JavaScript. Belajar DOM manipulation, async/await, dan Node.js. Langsung praktek dengan membangun skrip-skrip kecil dan eksplorasi npm ecosystem.",
    tags: ["JavaScript", "Node.js", "npm", "DOM"],
  },
  {
    year: "2023",
    title: "Bot Development",
    description:
      "Fokus membangun bot untuk WhatsApp dan Telegram menggunakan Baileys dan Telegraf.js. Dari sini mulai serius di backend Node.js, REST API, dan manajemen state bot.",
    tags: ["WhatsApp Bot", "Telegram Bot", "Baileys", "Telegraf.js"],
  },
  {
    year: "2024",
    title: "Eksplorasi Python & AI",
    description:
      "Mulai belajar Python karena tertarik dengan ekosistem AI/ML-nya. Membangun project kecil seperti subtitle translator dan visual novel engine sambil terus mengasah JS.",
    tags: ["Python", "AI Integration", "Gemini API", "Learning"],
  },
  {
    year: "2025",
    title: "Mendalami AI & Full-Stack",
    description:
      "Sedang aktif belajar integrasi AI ke dalam aplikasi web dan bot. Mengeksplorasi prompt engineering, LangChain, dan membangun tools berbasis AI yang berguna sehari-hari.",
    tags: ["AI/ML", "LangChain", "Next.js", "Ongoing..."],
  },
];

export const CONTACT_INFO = {
  email: "shin@example.com",
  github: "https://github.com/Shin7222",
  linkedin: "https://linkedin.com/in/shin",
  discord: "shin#0000",
};
