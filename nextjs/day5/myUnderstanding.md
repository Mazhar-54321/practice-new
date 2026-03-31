# My Understanding — Next.js Day 003: Middleware

Middleware is a function which intercepts a request (all or some) and decides to let through, redirect or render a new page with the same URL. It is written in `middleware.ts` in the Next.js app root.

Middleware is not a renderer — it is a gatekeeper. It decides where you go, it doesn't build the page.

The request object contains:

- URL → what page is being requested
- Cookies → user's stored data (token, session)
- Headers → metadata
- Method → GET, POST etc

Without matcher — runs on every request including static files. With matcher — runs only on specified routes.

3 things middleware can return:

1. `NextResponse.next()` — let through
2. `NextResponse.redirect()` — redirect, URL changes in browser
3. `NextResponse.rewrite()` — URL stays same, different page served

Middleware runs on the Edge — cannot access database directly. Use cookies or tokens for auth checks.
