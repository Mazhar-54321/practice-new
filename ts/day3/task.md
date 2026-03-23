# Day 002 — TypeScript: Type Annotations & Type Inference

**Date:** 22-03-2026

---

## Task 1 — Add correct type annotations

```ts
function greet(name: string, age: number) {
  return `Hello ${name}, you are ${age} years old`;
}

function add(a: number, b: number) {
  return a + b;
}

function isAdult(age: number) {
  return age >= 18;
}
```

---

## Task 2 — Create type aliases

```ts
type User = { name: string; age: number; email: string };

type Product = { title: string; price: number; description?: string };

type Id = string | number;
```

---

## Task 3 — Spot the error

| Block | Error? | Why                                                  |
| ----- | ------ | ---------------------------------------------------- |
| 1     | ✅ Yes | string is not assignable to number                   |
| 2     | ✅ Yes | minimum required properties not met — age is missing |
| 3     | ✅ Yes | boolean is not part of string or number union        |
| 4     | ✅ Yes | return type is number but string is returned         |

---

## Task 4 — In my own words

**When should you use type annotations vs let TS infer?**

Type annotations must be used for function params, complex objects and declared variables without initial value.

**What is `any` and why is it dangerous?**

`any` is assigned by TS when it cannot detect the type — like a declared variable with no value. It is dangerous because it pauses TypeScript — no type checking happens for that variable.

**What is the difference between union type and optional property?**

Union type is a combination of two or more types — value can be any one of them. Optional makes a field non mandatory — TS will not complain if it is missing.

---

**Commit message:**

```
Day 002 | TS: Type Annotations, Type Aliases, Union Types
```
