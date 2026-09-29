"use client";

import { useRef } from "react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ornamentsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Content reveal
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          once: true
        }
      });

      // 3D Ornaments Reveal
      const ornaments = ornamentsRef.current ? ornamentsRef.current.children : [];
      if (ornaments && ornaments.length > 0) {
        gsap.from(ornaments, {
          scale: 0.6,
          opacity: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "back.out(1.4)",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true
          }
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="join"
      className="relative w-full overflow-hidden bg-brand-primary py-24 text-center lg:py-28"
      data-node-id="34:1161"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center opacity-40">
        <Image
          src="/images/cta-grid.svg"
          alt=""
          width={1440}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>

      {/* 3D Floating Ornaments */}
      <div ref={ornamentsRef} className="pointer-events-none">
        {/* Left Lime Spring */}
        <div className="absolute top-[-60px] -left-12 z-10 hidden will-change-transform sm:block">
          <Image
            src="/images/hero-ornament-2.png"
            alt=""
            width={385}
            height={385}
            className="h-auto w-[240px] drop-shadow-xl filter lg:w-[350px]"
          />
        </div>

        {/* Mid Left White Torus */}
        <div className="absolute bottom-[-40px] -left-8 z-10 hidden will-change-transform md:block">
          <Image
            src="/images/hero-cone-1.png"
            alt=""
            width={342}
            height={342}
            className="h-auto w-[200px] drop-shadow-xl filter lg:w-[300px]"
          />
        </div>

        {/* Top Right Lime Pyramid */}
        <div className="absolute top-[-20px] right-4 z-10 hidden will-change-transform sm:block">
          <Image
            src="/images/cta-cone-1.png"
            alt=""
            width={370}
            height={370}
            className="h-auto w-[200px] drop-shadow-xl filter lg:w-[320px]"
          />
        </div>

        {/* Mid Right White Cylinder */}
        <div className="absolute -right-10 bottom-[-60px] z-10 hidden will-change-transform md:block">
          <Image
            src="/images/hero-ornament-1.png"
            alt=""
            width={330}
            height={330}
            className="h-auto w-[220px] drop-shadow-xl filter lg:w-[320px]"
          />
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 mx-auto max-w-[964px] px-6">
        <h2 className="font-['Poppins'] text-[32px] leading-[1.2] font-semibold tracking-[-0.44px] text-surface-subtle sm:text-[40px] lg:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-6 max-w-[880px] font-sans text-[16px] leading-[1.6] text-surface-subtle sm:text-[18px]">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="flex h-[46px] items-center justify-center rounded-full bg-brand-lime px-8 font-sans text-[18px] font-medium text-text-ink shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
