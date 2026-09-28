import Image from "next/image";
import Link from "next/link";

import type { CourseCard as CourseCardType } from "@/types";

interface CourseCardProps {
  course: CourseCardType;
  className?: string;
}

export function CourseCard({ course, className = "" }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className={`group flex flex-col overflow-hidden rounded-[24px] border border-border-soft bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {/* Card Image Banner with Pill Badges */}
      <div className="relative h-[195px] w-full overflow-hidden rounded-[12px] bg-[#222]">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
        <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-surface-subtle/80 px-3 py-1 font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-sm">
            {course.lessons}
          </span>
          <span className="rounded-full bg-surface-subtle/80 px-3 py-1 font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-sm">
            {course.duration}
          </span>
          <span className="rounded-full bg-surface-subtle/80 px-3 py-1 font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-sm">
            {course.comments}
          </span>
        </div>
      </div>

      {/* Course Meta Info */}
      <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="line-clamp-1 font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-black">
              {course.title}
            </h3>
            <p className="mt-1 font-sans text-[12px] text-[#4f4f4f]">
              by <span className="text-brand-primary">{course.author}</span>
            </p>
          </div>
          <div className="flex items-center gap-1 font-sans text-[16px] text-[#4f4f4f]">
            <span className="text-[17px] font-medium">{course.rating}</span>
            <Image src="/images/star-rate.svg" alt="" width={18} height={18} className="size-4.5" />
          </div>
        </div>

        {/* Level + Avatars */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 rounded-full bg-surface-subtle px-3 py-1 text-[12px] font-medium text-text-subtle">
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
            <div className="-ml-2.5 flex size-[30px] items-center justify-center rounded-full border-2 border-white bg-brand-lime font-sans text-[11px] font-medium text-text-ink">
              {course.studentsCount}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mt-1 flex items-baseline gap-1">
          <span className="font-['Poppins'] text-[22px] font-semibold text-brand-primary">
            {course.price}
          </span>
          <span className="font-sans text-[12px] text-[#4f4f4f]">{course.period}</span>
        </div>
      </div>
    </Link>
  );
}
