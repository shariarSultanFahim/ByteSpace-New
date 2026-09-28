"use client";

import { useState } from "react";
import Image from "next/image";

import type { CourseDetail } from "@/types";

interface CourseTabsContentProps {
  course: CourseDetail;
}

export function CourseTabsContent({ course }: CourseTabsContentProps) {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">("about");
  const [selectedReviewFilter, setSelectedReviewFilter] = useState<string>("All rating");

  const ratingCounts = {
    5: 720,
    4: 120,
    3: 21,
    2: 12,
    1: 16
  };
  const totalReviewCount = 889;

  return (
    <div className="flex w-full flex-col gap-8">
      {/* Tabs Row: About, Lesson, Reviews */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setActiveTab("about")}
          className={`rounded-full px-6 py-3 font-sans text-[16px] font-medium transition-all ${
            activeTab === "about"
              ? "bg-brand-lime text-text-ink shadow-sm"
              : "bg-surface-subtle text-text-subtle hover:bg-border-light"
          }`}
        >
          About
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("lessons")}
          className={`rounded-full px-6 py-3 font-sans text-[16px] font-medium transition-all ${
            activeTab === "lessons"
              ? "bg-brand-lime text-text-ink shadow-sm"
              : "bg-surface-subtle text-text-subtle hover:bg-border-light"
          }`}
        >
          Lesson
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("reviews")}
          className={`rounded-full px-6 py-3 font-sans text-[16px] font-medium transition-all ${
            activeTab === "reviews"
              ? "bg-brand-lime text-text-ink shadow-sm"
              : "bg-surface-subtle text-text-subtle hover:bg-border-light"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: About */}
      {/* ========================================================================= */}
      {activeTab === "about" && (
        <div className="flex flex-col gap-8">
          {/* Description Section */}
          <div className="flex flex-col gap-4">
            <h2 className="font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-text-ink">
              Description
            </h2>
            <div className="space-y-4 font-sans text-[16px] leading-[1.6] text-text-subtle">
              {course.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Sneak Peak Section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-text-ink">
              Sneak Peak
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {course.sneakPeakImages.map((src, index) => (
                <div
                  key={src}
                  className="relative h-[125px] w-full overflow-hidden rounded-[16px] bg-[#d9d9d9] shadow-sm transition-transform hover:scale-105"
                >
                  <Image
                    src={src}
                    alt={`Course Sneak Peak ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Points Section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-text-ink">
              Key Points
            </h3>
            <div className="flex flex-col gap-3">
              {course.keyPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  {/* Blue Check Circle Icon */}
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-sans text-[16px] text-text-subtle">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: Lesson (Exact match with Lesson screenshot) */}
      {/* ========================================================================= */}
      {activeTab === "lessons" && (
        <div className="flex flex-col gap-8">
          {/* Explore the Modules */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Poppins'] text-[22px] font-semibold tracking-[-0.2px] text-text-ink">
              Explore the Modules
            </h2>
            <p className="font-sans text-[15px] leading-[1.6] text-text-subtle">
              Immerse yourself in the course content as we break down each module into comprehensive
              lessons, providing practical insights and hands-on experiences.
            </p>
          </div>

          {/* Lesson List */}
          <div className="flex flex-col gap-6">
            <h3 className="font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-text-ink">
              Lesson List
            </h3>

            <div className="flex flex-col gap-5">
              {course.curriculum.map((module) => (
                <div key={module.id} className="flex items-start gap-4">
                  {/* Rounded Lime Video Icon */}
                  <div className="flex size-[54px] shrink-0 items-center justify-center rounded-[18px] bg-brand-lime">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#242528"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="5" width="13" height="14" rx="2" ry="2" />
                      <polygon points="21 7 15 11 15 13 21 17 21 7" fill="#242528" />
                    </svg>
                  </div>

                  {/* Text Information */}
                  <div className="flex flex-col gap-1">
                    <h4 className="font-['Poppins'] text-[16px] font-semibold text-text-ink">
                      {module.title}
                    </h4>
                    <p className="font-sans text-[14px] leading-[1.5] text-text-subtle">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lesson Content */}
          <div className="flex flex-col gap-3">
            <h3 className="font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-text-ink">
              Lesson Content
            </h3>
            <p className="font-sans text-[15px] leading-[1.6] text-text-subtle">
              Engage with each lesson through captivating video content, detailed textual
              explanations, and interactive elements. Download resources, complete assignments, and
              test your understanding with quizzes.
            </p>
          </div>

          {/* Lesson Progress Tracking */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-text-ink">
                Lesson Progress Tracking
              </h3>
              <p className="mt-2 font-sans text-[15px] leading-[1.6] text-text-subtle">
                Witness your growth as you complete lessons, with an intuitive progress tracking
                feature guiding you through your learning journey.
              </p>
            </div>

            {/* Progress Card */}
            <div className="rounded-[20px] border border-border-soft bg-white p-6 shadow-sm">
              <span className="font-sans text-[13px] font-medium text-text-subtle">
                Learning Progress
              </span>
              <div className="mt-1 font-['Poppins'] text-[32px] font-bold text-text-ink">55%</div>
              {/* Progress bar with lime fill */}
              <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-border-light">
                <div className="h-full w-[55%] rounded-full bg-brand-lime" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: Reviews (Exact match with Reviews screenshot) */}
      {/* ========================================================================= */}
      {activeTab === "reviews" && (
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Poppins'] text-[22px] font-semibold tracking-[-0.2px] text-text-ink">
              What Learners Are Saying
            </h2>
            <p className="font-sans text-[15px] leading-[1.6] text-text-subtle">
              Discover what our learners have to say about their experience with &lsquo;Build
              Digital Assets: A Comprehensive Guide.&rsquo; Read reviews and ratings from
              individuals who have embarked on the transformative journey of mastering digital asset
              creation.
            </p>
          </div>

          {/* Overall Rating & Breakdown Card */}
          <div className="flex flex-col gap-6 rounded-[24px] border border-border-soft bg-white p-6 sm:flex-row sm:items-center sm:gap-10 sm:p-8">
            {/* Big Lime Rating Badge */}
            <div className="flex size-[120px] shrink-0 flex-col items-center justify-center rounded-[20px] bg-brand-lime text-center shadow-sm">
              <span className="font-sans text-[13px] font-medium text-text-ink">Ratings</span>
              <span className="font-['Poppins'] text-[38px] leading-none font-bold text-text-ink">
                4.7
              </span>
            </div>

            {/* Rating Bars (5 to 1 stars) */}
            <div className="flex flex-1 flex-col gap-2.5">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = ratingCounts[stars as keyof typeof ratingCounts];
                const pct = Math.round((count / totalReviewCount) * 100);
                return (
                  <div key={stars} className="flex items-center gap-4 text-[13px] text-text-subtle">
                    {/* Bar */}
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-border-light">
                      <div
                        className="h-full rounded-full bg-brand-lime"
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 text-text-ink">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span key={idx} className="text-[14px]">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Count */}
                    <span className="w-8 text-right font-medium text-text-subtle">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Individual Reviews Filter Pills */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Poppins'] text-[18px] font-semibold text-text-ink">
              Individual Reviews:
            </h3>

            <div className="flex flex-wrap items-center gap-3">
              {["All rating", "5", "4", "3", "2", "1"].map((label) => {
                const isSelected = selectedReviewFilter === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setSelectedReviewFilter(label)}
                    className={`flex items-center gap-1.5 rounded-full px-5 py-2 font-sans text-[14px] font-medium transition-all ${
                      isSelected
                        ? "bg-brand-lime text-text-ink shadow-sm"
                        : "bg-surface-subtle text-text-subtle hover:bg-border-light"
                    }`}
                  >
                    {label !== "All rating" && <span>★</span>}
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reviews List */}
          <div className="flex flex-col gap-5">
            {course.reviews?.map((review) => (
              <div
                key={review.id}
                className="flex flex-col gap-3 rounded-[24px] border border-border-soft bg-white p-6 shadow-sm"
              >
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative size-[44px] shrink-0 overflow-hidden rounded-full bg-surface-subtle">
                      <Image
                        src={review.avatar || "/images/author-purepearl.png"}
                        alt={review.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-['Poppins'] text-[16px] font-semibold text-text-ink">
                        {review.author}
                      </h4>
                      {review.role && (
                        <p className="font-sans text-[13px] text-text-subtle">{review.role}</p>
                      )}
                    </div>
                  </div>

                  <span className="font-sans text-[13px] text-text-muted">{review.date}</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-text-ink">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-[16px]">
                      ★
                    </span>
                  ))}
                </div>

                {/* Comment */}
                <p className="font-sans text-[15px] leading-[1.6] text-text-subtle">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
