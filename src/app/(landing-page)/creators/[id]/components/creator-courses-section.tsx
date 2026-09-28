"use client";

import { useMemo, useState } from "react";

import { CourseCard } from "@/components/widgets/featured-courses/CourseCard";
import type { CourseCard as CourseCardType } from "@/types";

interface CreatorCoursesSectionProps {
  courses: CourseCardType[];
}

export function CreatorCoursesSection({ courses }: CreatorCoursesSectionProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Most relevant");

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const c of courses) {
      if (c.category) set.add(c.category);
    }
    return ["All", ...Array.from(set)];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    if (selectedLevel !== "All") {
      result = result.filter((c) => c.level.toLowerCase() === selectedLevel.toLowerCase());
    }

    if (selectedCategory !== "All") {
      result = result.filter((c) => c.category?.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (sortBy === "Price: Low to High") {
      result.sort(
        (a, b) =>
          Number.parseFloat(a.price.replace(/[^0-9.]/g, "")) -
          Number.parseFloat(b.price.replace(/[^0-9.]/g, ""))
      );
    } else if (sortBy === "Price: High to Low") {
      result.sort(
        (a, b) =>
          Number.parseFloat(b.price.replace(/[^0-9.]/g, "")) -
          Number.parseFloat(a.price.replace(/[^0-9.]/g, ""))
      );
    } else if (sortBy === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [courses, selectedLevel, selectedCategory, sortBy]);

  const handleClearFilters = () => {
    setSelectedLevel("All");
    setSelectedCategory("All");
    setSortBy("Most relevant");
  };

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-[120px]">
      {/* Top Filter Controls matching Figma node 60:1930 */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Filter Buttons: Filter, Level, Category */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Clear / Filter Reset */}
          <button
            type="button"
            onClick={handleClearFilters}
            className="flex h-[44px] items-center gap-2 rounded-full border border-[#ced0d3] bg-white px-5 font-sans text-[16px] font-medium text-[#4b4c53] transition-colors hover:bg-[#f5f5f6]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <span>Filter</span>
          </button>

          {/* Level Dropdown */}
          <div className="relative">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="flex h-[44px] cursor-pointer appearance-none items-center rounded-full border border-[#ced0d3] bg-white pr-6 pl-10 font-sans text-[16px] font-medium text-[#4b4c53] transition-colors hover:bg-[#f5f5f6] focus:outline-none"
            >
              <option value="All">Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#4b4c53]"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex h-[44px] cursor-pointer appearance-none items-center rounded-full border border-[#ced0d3] bg-white pr-6 pl-10 font-sans text-[16px] font-medium text-[#4b4c53] transition-colors hover:bg-[#f5f5f6] focus:outline-none"
            >
              <option value="All">Category</option>
              {categories
                .filter((cat) => cat !== "All")
                .map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
            </select>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#4b4c53]"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
        </div>

        {/* Right Sort Dropdown: Most relevant */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="flex h-[44px] cursor-pointer appearance-none items-center rounded-full border border-[#ced0d3] bg-white pr-8 pl-10 font-sans text-[16px] font-medium text-[#4b4c53] transition-colors hover:bg-[#f5f5f6] focus:outline-none"
          >
            <option value="Most relevant">Most relevant</option>
            <option value="Rating">Rating</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#4b4c53]"
          >
            <line x1="21" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="3" y2="18" />
          </svg>
        </div>
      </div>

      {/* Courses Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
      {filteredCourses.length === 0 ? (
        <div className="mt-16 flex flex-col items-center justify-center rounded-[32px] border border-dashed border-[#ced0d3] py-20 text-center">
          <h3 className="font-['Poppins'] text-[24px] font-semibold text-[#040819]">
            No courses found
          </h3>
          <p className="mt-2 max-w-[420px] font-sans text-[15px] text-[#82868e]">
            No courses from this creator matched the selected filters.
          </p>
          <button
            type="button"
            onClick={handleClearFilters}
            className="mt-6 rounded-full bg-[#d4fb20] px-6 py-2.5 font-sans text-[15px] font-semibold text-[#242528] shadow-sm transition-transform hover:scale-105 active:scale-95"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}
