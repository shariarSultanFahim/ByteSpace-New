"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const heroSectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchBarRef = useRef<HTMLFormElement>(null);
  const limeArcRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const uiuxCardRef = useRef<HTMLDivElement>(null);
  const progressCardRef = useRef<HTMLDivElement>(null);
  const happyStudentsCardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.35, // Smooth handoff right after header begins
        defaults: { ease: "power3.out" }
      });

      // Step 4: Headline & Subtitle Text Popup
      tl.from(headlineRef.current, {
        y: 40,
        scale: 0.94,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out"
      })
        .from(
          subtitleRef.current,
          {
            y: 24,
            opacity: 0,
            duration: 0.65
          },
          "-=0.5"
        )

        // Step 5: Search Bar Pop Animation
        .from(
          searchBarRef.current,
          {
            scale: 0.82,
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "back.out(1.8)"
          },
          "-=0.35"
        )

        // Step 6: Lime Arc scales up & Student rises from bottom
        .from(
          limeArcRef.current,
          {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
          },
          "-=0.4"
        )
        .from(
          studentRef.current,
          {
            y: 130,
            opacity: 0,
            duration: 0.9,
            ease: "back.out(1.15)"
          },
          "-=0.75"
        )

        // Step 7: Floating Badges & Cards (UI/UX, Learning Progress, Happy Students)
        .from(
          uiuxCardRef.current,
          {
            x: -40,
            scale: 0.75,
            opacity: 0,
            duration: 0.65,
            ease: "back.out(1.7)"
          },
          "-=0.4"
        )
        .from(
          progressCardRef.current,
          {
            x: 40,
            scale: 0.75,
            opacity: 0,
            duration: 0.65,
            ease: "back.out(1.7)"
          },
          "-=0.5"
        )
        .from(
          happyStudentsCardRef.current,
          {
            y: 35,
            scale: 0.75,
            opacity: 0,
            duration: 0.65,
            ease: "back.out(1.7)"
          },
          "-=0.5"
        );

      // Step 8: Surrounding 3D Ornaments / Particles Pop In
      const particleElements = particlesRef.current ? particlesRef.current.children : [];
      tl.from(
        particleElements,
        {
          scale: 0,
          rotation: -18,
          opacity: 0,
          duration: 0.75,
          stagger: {
            each: 0.08,
            from: "random"
          },
          ease: "back.out(1.6)"
        },
        "-=0.5"
      );
    },
    { scope: heroSectionRef }
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <section
      ref={heroSectionRef}
      className="relative w-full overflow-hidden bg-brand-primary"
      data-node-id="1:1695"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center opacity-40">
        <Image
          src="/images/hero-grid.svg"
          alt=""
          width={1440}
          height={1024}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Step 6: Center Lime Arc (Ellipse 7) */}
      <div
        ref={limeArcRef}
        className="pointer-events-none absolute top-[400px] left-1/2 z-0 mt-30 -translate-x-1/2 will-change-transform sm:top-[380px] lg:top-[360px]"
      >
        <div className="h-[960px] w-[960px] rounded-full bg-brand-lime sm:h-[1100px] sm:w-[1100px] lg:h-[1250px] lg:w-[1250px]" />
      </div>

      {/* Step 8: Floating 3D Ornaments / Particles */}
      <div ref={particlesRef} className="pointer-events-none">
        {/* Top Left Wiggle Green */}
        <div className="absolute top-[120px] -left-12 z-10 hidden will-change-transform sm:block">
          <Image
            src="/images/hero-ornament-2.png"
            alt=""
            width={385}
            height={385}
            className="h-auto w-[240px] drop-shadow-xl filter lg:w-[385px]"
          />
        </div>

        {/* Mid Left White Torus */}
        <div className="absolute bottom-[200px] -left-8 z-10 hidden will-change-transform md:block">
          <Image
            src="/images/hero-cone-1.png"
            alt=""
            width={342}
            height={342}
            className="h-auto w-[200px] drop-shadow-xl filter lg:w-[320px]"
          />
        </div>

        {/* Center Left Small Spring */}
        <div className="absolute top-[450px] left-[12%] z-10 hidden will-change-transform xl:block">
          <Image
            src="/images/hero-ornament-2.png"
            alt=""
            width={175}
            height={175}
            className="h-auto w-[120px] -scale-x-100 drop-shadow-md filter"
          />
        </div>

        {/* Top Right Cylinder / Lime */}
        <div className="absolute top-[150px] -right-16 z-10 hidden will-change-transform sm:block">
          <Image
            src="/images/hero-cone-2.png"
            alt=""
            width={370}
            height={370}
            className="h-auto w-[220px] drop-shadow-xl filter lg:w-[350px]"
          />
        </div>

        {/* Mid Right Pyramid */}
        <div className="absolute top-[420px] right-[10%] z-10 hidden will-change-transform lg:block">
          <Image
            src="/images/hero-cone-3.png"
            alt=""
            width={188}
            height={188}
            className="h-auto w-[140px] drop-shadow-lg filter"
          />
        </div>

        {/* Bottom Right White Spring */}
        <div className="absolute -right-10 bottom-[100px] z-10 hidden will-change-transform md:block">
          <Image
            src="/images/hero-ornament-1.png"
            alt=""
            width={330}
            height={330}
            className="h-auto w-[200px] drop-shadow-xl filter lg:w-[310px]"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-[1440px] px-6 pt-6 text-center">
        {/* Step 4: Heading & Subtitle Text Popup */}
        <div className="mx-auto flex max-w-[935px] flex-col items-center gap-6">
          <h1
            ref={headlineRef}
            className="font-['Poppins'] text-[40px] leading-[1.15] font-semibold tracking-[-0.72px] text-white will-change-transform sm:text-[56px] lg:text-[72px]"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p
            ref={subtitleRef}
            className="max-w-[820px] font-sans text-[16px] leading-[1.6] text-border-light will-change-transform sm:text-[18px]"
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>
        </div>

        {/* Step 5: Search Bar Pop Animation */}
        <form
          ref={searchBarRef}
          onSubmit={handleSearch}
          className="mx-auto mt-10 flex max-w-[581px] flex-col items-center justify-center gap-4 will-change-transform sm:flex-row"
        >
          <div className="flex h-[52px] w-full max-w-[461px] items-center gap-2 rounded-full bg-white px-6 py-3 shadow-lg">
            <Image
              src="/images/search-icon.svg"
              alt=""
              width={24}
              height={24}
              className="size-6 shrink-0"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent font-sans text-[16px] text-text-ink placeholder:text-text-muted focus:outline-none sm:text-[18px]"
            />
          </div>
          <button
            type="submit"
            className="flex h-[46px] w-full items-center justify-center rounded-full bg-brand-lime px-6 font-sans text-[18px] font-medium text-text-ink shadow-md transition-transform hover:scale-105 active:scale-95 sm:w-auto"
          >
            Search
          </button>
        </form>

        {/* Hero Visual Collage & Floating Cards */}
        <div className="relative mx-auto mt-16 max-w-[940px]">
          {/* Step 6: Main Hero Student Image */}
          <div
            ref={studentRef}
            className="relative mx-auto h-[400px] w-[320px] will-change-transform sm:h-[500px] sm:w-[480px] lg:h-[541px] lg:w-[578px]"
          >
            <Image
              src="/images/hero-student.png"
              alt="Student with laptop"
              fill
              className="object-contain drop-shadow-2xl filter"
              priority
            />
          </div>

          {/* Step 7: Floating Card: UI/UX Design (Left) */}
          <div
            ref={uiuxCardRef}
            className="absolute top-[18%] left-0 z-30 hidden rounded-2xl bg-white p-4 text-left shadow-[0_12px_32px_rgba(0,0,0,0.12)] will-change-transform sm:block lg:left-[40px]"
          >
            <p className="font-sans text-[16px] font-medium text-text-ink">UI/UX Design</p>
            <div className="mt-1 flex items-center gap-2 font-sans text-[12px] text-text-muted">
              <span>200 Courses</span>
              <span>•</span>
              <span>1000+ Students</span>
            </div>
          </div>

          {/* Step 7: Floating Card: Happy Students (Bottom Left) */}
          <div
            ref={happyStudentsCardRef}
            className="absolute -bottom-2 -left-6 z-30 rounded-2xl bg-white p-4 text-left shadow-[0_12px_32px_rgba(0,0,0,0.12)] will-change-transform sm:bottom-6 sm:-left-4 lg:-left-6"
          >
            <p className="font-sans text-[16px] font-medium text-text-ink">Happy Students</p>
            <div className="mt-0.5 flex items-center gap-1.5 font-sans text-[12px] text-text-muted">
              <span className="font-medium text-text-ink">4.5</span>
              <span>(240)</span>
              <Image
                src="/images/star-rate.svg"
                alt=""
                width={14}
                height={14}
                className="size-3.5"
              />
            </div>
            {/* Avatars */}
            <div className="mt-3 flex items-center">
              <Image
                src="/images/avatar-hero-1.png"
                alt=""
                width={36}
                height={36}
                className="size-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/avatar-hero-2.png"
                alt=""
                width={36}
                height={36}
                className="-ml-2.5 size-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/avatar-hero-3.png"
                alt=""
                width={36}
                height={36}
                className="-ml-2.5 size-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/avatar-hero-4.png"
                alt=""
                width={36}
                height={36}
                className="-ml-2.5 size-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/avatar-hero-5.png"
                alt=""
                width={36}
                height={36}
                className="-ml-2.5 size-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/avatar-hero-6.png"
                alt=""
                width={36}
                height={36}
                className="-ml-2.5 size-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/avatar-hero-7.png"
                alt=""
                width={36}
                height={36}
                className="-ml-2.5 size-9 rounded-full border-2 border-white object-cover"
              />
              <div className="-ml-2.5 flex size-9 items-center justify-center rounded-full border-2 border-white bg-brand-lime font-sans text-[12px] font-bold text-text-ink">
                2K+
              </div>
            </div>
          </div>

          {/* Step 7: Floating Card: Learning Progress (Right) */}
          <div
            ref={progressCardRef}
            className="absolute top-[20%] right-2 z-30 rounded-2xl bg-white p-5 text-left shadow-[0_12px_32px_rgba(0,0,0,0.12)] will-change-transform sm:right-6 lg:right-[30px]"
          >
            <p className="font-sans text-[14px] font-medium text-text-ink">Learning Progress</p>
            <p className="mt-1 font-sans text-[44px] leading-none font-bold tracking-tight text-text-ink lg:text-[50px]">
              55%
            </p>
            <div className="mt-4 h-2 w-[180px] rounded-full bg-surface-subtle lg:w-[210px]">
              <div className="h-full w-[55%] rounded-full bg-brand-lime" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
