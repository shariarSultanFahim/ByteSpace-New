"use client";

import type { ReactNode } from "react";

import { AuthProvider, CounterProvider, QueryProvider, ThemeProvider } from "@/providers";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CounterProvider>
          <QueryProvider>{children}</QueryProvider>
        </CounterProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
