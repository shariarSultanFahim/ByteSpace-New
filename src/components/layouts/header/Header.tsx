"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { toast } from "sonner";

import { useAuth } from "@/hooks";

gsap.registerPlugin(useGSAP);

export function Header() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  const isHomeActive = pathname === "/";
  const isCoursesActive = pathname === "/search" || pathname.startsWith("/courses");
  const isCreatorsActive = pathname.startsWith("/creators");

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Step 1: Logo drop-in
      tl.from(logoRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.5)"
      })
        // Step 2: Nav Links drop-in
        .from(
          navRef.current,
          {
            y: -20,
            opacity: 0,
            duration: 0.6
          },
          "-=0.4"
        )
        // Step 3: Auth & Cart Actions drop-in
        .from(
          actionsRef.current,
          {
            y: -20,
            opacity: 0,
            duration: 0.6
          },
          "-=0.3"
        );
    },
    { scope: headerRef }
  );

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Successfully logged out");
    } catch {
      toast.error("Error logging out");
    }
  };

  const displayName =
    (user?.user_metadata?.full_name as string | undefined) || user?.email?.split("@")[0] || "User";

  return (
    <header ref={headerRef} className="relative z-30 w-full" data-node-id="1:1778">
      <div className="mx-auto flex h-[120px] max-w-[1440px] items-center justify-between px-6 lg:px-[120px]">
        {/* Step 1: Logo */}
        <Link ref={logoRef} href="/" className="flex items-center gap-[10px]" data-node-id="1:1787">
          <Image
            src="/images/logo.svg"
            alt="ByteSpace Logo"
            width={29}
            height={32}
            className="h-[31.5px] w-[28.875px]"
            priority
          />
          <span className="font-['Poppins'] text-[24px] font-bold tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        {/* Step 2: Center Nav */}
        <nav
          ref={navRef}
          className="hidden items-center gap-8 text-[16px] md:flex"
          data-node-id="1:1779"
        >
          <Link
            href="/"
            className={`transition-colors hover:text-brand-lime ${
              isHomeActive
                ? "font-semibold text-brand-lime underline decoration-brand-lime decoration-2 underline-offset-8"
                : "font-normal text-white/80"
            }`}
            data-node-id="1:1780"
          >
            Home
          </Link>
          <Link
            href="/search"
            className={`transition-colors hover:text-brand-lime ${
              isCoursesActive
                ? "font-semibold text-brand-lime underline decoration-brand-lime decoration-2 underline-offset-8"
                : "font-normal text-white/80"
            }`}
            data-node-id="1:1781"
          >
            Courses
          </Link>
          <Link
            href="/creators/purepearl-studio"
            className={`transition-colors hover:text-brand-lime ${
              isCreatorsActive
                ? "font-semibold text-brand-lime underline decoration-brand-lime decoration-2 underline-offset-8"
                : "font-normal text-white/80"
            }`}
            data-node-id="1:1782"
          >
            Creators
          </Link>
        </nav>

        {/* Step 3: Right Actions */}
        <div
          ref={actionsRef}
          className="flex items-center gap-6 text-[16px] text-white"
          data-node-id="1:1783"
        >
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-medium text-white/90">
                Hi, <span className="font-semibold text-brand-lime">{displayName}</span>
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full bg-white/10 px-4 py-1.5 text-[14px] font-medium text-white transition-colors hover:bg-white/20"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="font-normal text-white transition-opacity hover:opacity-80"
                data-node-id="1:1784"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="font-normal text-white transition-opacity hover:opacity-80"
                data-node-id="1:1785"
              >
                Join Us
              </Link>
            </>
          )}

          <button
            type="button"
            aria-label="Shopping bag"
            className="relative size-6 shrink-0 transition-opacity hover:opacity-80"
            data-node-id="1:1786"
          >
            <Image
              src="/images/shopping-bag.svg"
              alt="Cart"
              width={24}
              height={24}
              className="size-6"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
