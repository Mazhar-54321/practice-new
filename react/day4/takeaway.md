# Takeaway — React Day 002: useState & Fiber Node

- **State lives in Fiber Node — not inside the function. That's why it persists across re-renders**

- **Every component = one Fiber Node object in JS heap memory**

- **`child` points to first child only — rest of children are a singly linked list via `sibling`**

- **`sibling` = next sibling, not next child — same level, not deeper**

- **`alternate` = previous fiber — current vs alternate = new tree vs old tree = reconciliation**

- **Hooks must never be in conditions — memoizedState and alternate would have different lengths — React reads wrong state**

- **useState initial value is a one time seed — ignored on re-renders, React reads from memoizedState**
