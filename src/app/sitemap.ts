import type { MetadataRoute } from "next";

import { env } from "@/env";

const BASE = env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${BASE}/search`,
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: `${BASE}/creators/purepearl-studio`,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${BASE}/login`,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${BASE}/register`,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
