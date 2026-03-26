# My Understanding — React Day 003: useMemo & useCallback

`useMemo` is used for memoizing function output. `useCallback` is used for memoizing function reference. Both have different purposes.

**useMemo:** Used when there is an expensive calculation. Remembers the latest output so when deps don't change, cached value is reused instead of recalculating.

**useCallback:** Whenever a component renders, all child components also re-render. useCallback prevents unnecessary re-renders by memoizing the function reference so React.memo can do its job.

Note: useCallback is useless if the component is not wrapped with React.memo — because without React.memo the child re-renders regardless.

**Internals:**

- useMemo stores `[result, deps]` in Fiber Node's memoizedState
- useCallback stores `[fn, deps]` in Fiber Node's memoizedState
- Deps compared using `Object.is` — objects/arrays always fail equality check

**Without useCallback:** New function created every render → old one GC'd → React.memo fails
**With useCallback:** Same function reference kept in memoizedState → React.memo works → child skips re-render
