"use client";

import Image from "next/image";

interface SearchHeaderProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function SearchHeader({ searchInput, setSearchInput, onSubmit }: SearchHeaderProps) {
  return (
    <div className="relative z-20 mx-auto max-w-[1440px] px-6 pt-8 pb-16 text-center lg:px-[120px]">
      <h1 className="font-['Poppins'] text-[32px] font-semibold text-white sm:text-[38px] lg:text-[44px]">
        Find Your Next Course
      </h1>

      {/* Search Input Bar with 'Courses' button */}
      <form
        onSubmit={onSubmit}
        className="mx-auto mt-6 flex max-w-[624px] flex-col items-center gap-3 sm:flex-row"
      >
        {/* White Search Input Container */}
        <div className="flex h-[52px] w-full flex-1 items-center gap-3 rounded-[24px] bg-white px-6 shadow-lg sm:rounded-full">
          <Image
            src="/images/search-icon.svg"
            alt="Search"
            width={20}
            height={20}
            className="size-5 shrink-0 opacity-70"
          />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent font-sans text-[16px] text-text-ink placeholder:text-text-muted focus:outline-none"
          />
        </div>

        {/* Courses Submit Button */}
        <div className="relative">
          <button
            type="submit"
            className="flex h-[48px] items-center gap-2 rounded-full bg-brand-lime px-6 font-sans text-[16px] font-medium text-text-ink shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <span>Courses</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
