export interface CourseLesson {
  id: string;
  number: string;
  title: string;
  duration?: string;
  description?: string;
}

export interface CourseReview {
  id: string;
  author: string;
  role?: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

export interface CourseDetail {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  authorAvatar?: string;
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  price: string;
  period: string;
  level: string;
  totalLessonsText: string;
  totalHoursText: string;
  videoPreviewImage: string;
  description: string[];
  sneakPeakImages: string[];
  keyPoints: string[];
  includes: string[];
  curriculum: CourseLesson[];
  reviews?: CourseReview[];
}
