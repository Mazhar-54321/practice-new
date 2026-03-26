# Day 003 — React Internals: useMemo & useCallback

**Date:** 24-03-2026

---

## Task 1 — Spot the problem

Problem: `filteredResults` is recalculated on every render — expensive calculation not cached.

Fix:

```js
const filteredResults = useMemo(
  () =>
    results.filter((r) => r.name.toLowerCase().includes(query.toLowerCase())),
  [query, results],
);
```

Note: `useMemo` first argument must always be a function — `() => value`, never the value directly.

---

## Task 2 — Spot the problem

Problem: `count` is in the dependency array — every time count changes, `useCallback` creates a new function reference — defeating its purpose. `handleClick` doesn't use `count` so deps should be empty.

Fix:

```js
const handleClick = useCallback(() => {
  console.log("clicked");
}, []); // empty deps — function never changes
```

---

## Task 3 — useMemo or useCallback?

| Situation                             | Hook           |
| ------------------------------------- | -------------- |
| Sorting a list of 10000 users         | useMemo        |
| A function passed to React.memo child | useCallback    |
| Computing total price of cart items   | No hook needed |
| An event handler passed as prop       | useCallback    |
| Filtering a large dataset             | useMemo        |

---

## Task 4 — In my own words

**What is stored in Fiber Node for useMemo and useCallback?**

useMemo stores `[result, deps]` — the computed value and deps.
useCallback stores `[fn, deps]` — the function itself and deps.

**Why is useCallback useless without React.memo?**

Without React.memo the child re-renders on every parent render regardless of props — useCallback has no effect.

**When should you NOT use useMemo?**

When the calculation is not expensive — simple operations like addition. useMemo has its own cost — memory + dep comparison on every render.

---

**Commit message:**

```
Day 003 | React: useMemo & useCallback Internals
```
