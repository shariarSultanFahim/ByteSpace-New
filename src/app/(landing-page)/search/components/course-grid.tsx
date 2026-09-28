"use client";

import { CourseCard } from "@/components/widgets/featured-courses/CourseCard";
import type { CourseCard as CourseCardType } from "@/types";

interface CourseGridProps {
  courses: CourseCardType[];
  onClearFilters: () => void;
}

export function CourseGrid({ courses, onClearFilters }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="mt-16 flex flex-col items-center justify-center rounded-[32px] border border-dashed border-border-soft py-20 text-center">
        <h3 className="font-['Poppins'] text-[24px] font-semibold text-[#040819]">
          No courses found
        </h3>
        <p className="mt-2 max-w-[420px] font-sans text-[15px] text-text-muted">
          We couldn&apos;t find any courses matching your search criteria. Try adjusting your
          keywords or clearing filters.
        </p>
        <button
          type="button"
          onClick={onClearFilters}
          className="mt-6 rounded-full bg-brand-lime px-6 py-2.5 font-sans text-[15px] font-semibold text-text-ink shadow-sm transition-transform hover:scale-105 active:scale-95"
        >
          Clear All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
