import type { ReactNode } from "react";

import { Footer, Header } from "@/components/layouts";

export default function LandingPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <div className="bg-brand-primary">
        <Header />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
