import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    backend: "from-blue-500 to-cyan-400",
    frontend: "from-purple-500 to-pink-400",
    tools: "from-green-500 to-emerald-400",
    ai: "from-orange-500 to-yellow-400",
  };
  return colors[category] || "from-neon-blue to-neon-purple";
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    backend: "Backend",
    frontend: "Frontend",
    tools: "DevTools",
    ai: "AI & ML",
  };
  return labels[category] || category;
}
