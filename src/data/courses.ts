import type { CourseCard, CourseDetail } from "@/types";

export const SEARCH_CATEGORIES: string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking"
];

// All courses matching the catalog items
export const ALL_COURSES_DATA: CourseCard[] = [
  // Page 1 items
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
    image: "/images/course-card-1.png",
    category: "UI/UX Design"
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
    image: "/images/course-card-2.png",
    category: "Drawing & Painting"
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
    image: "/images/course-card-3.png",
    category: "Data Science"
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
    image: "/images/course-card-4.png",
    category: "Productivity"
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
    image: "/images/course-card-5.png",
    category: "Marketing"
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
    image: "/images/course-card-6.png",
    category: "Creative Marketing"
  },

  // Page 2 items with distinct course identities
  {
    id: "course-7",
    title: "Advanced Figma Component Architecture",
    author: "designhub studio",
    rating: 4.8,
    price: "$35",
    period: "/lifetime",
    level: "Intermediate",
    lessons: "24 Lessons",
    duration: "3 hours 45 mins",
    comments: "82 Comments",
    studentsCount: "42+",
    image: "/images/course-card-1.png",
    category: "UI/UX Design"
  },
  {
    id: "course-8",
    title: "Digital Vector Illustration & Asset Design",
    author: "pixelcraft",
    rating: 4.6,
    price: "$29",
    period: "/lifetime",
    level: "Intermediate",
    lessons: "19 Lessons",
    duration: "2 hours 50 mins",
    comments: "47 Comments",
    studentsCount: "31+",
    image: "/images/course-card-2.png",
    category: "Drawing & Painting"
  },
  {
    id: "course-9",
    title: "Data Analytics & Python Pipeline",
    author: "dataforge studio",
    rating: 4.9,
    price: "$45",
    period: "/lifetime",
    level: "Advanced",
    lessons: "32 Lessons",
    duration: "5 hours 10 mins",
    comments: "114 Comments",
    studentsCount: "58+",
    image: "/images/course-card-3.png",
    category: "Data Science"
  },
  {
    id: "course-10",
    title: "Deep Work & Remote Productivity Habits",
    author: "mindflow labs",
    rating: 4.7,
    price: "$20",
    period: "/lifetime",
    level: "Beginner",
    lessons: "14 Lessons",
    duration: "1 hour 45 mins",
    comments: "39 Comments",
    studentsCount: "20+",
    image: "/images/course-card-4.png",
    category: "Productivity"
  },
  {
    id: "course-11",
    title: "Venture Capital & Financial Modeling",
    author: "capital ventures",
    rating: 4.8,
    price: "$50",
    period: "/lifetime",
    level: "Advanced",
    lessons: "28 Lessons",
    duration: "4 hours 30 mins",
    comments: "93 Comments",
    studentsCount: "45+",
    image: "/images/course-card-5.png",
    category: "Marketing"
  },
  {
    id: "course-12",
    title: "Modern Growth Hacking & Viral Marketing",
    author: "growthpulse",
    rating: 4.6,
    price: "$30",
    period: "/lifetime",
    level: "Intermediate",
    lessons: "22 Lessons",
    duration: "3 hours 15 mins",
    comments: "64 Comments",
    studentsCount: "38+",
    image: "/images/course-card-6.png",
    category: "Creative Marketing"
  },

  // Page 3 items with distinct course identities
  {
    id: "course-13",
    title: "Design Systems & Token Automation",
    author: "tokensmith",
    rating: 4.9,
    price: "$40",
    period: "/lifetime",
    level: "Advanced",
    lessons: "26 Lessons",
    duration: "3 hours 55 mins",
    comments: "78 Comments",
    studentsCount: "35+",
    image: "/images/course-card-1.png",
    category: "UI/UX Design"
  },
  {
    id: "course-14",
    title: "Watercolor & Acrylic Digital Masterclass",
    author: "artisan guild",
    rating: 4.7,
    price: "$28",
    period: "/lifetime",
    level: "Beginner",
    lessons: "18 Lessons",
    duration: "2 hours 40 mins",
    comments: "52 Comments",
    studentsCount: "29+",
    image: "/images/course-card-2.png",
    category: "Drawing & Painting"
  },
  {
    id: "course-15",
    title: "Machine Learning Foundations for Developers",
    author: "neuralcore",
    rating: 4.9,
    price: "$49",
    period: "/lifetime",
    level: "Advanced",
    lessons: "36 Lessons",
    duration: "6 hours 20 mins",
    comments: "142 Comments",
    studentsCount: "67+",
    image: "/images/course-card-3.png",
    category: "Data Science"
  },
  {
    id: "course-16",
    title: "Time Boxing & Workflow Automation",
    author: "flowstate",
    rating: 4.5,
    price: "$22",
    period: "/lifetime",
    level: "Beginner",
    lessons: "12 Lessons",
    duration: "1 hour 30 mins",
    comments: "31 Comments",
    studentsCount: "18+",
    image: "/images/course-card-4.png",
    category: "Productivity"
  },
  {
    id: "course-17",
    title: "Social Media Strategy & Brand Building",
    author: "influencelab",
    rating: 4.6,
    price: "$27",
    period: "/lifetime",
    level: "Intermediate",
    lessons: "20 Lessons",
    duration: "2 hours 55 mins",
    comments: "61 Comments",
    studentsCount: "33+",
    image: "/images/course-card-5.png",
    category: "Social Media"
  },
  {
    id: "course-18",
    title: "The Art of Gourmet Sourdough & Baking",
    author: "chef ateliers",
    rating: 4.8,
    price: "$32",
    period: "/lifetime",
    level: "Beginner",
    lessons: "16 Lessons",
    duration: "2 hours 25 mins",
    comments: "74 Comments",
    studentsCount: "41+",
    image: "/images/course-card-6.png",
    category: "Cooking"
  },

  // Page 4 & 5 items for full pagination range
  {
    id: "course-19",
    title: "Music Production & Sound Synthesis in Ableton",
    author: "audioforge",
    rating: 4.9,
    price: "$42",
    period: "/lifetime",
    level: "Intermediate",
    lessons: "30 Lessons",
    duration: "4 hours 45 mins",
    comments: "88 Comments",
    studentsCount: "50+",
    image: "/images/course-card-1.png",
    category: "Music"
  },
  {
    id: "course-20",
    title: "2D Character Animation Principles",
    author: "animoto studio",
    rating: 4.8,
    price: "$38",
    period: "/lifetime",
    level: "Intermediate",
    lessons: "25 Lessons",
    duration: "3 hours 40 mins",
    comments: "69 Comments",
    studentsCount: "37+",
    image: "/images/course-card-2.png",
    category: "Animation"
  },
  {
    id: "course-21",
    title: "Predictive Analytics with SQL & Tableau",
    author: "insightly",
    rating: 4.7,
    price: "$36",
    period: "/lifetime",
    level: "Advanced",
    lessons: "21 Lessons",
    duration: "3 hours 10 mins",
    comments: "55 Comments",
    studentsCount: "28+",
    image: "/images/course-card-3.png",
    category: "Data Science"
  },
  {
    id: "course-22",
    title: "Notion Systems for High-Performance Teams",
    author: "orgcraft",
    rating: 4.6,
    price: "$24",
    period: "/lifetime",
    level: "Beginner",
    lessons: "15 Lessons",
    duration: "2 hours 05 mins",
    comments: "43 Comments",
    studentsCount: "25+",
    image: "/images/course-card-4.png",
    category: "Productivity"
  },
  {
    id: "course-23",
    title: "Email Marketing Funnels that Convert",
    author: "conversionist",
    rating: 4.7,
    price: "$33",
    period: "/lifetime",
    level: "Intermediate",
    lessons: "18 Lessons",
    duration: "2 hours 35 mins",
    comments: "62 Comments",
    studentsCount: "34+",
    image: "/images/course-card-5.png",
    category: "Marketing"
  },
  {
    id: "course-24",
    title: "French Pastry Masterclass & Technique",
    author: "patisserie pro",
    rating: 4.9,
    price: "$39",
    period: "/lifetime",
    level: "Intermediate",
    lessons: "22 Lessons",
    duration: "3 hours 30 mins",
    comments: "91 Comments",
    studentsCount: "48+",
    image: "/images/course-card-6.png",
    category: "Cooking"
  },
  {
    id: "course-25",
    title: "Harmonic Theory & Songwriting Foundations",
    author: "soundcraft lab",
    rating: 4.8,
    price: "$35",
    period: "/lifetime",
    level: "Beginner",
    lessons: "20 Lessons",
    duration: "3 hours 00 mins",
    comments: "49 Comments",
    studentsCount: "30+",
    image: "/images/course-card-1.png",
    category: "Music"
  },
  {
    id: "course-26",
    title: "3D Motion Design with Cinema 4D",
    author: "renderforge",
    rating: 4.9,
    price: "$55",
    period: "/lifetime",
    level: "Advanced",
    lessons: "34 Lessons",
    duration: "5 hours 40 mins",
    comments: "105 Comments",
    studentsCount: "54+",
    image: "/images/course-card-2.png",
    category: "Animation"
  },
  {
    id: "course-27",
    title: "Full-Stack Analytics Engineering",
    author: "stackmetrics",
    rating: 4.8,
    price: "$48",
    period: "/lifetime",
    level: "Advanced",
    lessons: "29 Lessons",
    duration: "4 hours 50 mins",
    comments: "84 Comments",
    studentsCount: "43+",
    image: "/images/course-card-3.png",
    category: "Data Science"
  },
  {
    id: "course-28",
    title: "Habit Stacking & Cognitive Performance",
    author: "mindflow labs",
    rating: 4.6,
    price: "$20",
    period: "/lifetime",
    level: "Beginner",
    lessons: "13 Lessons",
    duration: "1 hour 40 mins",
    comments: "37 Comments",
    studentsCount: "19+",
    image: "/images/course-card-4.png",
    category: "Productivity"
  },
  {
    id: "course-29",
    title: "Paid Acquisition on Meta & TikTok Ads",
    author: "mediahub",
    rating: 4.7,
    price: "$34",
    period: "/lifetime",
    level: "Intermediate",
    lessons: "23 Lessons",
    duration: "3 hours 20 mins",
    comments: "72 Comments",
    studentsCount: "39+",
    image: "/images/course-card-5.png",
    category: "Marketing"
  },
  {
    id: "course-30",
    title: "Knife Skills & Classical Kitchen Foundations",
    author: "culinary institute",
    rating: 4.9,
    price: "$30",
    period: "/lifetime",
    level: "Beginner",
    lessons: "16 Lessons",
    duration: "2 hours 15 mins",
    comments: "68 Comments",
    studentsCount: "36+",
    image: "/images/course-card-6.png",
    category: "Cooking"
  }
];

