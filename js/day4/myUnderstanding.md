# My Understanding — Day 004: Closures

Whenever a function is created a property `[[Environment]]` is attached which contains a reference to its outer lexical environment.

A closure is when the inner function uses outer lexical scope members — even after the outer function completed execution its lexical environment is not garbage collected because the inner function's `[[Environment]]` still references it.

GC works at environment level not variable level — the entire lexical environment block stays alive as long as any closure references it. This can cause memory leaks when heavy data exists in the same environment as a closure that doesn't need it.

Best fix for memory leak = keep heavy data in a separate function so it never enters the closure's environment.

Every function gets `[[Environment]]` at creation — not just closures. The difference is closures keep the parent environment alive after the parent finishes. Normal functions don't.
