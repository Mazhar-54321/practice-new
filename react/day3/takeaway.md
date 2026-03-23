# Takeaway — React Day 001: JSX, Virtual DOM & Reconciliation

- **JSX is not HTML — Babel transforms it to `React.createElement` calls before it runs**

- **`React.createElement` output always has just two things — `type` and `props`**

- **`key` and `ref` are special — they get lifted out of props in the final React Element object**

- **Virtual DOM is a tree of plain JS objects describing the UI — not a copy of the real DOM**

- **Fiber = interruptible rendering — can pause, prioritise and resume. Old reconciler = blocking**
