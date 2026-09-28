import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import { jsonLd, seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { env } from "@/env";

import { Toaster } from "@/ui";
import { Providers } from "@/providers";

import "@/tailwind";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = seoConfig;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.locale} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} flex min-h-screen w-full flex-col font-sans antialiased`}
      >
        <Providers>
          {children}
          <Toaster richColors />
        </Providers>

        {env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
