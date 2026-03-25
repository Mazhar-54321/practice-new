# Takeaway — Day 005: Prototypes & Prototypal Inheritance

- **`new` sets `[[Prototype]]` to constructor's `prototype` — not `Object.prototype` directly**

- **Methods inside constructor = one copy per instance. Methods on prototype = one copy shared by all**

- **`prototype` is on functions. `__proto__` is on objects. `Constructor.prototype === instance.__proto__`**

- **`Object.setPrototypeOf` — not `Object.setPrototype` — don't forget the `Of`**

- **`[[Prototype]]` is similar to `[[Environment]]` — both are hidden references enabling lookup chains**
