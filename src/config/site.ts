import type { SiteConfig } from "@/types/site-config";
import { env } from "@/env";

export const siteConfig: SiteConfig = {
  name: "ByteSpace",
  description:
    "Unlock your creativity and grow your business with hundreds of online courses from top creators. Browse UI/UX, marketing, development, and more.",
  url: env.NEXT_PUBLIC_SITE_URL,
  author: "Shariar Sultan Fahim",
  locale: "en",
  themeColor: "#003be2",
  keywords: [
    "online courses",
    "learn online",
    "UI/UX design courses",
    "web development courses",
    "digital marketing courses",
    "photography courses",
    "online learning platform",
    "courses for creators",
    "ByteSpace courses",
    "creative courses online"
  ],
  social: {
    twitter: "",
    github: "https://github.com/shariarSultanFahim",
    linkedin: "https://www.linkedin.com/in/shariarsultan"
  },
  ogImage: "/web-app-manifest-512x512.png"
} as const;
