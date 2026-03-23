# Day 004 — JS Internals: Closures

**Date:** 23-03-2026

---

## Task 1 — Predict the output

```js
function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));
console.log(double(10));
```

Output: `10, 15, 20`

Why: A closure is formed — inner function references outer function's member `x`. Each call to `makeMultiplier` creates a separate lexical environment with its own `x`.

---

## Task 2 — Predict the output

```js
function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const c1 = counter();
const c2 = counter();

c1.increment();
c1.increment();
c1.increment();
c2.increment();

console.log(c1.getCount());
console.log(c2.getCount());
```

Output: `3, 1`

Why: `c1` and `c2` have separate lexical environments. Each call to `counter()` creates a brand new environment with its own `count`.

---

## Task 3 — Spot the memory leak

```js
function getData() {
  const hugeArray = new Array(1000000).fill("data");
  return function () {
    console.log("done");
  };
}

const fn = getData();
```

Problem: `hugeArray` stays in memory because the inner function's `[[Environment]]` references `getData`'s entire lexical environment — GC works at environment level not variable level so the whole environment stays alive.

Fix 1 — nullify:

```js
function getData() {
  let hugeArray = new Array(1000000).fill("data");
  const result = processData(hugeArray);
  hugeArray = null; // GC can now collect the 1MB data
  return function () {
    console.log(result);
  };
}
```

Fix 2 — separate environments (best practice):

```js
function processHeavyData() {
  const hugeArray = new Array(1000000).fill("data");
  return processData(hugeArray);
}

function getData() {
  const result = processHeavyData();
  return function () {
    console.log(result);
  };
}
```

---

## Task 4 — In my own words

**What is `[[Environment]]` in one line?**

`[[Environment]]` is a property attached to functions at the time of creation which holds a reference to the outer lexical scope.

**Why doesn't the garbage collector clear outer's environment?**

Since the inner function's `[[Environment]]` references the outer's lexical environment, GC cannot clear it — GC only clears memory when there are zero references to it.

**What is the difference between `[[Environment]]` and Execution Context?**

`[[Environment]]` is attached at function creation and never changes. Execution Context is created at function call and destroyed after execution completes.

---

**Commit message:**

```
Day 004 | JS: Closures, [[Environment]], Memory Leaks
```
