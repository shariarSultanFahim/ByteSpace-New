"use client";

import Image from "next/image";

import { toast } from "sonner";

import type { CourseDetail } from "@/types";

interface CourseSidebarCardProps {
  course: CourseDetail;
}

const TOP_PREVIEW_LESSONS = [
  { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
  { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
  { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" }
];

export function CourseSidebarCard({ course }: CourseSidebarCardProps) {
  const handleEnroll = () => {
    toast.success(`Enrolled in ${course.title}! Welcome to the course.`);
  };

  const handleProfileClick = () => {
    toast.info(`Creator profile: ${course.author}`);
  };

  return (
    <aside className="w-full max-w-[420px] rounded-[24px] border border-[#ced0d3] bg-white p-8 shadow-xl lg:p-[40px]">
      <div className="flex flex-col gap-6">
        {/* Lessons header & preview */}
        <div className="flex flex-col gap-6">
          <h3 className="font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-[#242528]">
            {course.totalLessonsText} ({course.totalHoursText})
          </h3>

          {/* Top lessons list preview */}
          <div className="flex flex-col gap-3 font-sans text-[16px]">
            {TOP_PREVIEW_LESSONS.map((lesson) => (
              <div key={lesson.number} className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-2 text-[#242528]">
                  <span className="w-6 shrink-0 font-medium text-[#242528]">{lesson.number}</span>
                  <span className="font-medium text-[#242528]">{lesson.title}</span>
                </div>
                <span className="shrink-0 font-normal text-[#003be2]">{lesson.duration}</span>
              </div>
            ))}
            <p className="font-sans text-[16px] text-[#4b4c53]">99 more videos</p>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex flex-col gap-6">
          <p className="font-sans text-[16px] leading-[1.6] text-[#4b4c53]">{course.authorBio}</p>

          <div className="flex items-baseline gap-1">
            <span className="font-['Poppins'] text-[36px] font-semibold tracking-[-0.36px] text-[#003be2]">
              {course.price}
            </span>
            <span className="font-sans text-[16px] text-[#4b4c53]">{course.period}</span>
          </div>

          <button
            type="button"
            onClick={handleEnroll}
            className="flex h-[52px] w-full items-center justify-center rounded-[24px] bg-[#d4fb20] px-6 font-sans text-[18px] font-medium text-[#242528] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Enroll Now
          </button>
        </div>

        {/* What this course includes */}
        <div className="flex flex-col gap-4">
          <h4 className="font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-[#242528]">
            This course include
          </h4>

          <div className="flex flex-col gap-3">
            {course.includes.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-[#242528]"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <span className="font-sans text-[16px] leading-[1.6] text-[#4b4c53]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#ced0d3]" />

        {/* Author Bio Card */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="relative size-[52px] shrink-0 overflow-hidden rounded-full bg-[#f5f5f6]">
              <Image
                src={course.authorAvatar || "/images/author-purepearl.png"}
                alt={course.author}
                width={52}
                height={52}
                className="size-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-['Poppins'] text-[18px] font-semibold text-[#242528]">
                {course.author}
              </h4>
              <p className="font-sans text-[14px] text-[#4b4c53]">{course.authorRole}</p>
            </div>
          </div>

          <p className="font-sans text-[16px] leading-[1.6] text-[#4b4c53]">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>

          <button
            type="button"
            onClick={handleProfileClick}
            className="flex h-[42px] items-center justify-center rounded-[24px] border border-[#ced0d3] px-4 font-sans text-[16px] font-medium text-[#4b4c53] transition-colors hover:bg-[#f5f5f6]"
          >
            See Full Profile
          </button>
        </div>
      </div>
    </aside>
  );
}
