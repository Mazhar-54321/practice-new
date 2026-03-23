# Takeaway — Day 004: Closures

- **`[[Environment]]` is attached at function creation — not at call time**

- **Every function gets `[[Environment]]` — not just closures. Closure is when it keeps parent environment alive after parent finishes**

- **GC works at environment level not variable level — entire environment stays alive as long as any closure references it**

- **Best fix for closure memory leak = separate heavy data into its own function so it never enters the closure's environment**

- **`[[Environment]]` = set at birth, never changes. Execution Context = created at call, destroyed after**
