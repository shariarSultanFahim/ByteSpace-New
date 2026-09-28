import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getCourseDetail } from "@/data";

import { Footer, Header } from "@/components/layouts";

import { CourseHero, CourseVideoPreview } from "./components/course-hero";
import { CourseSidebarCard } from "./components/course-sidebar-card";
import { CourseTabsContent } from "./components/course-tabs-content";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseDetail(id);

  if (!course) {
    return {
      title: "Course Not Found | ByteSpace",
      description: "The requested course could not be found."
    };
  }

  return {
    title: `${course.title} | ByteSpace`,
    description: course.subtitle
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = getCourseDetail(id);

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <div className="bg-[#003be2]">
          <Header />
        </div>
        <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
          <div className="flex size-20 items-center justify-center rounded-full bg-[#f5f5f6]">
            <Image
              src="/images/search-icon.svg"
              alt=""
              width={40}
              height={40}
              className="opacity-40"
            />
          </div>
          <h1 className="mt-6 font-['Poppins'] text-[32px] font-semibold text-[#242528]">
            Course Not Found
          </h1>
          <p className="mt-2 max-w-[460px] font-sans text-[16px] text-[#4b4c53]">
            We could not find the course you were looking for. It may have been relocated or
            removed.
          </p>
          <Link
            href="/search"
            className="mt-8 rounded-full bg-[#d4fb20] px-8 py-3.5 font-sans text-[16px] font-semibold text-[#242528] shadow-md transition-transform hover:scale-105"
          >
            Browse All Courses
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 
        Hero Banner:
        Blue background ends right behind the video.
      */}
      <div className="relative w-full bg-[#003be2]">
        {/* Background Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/auth-grid.svg"
            alt=""
            width={1440}
            height={957}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Global Navigation Header */}
        <Header />

        {/* Hero Section Container */}
        <div className="relative z-20 mx-auto max-w-[1440px] px-6 pt-4 pb-12 lg:px-[120px]">
          {/* Top Title & Metadata Row with Share Button */}
          <CourseHero course={course} />

          {/* Row for Video and Sidebar Card starting horizontally aligned */}
          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Left: Video Preview */}
            <div className="w-full max-w-[720px]">
              <CourseVideoPreview course={course} />
            </div>

            {/* 
              Right: Sidebar Card, starts here and bridges down across into the white area below.
              In desktop layout, it uses -mb-[520px] so it hangs down into the white section without stretching the blue background!
            */}
            <div className="w-full lg:w-auto lg:shrink-0">
              <div className="relative z-30 lg:-mb-[560px]">
                <CourseSidebarCard course={course} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area: Left Column sits below the video on the white background */}
      <main className="relative z-10 mx-auto max-w-[1440px] px-6 pt-12 pb-24 lg:px-[120px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left Column: Tabs (About, Lesson, Reviews), Description, Sneak Peak, Key Points */}
          <div className="w-full lg:max-w-[720px]">
            <CourseTabsContent course={course} />
          </div>

          {/* Right Column: Spacer on desktop reserving space for the overlapping sidebar card */}
          <div
            className="pointer-events-none hidden w-[420px] shrink-0 lg:block"
            aria-hidden="true"
          />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
