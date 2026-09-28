import {
  Categories,
  CreatorGrowth,
  CtaSection,
  FeaturedCourses,
  Hero,
  LogoPartners,
  Testimonials
} from "@/widgets";

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
