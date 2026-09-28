import type { CourseCard } from "./home";

export interface Creator {
  id: string;
  name: string;
  tag: string;
  role: string;
  bio: string[];
  avatar: string;
  productsCount: number;
  followersCount: number;
  courses: CourseCard[];
}
