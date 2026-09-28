export interface CourseCard {
  id: string;
  title: string;
  author: string;
  rating: number;
  price: string;
  period: string;
  level: string;
  lessons: string;
  duration: string;
  comments: string;
  studentsCount: string;
  image: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  icon: string;
}

export interface TestimonialCard {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}
