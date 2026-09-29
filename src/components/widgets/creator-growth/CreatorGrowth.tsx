"use client";

import { useRef } from "react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CreatorGrowth() {
  const sectionRef = useRef<HTMLElement>(null);
  const block1TextRef = useRef<HTMLDivElement>(null);
  const block1CollageRef = useRef<HTMLDivElement>(null);
  const block2CollageRef = useRef<HTMLDivElement>(null);
  const block2TextRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Block 1 Left Text Reveal
      gsap.from(block1TextRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: block1TextRef.current,
          start: "top 85%",
          once: true
        }
      });

      // Block 1 Right Collage Reveal
      gsap.from(block1CollageRef.current, {
        y: 45,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: block1CollageRef.current,
          start: "top 85%",
          once: true
        }
      });

      // Block 2 Left Collage Reveal
      gsap.from(block2CollageRef.current, {
        y: 45,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: block2CollageRef.current,
          start: "top 85%",
          once: true
        }
      });

      // Block 2 Right Text Reveal
      gsap.from(block2TextRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: block2TextRef.current,
          start: "top 85%",
          once: true
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#fafafa] py-24 lg:py-32"
      data-node-id="34:1159"
    >
      {/* Background Soft Blobs */}
      <div className="pointer-events-none absolute top-[10%] -left-[200px] z-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-brand-primary/10 via-brand-lime/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-[200px] bottom-[10%] z-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-brand-lime/20 via-brand-primary/10 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-28 px-6 lg:gap-36 lg:px-[120px]">
        {/* Block 1: Professional Growth (Left Text, Right Visual Collage) */}
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          {/* Text Left */}
          <div ref={block1TextRef} className="flex max-w-[574px] flex-col gap-8 text-left">
            <h2 className="font-['Poppins'] text-[32px] leading-[1.2] font-semibold tracking-[-0.44px] text-text-ink sm:text-[40px] lg:text-[44px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="font-sans text-[16px] leading-[1.6] text-text-subtle sm:text-[18px]">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            {/* Stats */}
            <div className="flex items-center gap-10 sm:gap-14">
              <div>
                <p className="font-['Poppins'] text-[32px] font-medium tracking-tight text-brand-primary sm:text-[36px]">
                  12K
                </p>
                <p className="font-sans text-[16px] text-text-subtle sm:text-[18px]">Students</p>
              </div>
              <div>
                <p className="font-['Poppins'] text-[32px] font-medium tracking-tight text-brand-primary sm:text-[36px]">
                  70+
                </p>
                <p className="font-sans text-[16px] text-text-subtle sm:text-[18px]">Courses</p>
              </div>
              <div>
                <p className="font-['Poppins'] text-[32px] font-medium tracking-tight text-brand-primary sm:text-[36px]">
                  16
                </p>
                <p className="font-sans text-[16px] text-text-subtle sm:text-[18px]">Creators</p>
              </div>
            </div>
          </div>

          {/* Collage Right */}
          <div
            ref={block1CollageRef}
            className="relative h-[480px] w-full max-w-[580px] sm:h-[552px]"
          >
            {/* Behind: Course Card sample */}
            <div className="absolute top-0 left-0 z-10 w-[280px] rounded-[24px] border border-border-soft bg-white p-3 shadow-md sm:w-[320px]">
              <div className="relative h-[130px] w-full overflow-hidden rounded-[12px] bg-[#333] sm:h-[150px]">
                <Image src="/images/course-card-1.png" alt="" fill className="object-cover" />
              </div>
              <div className="mt-3">
                <p className="font-['Poppins'] text-[15px] font-semibold text-black">
                  Learn Figma from Basic
                </p>
                <p className="text-[11px] text-[#4f4f4f]">
                  by <span className="text-brand-primary">purepearl studio</span>
                </p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-['Poppins'] text-[16px] font-semibold text-brand-primary">
                    $25
                  </span>
                  <span className="text-[10px] text-[#4f4f4f]">/lifetime</span>
                </div>
              </div>
            </div>

            {/* Front: Student with Laptop */}
            <div className="absolute top-6 right-0 z-20 h-[380px] w-[300px] sm:h-[460px] sm:w-[400px]">
              <Image
                src="/images/hero-student.png"
                alt="Student smiling"
                fill
                className="object-contain drop-shadow-2xl filter"
              />
            </div>

            {/* Floating 3D Wiggle Ornament */}
            <div className="pointer-events-none absolute top-8 -right-6 z-30 hidden -rotate-60 sm:block">
              <Image
                src="/images/hero-ornament-2.png"
                alt=""
                width={160}
                height={160}
                className="size-44 drop-shadow-xl filter"
              />
            </div>

            {/* Floating Card: Learning Progress (55%) */}
            <div className="absolute right-2 bottom-6 z-30 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md">
              <p className="font-sans text-[13px] font-medium text-text-ink">Learning Progress</p>
              <p className="font-['Poppins'] text-[36px] leading-tight font-semibold text-text-ink">
                55%
              </p>
              <div className="mt-2 h-2 w-[160px] rounded-full bg-surface-subtle">
                <div className="h-full w-[55%] rounded-full bg-brand-lime" />
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Create & Manage (Left Visual Collage, Right Text) */}
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-16">
          {/* Collage Left */}
          <div
            ref={block2CollageRef}
            className="relative h-[500px] w-full max-w-[550px] sm:h-[596px]"
          >
            {/* Top Left Floating Blue Stat: Total Revenue */}
            <div className="absolute top-8 left-2 z-30 flex flex-col gap-1 rounded-2xl bg-brand-primary p-4 text-white shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[15px] font-medium">Total Revenue</span>
                <span className="text-[10px] text-surface-subtle/80">July 1-28</span>
              </div>
              <div className="mt-1 flex items-center justify-between gap-4">
                <span className="font-['Poppins'] text-[24px] leading-none font-semibold">
                  $120.29
                </span>
                <span className="rounded-full bg-brand-lime px-2 py-0.5 font-sans text-[10px] font-medium text-text-ink">
                  +12$
                </span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-white">
                <div className="h-full w-[55%] rounded-full bg-brand-lime" />
              </div>
            </div>

            {/* Mid Left Floating Blue Stat: Year to Date */}
            <div className="absolute top-48 left-2 z-30 flex flex-col gap-1 rounded-2xl bg-brand-primary p-4 text-white shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between gap-4">
                <span className="font-sans text-[15px] font-medium">Year to Date</span>
                <span className="text-[10px] text-surface-subtle/80">2023</span>
              </div>
              <p className="mt-1 font-['Poppins'] text-[24px] leading-none font-semibold">
                $1,200.38
              </p>
              <span className="mt-1 w-fit rounded-full bg-brand-lime px-2 py-0.5 font-sans text-[10px] font-medium text-text-ink">
                +12$
              </span>
            </div>

            {/* Main Center Image: Creator Woman */}
            <div className="absolute inset-x-0 top-6 bottom-0 z-10 mx-auto h-[480px] w-[350px] sm:h-[550px] sm:w-[410px]">
              <Image
                src="/images/creator-woman.png"
                alt="Creator with headset and tablet"
                fill
                className="object-contain drop-shadow-2xl filter"
              />
            </div>

            {/* 3D Wiggle Ornament Right */}
            <div className="pointer-events-none absolute top-28 -right-4 z-20 hidden sm:block">
              <Image
                src="/images/hero-ornament-2.png"
                alt=""
                width={150}
                height={150}
                className="size-44 drop-shadow-lg filter"
              />
            </div>

            {/* Floating Card: Happy Students (Bottom Right) */}
            <div className="absolute right-2 -bottom-2 z-30 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md sm:right-6 sm:bottom-6">
              <p className="font-sans text-[15px] font-medium text-text-ink">Happy Students</p>
              <div className="mt-0.5 flex items-center gap-1.5 font-sans text-[11px] text-text-muted">
                <span className="font-bold text-text-ink">4.5</span>
                <span>(240)</span>
                <Image
                  src="/images/star-rate.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="size-3.5"
                />
              </div>
              {/* Avatars */}
              <div className="mt-2.5 flex items-center">
                <Image
                  src="/images/avatar-hero-1.png"
                  alt=""
                  width={34}
                  height={34}
                  className="size-[34px] rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/images/avatar-hero-2.png"
                  alt=""
                  width={34}
                  height={34}
                  className="-ml-2.5 size-[34px] rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/images/avatar-hero-3.png"
                  alt=""
                  width={34}
                  height={34}
                  className="-ml-2.5 size-[34px] rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/images/avatar-hero-4.png"
                  alt=""
                  width={34}
                  height={34}
                  className="-ml-2.5 size-[34px] rounded-full border-2 border-white object-cover"
                />
                <div className="-ml-2.5 flex size-[34px] items-center justify-center rounded-full border-2 border-white bg-brand-lime font-sans text-[11px] font-bold text-text-ink">
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div ref={block2TextRef} className="flex max-w-[580px] flex-col gap-8 text-left">
            <h2 className="font-['Poppins'] text-[32px] leading-[1.2] font-semibold tracking-[-0.44px] text-text-ink sm:text-[40px] lg:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="font-sans text-[16px] leading-[1.6] text-text-subtle sm:text-[18px]">
              <span className="font-bold text-text-ink">ByteSpace</span> supports individuals or
              entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/check-circle.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
                <span className="font-sans text-[17px] font-medium text-text-ink">
                  Share Your Expertise
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/check-circle.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
                <span className="font-sans text-[17px] font-medium text-text-ink">
                  Monetize Your Passion
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/check-circle.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
                <span className="font-sans text-[17px] font-medium text-text-ink">
                  Flexibility and Autonomy
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/check-circle.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
                <span className="font-sans text-[17px] font-medium text-text-ink">
                  Build a Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
