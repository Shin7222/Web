export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
  github?: string;
  featured?: boolean;
  learning?: boolean; // project built while learning a new lang/tech
}

export interface Skill {
  name: string;
  level: number;
  category: "backend" | "frontend" | "tools" | "ai";
  icon?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
