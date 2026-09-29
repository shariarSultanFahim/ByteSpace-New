"use client";

import { useRef } from "react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CATEGORIES_CARDS_DATA } from "@/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Categories() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Heading reveal
      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          once: true
        }
      });

      // 2. Cards staggered reveal (triggers with section so it appears right away)
      const cards = cardsGridRef.current ? cardsGridRef.current.children : [];
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="categories" className="w-full bg-white pt-4 pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[120px]">
        {/* Heading (Frame 9) */}
        <div ref={headingRef} className="mx-auto max-w-[917px] text-center" data-node-id="34:684">
          <h2 className="font-['Poppins'] text-[28px] leading-[1.2] font-semibold tracking-[-0.36px] text-[#040819] sm:text-[32px] lg:text-[36px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 font-sans text-[16px] leading-[1.6] text-text-muted sm:text-[18px]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there&apos;s something for everyone. Unleash
            your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Rounded Cards (Frame 10) */}
        <div
          ref={cardsGridRef}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6"
          data-node-id="34:725"
        >
          {CATEGORIES_CARDS_DATA.map((cat) => (
            <div
              key={cat.id}
              className="flex h-[167px] flex-col items-center justify-center rounded-[24px] border border-border-soft bg-white p-4 transition-all hover:border-brand-primary hover:shadow-lg"
            >
              <div className="flex size-[60px] items-center justify-center rounded-full bg-brand-lime">
                <Image src={cat.icon} alt={cat.title} width={36} height={36} className="size-9" />
              </div>
              <p className="mt-3 font-sans text-[18px] font-medium text-text-ink lg:text-[20px]">
                {cat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
