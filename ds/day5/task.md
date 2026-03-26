# Day 004 — DS: Arrays — Sliding Window Technique

**Date:** 24-03-2026

---

## Concept

**Fixed window** — window size never changes, just slides forward
**Dynamic window** — window expands or shrinks based on condition

> After every sliding window problem ask: "What if the window never shrinks?" — that's your edge case.

---

## Problem 1 — Maximum sum subarray of size 3

```js
const arr = [2, 1, 5, 1, 3, 2];
// Expected output: 9
```

### Solution

```ts
function maxSizeSubArray3(arr: number[]): number {
  let start = 0,
    end = 0,
    sum = -Infinity,
    tempSum = 0,
    count = 0;
  while (end < arr.length) {
    if (count === 3) {
      sum = Math.max(sum, tempSum);
      tempSum -= arr[start];
      start++;
      count--;
    } else {
      tempSum += arr[end];
      end++;
      count++;
    }
  }
  return sum;
}
```

### Time Complexity

O(n) — single pass

---

## Problem 2 — First negative in every window of size 3

```js
const arr = [12, -1, -7, 8, -15, 30, 16, 28];
// Expected output: [-1, -1, -7, -15, -15, 0]
```

### Solution

```ts
function firstNegativeInWindow(arr: number[]): number[] {
  const negatives: number[] = [];
  let leftMostElementIndex = 0,
    i = 0;
  while (i < arr.length) {
    if (i > 1) {
      while (arr[leftMostElementIndex] >= 0 && leftMostElementIndex < i) {
        leftMostElementIndex++;
      }
      negatives.push(
        arr[leftMostElementIndex] < 0 ? arr[leftMostElementIndex] : 0,
      );
    }
    i++;
    if (i - leftMostElementIndex > 2) {
      leftMostElementIndex++;
    }
  }
  return negatives;
}
```

### Time Complexity

O(n) — single pass

---

## Problem 3 — Longest subarray with sum <= 7

```js
const arr = [4, 1, 1, 1, 2, 3, 5];
// Expected output: 4
```

### Solution

```ts
function longestSubArray(arr = [4, 1, 1, 1, 2, 3, 5], sum = 7): number {
  let longestSubArrayLength = 0,
    start = 0,
    end = 0,
    temp = 0;
  while (end < arr.length) {
    if (temp <= sum) {
      temp += arr[end];
    }
    if (temp > sum) {
      longestSubArrayLength = Math.max(longestSubArrayLength, end - start);
      temp -= arr[start++];
    }
    end++;
  }
  // Edge case — entire array sum never exceeds target
  if (temp <= sum) {
    longestSubArrayLength = Math.max(longestSubArrayLength, end - start);
  }
  return longestSubArrayLength;
}
```

### Edge case

```ts
longestSubArray([1, 2, 3], 10);
// Without edge case fix → 0 ❌
// With edge case fix → 3 ✅
```

### Time Complexity

O(n) — single pass, dynamic window

---

**Commit message:**

```
Day 004 | DS: Arrays — Sliding Window Technique
```
