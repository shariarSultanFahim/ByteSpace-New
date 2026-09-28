"use client";

import { useState } from "react";
import Image from "next/image";

import { toast } from "sonner";

import type { Creator } from "@/types";

interface CreatorHeroProps {
  creator: Creator;
}

export function CreatorHero({ creator }: CreatorHeroProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(creator.followersCount);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers((prev) => Math.max(0, prev - 1));
      toast.info(`Unfollowed ${creator.name}`);
    } else {
      setIsFollowing(true);
      setFollowers((prev) => prev + 1);
      toast.success(`You are now following ${creator.name}!`);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-brand-primary">
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/auth-grid.svg"
          alt=""
          width={1440}
          height={592}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-10 px-6 pt-10 pb-16 lg:px-[120px]">
        {/* Creator Info: Avatar + Title/Role + Bio */}
        <div className="flex flex-col gap-8">
          {/* Avatar and Tag */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-6">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-[24px] bg-[#d9d9d9] shadow-md">
              <Image
                src={creator.avatar}
                alt={creator.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-['Poppins'] text-[30px] leading-[1.2] font-semibold tracking-[-0.36px] text-surface-subtle sm:text-[36px]">
                  {creator.name}
                </h1>
                <span className="rounded-full bg-brand-lime px-6 py-2 font-sans text-[16px] font-medium text-text-ink shadow-sm backdrop-blur-[20px]">
                  {creator.tag}
                </span>
              </div>
              <p className="font-sans text-[18px] leading-[1.6] text-surface-subtle">
                {creator.role}
              </p>
            </div>
          </div>

          {/* Bio Paragraphs */}
          <div className="max-w-[1197px] space-y-2 font-sans text-[16px] leading-[1.6] text-surface-subtle sm:text-[18px]">
            {creator.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Stats & Actions: Products, Followers, Follow CTA Button */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Products Count Pill */}
            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-[18px] font-medium backdrop-blur-[20px]">
              <span className="text-brand-primary">{creator.productsCount}</span>
              <span className="text-text-ink">Products</span>
            </div>

            {/* Followers Count Pill */}
            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-[18px] font-medium backdrop-blur-[20px]">
              <span className="text-brand-primary">{followers}</span>
              <span className="text-text-ink">Followers</span>
            </div>
          </div>

          {/* Follow / Unfollow Button */}
          <button
            type="button"
            onClick={handleFollowToggle}
            className={`flex h-[46px] items-center justify-center rounded-full px-8 font-sans text-[18px] font-medium transition-all hover:scale-105 active:scale-95 ${
              isFollowing
                ? "bg-white text-brand-primary shadow-sm"
                : "bg-brand-lime text-[#040819] shadow-md"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </section>
  );
}
