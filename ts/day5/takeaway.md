# Takeaway — Day 004: Generics

- **Generic = dynamic type placeholder — replaced with actual type at call time**

- **`extends` in generics = must have at least these properties — not inheritance**

- **`any` kills type safety. Generics preserve type safety while keeping code reusable**

- **`keyof T` = all property names of T as union type — use for object key constraints**

- **`T[K]` = type of property K on T — use as return type for `getProperty` pattern**

- **`length` is always `number` — never `string`**
