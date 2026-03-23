# My Understanding — Next.js Day 001: SSR, SSG, CSR & Routing

React is purely CSR — whenever a React app is visited the browser gets empty HTML, then the JS bundle (React + code) executes and the browser gets the final HTML.

Problems with CSR:

1. Slower first load
2. Not SEO friendly

Next.js solves this by rendering HTML on the server. It has two strategies:

**SSR (Server Side Rendering)** — HTML is created on the Node.js server at request time and sent to the browser ready made. Events are not attached yet — they are silently attached in the background which is called hydration.

**SSG (Static Site Generation)** — HTML is pre-built at build time once and served from CDN. Used when data is static and does not change per user. Fastest possible delivery.

**CSR** — if we use client side components everywhere in Next.js there is no meaning of switching to Next.js. We have to smartly use SSR and CSR together.

Next.js has inbuilt file based routing via the `app` folder (App Router — current standard) where every `page.tsx` file becomes a route. Previously `pages` folder was used (Pages Router — old system).

App Router — server components by default, data fetching directly in components.
Pages Router — client components by default, data fetching via `getServerSideProps` and `getStaticProps`.
