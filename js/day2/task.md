# Day 002 — JS Internals: Event Loop

**Date:** 20-03-2026

---

## Task 1 — Basic Event Loop

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

| Step | What happens                                                                                 | Output |
| ---- | -------------------------------------------------------------------------------------------- | ------ |
| 1    | `console.log("A")` pushed to Call Stack → runs → popped                                      | A      |
| 2    | `setTimeout` handed to Web API → removed from Call Stack → JS moves on                       | —      |
| 3    | `console.log("C")` pushed to Call Stack → runs → popped                                      | C      |
| 4    | Call Stack empty → Web API pushes callback to Callback Queue → Event Loop picks it up → runs | B      |

---

## Task 2 — Promise vs setTimeout

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
```

Output: `1, 4, 3, 2`

Why: synchronous code runs first (1, 4), then microtask queue (Promise → 3), then callback queue (setTimeout → 2)

---

## Task 3 — Nested Promise

```js
Promise.resolve()
  .then(() => {
    console.log("A");
    return Promise.resolve();
  })
  .then(() => console.log("B"));

setTimeout(() => console.log("C"), 0);
```

Output: `A, B, C`

Why: Microtask queue drains completely (A, B) before setTimeout callback runs (C)

---

## Task 4 — In my own words

**What is the Event Loop in one line?**

Event Loop is a watcher that watches Call Stack, Callback Queue and Microtask Queue — when Call Stack is empty it looks for Microtask Queue, once Microtask Queue is empty it looks for Callback Queue.

**Why does `setTimeout(fn, 0)` not run immediately?**

Because setTimeout is not part of JS — it is handled by Web API and Web API pushes it to Callback Queue which only runs after Call Stack and Microtask Queue are empty.

**Who pushes to Callback Queue and who pushes to Microtask Queue?**

Web API pushes to Callback Queue. JS Engine pushes to Microtask Queue.

**What is the order of execution?**

Call Stack → Microtask Queue → Callback Queue. The next is reached only when current is fully drained. Sometimes we may not reach Callback Queue at all — infinite `.then` chains will starve the Microtask Queue and Callback Queue never gets a turn.

---

**Commit message:**

```
Day 002 | JS: Event Loop
```
