# Day 001 — React Internals: JSX, Virtual DOM & Reconciliation

**Date:** 22-03-2026

---

## Task 1 — Convert JSX to React.createElement

```jsx
<div className="container">
  <h1>Hello Mazhar</h1>
  <p className="subtitle">Welcome to React</p>
</div>
```

```js
React.createElement(
  "div",
  { className: "container" },
  React.createElement("h1", null, "Hello Mazhar"),
  React.createElement("p", { className: "subtitle" }, "Welcome to React"),
);
```

Output:

```js
{
  type: "div",
  props: {
    className: "container",
    children: [
      {
        type: "h1",
        props: { children: "Hello Mazhar" }
      },
      {
        type: "p",
        props: {
          className: "subtitle",
          children: "Welcome to React"
        }
      }
    ]
  }
}
```

---

## Task 2 — Predict the output object

```js
React.createElement(
  "ul",
  { className: "list" },
  React.createElement("li", { key: "1" }, "Item 1"),
  React.createElement("li", { key: "2" }, "Item 2"),
);
```

Output:

```js
{
  type: "ul",
  props: {
    className: "list",
    children: [
      {
        type: "li",
        key: "1",         // key is lifted out of props
        props: { children: "Item 1" }
      },
      {
        type: "li",
        key: "2",         // key is lifted out of props
        props: { children: "Item 2" }
      }
    ]
  }
}
```

---

## Task 3 — Reconciliation

Minimum change React makes:

```js
// Only this node changed
{ type: "h1", props: { children: "Hello" } }
→
{ type: "h1", props: { children: "Hello Mazhar" } }
```

Why not the whole tree: After reconciliation React compares prev vs current virtual DOM and only updates what has changed — not the entire tree.

---

## Task 4 — In my own words

**What is the Virtual DOM in one line?**

Virtual DOM is a tree of plain JavaScript objects that describes what the UI should look like. It is stored in memory and used by React to optimally update the actual DOM through reconciliation, diffing and Fiber.

**What is reconciliation in one line?**

Reconciliation is a technique to optimally update the actual DOM by comparing the newly created virtual DOM with the currently stored virtual DOM.

**What did Fiber solve that the old reconciler couldn't?**

Old reconciler could block the main thread until all its work was done — it was non interruptible. Fiber is interruptible — it can pause, prioritise urgent updates and resume later.

---

**Commit message:**

```
Day 001 | React: JSX, Virtual DOM, Reconciliation, Fiber
```
