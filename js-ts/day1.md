# Day 001 — JS Internals: Execution Context, Call Stack & Hoisting

**Date:** ****\_\_\_****
**Folder:** `js-ts/day-001.md`

---

## What I understood today

> No copy paste. Explain like you'd teach a junior dev.

_Your answer:_

---

## Core Concept: How the engine reads your code

Every time JS runs a file or calls a function, it creates an **Execution Context** in two phases:

**Creation phase** — allocates memory before any code runs

- `var` → stored as `undefined`
- `function declarations` → stored with full body
- `let` / `const` → stored in **Temporal Dead Zone (TDZ)**

**Execution phase** — runs code line by line

Every Execution Context has 3 things:

1. `VariableEnvironment` — your variables
2. `LexicalEnvironment` — scope chain (who is my parent?)
3. `ThisBinding` — what `this` points to

The **Call Stack** is just a stack of these contexts. Global context always sits at the bottom.

---

## Task 1 — Predict before you run

Write your prediction first. Then run it. Then explain why.

```js
console.log(x);
var x = 5;
console.log(x);

console.log(y);
let y = 10;

greet();
function greet() {
  console.log("Good morning");
}

sayBye();
var sayBye = function () {
  console.log("Bye");
};
```

| Code                               | My Prediction | Actual Output | Why it happened |
| ---------------------------------- | ------------- | ------------- | --------------- |
| `console.log(x)` before `var x=5`  |               |               |                 |
| `console.log(y)` before `let y=10` |               |               |                 |
| `greet()` before declaration       |               |               |                 |
| `sayBye()` before assignment       |               |               |                 |

---

## Task 2 — Closure + Scope Chain

```js
function outer() {
  const secret = 42;
  function inner() {
    console.log(secret);
  }
  return inner;
}

const fn = outer();
fn();
```

**Answer in your own words:**

**Q: When `fn()` runs, `outer` is already gone from the call stack. Why does `inner` still know `secret`?**

_Your answer:_

**Q: Which Execution Context does `inner` hold a reference to?**

_Your answer:_

**Q: Define closure in one sentence — no googling:**

_Your answer:_

---

## Task 3 — Simulate the JS Engine (the real challenge)

Fill in what the engine stores during each phase for this code:

```js
var a = 1;
function add(b) {
  return a + b;
}
add(5);
```

**Global Execution Context — Creation Phase:**

```
VariableEnvironment: {
  a: ___,       // what value does JS assign before execution?
  add: ___      // what does JS store here?
}
ThisBinding: ___
```

**Global Execution Context — Execution Phase:**

```
VariableEnvironment: {
  a: ___,       // after line 1 runs
  add: ___
}
```

**add(5) — New Execution Context — Creation Phase:**

```
VariableEnvironment: {
  b: ___        // what value?
}
LexicalEnvironment: {
  outer: ___    // points to?
}
```

**add(5) — Execution Phase:**

```
a is looked up → found in: ___
b = ___
return value = ___
```

---

## Reflection

**What is TDZ in your own words?**

_Your answer:_

**Why does `var` behave differently than `let`/`const`?**

_Your answer:_

**What would happen if JS had no call stack?**

_Your answer:_

**What confused me today:**

_Your answer:_

**What clicked today:**

_Your answer:_

**What I want to explore tomorrow:**

_Your answer:_

---

**Commit message:**

```
Day 001 | JS: Execution Context, Call Stack, Hoisting
```
