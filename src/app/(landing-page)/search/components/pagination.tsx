"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex items-center justify-center gap-2">
      {/* Prev Button */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex size-10 items-center justify-center rounded-full border border-border-soft transition-colors hover:bg-surface-subtle disabled:pointer-events-none disabled:opacity-40"
        aria-label="Previous Page"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          type="button"
          onClick={() => onPageChange(pageNum)}
          className={`flex size-10 items-center justify-center rounded-full font-sans text-[15px] font-medium transition-all ${
            currentPage === pageNum
              ? "bg-brand-primary text-white shadow-md"
              : "text-text-subtle hover:bg-surface-subtle"
          }`}
        >
          {pageNum}
        </button>
      ))}

      {/* Next Button */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex size-10 items-center justify-center rounded-full border border-border-soft transition-colors hover:bg-surface-subtle disabled:pointer-events-none disabled:opacity-40"
        aria-label="Next Page"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
