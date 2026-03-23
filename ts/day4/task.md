# Day 003 — TypeScript: Interfaces & Type vs Interface

**Date:** 23-03-2026

---

## Task 1 — Interface or Type?

| Scenario                                               | Interface / Type | Why                                    |
| ------------------------------------------------------ | ---------------- | -------------------------------------- |
| A user object with name, age, email                    | Interface        | Focus on object shape                  |
| A value that can be string or number                   | Type             | Interfaces do not support union values |
| A function that takes two numbers and returns a number | Type             | Requirement is for value types         |
| A class contract for a vehicle                         | Interface        | Contract is expected                   |
| A tuple of [string, number]                            | Type             | Tuple is a value type                  |
| A public API response object others might extend       | Interface        | Can merge and extend                   |

---

## Task 2 — Spot the error

| Block | Error? | Why                                                                                    |
| ----- | ------ | -------------------------------------------------------------------------------------- |
| 1     | ✅ Yes | Interface `extends` catches conflict immediately — `x` can't be both string and number |
| 2     | ✅ Yes | `x` becomes `never` (string & number) — no value can be assigned to `never`            |
| 3     | ✅ Yes | Declaration merging means both `name` and `age` are required — `age` is missing        |
| 4     | ✅ Yes | Duplicate type alias not allowed                                                       |

---

## Task 3 — Extend and Intersect

```ts
// Interface version
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
const dog: Dog = { name: "Bruno", breed: "German Shepherd" }; // ✅

// Type version
type Animal = { name: string };
type Dog = Animal & { breed: string };
const dog: Dog = { name: "Bruno", breed: "German Shepherd" }; // ✅
```

---

## Task 4 — In my own words

**What is declaration merging in one line?**

Declaration merging merges two interfaces of the same name into one — both sets of properties become required.

**Why is interface conflict safer than type intersection conflict?**

Because in objects we don't have duplicate props — interface throws error at definition time. Type intersection silently creates `never` for conflicting props which is a hidden bug.

**Default rule — when to use interface vs type:**

For objects use interface (API response and complex objects). For unions, tuples and function types use type.

---

**Commit message:**

```
Day 003 | TS: Interfaces, Type vs Interface, Declaration Merging
```
