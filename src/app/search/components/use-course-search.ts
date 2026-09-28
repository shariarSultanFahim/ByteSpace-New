"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { ALL_COURSES_DATA } from "@/data";

import type { CourseCard } from "@/types";

export interface UseCourseSearchReturn {
  searchInput: string;
  setSearchInput: (value: string) => void;
  selectedCategory: string;
  selectedLevel: string;
  sortBy: string;
  currentPage: number;
  totalPages: number;
  totalResults: number;
  queryParam: string;
  currentCourses: CourseCard[];
  handleSearchSubmit: (e: React.FormEvent) => void;
  handleCategorySelect: (category: string) => void;
  handleLevelSelect: (level: string) => void;
  handleSortChange: (sort: string) => void;
  handlePageChange: (page: number) => void;
  clearAllFilters: () => void;
}

export function useCourseSearch(itemsPerPage: number = 6): UseCourseSearchReturn {
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryParam = searchParams.get("q") ?? "";
  const categoryParam = searchParams.get("category") ?? "Featured";
  const pageParam = parseInt(searchParams.get("page") ?? "1", 10);
  const initialPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const [searchInput, setSearchInput] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Most relevant");
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const updateUrl = (q: string, category: string, page: number = 1) => {
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (category && category !== "Featured") params.set("category", category);
    if (page > 1) params.set("page", page.toString());

    router.push(`/search${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    updateUrl(searchInput, selectedCategory, 1);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    updateUrl(searchInput, category, 1);
  };

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrl(searchInput, selectedCategory, page);
    window.scrollTo({ top: 340, behavior: "smooth" });
  };

  const clearAllFilters = () => {
    setSearchInput("");
    setSelectedCategory("Featured");
    setSelectedLevel("All");
    setSortBy("Most relevant");
    setCurrentPage(1);
    updateUrl("", "Featured", 1);
  };

  const filteredCourses = useMemo(() => {
    return ALL_COURSES_DATA.filter((course) => {
      const q = queryParam.toLowerCase().trim();
      const matchesQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.author.toLowerCase().includes(q) ||
        (course.category && course.category.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === "Featured" ||
        (course.category && course.category.toLowerCase() === selectedCategory.toLowerCase());

      const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;

      return matchesQuery && matchesCategory && matchesLevel;
    }).sort((a, b) => {
      if (sortBy === "Highest rated") return b.rating - a.rating;
      if (sortBy === "Title A-Z") return a.title.localeCompare(b.title);
      return 0;
    });
  }, [queryParam, selectedCategory, selectedLevel, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / itemsPerPage));
  const validPage = Math.min(Math.max(1, currentPage), totalPages);

  const currentCourses = useMemo(() => {
    const startIndex = (validPage - 1) * itemsPerPage;
    return filteredCourses.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCourses, validPage, itemsPerPage]);

  return {
    searchInput,
    setSearchInput,
    selectedCategory,
    selectedLevel,
    sortBy,
    currentPage: validPage,
    totalPages,
    totalResults: filteredCourses.length,
    queryParam,
    currentCourses,
    handleSearchSubmit,
    handleCategorySelect,
    handleLevelSelect,
    handleSortChange,
    handlePageChange,
    clearAllFilters
  };
}
