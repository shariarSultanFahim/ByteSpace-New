import type { MetadataRoute } from "next";

import { env } from "@/env";

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URLs and dynamic routes
  return [
    { url: `${env.NEXT_PUBLIC_SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${env.NEXT_PUBLIC_SITE_URL}/search`, changeFrequency: "daily", priority: 0.8 },
    {
      url: `${env.NEXT_PUBLIC_SITE_URL}/creators/purepearl-studio`,
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];
}
