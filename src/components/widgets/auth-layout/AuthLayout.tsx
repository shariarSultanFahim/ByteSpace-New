import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthLayoutProps {
  headingSubtitle: string;
  description: string;
  children: ReactNode;
}

export function AuthLayout({ headingSubtitle, description, children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-brand-primary">
      {/* 120px Grid overlay matching Figma Group 4 */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/auth-grid.svg"
          alt=""
          width={1440}
          height={1024}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Top Left Header with ByteSpace Logo */}
      <header className="relative z-30 w-full">
        <div className="mx-auto flex h-[120px] max-w-[1440px] items-center px-6 lg:px-[122px]">
          <Link href="/" className="flex items-center gap-[10px]">
            <Image
              src="/images/logo.svg"
              alt="ByteSpace Logo"
              width={29}
              height={32}
              className="h-[31.5px] w-[28.875px]"
              priority
            />
            <span className="font-['Poppins'] text-[24px] font-bold tracking-tight text-surface-subtle">
              ByteSpace
            </span>
          </Link>
        </div>
      </header>

      {/* Main Container: 1440px max width */}
      <main className="relative z-20 mx-auto max-w-[1440px] px-6 pb-20 lg:px-[122px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading + Text + Exact Visual Composition */}
          <div className="hidden flex-col items-start lg:col-span-6 lg:flex">
            {/* Heading Text Block */}
            <div className="max-w-[475px]">
              <h1 className="font-['Poppins'] text-[20px] leading-[1.2] font-semibold tracking-[-0.2px] text-surface-subtle">
                {headingSubtitle}
              </h1>
              <p className="mt-4 font-sans text-[18px] leading-[1.6] text-surface-subtle">
                {description}
              </p>
            </div>

            {/* Visual Collage Stage matching exact Figma coordinates */}
            <div className="relative mt-12 h-[680px] w-full max-w-[580px]">
              {/* Lime Torus (Cone_01 2 top left) */}
              <div className="pointer-events-none absolute top-[10px] left-[30px] z-100">
                <Image
                  src="/images/auth-torus-lime.png"
                  alt=""
                  width={146}
                  height={146}
                  className="h-[146px] w-[146px] drop-shadow-xl"
                />
              </div>

              {/* Course Card 1: Build Digital Asset (Behind) */}
              <div className="absolute top-[84px] left-0 z-10 h-[384px] w-[373px] overflow-hidden rounded-[24px] border border-border-soft bg-white p-[15px] shadow-2xl transition-transform hover:-translate-y-1">
                {/* Banner Image */}
                <div className="relative h-[195px] w-full overflow-hidden rounded-[12px] bg-[#443131]">
                  <Image
                    src="/images/auth-course-build.png"
                    alt="Build Digital Asset"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-[10px] left-[12px] flex items-center gap-[8px]">
                    <span className="rounded-full bg-surface-subtle/80 px-[12px] py-[4px] font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-[4px]">
                      17 Lessons
                    </span>
                    <span className="rounded-full bg-surface-subtle/80 px-[12px] py-[4px] font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-[4px]">
                      2 hours 16 mins
                    </span>
                    <span className="rounded-full bg-surface-subtle/80 px-[12px] py-[4px] font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-[4px]">
                      59 Comments
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="mt-[20px] flex flex-col gap-[14px]">
                  <div>
                    <h3 className="font-['Poppins'] text-[20px] leading-[28px] font-semibold tracking-[-0.2px] text-black">
                      Build Digital Asset
                    </h3>
                    <p className="font-sans text-[12px] text-[#4f4f4f]">
                      by <span className="text-brand-primary">purepearl studio</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[4px] rounded-[24px] bg-surface-subtle px-[12px] py-[6px] text-[12px] font-medium text-text-subtle">
                      <Image
                        src="/images/signal-cellular.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="size-[20px]"
                      />
                      <span>Beginner</span>
                    </div>

                    <div className="flex items-center">
                      <Image
                        src="/images/auth-av-1.png"
                        alt=""
                        width={32}
                        height={32}
                        className="size-[32px] rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="/images/auth-av-2.png"
                        alt=""
                        width={32}
                        height={32}
                        className="-ml-[8px] size-[32px] rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="/images/auth-av-3.png"
                        alt=""
                        width={32}
                        height={32}
                        className="-ml-[8px] size-[32px] rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="/images/auth-av-4.png"
                        alt=""
                        width={32}
                        height={32}
                        className="-ml-[8px] size-[32px] rounded-full border-2 border-white object-cover"
                      />
                      <div className="-ml-[8px] flex size-[32px] items-center justify-center rounded-full border-2 border-white bg-brand-lime font-sans text-[11px] font-bold text-text-ink">
                        26+
                      </div>
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="font-['Poppins'] text-[20px] font-semibold text-brand-primary">
                        $25
                      </span>
                      <span className="font-sans text-[12px] text-[#4f4f4f]">/lifetime</span>
                    </div>

                    <div className="flex items-center gap-1 font-sans text-[16px] text-[#4f4f4f]">
                      <span className="text-[17px] font-medium">4.5</span>
                      <Image
                        src="/images/yellow-star.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="size-5"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Card 2: the Power of Big Data (Front, offset) */}
              <div className="absolute top-[0px] left-[110px] z-20 h-[384px] w-[373px] overflow-hidden rounded-[24px] border border-border-soft bg-white p-[15px] shadow-2xl transition-transform hover:-translate-y-1">
                {/* Banner Image */}
                <div className="relative h-[195px] w-full overflow-hidden rounded-[12px] bg-[#443131]">
                  <Image
                    src="/images/auth-course-bigdata.png"
                    alt="the Power of Big Data"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-[10px] left-[12px] flex items-center gap-[8px]">
                    <span className="rounded-full bg-surface-subtle/80 px-[12px] py-[4px] font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-[4px]">
                      17 Lessons
                    </span>
                    <span className="rounded-full bg-surface-subtle/80 px-[12px] py-[4px] font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-[4px]">
                      2 hours 16 mins
                    </span>
                    <span className="rounded-full bg-surface-subtle/80 px-[12px] py-[4px] font-sans text-[12px] font-medium text-[#4f4f4f] backdrop-blur-[4px]">
                      59 Comments
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="mt-[20px] flex flex-col gap-[14px]">
                  <div>
                    <h3 className="truncate font-['Poppins'] text-[20px] leading-[28px] font-semibold tracking-[-0.2px] text-black">
                      the Power of Big Data
                    </h3>
                    <p className="font-sans text-[12px] text-[#4f4f4f]">
                      by <span className="text-brand-primary">purepearl studio</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[4px] rounded-[24px] bg-surface-subtle px-[12px] py-[6px] text-[12px] font-medium text-text-subtle">
                      <Image
                        src="/images/signal-cellular.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="size-[20px]"
                      />
                      <span>Beginner</span>
                    </div>

                    <div className="flex items-center">
                      <Image
                        src="/images/auth-av-1.png"
                        alt=""
                        width={32}
                        height={32}
                        className="size-[32px] rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="/images/auth-av-2.png"
                        alt=""
                        width={32}
                        height={32}
                        className="-ml-[8px] size-[32px] rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="/images/auth-av-3.png"
                        alt=""
                        width={32}
                        height={32}
                        className="-ml-[8px] size-[32px] rounded-full border-2 border-white object-cover"
                      />
                      <Image
                        src="/images/auth-av-4.png"
                        alt=""
                        width={32}
                        height={32}
                        className="-ml-[8px] size-[32px] rounded-full border-2 border-white object-cover"
                      />
                      <div className="-ml-[8px] flex size-[32px] items-center justify-center rounded-full border-2 border-white bg-brand-lime font-sans text-[11px] font-bold text-text-ink">
                        26+
                      </div>
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="font-['Poppins'] text-[20px] font-semibold text-brand-primary">
                        $25
                      </span>
                      <span className="font-sans text-[12px] text-[#4f4f4f]">/lifetime</span>
                    </div>

                    <div className="flex items-center gap-1 font-sans text-[16px] text-[#4f4f4f]">
                      <span className="text-[17px] font-medium">4.5</span>
                      <Image
                        src="/images/yellow-star.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="size-5"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Lime Pyramid (Bottom Left) */}
              <div className="pointer-events-none absolute bottom-[100px] -left-[20px] z-100">
                <Image
                  src="/images/auth-cone-pyramid.png"
                  alt=""
                  width={188}
                  height={188}
                  className="h-[188px] w-[188px] drop-shadow-2xl"
                />
              </div>

              {/* 3D White Ribbon (Bottom Right) */}
              <div className="pointer-events-none absolute right-[10px] bottom-[150px] z-100 -rotate-60">
                <Image
                  src="/images/auth-ribbon-white.png"
                  alt=""
                  width={175}
                  height={175}
                  className="h-[175px] w-[175px] -scale-x-100 drop-shadow-2xl"
                />
              </div>

              {/* Happy Students Badge (Lime Pill) */}
              <div className="absolute right-[80px] bottom-[110px] z-40 rounded-[16px] bg-brand-lime p-[16px] shadow-2xl backdrop-blur-[10px]">
                <p className="font-sans text-[16px] font-medium text-text-ink">Happy Students</p>
                <div className="mt-[2px] flex items-center gap-1 font-sans text-[10px] text-text-subtle">
                  <span className="font-bold text-text-ink">4.5</span>
                  <span>(240)</span>
                  <Image src="/images/blue-star.svg" alt="" width={16} height={16} />
                </div>
                {/* 7 Avatars + 2K+ Pill */}
                <div className="mt-[10px] flex items-center">
                  <Image
                    src="/images/auth-stu-1.png"
                    alt=""
                    width={43}
                    height={43}
                    className="size-[43px] rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="/images/auth-stu-2.png"
                    alt=""
                    width={43}
                    height={43}
                    className="-ml-[16px] size-[43px] rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="/images/auth-stu-3.png"
                    alt=""
                    width={43}
                    height={43}
                    className="-ml-[16px] size-[43px] rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="/images/auth-stu-4.png"
                    alt=""
                    width={43}
                    height={43}
                    className="-ml-[16px] size-[43px] rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="/images/auth-stu-5.png"
                    alt=""
                    width={43}
                    height={43}
                    className="-ml-[16px] size-[43px] rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="/images/auth-stu-6.png"
                    alt=""
                    width={43}
                    height={43}
                    className="-ml-[16px] size-[43px] rounded-full border-2 border-white object-cover"
                  />
                  <Image
                    src="/images/auth-stu-7.png"
                    alt=""
                    width={43}
                    height={43}
                    className="-ml-[16px] size-[43px] rounded-full border-2 border-white object-cover"
                  />
                  <div className="-ml-[16px] flex size-[43px] items-center justify-center rounded-full border-2 border-white bg-brand-primary font-sans text-[12px] font-bold text-white">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: White Form Card */}
          <div className="flex w-full justify-center lg:col-span-6 lg:justify-end">
            <div className="w-full max-w-[579px] rounded-[24px] bg-white p-8 shadow-2xl sm:p-[61px] sm:px-[63px]">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
