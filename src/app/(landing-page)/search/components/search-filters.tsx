"use client";

import { SEARCH_CATEGORIES } from "@/data";

interface SearchFiltersProps {
  selectedLevel: string;
  onSelectLevel: (lvl: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
}

export function SearchFilters({
  selectedLevel,
  onSelectLevel,
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  onClearFilters
}: SearchFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Top Filter Buttons: Filter, Level, Category, and Most relevant */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Filter button */}
          <button
            type="button"
            onClick={onClearFilters}
            className="flex h-[42px] items-center gap-2 rounded-full border border-border-soft bg-white px-5 font-sans text-[14px] font-medium text-text-ink transition-colors hover:bg-surface-subtle"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <span>Filter</span>
          </button>

          {/* Level Filter Dropdown/Pill */}
          <div className="relative">
            <select
              value={selectedLevel}
              onChange={(e) => onSelectLevel(e.target.value)}
              className="flex h-[42px] cursor-pointer appearance-none items-center rounded-full border border-border-soft bg-white pr-5 pl-9 font-sans text-[14px] font-medium text-text-ink transition-colors hover:bg-surface-subtle focus:outline-none"
            >
              <option value="All">Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            {/* Level Icon (bars) */}
            <div className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-text-ink">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="6" y1="20" x2="6" y2="16" />
              </svg>
            </div>
          </div>

          {/* Category Filter Dropdown/Pill */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => onSelectCategory(e.target.value)}
              className="flex h-[42px] cursor-pointer appearance-none items-center rounded-full border border-border-soft bg-white pr-5 pl-9 font-sans text-[14px] font-medium text-text-ink transition-colors hover:bg-surface-subtle focus:outline-none"
            >
              <option value="Featured">Category</option>
              {SEARCH_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {/* Category Icon */}
            <div className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-text-ink">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="5" r="3" />
                <rect x="3" y="15" width="6" height="6" rx="1" />
                <rect x="15" y="15" width="6" height="6" rx="1" />
                <path d="M12 8v4" />
                <path d="M6 12h12" />
                <path d="M6 12v3" />
                <path d="M18 12v3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Sort Dropdown: Most relevant */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="flex h-[42px] cursor-pointer appearance-none items-center rounded-full border border-border-soft bg-white pr-6 pl-9 font-sans text-[14px] font-medium text-text-ink transition-colors hover:bg-surface-subtle focus:outline-none"
          >
            <option value="Most relevant">Most relevant</option>
            <option value="Highest rated">Highest rated</option>
            <option value="Title A-Z">Title A-Z</option>
          </select>
          {/* Sort Icon */}
          <div className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-text-ink">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="16" y2="12" />
              <line x1="4" y1="18" x2="10" y2="18" />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Pills Row - On White Background directly below filter controls */}
      <div className="no-scrollbar flex gap-2.5 overflow-x-auto pb-1">
        {SEARCH_CATEGORIES.map((category) => {
          const isSelected = selectedCategory.toLowerCase() === category.toLowerCase();
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`shrink-0 rounded-full px-5 py-2.5 font-sans text-[14px] font-medium transition-all ${
                isSelected
                  ? "bg-brand-lime text-text-ink shadow-sm"
                  : "bg-surface-subtle text-text-subtle hover:bg-border-light"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
