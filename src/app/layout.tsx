import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shin — JavaScript Developer | Bot Builder | AI Learner",
  description:
    "Portfolio of Shin, a JavaScript developer specializing in WhatsApp & Telegram bots, Node.js, and actively learning Python and AI integration.",
  keywords: [
    "JavaScript Developer",
    "Bot Developer",
    "WhatsApp Bot",
    "Telegram Bot",
    "Node.js",
    "AI Learner",
    "Python",
    "Portfolio",
    "Shin",
  ],
  authors: [{ name: "Shin" }],
  openGraph: {
    title: "Shin — JavaScript Developer | Bot Builder | AI Learner",
    description:
      "Portfolio of Shin, a JavaScript developer specializing in WhatsApp & Telegram bots with a growing passion for Python and AI.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
