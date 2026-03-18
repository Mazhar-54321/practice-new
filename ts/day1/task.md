# Day 001 — TypeScript Internals: Type System

**Date:** 17-03-2026

---

## Task 1 — True or False

| Statement                                           | True/False | Why                                                                                                  |
| --------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| TypeScript runs in the browser                      | False      | It is a static analysis tool that only checks assignment and existence of props and transpiles to JS |
| TypeScript errors can crash your app at runtime     | False      | At runtime there is no TS, only JS exists in the browser                                             |
| `tsc` removes all types and outputs plain JS        | True       | It transpiles TS to plain JS                                                                         |
| TypeScript matches types by name like Java          | False      | It matches shapes not names                                                                          |
| TypeScript can infer types without you writing them | True       | If value is clear enough for TS to determine the type, it infers automatically                       |

---

## Task 2 — What does TypeScript infer?

```ts
const name = "Mazhar"; // infers: string
const age = 25; // infers: number
const isActive = true; // infers: boolean
const scores = [1, 2, 3]; // infers: number[]
const user = { name: "Ali", age: 25 }; // infers: { name: string; age: number }
```

---

## Task 3 — Spot the error

```ts
// Block 1
const age: number = "hello";
```

Error? Type mismatch
Why? String is assigned to number — assignability error

```ts
// Block 2
const user = { name: "Ali" };
console.log(user.age);
```

Error? Incompatible types
Why? Property age does not exist on type `{ name: string }` — property existence error

```ts
// Block 3
type Person = { name: string; age: number };
type Employee = { name: string; age: number };

const e: Employee = { name: "Ali", age: 25 };
const p: Person = e;
```

Error? No error
Why? Both types have same shape

```ts
// Block 4
function greet(name: string) {
  return "Hello " + name;
}
greet(25);
```

Error? number is not assignable to string
Why? 25 is a number, function expects a string — assignability check fails

---

## Task 4 — In my own words

**What is TypeScript in one line?**

TS is a static analysis tool used for checking types of a variable at compile time. It is smart enough to infer types in most cases and only checks 2 things — whether the assigned value obliges to type or whether the prop exists.

**What are the two jobs of tsc?**

Type checking and transpilation.

**What is structural type system — explain with your own example:**

Structural type system is a feature of TS where shapes are matched instead of type names.

**What are the two things TypeScript always checks?**

Whether the assigned value obliges to type or whether the prop exists.

**What confused me today:**

Nothing.

**What clicked today:**

Everything went well.

---

**Commit message:**

```
Day 001 | TS: Type System Internals
```
