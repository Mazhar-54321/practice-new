# Takeaway — Next.js Day 002: Data Fetching & Caching

- **Full Route Cache = server. Router Cache = browser. Full = all users. Router = one user — never swap these**

- **Request Memoization lifespan = one server request — not component re-render. Server concept, not React concept**

- **Default cache option = `force-cache` — every fetch is cached unless you opt out**

- **One `no-store` fetch = entire page becomes dynamic — Next.js is all or nothing per page**

- **Static pages = cached once, served to everyone. Dynamic pages = rendered fresh per user, never shared**
