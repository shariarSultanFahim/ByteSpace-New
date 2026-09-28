import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Courses",
  description:
    "Search and filter hundreds of online courses on ByteSpace. Find courses in UI/UX design, web development, digital marketing, photography, and more.",
  alternates: { canonical: "/search" }
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
