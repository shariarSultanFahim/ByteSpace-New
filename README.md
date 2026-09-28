GitHub repository: https://github.com/shariarSultanFahim/ByteSpace-New
Live site: https://byte-space-new-psi.vercel.app

WHAT I BUILT

Required

- Landing page, built from the Figma design: header, hero with search, logo partners, featured courses with category filters, learning path categories, creator/growth sections, CTA banner, testimonials, and footer.

Bonus

- Register and Login pages with working email/password authentication using Supabase (Zod validation, error and loading states, toast feedback, redirect after success, and a logged-in navbar with Logout).
- Extra pages from the same Figma file: Search (working search, filters and sorting, URL-synced), Course Details (dynamic route with tabs and sidebar), Creator Profile, and a custom 404 page.

TECH STACK
Next.js (App Router), TypeScript (strict, no `any`), Tailwind CSS v4, Supabase Auth, Zod, Sonner. Deployed on Vercel.

CODE STRUCTURE

- Route groups: `(landing-page)` uses a shared layout with Header and Footer, and `(authentication)` has its own layout, so pages don't repeat them.
- Reusable components in `src/components/` (widgets, layouts, shared UI), for example one `CourseCard` used on the landing, search and creator pages.
- Shared typed data in `src/data` and `src/types`.
- All assets were exported from Figma and stored locally in `public/images/`.
- ESLint, Prettier and Husky hooks pass with 0 warnings. Typecheck and production build pass.

GIT WORKFLOW
Each piece of work was done on dev branch and merged through a PR, with nothing committed directly to main: landing page, auth, search, course details, 404, route-group refactor, and creator profile.

NOTES FOR THE REVIEWER

- To try authentication, register with any email and a password of at least 6 characters. Email confirmation is disabled for this project, so login works right away.
- Facebook and Google buttons on the login page are UI only (they show a "coming soon" message), since social OAuth isn't configured.
- Courses and creators come from mock data (no backend), so search, filters and details work on that data.
- "Enroll Now", Share and similar actions show toast feedback only, with no payment logic.
- To run locally: copy `.env.example` to `.env.local`, add the Supabase URL and anon key, then run `npm install` and `npm run dev`.
