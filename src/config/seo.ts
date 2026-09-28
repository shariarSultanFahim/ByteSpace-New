import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const seoConfig: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "ByteSpace — Learn from the Best Creators",
    template: `%s | ByteSpace`
  },

  description: siteConfig.description,
  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.author,
      url: "https://fa-m.dev"
    }
  ],

  creator: siteConfig.author,
  publisher: "ByteSpace",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  alternates: {
    canonical: "/"
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "ByteSpace — Learn from the Best Creators",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "ByteSpace — Online Learning Platform"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "ByteSpace — Learn from the Best Creators",
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },

  other: {
    "theme-color": siteConfig.themeColor
  }
};

/** JSON-LD structured data for the site root (EducationalOrganization + WebSite) */
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteConfig.url}/#organization`,
      name: "ByteSpace",
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/logo.svg`,
      description: siteConfig.description,
      sameAs: [siteConfig.social.github, siteConfig.social.linkedin].filter(Boolean)
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "ByteSpace",
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Person",
      "@id": "https://fa-m.dev/#person",
      name: "Shariar Sultan Fahim",
      url: "https://fa-m.dev",
      jobTitle: "Full Stack Engineer",
      sameAs: ["https://github.com/shariarSultanFahim", "https://www.linkedin.com/in/shariarsultan"]
    }
  ]
};
