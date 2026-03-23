# My Understanding — Next.js Day 002: Data Fetching & Caching

Next.js memoizes routes at both server and browser layers:

- Server cache = shared across all users
- Browser cache = current user only

Next.js has 4 cache levels:

1. **Request Memoization** — deduplicates same fetch calls within one render. Cleared after server request finishes. Avoids duplicate API calls for same component.

2. **Data Cache** — caches API responses on server to avoid hitting the database unnecessarily. Persists across requests.

3. **Full Route Cache** — caches entire HTML page on server. First user triggers render, HTML is cached, all remaining users get cached HTML instantly.

4. **Router Cache** — caches visited pages in browser memory. When user navigates back, page is served from browser — no server hit.

Cache options:

- `force-cache` — cache forever (default)
- `no-store` — never cache, always fresh
- `revalidate: N` — refresh every N seconds
- `revalidatePath('/route')` — clear cache on demand
