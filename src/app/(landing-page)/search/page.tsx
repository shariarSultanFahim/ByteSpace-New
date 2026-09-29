"use client";

import { Suspense, useRef } from "react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { CourseGrid } from "./components/course-grid";
import { Pagination } from "./components/pagination";
import { SearchFilters } from "./components/search-filters";
import { SearchHeader } from "./components/search-header";
import { useCourseSearch } from "./components/use-course-search";

gsap.registerPlugin(useGSAP);

function SearchContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerBannerRef = useRef<HTMLDivElement>(null);
  const mainSectionRef = useRef<HTMLElement>(null);

  const {
    searchInput,
    setSearchInput,
    selectedCategory,
    selectedLevel,
    sortBy,
    currentPage,
    totalPages,
    currentCourses,
    handleSearchSubmit,
    handleCategorySelect,
    handleLevelSelect,
    handleSortChange,
    handlePageChange,
    clearAllFilters
  } = useCourseSearch(6);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headerBannerRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.7,
        clearProps: "all"
      }).from(
        mainSectionRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          clearProps: "all"
        },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      {/* Top Blue Hero/Header Section */}
      <div ref={headerBannerRef} className="relative w-full overflow-hidden bg-brand-primary">
        {/* Background Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 z-0 flex justify-center opacity-40">
          <Image
            src="/images/auth-grid.svg"
            alt=""
            width={1440}
            height={360}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Search Header Banner */}
        <SearchHeader
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSubmit={handleSearchSubmit}
        />
      </div>

      {/* Main Course Listing & Filters Section */}
      <section ref={mainSectionRef} className="mx-auto max-w-[1440px] px-6 py-10 lg:px-[120px]">
        {/* Filter Controls Bar & Category Pills */}
        <SearchFilters
          selectedLevel={selectedLevel}
          onSelectLevel={handleLevelSelect}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          onClearFilters={clearAllFilters}
        />

        {/* Course Cards Grid */}
        <CourseGrid courses={currentCourses} onClearFilters={clearAllFilters} />

        {/* Dynamic Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="size-10 animate-spin rounded-full border-4 border-brand-primary border-t-transparent" />
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