export const DEFAULT_COURSE_DETAIL: CourseDetail = {
  id: "course-2",
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  author: "purepearl studio",
  authorRole: "Professional Creator",
  authorBio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  authorAvatar: "/images/author-purepearl.png",
  rating: 4.8,
  reviewsCount: 172,
  studentsCount: "199 Students",
  price: "$25",
  period: "/lifetime",
  level: "Intermediate",
  totalLessonsText: "112 Lessons",
  totalHoursText: "24 hours",
  videoPreviewImage: "/images/course-detail-video-cover.png",
  description: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios."
  ],
  sneakPeakImages: [
    "/images/sneak-peak-1.png",
    "/images/sneak-peak-2.png",
    "/images/sneak-peak-3.png",
    "/images/sneak-peak-4.png"
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio"
  ],
  includes: [
    "Learning Resources",
    "Quality Lesson Videos",
    "Certificate of Completion",
    "Private Consultation"
  ],
  curriculum: [
    {
      id: "mod-1",
      number: "Module 1",
      title: "Module 1: Introduction to Digital Assets",
      duration: "12 mins",
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation."
    },
    {
      id: "mod-2",
      number: "Module 2",
      title: "Module 2: Design Principles for Impact",
      duration: "21 mins",
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
    },
    {
      id: "mod-4",
      number: "Module 4",
      title: "Module 4: User-Centric Design Strategies",
      duration: "18 mins",
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
    },
    {
      id: "mod-5",
      number: "Module 5",
      title: "Module 5: Interactive Media and Engagement",
      duration: "25 mins",
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."
    },
    {
      id: "mod-6",
      number: "Module 6",
      title: "Module 6: Project Showcase and Critique",
      duration: "15 mins",
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."
    },
    {
      id: "mod-7",
      number: "Module 7",
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      duration: "20 mins",
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."
    }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "PurePearl Studio",
      role: "UI/UX Designer",
      rating: 5,
      date: "a year ago",
      avatar: "/images/author-purepearl.png",
      comment:
        "“The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!”"
    },
    {
      id: "rev-2",
      author: "Albert Flores",
      role: "UI/UX Designer",
      rating: 5,
      date: "a year ago",
      avatar: "/images/course-avatar-1.png",
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I’ve learned!"
    },
    {
      id: "rev-3",
      author: "Cody Fisher",
      role: "UI/UX Designer",
      rating: 5,
      date: "a year ago",
      avatar: "/images/course-avatar-2.png",
      comment:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."
    },
    {
      id: "rev-4",
      author: "Brooklyn Simmons",
      role: "UI/UX Designer",
      rating: 5,
      date: "a year ago",
      avatar: "/images/course-avatar-3.png",
      comment:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."
    }
  ]
};

export function getCourseDetail(courseId: string): CourseDetail | null {
  const course = ALL_COURSES_DATA.find((c) => c.id === courseId);
  if (!course) return null;

  return {
    ...DEFAULT_COURSE_DETAIL,
    id: course.id,
    title:
      course.id === "course-2"
        ? "Build Digital Asset: A Comprehensive Guide"
        : `${course.title}: A Comprehensive Guide`,
    subtitle: `Unlock the Power of ${course.category || "Creation"} with Expert Guidance`,
    author: course.author,
    price: course.price,
    period: course.period,
    level: course.level,
    totalLessonsText: "112 Lessons",
    totalHoursText: "24 hours",
    videoPreviewImage: "/images/course-detail-video-cover.png",
    studentsCount: `${course.studentsCount} Students`
  };
}
