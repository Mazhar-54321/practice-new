# My Understanding — Day 005: Prototypes & Prototypal Inheritance

Every JS object has a hidden property `[[Prototype]]` which refers to another object in the chain. Whenever we try to access a property that does not exist on the current object, JS looks in the chain until it reaches null.

Note: `Object.prototype` is the default prototype for all objects — every object in JS points to `Object.prototype` and `Object.prototype` itself points to null.

Benefits: Whenever we create multiple copies of the same object having n functions, instead of creating one copy per instance (wasteful), we add those functions to the object's prototype — only one copy exists shared by all instances. Memory efficient.

We can manually create prototypical relations using `Object.setPrototypeOf(child, parent)`.

Lookup chain: current object → parent prototype → ... → Object.prototype → null

In ES6, classes got introduced — they are syntactic sugar over prototypes, same way async/await is syntactic sugar over promises.

`prototype` — only functions have it. It is the object where shared methods live.
`__proto__` — every object has it. It is the actual link from instance to prototype.
`Constructor.prototype === instance.__proto__` — always true.

Note: `[[Prototype]]` is similar to `[[Environment]]` in closures — both are hidden references that enable lookup chains.
