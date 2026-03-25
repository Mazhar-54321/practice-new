# Day 003 — DS: Arrays — Advanced Problems

**Date:** 23-03-2026

---

## Problem 1 — Find second largest number

```js
const arr = [3, 7, 1, 9, 4, 6];
// Expected output: 7
```

### Solution

```ts
function secondLargest(arr: number[]): number {
  let fl = -Infinity,
    sl = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > fl) {
      sl = fl;
      fl = arr[i];
    } else {
      if (arr[i] > sl) {
        sl = arr[i];
      }
    }
  }
  return sl;
}
```

### Time Complexity

O(n) — single pass, two variables

---

## Problem 2 — Move all zeros to end

```js
const arr = [0, 1, 0, 3, 12];
// Expected output: [1, 3, 12, 0, 0]
```

### Solution

```ts
function moveZeroesToEnd(arr: number[]): number[] {
  let start = 0,
    end = 1;
  while (end < arr.length) {
    if (arr[start] === 0 && arr[end] === 0) {
      end++;
    } else if (arr[start] !== 0 && arr[end] !== 0) {
      end++;
      start++;
    } else if (arr[start] === 0 && arr[end] !== 0) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      end++;
      start++;
    } else {
      start++;
      end++;
    }
  }
  return arr;
}
```

### Time Complexity

O(n) — single pass, in place

---

## Problem 3 — Find duplicate in array

```js
const arr = [1, 3, 4, 2, 2];
// Expected output: 2
```

### Constraints clarified before solving

- Only one pair of duplicates
- Array is not sorted
- Numbers go from 1 to n-1 where n = arr.length
- Exactly one duplicate

### Solution

```ts
function duplicateNumber(arr: number[]): number {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const n = arr.length - 1;
  return sum - (n * (n + 1)) / 2;
}
```

### How it works

```
arr = [1, 3, 4, 2, 2]
n = arr.length - 1 = 4
expected sum = n*(n+1)/2 = 4*5/2 = 10
actual sum = 1+3+4+2+2 = 12
duplicate = 12 - 10 = 2 ✅
```

### Alternative using Math.abs

```ts
return Math.abs((n * (n + 1)) / 2 - sum);
```

### Time Complexity

O(n) — single pass with reduce
O(1) — no extra array used

---

**Commit message:**

```
Day 003 | DS: Arrays — Second largest, Move zeros, Find duplicate
```
