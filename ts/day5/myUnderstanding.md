# My Understanding — Day 004: Generics

Generics make types dynamic while passing params and returning params from a function.

Instead of writing separate functions for each type:

```ts
function getFirstNumber(arr: number[]): number {
  return arr[0];
}
function getFirstString(arr: string[]): string {
  return arr[0];
}
```

We write one generic function:

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
```

We can use generics for multiple type parameters:

```ts
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

Generics work with interfaces too:

```ts
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

We can constrain T using extends — it does not mean inheritance, it means T must include certain properties:

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

`any` kills TypeScript's capability. Generics preserve type safety while keeping code reusable.
