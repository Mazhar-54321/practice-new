# Day 004 — TypeScript: Generics

**Date:** 24-03-2026

---

## Task 1 — Rewrite without repetition

```ts
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}
```

---

## Task 2 — Generic interface

```ts
interface PaginatedResponse<T> {
  data: T[];
  page: number;
  totalPages: number;
  hasNext: boolean;
}

interface User {
  name: string;
  email: string;
}

interface Post {
  title: string;
  description: string;
}

const users: PaginatedResponse<User> = getUsers();
const posts: PaginatedResponse<Post> = getPosts();
```

---

## Task 3 — Add a constraint

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

`K extends keyof T` — K must be an actual property name of T.
`T[K]` — return type is the type of that property.

---

## Task 4 — Spot the error

| Block | Error? | Fix                                                                       |
| ----- | ------ | ------------------------------------------------------------------------- |
| 1     | ✅ Yes | `T extends { length: number }` — T needs length constraint                |
| 2     | ✅ Yes | `T extends object, U extends object` — T and U must be objects for spread |
| 3     | ✅ Yes | Remove `extends number` — allow any array type                            |

---

## Task 5 — In my own words

**What is a generic in one line?**

Generic is a dynamic type that changes over situations.

**What does `extends` mean in generics?**

Extends does not mean inheritance — it means T must include some property or properties.

**Why is generic better than `any`?**

`any` kills TypeScript's capability whereas generics make TypeScript more user friendly — type safety is preserved.

---

**Commit message:**

```
Day 004 | TS: Generics
```
