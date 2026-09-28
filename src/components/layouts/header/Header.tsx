"use client";

import Image from "next/image";
import Link from "next/link";

import { toast } from "sonner";

import { useAuth } from "@/hooks";

export function Header() {
  const { user, signOut, isLoading } = useAuth();

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
    <header className="relative z-30 w-full" data-node-id="1:1778">
      <div className="mx-auto flex h-[120px] max-w-[1440px] items-center justify-between px-6 lg:px-[120px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[10px]" data-node-id="1:1787">
          <Image
            src="/images/logo.svg"
            alt="ByteSpace Logo"
            width={29}
            height={32}
            className="h-[31.5px] w-[28.875px]"
            priority
          />
          <span className="font-['Poppins'] text-[24px] font-bold tracking-tight text-[#f5f5f6]">
            ByteSpace
          </span>
        </Link>

        {/* Center Nav */}
        <nav
          className="hidden items-center gap-6 text-[16px] text-[#f5f5f6] md:flex"
          data-node-id="1:1779"
        >
          <Link
            href="/"
            className="font-medium text-[#f5f5f6] transition-opacity hover:opacity-80"
            data-node-id="1:1780"
          >
            Home
          </Link>
          <Link
            href="/search"
            className="font-normal text-[#f5f5f6] transition-opacity hover:opacity-80"
            data-node-id="1:1781"
          >
            Courses
          </Link>
          <Link
            href="/#creators"
            className="font-normal text-[#f5f5f6] transition-opacity hover:opacity-80"
            data-node-id="1:1782"
          >
            Creators
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6 text-[16px] text-[#f5f5f6]" data-node-id="1:1783">
          {!isLoading && user ? (
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-medium text-white/90">
                Hi, <span className="font-semibold text-[#d4fb20]">{displayName}</span>
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full bg-white/10 px-4 py-1.5 text-[14px] font-medium text-[#f5f5f6] transition-colors hover:bg-white/20"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="font-normal text-[#f5f5f6] transition-opacity hover:opacity-80"
                data-node-id="1:1784"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="font-normal text-[#f5f5f6] transition-opacity hover:opacity-80"
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
