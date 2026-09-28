import Image from "next/image";

import { CATEGORIES_CARDS_DATA } from "@/data";

export function Categories() {
  return (
    <section id="categories" className="w-full bg-white pt-4 pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[120px]">
        {/* Heading (Frame 9) */}
        <div className="mx-auto max-w-[917px] text-center" data-node-id="34:684">
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
