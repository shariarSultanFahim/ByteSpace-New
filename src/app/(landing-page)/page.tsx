import type { Metadata } from "next";

import {
  Categories,
  CreatorGrowth,
  CtaSection,
  FeaturedCourses,
  Hero,
  LogoPartners,
  Testimonials
} from "@/widgets";

export const metadata: Metadata = {
  title: "ByteSpace — Learn from the Best Creators",
  description:
    "Unlock your creativity and grow your business with hundreds of online courses from top creators. Browse UI/UX, marketing, development, photography, and more.",
  alternates: { canonical: "/" }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Partner Logos */}
      <LogoPartners />

      {/* Featured Courses with Category Filter Pills */}
      <FeaturedCourses />

      {/* Explore Categories Cards */}
      <Categories />

      {/* Creator & Professional Growth Double Feature */}
      <CreatorGrowth />

      {/* Blue Creator CTA Banner */}
      <CtaSection />

      {/* Community Testimonials */}
      <Testimonials />
    </>
  );
}
