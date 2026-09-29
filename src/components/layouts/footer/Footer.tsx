"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Newsletter Column Reveal
      gsap.from(newsletterRef.current, {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: "top 90%",
          once: true
        }
      });

      // Links Columns Reveal
      const linkCols = linksRef.current ? linksRef.current.children : [];
      if (linkCols && linkCols.length > 0) {
        gsap.from(linkCols, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 90%",
            once: true
          }
        });
      }
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-full border-t border-border-soft/60 bg-white"
      data-node-id="34:1256"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-[70px] lg:px-[120px]">
        {/* Top Content */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-[92px]">
          {/* Newsletter Column */}
          <div ref={newsletterRef} className="flex max-w-[528px] flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-[10px]">
                <Image
                  src="/images/logo.svg"
                  alt="ByteSpace Logo"
                  width={29}
                  height={32}
                  className="h-[31.5px] w-[28.875px]"
                />
                <span className="font-['Poppins'] text-[24px] font-bold text-text-ink">
                  ByteSpace
                </span>
              </Link>
              <p className="font-sans text-[14px] leading-[1.6] text-text-ink">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <div className="flex h-[52px] w-full max-w-[376px] items-center rounded-full border border-border-soft px-6 py-[18px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent font-sans text-[16px] text-text-ink placeholder:text-text-muted focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex h-[46px] items-center justify-center rounded-full bg-brand-lime px-6 font-sans text-[18px] font-medium text-text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Search
                </button>
              </form>
              <p className="max-w-[504px] font-sans text-[12px] leading-[1.6] text-text-ink">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from
                our company.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div ref={linksRef} className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-[60px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <p className="h-6 font-sans text-[16px] font-medium text-transparent">Browse</p>
              <ul className="flex flex-col gap-4 font-sans text-[14px] leading-[1.6] text-text-ink">
                <li>
                  <Link href="#courses" className="hover:text-brand-primary">
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link href="#categories" className="hover:text-brand-primary">
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link href="#business" className="hover:text-brand-primary">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="#it" className="hover:text-brand-primary">
                    IT
                  </Link>
                </li>
                <li>
                  <Link href="#design" className="hover:text-brand-primary">
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 pt-6 sm:pt-0">
              <p className="hidden h-6 sm:block" />
              <ul className="flex flex-col gap-4 font-sans text-[14px] leading-[1.6] text-text-ink">
                <li>
                  <Link href="#development" className="hover:text-brand-primary">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="#marketing" className="hover:text-brand-primary">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#photography" className="hover:text-brand-primary">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="#finance" className="hover:text-brand-primary">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="#sport" className="hover:text-brand-primary">
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <p className="h-6 font-sans text-[16px] font-medium text-transparent">Platform</p>
              <ul className="flex flex-col gap-4 font-sans text-[14px] leading-[1.6] text-text-ink">
                <li>
                  <Link href="#creator" className="hover:text-brand-primary">
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link href="#affiliate" className="hover:text-brand-primary">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-brand-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#help" className="hover:text-brand-primary">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-brand-primary">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-20 border-t border-border-soft pt-6">
          <div className="flex flex-col items-center justify-between gap-3 font-sans text-[12px] text-text-ink sm:flex-row">
            <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

            {/* Developer Credit */}
            <p className="order-last text-center text-text-muted sm:order-none">
              Developed by{" "}
              <a
                href="https://fa-m.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-primary transition-opacity hover:opacity-80"
              >
                fa-m.dev
              </a>
            </p>

            <div className="flex items-center gap-6">
              <Link href="#privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="#cookies" className="hover:underline">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
