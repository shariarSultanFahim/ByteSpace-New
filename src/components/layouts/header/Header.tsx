import Image from "next/image";
import Link from "next/link";

export function Header() {
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
            href="#courses"
            className="font-normal text-[#f5f5f6] transition-opacity hover:opacity-80"
            data-node-id="1:1781"
          >
            Courses
          </Link>
          <Link
            href="#creators"
            className="font-normal text-[#f5f5f6] transition-opacity hover:opacity-80"
            data-node-id="1:1782"
          >
            Creators
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6 text-[16px] text-[#f5f5f6]" data-node-id="1:1783">
          <Link
            href="#signin"
            className="font-normal text-[#f5f5f6] transition-opacity hover:opacity-80"
            data-node-id="1:1784"
          >
            Sign In
          </Link>
          <Link
            href="#join"
            className="font-normal text-[#f5f5f6] transition-opacity hover:opacity-80"
            data-node-id="1:1785"
          >
            Join Us
          </Link>
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
