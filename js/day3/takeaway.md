# Takeaway — Day 003: Scope & Scope Chain

- **Scope and hoisting are two different concepts — never mix them. Scope = where. Hoisting = when.**

- **`var` only sees functions as boundaries — ignores all blocks. `let`/`const` respect every `{}`**

- **Scope chain ends at GEC — not at global object (`window`). They are related but not the same.**

- **`var` in a loop = one shared copy = all callbacks get same final value. `let` in a loop = new copy per iteration = each callback gets its own value.**

- **Lexical scope = where function is written determines its scope chain — not where it is called**
