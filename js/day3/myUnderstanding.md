# My Understanding — Day 003: Scope & Scope Chain

Scope is the area of code where a variable is accessible. There are 3 types of scopes in JS — global, function and block scope.

Global scope variables are declared outside any function and are accessible anywhere in the file.

Function scope variables are declared inside a function and can be used anywhere after their declaration within that function.

Block scope is for `let`/`const` — not for `var`. Every `{}` creates a new scope for `let`/`const`.

`var` is function scoped — it only sees functions as boundaries and completely ignores `if`, `for`, `while` blocks. This is why `var` in a loop creates only one copy shared across all iterations.

`let`/`const` are block scoped — every block creates a new scope. This is why `let` in a loop creates a new variable per iteration.

Scopes are not individual players — they go hand in hand with GEC. All execution context rules apply here too.

Lexical scope means scope is determined by where the function is written, not where it is called. The scope chain searches: local → outer → ... → GEC. If not found → ReferenceError.
