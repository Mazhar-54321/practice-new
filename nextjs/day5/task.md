# Day 003 — Next.js: Middleware

**Date:** 24-03-2026

---

## Task 1 — What does this middleware do?

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const path = request.nextUrl.pathname;

  if (!token && path.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
```

This is authentication middleware. It checks if a token exists in cookies. If there is no token and the user tries to navigate to any dashboard route, they are redirected to login. Otherwise the request passes through. The matcher limits this middleware to only dashboard routes.

---

## Task 2 — Fix the bug

```ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

**Bug 1:** Missing `!` — should redirect when NOT logged in, not when logged in.

**Bug 2:** Missing `.value` — `request.cookies.get('token')` returns a cookie object, not the value. Without `.value` token is always truthy.

**Fixed:**

```ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

---

## Task 3 — Authentication Middleware

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const path = request.nextUrl.pathname;

  if (!token && path.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && path === "/login") {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/login"],
};
```

---

## Task 4 — In my own words

**What is middleware in one line?**

Middleware is a function that intercepts requests (all or some) and decides to let through, redirect or rewrite before the page renders.

**Redirect vs Rewrite:**

Redirect = URL changes in browser. Rewrite = URL stays same but different page is served.

**Why should middleware NOT access database directly?**

Middleware runs on the Edge — close to the user for speed. Edge runtime does not support Node.js APIs like database connections. Use cookies or tokens for auth checks instead.

---

**Commit message:**

```
Day 003 | Next.js: Middleware — Authentication pattern
```
