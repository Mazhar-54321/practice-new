# Day 002 — DS: Arrays — Two Pointer Technique

**Date:** 22-03-2026

---

## Problem 1 — Two Sum (sorted array)

```js
const arr = [1, 3, 5, 7, 9];
const target = 8;
// Expected output: [1, 2]
```

### Algorithm

1. left=0, right=arr.length-1
2. Iterate till left < right
3. sum = arr[left] + arr[right]
4. sum === target → return [left, right]
5. sum > target → dec right else inc left
6. Go to step 3

### Time Complexity

O(n) — single pass with two pointers

---

## Problem 2 — Remove duplicates from sorted array

```js
const arr = [1, 1, 2, 3, 3, 4];
// Expected output: 4
```

### Algorithm

1. left=0, right=1, count=0
2. arr.length === 1 → return 1
3. isEqual = arr[left] === arr[right]
4. isEqual === false → inc count
5. Inc left, right
6. right === arr.length → count++ → return count
7. Go to step 3

### Trace

```
arr = [1, 1, 2, 3, 3, 4]

arr[0]===arr[1] → true  → no count inc → left=1, right=2
arr[1]===arr[2] → false → count=1      → left=2, right=3
arr[2]===arr[3] → false → count=2      → left=3, right=4
arr[3]===arr[4] → true  → no count inc → left=4, right=5
arr[4]===arr[5] → false → count=3      → left=5, right=6
right===arr.length → count++ → return 4 ✅
```

### Time Complexity

O(n) — single pass

---

## Problem 3 — Check if array is palindrome

```js
const arr1 = [1, 2, 3, 2, 1]; // true
const arr2 = [1, 2, 3, 4, 5]; // false
```

### Algorithm

1. left=0, right=arr.length-1
2. isEqual = arr[left] === arr[right]
3. isEqual === false → return false
4. Inc left, dec right
5. right < left → return true
6. Go to step 2

### Trace

```
arr = [1, 2, 3, 2, 1]
arr[0]===arr[4] → 1===1 → true  → left=1, right=3
arr[1]===arr[3] → 2===2 → true  → left=2, right=2
arr[2]===arr[2] → 3===3 → true  → left=3, right=1
right<left → return true ✅

arr = [1, 2, 3, 4, 5]
arr[0]===arr[4] → 1===5 → false → return false ✅
```

### Time Complexity

O(n) — single pass

---

**Commit message:**

```
Day 002 | DS: Arrays — Two Pointer Technique
```
