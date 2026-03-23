# My Understanding — Day 002: Type Annotations & Type Inference

Type annotations are types that users explicitly define for a particular variable. Although TS can infer types based on assigned value, it cannot in the below scenarios:

1. Function parameters
2. Complex object types
3. Variables declared without initial value

In these cases TS assigns `any` — which is dangerous because it pauses TypeScript completely for that variable.

While assigning types we have options:

- Direct types — not reusable
- Type aliases — reusable across the codebase
- Union types — when a value can be one of multiple types
- Optional fields — when a property may or may not exist
