# Day 002 — Next.js: Data Fetching & Caching

**Date:** 23-03-2026

---

## Task 1 — Match the cache level

| Scenario                                       | Cache Level         |
| ---------------------------------------------- | ------------------- |
| Two components fetch same API in one render    | Request Memoization |
| 1000 users hit the same blog page              | Full Route Cache    |
| User navigates back to previously visited page | Router Cache        |
| API response stored on server across requests  | Data Cache          |

---

## Task 2 — Which cache option?

| Situation                                  | Cache option     |
| ------------------------------------------ | ---------------- |
| News article that never changes            | `force-cache`    |
| Stock price that updates every minute      | `revalidate: 60` |
| User dashboard with personal data          | `no-store`       |
| Product page that updates when admin edits | `revalidatePath` |

---

## Task 3 — Spot what's wrong

| Page      | What's wrong                                                                | Why                                                    |
| --------- | --------------------------------------------------------------------------- | ------------------------------------------------------ |
| BlogPage  | `cache: 'no-store'` is useless — API endpoint is static                     | Static content should use `force-cache` not `no-store` |
| Dashboard | Should pass specific user ID — `/user` makes no sense for personalised data | User specific data needs unique endpoint per user      |

---

## Task 4 — In my own words

**What is the difference between Full Route Cache and Router Cache?**

Full Route Cache = server side — shared across all users. Router Cache = browser side — current user only when navigating between pages.

**Why does one `no-store` fetch make the entire page dynamic?**

`no-store` forces fresh fetch every time — Next.js treats the entire page as dynamic because one uncached fetch means the page cannot be pre-rendered.

**What is Request Memoization in one line?**

Request Memoization deduplicates same fetch calls within one render — cleared after server request finishes.

---

**Commit message:**

```
Day 002 | Next.js: Data Fetching, Caching Levels, Cache Options
```
