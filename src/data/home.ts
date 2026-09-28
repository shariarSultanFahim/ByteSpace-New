import type { CategoryCard, CourseCard, TestimonialCard } from "@/types";

export const CATEGORIES_NAV_ROW1: string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing"
];

export const CATEGORIES_NAV_ROW2: string[] = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography"
];

export const CATEGORIES_NAV_ROW3: string[] = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking"
];

export const COURSES_DATA: CourseCard[] = [
  {
    id: "course-1",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    image: "/images/course-card-1.png"
  },
  {
    id: "course-2",
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    image: "/images/course-card-2.png"
  },
  {
    id: "course-3",
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    image: "/images/course-card-3.png"
  },
  {
    id: "course-4",
    title: "Balancing Productivity and Self-Care",
    author: "purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    image: "/images/course-card-4.png"
  },
  {
    id: "course-5",
    title: "Mastering Money Management",
    author: "purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    image: "/images/course-card-5.png"
  },
  {
    id: "course-6",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    studentsCount: "26+",
    image: "/images/course-card-6.png"
  }
];

export const CATEGORIES_CARDS_DATA: CategoryCard[] = [
  {
    id: "cat-design",
    title: "Design",
    icon: "/images/category-design.svg"
  },
  {
    id: "cat-dev",
    title: "Development",
    icon: "/images/category-dev.svg"
  },
  {
    id: "cat-it",
    title: "IT & Software",
    icon: "/images/category-it.svg"
  },
  {
    id: "cat-business",
    title: "Business",
    icon: "/images/category-business.svg"
  },
  {
    id: "cat-marketing",
    title: "Marketing",
    icon: "/images/category-marketing.svg"
  },
  {
    id: "cat-photography",
    title: "Photography",
    icon: "/images/category-photo.svg"
  }
];

export const TESTIMONIALS_DATA: TestimonialCard[] = [
  {
    id: "testi-1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    avatar: "/images/testimonial-1.png"
  },
  {
    id: "testi-2",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    avatar: "/images/testimonial-2.png"
  },
  {
    id: "testi-3",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    avatar: "/images/testimonial-3.png"
  }
];

export const PARTNERS_DATA = [
  { id: "p1", name: "Partner 1", logo: "/images/partner-1.svg" },
  { id: "p2", name: "Partner 2", logo: "/images/partner-2.svg" },
  { id: "p3", name: "Partner 3", logo: "/images/partner-3.svg" },
  { id: "p4", name: "Partner 4", logo: "/images/partner-4.svg" },
  { id: "p5", name: "Partner 5", logo: "/images/partner-5.svg" }
];
