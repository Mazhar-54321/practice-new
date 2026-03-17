# Day 001 — JS Internals: Execution Context

**Date:** 17-03-2026

---

## Task 1 — Predict the output

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

| Code                               | My Prediction                                                 | Actual Output    |
| ---------------------------------- | ------------------------------------------------------------- | ---------------- |
| `console.log(x)` before `var x=5`  | `undefined`                                                   | `undefined`      |
| `console.log(y)` before `let y=10` | `ReferenceError` — program terminates, does not reach greet() | `ReferenceError` |
| `greet()` before declaration       | `Good morning`                                                | `Good morning`   |
| `sayBye()` before assignment       | `TypeError` — undefined is not a function                     | `TypeError`      |

---

## Task 2 — Simulate the JS Engine

```js
var a = 1;
function add(b) {
  return a + b;
}
add(5);
```

**Global EC — Creation Phase:**

```
a    → undefined
add  → full body
```

**Global EC — Execution Phase:**

```
a    → 1
```

**add(5) — New EC — Creation Phase:**

```
b              → 5
outer reference → a = 1
```

**add(5) — Execution Phase:**

```
a looked up in → outer reference
b              → 5
return         → 6
```

---

## Task 3 — In my own words

**What is TDZ?**

TDZ is a lock on a variable that is declared with let or const keyword.

**Why does `var` behave differently than `let`/`const`?**

Since var doesn't get a lock on variable it is initialized with undefined so using it will not terminate program when compared to its peers.

**What happens when a function is called — in one line:**

When a function is called its execution context is created which has 2 phases creation and execution phase and it will have lexical environment as well that will have outer reference so whenever a variable is encountered it is searched locally and then moved to outer scope.

**What confused me today:**

Nothing confused me, everything went well.

**What clicked today:**

Everything went well.

---

**Commit message:**

```
Day 001 | JS: Execution Context, Call Stack, Hoisting
```
