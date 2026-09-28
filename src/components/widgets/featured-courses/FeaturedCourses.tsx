"use client";

import { useState } from "react";

import {
  CATEGORIES_NAV_ROW1,
  CATEGORIES_NAV_ROW2,
  CATEGORIES_NAV_ROW3,
  COURSES_DATA
} from "@/data";

import { CourseCard } from "./CourseCard";

export function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section id="courses" className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[120px]">
        {/* Section Heading (Frame 3) */}
        <div className="mx-auto max-w-[917px] text-center" data-node-id="12:101">
          <h2 className="font-['Poppins'] text-[32px] leading-[1.2] font-semibold tracking-[-0.44px] text-[#040819] sm:text-[40px] lg:text-[44px]">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="mt-4 font-sans text-[16px] leading-[1.6] text-[#82868e] sm:text-[18px]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        {/* Category Pills (3 Rows) */}
        <div className="mt-12 flex flex-col items-center gap-3">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {CATEGORIES_NAV_ROW1.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2.5 font-sans text-[15px] font-medium transition-all sm:text-[16px] ${
                    isActive
                      ? "bg-[#d4fb20] text-[#242528] shadow-sm"
                      : "bg-[#f5f5f6] text-[#4b4c53] hover:bg-[#eaebee]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {CATEGORIES_NAV_ROW2.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2.5 font-sans text-[15px] font-medium transition-all sm:text-[16px] ${
                    isActive
                      ? "bg-[#d4fb20] text-[#242528] shadow-sm"
                      : "bg-[#f5f5f6] text-[#4b4c53] hover:bg-[#eaebee]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {CATEGORIES_NAV_ROW3.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2.5 font-sans text-[15px] font-medium transition-all sm:text-[16px] ${
                    isActive
                      ? "bg-[#d4fb20] text-[#242528] shadow-sm"
                      : "bg-[#f5f5f6] text-[#4b4c53] hover:bg-[#eaebee]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <button
              type="button"
              className="px-3 py-2 font-sans text-[15px] font-medium text-[#242528] hover:text-[#003be2]"
            >
              + More
            </button>
          </div>
        </div>

        {/* 6 Course Cards Grid */}
        <div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
          data-node-id="33:683"
        >
          {COURSES_DATA.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
