# Takeaway — React Day 003: useMemo & useCallback

- **`useMemo` first argument must be a function — `() => value`, never the value directly**

- **`useCallback` is useless without `React.memo` — always use them together**

- **Wrong deps in `useCallback` = new reference every render = same as no useCallback**

- **`Object.is` for dep comparison — objects and arrays always fail = infinite re-renders**

- **Without useCallback = new function every render, old one GC'd. With useCallback = same function kept alive in memoizedState until unmount**

- **Don't overuse — useMemo/useCallback have their own cost. Only use for genuinely expensive calculations or React.memo children**
