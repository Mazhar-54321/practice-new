# Day 001 — DS: Arrays

**Date:** 17-03-2026

---

## Problem 1 — Find the maximum number

```js
const arr = [3, 7, 1, 9, 4, 6];
// Expected output: 9
```

Rules: No `Math.max` or `.sort` — only loops allowed.

### My Solution

```ts
array.reduce((acc, curr) => (curr > acc ? curr : acc), -Infinity);
```

### Time Complexity

O(n) — every element is visited once.

---

## Problem 2 — Reverse an array in place

```js
const arr = [1, 2, 3, 4, 5];
// Expected output: [5, 4, 3, 2, 1]
```

Rules: No `.reverse()` — must be in place, no new array.

### My Solution

```ts
array.reduce((acc, curr) => {
  acc.unshift(curr);
  return acc;
}, []);
```

### What was wrong

- Used `unshift` which is O(n) — makes the solution O(n²)
- Passed `[]` as initial value — creates a new array, not in place

### Correct Solution — Two Pointer Technique

```ts
let left = 0;
let right = arr.length - 1;

while (left < right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  left++;
  right--;
}
```

- In place — no new array created
- O(n) — each element touched only once

---

**Commit message:**

```
Day 001 | DS: Arrays — max element, reverse in place
```
