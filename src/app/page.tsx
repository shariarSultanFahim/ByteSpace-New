import { Footer, Header } from "@/layouts";
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
    <div className="flex min-h-screen w-full flex-col bg-white">
      {/* Blue Header & Hero Area */}
      <div className="relative w-full bg-[#003be2]">
        <Header />
        <Hero />
      </div>

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

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
