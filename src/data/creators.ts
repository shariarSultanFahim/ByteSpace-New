import type { Creator } from "@/types";

import { ALL_COURSES_DATA } from "./courses";

export const CREATORS_DATA: Record<string, Creator> = {
  "purepearl-studio": {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    tag: "Creator",
    role: "Passionate UI/UX, Web designer",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me."
    ],
    avatar: "/images/creator-purepearl-lg.png",
    productsCount: 3,
    followersCount: 12,
    courses: ALL_COURSES_DATA.filter((course) =>
      ["course-1", "course-2", "course-3", "course-4", "course-5", "course-6"].includes(course.id)
    )
  },
  purepearl: {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    tag: "Creator",
    role: "Passionate UI/UX, Web designer",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me."
    ],
    avatar: "/images/creator-purepearl-lg.png",
    productsCount: 3,
    followersCount: 12,
    courses: ALL_COURSES_DATA.filter((course) =>
      ["course-1", "course-2", "course-3", "course-4", "course-5", "course-6"].includes(course.id)
    )
  }
};

export function getCreator(id: string): Creator | undefined {
  const normalizedId = id.toLowerCase().trim();
  return CREATORS_DATA[normalizedId];
}
