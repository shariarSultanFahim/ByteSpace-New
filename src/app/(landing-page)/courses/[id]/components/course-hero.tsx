"use client";

import { useRef } from "react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { toast } from "sonner";

import type { CourseDetail } from "@/types";

gsap.registerPlugin(useGSAP);

interface CourseHeroProps {
  course: CourseDetail;
}

export function CourseHero({ course }: CourseHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        clearProps: "all"
      });
    },
    { scope: containerRef }
  );

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        if (navigator.share) {
          await navigator.share({
            title: course.title,
            text: course.subtitle,
            url: window.location.href
          });
        } else {
          await navigator.clipboard.writeText(window.location.href);
          toast.success("Link copied to clipboard!");
        }
      } catch {
        toast.info("Course link copied!");
      }
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Title & Metadata Top Row */}
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
        {/* Course Info */}
        <div className="max-w-[760px]">
          <h1 className="font-['Poppins'] text-[28px] leading-[1.2] font-semibold tracking-[-0.36px] text-surface-subtle sm:text-[34px] lg:text-[36px]">
            {course.title}
          </h1>
          <p className="mt-2 font-['Poppins'] text-[18px] leading-[1.3] font-semibold tracking-[-0.2px] text-surface-subtle sm:text-[20px]">
            {course.subtitle}
          </p>

          <p className="mt-4 font-sans text-[18px] text-[#f1f4fe]">
            by <span className="text-brand-lime">{course.author}</span>
          </p>

          {/* Badges: Level, Rating, Students */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {/* Level Pill */}
            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-2 backdrop-blur-[20px]">
              <Image
                src="/images/signal-cellular.svg"
                alt=""
                width={18}
                height={18}
                className="size-4.5"
              />
              <span className="font-sans text-[16px] font-medium text-text-ink">
                {course.level}
              </span>
            </div>

            {/* Rating Pill */}
            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-2 backdrop-blur-[20px]">
              <Image
                src="/images/star-rate.svg"
                alt=""
                width={18}
                height={18}
                className="size-4.5"
              />
              <span className="font-sans text-[16px] font-medium text-text-ink">
                {course.rating} ({course.reviewsCount} reviews)
              </span>
            </div>

            {/* Students Pill */}
            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-2 backdrop-blur-[20px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-ink"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="font-sans text-[16px] font-medium text-text-ink">
                {course.studentsCount}
              </span>
            </div>
          </div>
        </div>

        {/* Share Button (Desktop top-right) */}
        <button
          type="button"
          onClick={handleShare}
          className="flex h-[42px] shrink-0 items-center gap-2 self-start rounded-full bg-brand-lime px-6 font-sans text-[16px] font-medium text-text-ink shadow-md transition-transform hover:scale-105 active:scale-95"
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
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}

export function CourseVideoPreview({ course }: { course: CourseDetail }) {
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(videoRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
      });
    },
    { scope: videoRef }
  );

  const handlePlayPreview = () => {
    toast.info("Video preview player loaded!");
  };

  return (
    <div ref={videoRef} className="w-full">
      <div className="group relative aspect-[720/479] w-full overflow-hidden rounded-[24px] bg-[#443131] shadow-2xl">
        <Image
          src={course.videoPreviewImage}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />

        {/* Centered Play Button matching Figma */}
        <button
          type="button"
          onClick={handlePlayPreview}
          aria-label="Play course video preview"
          className="absolute top-1/2 left-1/2 flex size-[104px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[24px] border border-[#4f4f4f] bg-[#3d3d3d]/24 p-4 shadow-xl backdrop-blur-[20px] transition-transform hover:scale-110 active:scale-95"
        >
          <div className="flex size-[72px] items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="36" r="36" fill="white" fillOpacity="0.9" />
              <polygon points="30,24 50,36 30,48" fill="#003be2" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
