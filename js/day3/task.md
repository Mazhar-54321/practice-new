# Day 003 — JS Internals: Scope & Scope Chain

**Date:** 22-03-2026

---

## Task 1 — Predict the output

```js
var x = 1;

function outer() {
  var x = 2;
  function inner() {
    var x = 3;
    console.log(x);
  }
  inner();
  console.log(x);
}

outer();
console.log(x);
```

Output: `3, 2, 1`

Why: Each `x` belongs to its own execution context. Scope chain searches locally first — finds `x` in its own EC and stops there.

---

## Task 2 — Spot the bug

```js
function counter() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}
counter();
```

Output: `3, 3, 3`

Why it is a bug: `var` is function scoped — only one copy of `i` is created for the entire execution context. All setTimeouts share the same `i` whose value is 3 by the time they fire.

Fix:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

`let` is block scoped — creates a new `i` for each iteration. Each setTimeout closes over its own `i`.

---

## Task 3 — Lexical scope

```js
const x = "global";

function outer() {
  const x = "outer";
  function inner() {
    console.log(x);
  }
  return inner;
}

const fn = outer();
fn();
```

Output: `"outer"`

Why: Scope chain searches hierarchically. `inner` was written inside `outer` so its parent scope is `outer`. Found `x` in outer before reaching GEC.

---

## Task 4 — var leaking

```js
if (true) {
  var a = 10;
  let b = 20;
}
console.log(a);
console.log(b);
```

Output: `10, ReferenceError`

Why: `var` is function scoped and does not respect blocks — leaks out of the `if` block. `let`/`const` are block scoped — `b` stays inside the block and is not accessible outside.

---

## Task 5 — In my own words

**What is the scope chain in one line?**

Scope is the area of code where a variable is accessible. There are 3 types — global, function and block scope. Global scope variables are declared outside any function and accessible anywhere. Function scope variables are declared inside a function. Block scope is for `let`/`const` — every `{}` creates a new scope. Scopes go hand in hand with GEC — all execution context rules apply here too.

**Why does `var` behave differently in loops compared to `let`?**

`var` is function scoped — only one copy is created per execution context so all iterations share the same variable. `let` is block scoped — creates a new variable per iteration so each callback has its own copy.

**What is lexical scope in one line?**

Lexical scope is a scope chain where a variable is searched locally first, then outer, then GEC — stopping as soon as it is found. If not found in GEC → ReferenceError.

---

**Commit message:**

```
Day 003 | JS: Scope & Scope Chain
```
