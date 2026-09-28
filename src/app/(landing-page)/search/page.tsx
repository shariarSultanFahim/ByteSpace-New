"use client";

import { Suspense } from "react";
import Image from "next/image";

import { CourseGrid } from "./components/course-grid";
import { Pagination } from "./components/pagination";
import { SearchFilters } from "./components/search-filters";
import { SearchHeader } from "./components/search-header";
import { useCourseSearch } from "./components/use-course-search";

function SearchContent() {
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

  return (
    <>
      {/* Top Blue Hero/Header Section */}
      <div className="relative w-full overflow-hidden bg-brand-primary">
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
      <section className="mx-auto max-w-[1440px] px-6 py-10 lg:px-[120px]">
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
    </>
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
