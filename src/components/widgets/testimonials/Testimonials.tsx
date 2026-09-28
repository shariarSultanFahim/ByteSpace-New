import Image from "next/image";

import { TESTIMONIALS_DATA } from "@/data";

export function Testimonials() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#fafafa] py-24 lg:py-32"
      data-node-id="34:1175"
    >
      {/* Background Soft Blobs */}
      <div className="pointer-events-none absolute top-20 -left-20 z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-brand-primary/10 via-brand-lime/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-10 -right-20 z-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-brand-lime/25 via-emerald-100/30 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-[120px]">
        {/* Heading Header */}
        <div
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-12"
          data-node-id="34:1177"
        >
          <h2 className="max-w-[577px] font-['Poppins'] text-[32px] leading-[1.2] font-semibold tracking-[-0.44px] text-black sm:text-[40px] lg:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] font-sans text-[16px] leading-[1.6] text-[#4f4f4f] sm:text-[18px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
          data-node-id="34:1182"
        >
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-[24px] bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative size-20 overflow-hidden rounded-full">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              </div>

              <div className="mt-6">
                <h3 className="font-['Poppins'] text-[20px] font-semibold tracking-[-0.2px] text-black">
                  {item.name}
                </h3>
                <p className="mt-1 font-sans text-[16px] font-medium text-brand-primary sm:text-[18px]">
                  {item.role}
                </p>
              </div>

              <p className="mt-6 font-sans text-[16px] leading-[1.6] text-[#4f4f4f] sm:text-[18px]">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
