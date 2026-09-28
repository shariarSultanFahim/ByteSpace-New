"use client";

import { useState } from "react";
import Image from "next/image";

import {
  CATEGORIES_NAV_ROW1,
  CATEGORIES_NAV_ROW2,
  CATEGORIES_NAV_ROW3,
  COURSES_DATA
} from "@/data";

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
            <div
              key={course.id}
              className="flex flex-col overflow-hidden rounded-[24px] border border-[#ced0d3] bg-white p-4 transition-all hover:shadow-xl"
            >
              {/* Card Image Banner with Pill Badges */}
              <div className="relative h-[195px] w-full overflow-hidden rounded-[12px] bg-[#222]">
                <Image src={course.image} alt={course.title} fill className="object-cover" />
                <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#f6f6f6]/80 px-3 py-1 font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-sm">
                    {course.lessons}
                  </span>
                  <span className="rounded-full bg-[#f6f6f6]/80 px-3 py-1 font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-sm">
                    {course.duration}
                  </span>
                  <span className="rounded-full bg-[#f6f6f6]/80 px-3 py-1 font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-sm">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Course Meta Info */}
              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-black">
                      {course.title}
                    </h3>
                    <p className="mt-1 font-sans text-[12px] text-[#4f4f4f]">
                      by <span className="text-[#003be2]">{course.author}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 font-sans text-[16px] text-[#4f4f4f]">
                    <span className="text-[17px] font-medium">{course.rating}</span>
                    <Image
                      src="/images/star-rate.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="size-4.5"
                    />
                  </div>
                </div>

                {/* Level + Avatars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 rounded-full bg-[#f5f5f6] px-3 py-1 text-[12px] font-medium text-[#4b4c53]">
                    <Image
                      src="/images/signal-cellular.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="size-4"
                    />
                    <span>{course.level}</span>
                  </div>

                  <div className="flex items-center">
                    <Image
                      src="/images/course-avatar-1.png"
                      alt=""
                      width={30}
                      height={30}
                      className="size-[30px] rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/images/course-avatar-2.png"
                      alt=""
                      width={30}
                      height={30}
                      className="-ml-2.5 size-[30px] rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/images/course-avatar-3.png"
                      alt=""
                      width={30}
                      height={30}
                      className="-ml-2.5 size-[30px] rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/images/course-avatar-4.png"
                      alt=""
                      width={30}
                      height={30}
                      className="-ml-2.5 size-[30px] rounded-full border-2 border-white object-cover"
                    />
                    <div className="-ml-2.5 flex size-[30px] items-center justify-center rounded-full border-2 border-white bg-[#d4fb20] font-sans text-[11px] font-medium text-[#242528]">
                      {course.studentsCount}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-['Poppins'] text-[22px] font-semibold text-[#003be2]">
                    {course.price}
                  </span>
                  <span className="font-sans text-[12px] text-[#4f4f4f]">{course.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
