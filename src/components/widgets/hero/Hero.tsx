import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#003be2] pt-0 pb-12"
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

      {/* Center Yellowish Lime Arc (Ellipse 7) */}
      <div className="pointer-events-none absolute top-[582px] left-1/2 z-0 -translate-x-1/2">
        <div className="h-[1149px] w-[1149px] rounded-full bg-[#cbfa04]" />
      </div>

      {/* Floating 3D Ornaments */}
      {/* Top Left Wiggle Green */}
      <div className="pointer-events-none absolute top-[120px] -left-12 z-10 hidden sm:block">
        <Image
          src="/images/hero-ornament-2.png"
          alt=""
          width={385}
          height={385}
          className="h-auto w-[240px] drop-shadow-xl filter lg:w-[385px]"
        />
      </div>

      {/* Mid Left White Torus */}
      <div className="pointer-events-none absolute bottom-[200px] -left-8 z-10 hidden md:block">
        <Image
          src="/images/hero-cone-1.png"
          alt=""
          width={342}
          height={342}
          className="h-auto w-[200px] drop-shadow-xl filter lg:w-[320px]"
        />
      </div>

      {/* Center Left Small Spring */}
      <div className="pointer-events-none absolute top-[450px] left-[12%] z-10 hidden xl:block">
        <Image
          src="/images/hero-ornament-2.png"
          alt=""
          width={175}
          height={175}
          className="h-auto w-[120px] -scale-x-100 drop-shadow-md filter"
        />
      </div>

      {/* Top Right Cylinder / Lime */}
      <div className="pointer-events-none absolute top-[150px] -right-16 z-10 hidden sm:block">
        <Image
          src="/images/hero-cone-2.png"
          alt=""
          width={370}
          height={370}
          className="h-auto w-[220px] drop-shadow-xl filter lg:w-[350px]"
        />
      </div>

      {/* Mid Right Pyramid */}
      <div className="pointer-events-none absolute top-[420px] right-[10%] z-10 hidden lg:block">
        <Image
          src="/images/hero-cone-3.png"
          alt=""
          width={188}
          height={188}
          className="h-auto w-[140px] drop-shadow-lg filter"
        />
      </div>

      {/* Bottom Right White Spring */}
      <div className="pointer-events-none absolute -right-10 bottom-[100px] z-10 hidden md:block">
        <Image
          src="/images/hero-ornament-1.png"
          alt=""
          width={330}
          height={330}
          className="h-auto w-[200px] drop-shadow-xl filter lg:w-[310px]"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-[1440px] px-6 pt-6 text-center">
        {/* Heading & Subtitle */}
        <div className="mx-auto flex max-w-[935px] flex-col items-center gap-6">
          <h1 className="font-['Poppins'] text-[40px] leading-[1.15] font-semibold tracking-[-0.72px] text-white sm:text-[56px] lg:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[820px] font-sans text-[16px] leading-[1.6] text-[#e5e6e8] sm:text-[18px]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mt-10 flex max-w-[581px] flex-col items-center justify-center gap-4 sm:flex-row">
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
              placeholder="Course, topic, creator"
              className="w-full bg-transparent font-sans text-[16px] text-[#242528] placeholder:text-[#82868e] focus:outline-none sm:text-[18px]"
            />
          </div>
          <button
            type="button"
            className="flex h-[46px] w-full items-center justify-center rounded-full bg-[#d4fb20] px-6 font-sans text-[18px] font-medium text-[#242528] shadow-md transition-transform hover:scale-105 active:scale-95 sm:w-auto"
          >
            Search
          </button>
        </div>

        {/* Hero Visual Collage & Floating Cards */}
        <div className="relative mx-auto mt-16 max-w-[900px] pb-10">
          {/* Main Hero Student Image */}
          <div className="relative mx-auto h-[400px] w-[320px] sm:h-[500px] sm:w-[480px] lg:h-[541px] lg:w-[578px]">
            <Image
              src="/images/hero-student.png"
              alt="Student with laptop"
              fill
              className="object-contain drop-shadow-2xl filter"
              priority
            />
          </div>

          {/* Floating Card: UI/UX Design (Left) */}
          <div className="absolute top-[28%] left-0 z-30 hidden rounded-2xl bg-white/95 p-4 text-left shadow-2xl backdrop-blur-md sm:block lg:left-[50px]">
            <p className="font-sans text-[16px] font-medium text-[#242528]">UI/UX Design</p>
            <div className="mt-1 flex items-center gap-2 font-sans text-[12px] text-[#82868e]">
              <span>200 Courses</span>
              <span>•</span>
              <span>1000+ Students</span>
            </div>
          </div>

          {/* Floating Card: Happy Students (Bottom Left) */}
          <div className="absolute -bottom-4 left-4 z-30 rounded-2xl bg-white/95 p-4 text-left shadow-2xl backdrop-blur-md sm:bottom-4 lg:left-[60px]">
            <p className="font-sans text-[16px] font-medium text-[#242528]">Happy Students</p>
            <div className="mt-0.5 flex items-center gap-1.5 font-sans text-[12px] text-[#82868e]">
              <span className="font-medium text-[#242528]">4.5</span>
              <span>(240)</span>
              <Image src="/images/star-rate.svg" alt="" width={16} height={16} className="size-4" />
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
                className="-ml-3 size-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/avatar-hero-3.png"
                alt=""
                width={36}
                height={36}
                className="-ml-3 size-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/avatar-hero-4.png"
                alt=""
                width={36}
                height={36}
                className="-ml-3 size-9 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/images/avatar-hero-5.png"
                alt=""
                width={36}
                height={36}
                className="-ml-3 size-9 rounded-full border-2 border-white object-cover"
              />
              <div className="-ml-3 flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#d4fb20] font-sans text-[12px] font-bold text-[#242528]">
                2K+
              </div>
            </div>
          </div>

          {/* Floating Card: Learning Progress (Right) */}
          <div className="absolute top-[32%] right-4 z-30 rounded-2xl bg-white/95 p-4 text-left shadow-2xl backdrop-blur-md sm:right-8 lg:right-[40px]">
            <p className="font-sans text-[14px] font-medium text-[#242528]">Learning Progress</p>
            <p className="font-['Poppins'] text-[44px] leading-tight font-semibold tracking-tight text-[#242528] lg:text-[48px]">
              55%
            </p>
            <div className="mt-2 h-2 w-[180px] rounded-full bg-[#f6f6f6] lg:w-[200px]">
              <div className="h-full w-[55%] rounded-full bg-[#d4fb20]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
