GitHub repository: https://github.com/shariarSultanFahim/ByteSpace-New
Live site: https://byte-space-new-psi.vercel.app

WHAT I BUILT

Required

- Landing page, built from the Figma design: header with dynamic route highlighting, hero with search, logo partners, featured courses with category filters, learning path categories, creator/growth double-feature sections, CTA banner, community testimonials, and footer.
- Interactive GSAP animations across the entire application:
  - Multi-step hero timeline entrance (Logo -> Nav Links -> Auth/Actions -> Headline popup -> Search bar spring pop -> Lime arc expansion & student rise -> Floating cards spring pop -> 3D particle ornaments entrance).
  - One-time GSAP `ScrollTrigger` reveal animations on scroll for logo partners, featured courses, categories, creator growth, CTA banner, testimonials, and footer.
  - Page entrance animations for all sub-routes (Search, Course Details, Creator Profile, Login, and Register).
- CSS smooth scrolling enabled across the application for seamless anchor and section navigation.

Bonus

- Register and Login pages with working email/password authentication using Supabase (Zod validation, error and loading states, toast feedback, redirect after success, and a logged-in navbar with Logout).
- Extra pages from the same Figma file: Search (working search, filters and sorting, URL-synced), Course Details (dynamic route with tabs and sidebar), Creator Profile, and a custom 404 page.
- Active route detection in the navbar with distinct brand-lime visual indicators and underline styling.

TECH STACK
Next.js (App Router), TypeScript (strict, no `any`), Tailwind CSS v4, GSAP (@gsap/react, ScrollTrigger), Supabase Auth, Zod, Sonner. Deployed on Vercel.

CODE STRUCTURE

- Route groups: `(landing-page)` uses a shared layout with Header and Footer, and `(authentication)` has its own layout, so pages don't repeat them.
- Reusable components in `src/components/` (widgets, layouts, shared UI), for example one `CourseCard` used on the landing, search and creator pages.
- GSAP integration: registered plugins with `@gsap/react` lifecycle cleanup and `clearProps` handling to prevent SSR hydration or layout shifts.
- Shared typed data in `src/data` and `src/types`.
- All assets were exported from Figma and stored locally in `public/images/`.
- ESLint, Prettier and Husky hooks pass with 0 warnings. Typecheck and production build pass.

GIT WORKFLOW
Each piece of work was done on dev branch and merged through a PR, with nothing committed directly to main: landing page, auth, search, course details, 404, route-group refactor, creator profile, and GSAP animation system.

NOTES FOR THE REVIEWER

- To try authentication, register with any email and a password of at least 6 characters. Email confirmation is disabled for this project, so login works right away.
- Facebook and Google buttons on the login page are UI only (they show a "coming soon" message), since social OAuth isn't configured.
- Courses and creators come from mock data (no backend), so search, filters and details work on that data.
- "Enroll Now", Share and similar actions show toast feedback only, with no payment logic.
- To run locally: copy `.env.example` to `.env.local`, add the Supabase URL and anon key, then run `npm install` and `npm run dev`.
