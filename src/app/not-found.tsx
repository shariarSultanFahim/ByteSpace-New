import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer, Header } from "@/components/layouts";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist."
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Blue Hero with Grid Pattern, Header & 404 Visual Content */}
      <div className="relative flex flex-1 flex-col overflow-hidden bg-[#003be2]">
        {/* Background Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/auth-grid.svg"
            alt=""
            width={1440}
            height={957}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Navigation Header */}
        <Header />

        {/* Hero 404 Content Container */}
        <main className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-6 pt-6 pb-20 text-center sm:pt-10 sm:pb-28 lg:px-[120px]">
          <div className="relative flex w-full flex-col items-center justify-center">
            {/* Massive Stylized 404 with Gradient matching Figma (node-id: 63:643) */}
            <h1
              className="font-['Poppins'] text-[140px] leading-none font-semibold tracking-[-2px] text-transparent select-none sm:text-[240px] md:text-[340px] lg:text-[480px] lg:tracking-[-4.8px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgb(212, 251, 32) 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}
            >
              404
            </h1>

            {/* Overlaid Headline & Action matching Figma (node-id: 63:638) */}
            <div className="-mt-16 flex flex-col items-center gap-6 sm:-mt-28 sm:gap-8 lg:-mt-48">
              <h2 className="max-w-[935px] font-['Poppins'] text-[32px] leading-[1.2] font-semibold tracking-[-0.32px] text-white sm:text-[48px] sm:tracking-[-0.48px] lg:text-[72px] lg:tracking-[-0.72px]">
                The page you are looking for doesn’t exist
              </h2>

              <p className="max-w-[620px] font-sans text-[16px] leading-[1.6] text-[#e5e6e8] sm:text-[18px]">
                Try to use a correct url or go back to homepage to start again
              </p>

              <Link
                href="/"
                className="mt-2 inline-flex h-[52px] items-center justify-center rounded-[24px] bg-[#d4fb20] px-8 font-sans text-[18px] font-medium text-[#242528] shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
