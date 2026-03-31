# Takeaway — Next.js Day 003: Middleware

- **Middleware = gatekeeper — decides where you go, doesn't build the page**

- **Always use `.value` when reading cookies — `request.cookies.get('token')?.value` not just `request.cookies.get('token')`**

- **Without matcher = runs on every request — expensive. Always add matcher.**

- **Redirect = URL changes in browser. Rewrite = URL stays same, different page served.**

- **Middleware runs on Edge — no Node.js APIs, no database calls — use cookies/tokens only**

- **Always redirect logged in users away from login page — both directions matter**
