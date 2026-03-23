# My Understanding — React Day 002: useState & Fiber Node

useState is a hook for storing component state. It returns two elements — current state and a dispatcher to update the state.

Behind the scenes, normal variables do not persist in React components. Here is how state is maintained:

Every component creates a Fiber Node object in JS heap memory where it stores info about the component in the following fields:

1. `type` — component function name
2. `memoizedState` — linked list of all hooks of the component (current values)
3. `alternate` — same as memoizedState but previous values — used for diffing
4. `child` — address of first child fiber
5. `sibling` — address of next sibling fiber
6. `return` — address of parent fiber

Note: The reason why conditional rendering of hooks is not allowed is because memoizedState and alternate fields end up having different lengths and behaviour fails — React reads wrong state for every hook after the skipped one.
