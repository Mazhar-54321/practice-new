# Day 001 — Next.js: SSR, SSG, CSR, Hydration & Routing

**Date:** 22-03-2026

---

## Task 1 — Match the rendering strategy

| Scenario                            | Strategy |
| ----------------------------------- | -------- |
| A blog post that never changes      | SSG      |
| A user dashboard with personal data | SSR      |
| A landing page for a product        | SSG      |
| A twitter style live feed           | SSR      |
| A documentation page                | SSG      |
| A shopping cart                     | SSR      |

---

## Task 2 — Spot what's wrong

| Component   | What's wrong                                                       | Why                                                                               |
| ----------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Component 1 | `"use client"` directive is missing — or remove useless `useState` | Server components cannot use `useState` — it is a client only hook                |
| Component 2 | Remove `"use client"`                                              | It forces Next.js to use CSR — defeating the purpose of server side data fetching |

---

## Task 3 — File based routing

| File                       | Route          |
| -------------------------- | -------------- |
| `app/page.tsx`             | `/`            |
| `app/about/page.tsx`       | `/about`       |
| `app/blog/page.tsx`        | `/blog`        |
| `app/blog/[slug]/page.tsx` | `/blog/[slug]` |
| `app/dashboard/page.tsx`   | `/dashboard`   |

---

## Task 4 — In my own words

**What problem does Next.js solve that React alone can't?**

Next.js solves the slow first load and bad SEO of React CSR by rendering HTML on the server — either at build time (SSG) or at request time (SSR).

**What is hydration in one line?**

Hydration is the silent attachment of events to server rendered HTML in the background.

**When would you choose SSG over SSR?**

SSG is used when data is static and does not change per user — it is pre-built and served from CDN.

**What is the difference between App Router and Pages Router?**

Pages Router uses `pages` folder — every component is client by default, data fetching via `getServerSideProps` and `getStaticProps`. App Router uses `app` folder — every component is server by default, data fetching directly inside components, supports Server Components. App Router is the current standard.

---

**Commit message:**

```
Day 001 | Next.js: SSR, SSG, CSR, Hydration, File Based Routing
```
