# My Understanding — TypeScript Internals

---

## Day 001 — Type System

TS is a static analysis tool i.e it only reads your code before it becomes JS.
We save ts files with .ts extension.
The TS compiler has two jobs:

1. Type checking
2. Transpilation

It is not always necessary to give types, TS can infer them automatically based on the rhs value.

TS checks 2 things:

1. Whether a value is assignable to a type
2. Whether the property exists on object or not

### Structural Type System

First let us take an example of other languages like Java:

```java
class Rectangle {
  private String name;
}
class Square {
  private String name;
}
```

Although the two classes have same types but it is invalid to swap them while creating object:

```java
Rectangle r = new Square(); // invalid — Java is strict about names
```

Now the same in TypeScript:

```ts
type Rectangle = { name: string };
type Square = { name: string };

const area: Rectangle = { name: "Mazhar" };
const area1: Square = area; // valid — TS does not care about names, only shapes
```

TS does not care about names, it only cares about shapes — if minimum fields match, it is valid.
