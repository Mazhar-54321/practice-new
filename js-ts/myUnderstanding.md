# My Understanding — JS Internals

---

## Day 1 — Execution Context & Hoisting

Ok whenever a file is executed , the following happens in background
1) JS engine creates global execution context for that file
2) GEC has two phases : 1) creation and 2) execution phase
3) Before we actually know what actually happens in creation phase , let us understand the various elements or instructions available in js i.e functions and variables and in js everything is either function or variable or object
4) Again in variable we have 3 categories var,let and const
5) so whenever a variable is encountered in creation phase the following happens
   i) memory is allocated ii) initialized with undefined or locked
6) var variables will have both the actions and const/let will have only first
7) whenever a function is encountered it is stored as it is in memory

PHASE 2 Execution phase
1) In execution phase the js engine runs code from top to bottom , instruction by instruction
2) While executing instructions there can be normal flow or termination of the program as well
3) If we try to execute the variable which is locked , the program is terminated with error reference error

---

## Corrections

**Point 3 — "everything is either function or variable or object"**

❌ Object is not a category of *instruction* or *declaration*.

✅ Correct way to think about it:

> JS has two types of **declarations**: **variable declarations** (`var`, `let`, `const`) and **function declarations**. Objects are just *values* — they get assigned to variables. There is no such thing as an "object declaration" that the engine treats separately.

So point 3 should be:
> In JS, the engine encounters two kinds of declarations during the creation phase — **variable declarations** and **function declarations**. Everything else (objects, arrays, expressions) are values assigned to those variables.

---

**Everything else is solid.** Specifically these are correct:
- ✅ `var` → allocated + initialized to `undefined`
- ✅ `let`/`const` → allocated + locked in TDZ (only memory allocated, no value)
- ✅ Function declarations → stored with full body as-is
- ✅ Execution phase runs top to bottom
- ✅ Accessing a TDZ variable throws `ReferenceError` and stops execution
