"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="relative w-full border-t border-[#ced0d3]/60 bg-white"
      data-node-id="34:1256"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-[70px] lg:px-[120px]">
        {/* Top Content */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-[92px]">
          {/* Newsletter Column */}
          <div className="flex max-w-[528px] flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-[10px]">
                <Image
                  src="/images/logo.svg"
                  alt="ByteSpace Logo"
                  width={29}
                  height={32}
                  className="h-[31.5px] w-[28.875px]"
                />
                <span className="font-['Poppins'] text-[24px] font-bold text-[#242528]">
                  ByteSpace
                </span>
              </Link>
              <p className="font-sans text-[14px] leading-[1.6] text-[#242528]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <div className="flex h-[52px] w-full max-w-[376px] items-center rounded-full border border-[#ced0d3] px-6 py-[18px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent font-sans text-[16px] text-[#242528] placeholder:text-[#82868e] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex h-[46px] items-center justify-center rounded-full bg-[#d4fb20] px-6 font-sans text-[18px] font-medium text-[#242528] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Search
                </button>
              </form>
              <p className="max-w-[504px] font-sans text-[12px] leading-[1.6] text-[#242528]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from
                our company.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-[60px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <p className="h-6 font-sans text-[16px] font-medium text-transparent">Browse</p>
              <ul className="flex flex-col gap-4 font-sans text-[14px] leading-[1.6] text-[#242528]">
                <li>
                  <Link href="#courses" className="hover:text-[#003be2]">
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link href="#categories" className="hover:text-[#003be2]">
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link href="#business" className="hover:text-[#003be2]">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="#it" className="hover:text-[#003be2]">
                    IT
                  </Link>
                </li>
                <li>
                  <Link href="#design" className="hover:text-[#003be2]">
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 pt-6 sm:pt-0">
              <p className="hidden h-6 sm:block" />
              <ul className="flex flex-col gap-4 font-sans text-[14px] leading-[1.6] text-[#242528]">
                <li>
                  <Link href="#development" className="hover:text-[#003be2]">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="#marketing" className="hover:text-[#003be2]">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#photography" className="hover:text-[#003be2]">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="#finance" className="hover:text-[#003be2]">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="#sport" className="hover:text-[#003be2]">
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <p className="h-6 font-sans text-[16px] font-medium text-transparent">Platform</p>
              <ul className="flex flex-col gap-4 font-sans text-[14px] leading-[1.6] text-[#242528]">
                <li>
                  <Link href="#creator" className="hover:text-[#003be2]">
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link href="#affiliate" className="hover:text-[#003be2]">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-[#003be2]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#help" className="hover:text-[#003be2]">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-[#003be2]">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-20 border-t border-[#ced0d3] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 font-sans text-[12px] text-[#242528] sm:flex-row">
            <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

            {/* Developer Credit */}
            <p className="order-last text-center text-[#82868e] sm:order-none">
              Developed by{" "}
              <a
                href="https://fa-m.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#003BE2] transition-opacity hover:opacity-80"
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
