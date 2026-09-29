"use client";

import { useRef } from "react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PARTNERS_DATA } from "@/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function LogoPartners() {
  const containerRef = useRef<HTMLElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const logos = logosRef.current ? logosRef.current.children : [];
      gsap.from(logos, {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-surface-subtle py-12 lg:py-16"
      data-node-id="1:1794"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[120px]">
        <div
          ref={logosRef}
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:justify-between lg:gap-[72px]"
        >
          {PARTNERS_DATA.map((partner) => (
            <div
              key={partner.id}
              className="flex h-[42px] items-center justify-center opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={170}
                height={42}
                className="h-[36px] w-auto sm:h-[41px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
