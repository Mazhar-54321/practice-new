# My Understanding — React Day 001: JSX, Virtual DOM & Reconciliation

Whenever we write React code in a `.jsx` file it is not directly converted to HTML. Instead Babel calls `React.createElement` which takes:

1. type — html tag or component
2. props — object containing all attributes including key and ref
3. children — separate arguments that React moves into props.children automatically

The output of `React.createElement` is a plain JS object with just two things — `type` and `props`. Key and ref are special — they get lifted out of props in the final object.

Every child follows the same structure recursively — this tree of objects is the Virtual DOM.

React does not update the browser DOM directly. Instead:

1. React creates a Virtual DOM — a hierarchy of React element objects
2. Whenever state changes React re-renders and creates a new Virtual DOM
3. React compares new vs old Virtual DOM (diffing) and finds minimum changes needed
4. Only those minimum changes are applied to the real DOM

This whole process is called Reconciliation.

Before React 16 reconciliation could block the main thread until done — non interruptible. React 16 introduced Fiber — interruptible rendering that can pause, prioritise urgent updates and resume later.
