import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCreator } from "@/data";

import { CreatorCoursesSection, CreatorHero } from "./components";

interface CreatorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CreatorPageProps): Promise<Metadata> {
  const { id } = await params;
  const creator = getCreator(id);

  if (!creator) {
    return {
      title: "Creator Not Found | ByteSpace",
      description: "The requested creator profile could not be found."
    };
  }

  return {
    title: `${creator.name} | ByteSpace`,
    description: `${creator.role}. ${creator.bio[0]}`
  };
}

export default async function CreatorProfilePage({ params }: CreatorPageProps) {
  const { id } = await params;
  const creator = getCreator(id);

  if (!creator) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col bg-white">
      {/* Blue Top Hero Banner with Creator Profile Information */}
      <CreatorHero creator={creator} />

      {/* Creator Course Catalog with Filter Controls */}
      <CreatorCoursesSection courses={creator.courses} />
    </div>
  );
}
