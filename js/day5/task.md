# Day 005 — JS Internals: Prototypes & Prototypal Inheritance

**Date:** 24-03-2026

---

## Task 1 — Predict the output

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + " is eating");
};

const dog = new Animal("Bruno");
const cat = new Animal("Whiskers");

dog.eat();
cat.eat();
console.log(dog.__proto__ === Animal.prototype);
console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("eat"));
```

Output:

```
Bruno is eating
Whiskers is eating
true
true
false
```

Why: `name` is own property — defined on instance. `eat` is on prototype — not own property.

---

## Task 2 — Fix the memory problem

Problem: `drive` defined inside constructor = one copy per instance = memory waste.

Fix:

```js
function Car(brand) {
  this.brand = brand;
}

Car.prototype.drive = function () {
  console.log(this.brand + " is driving");
};

const c1 = new Car("Toyota");
const c2 = new Car("Honda");
const c3 = new Car("BMW");
```

Now all 3 instances share one `drive` function via prototype.

---

## Task 3 — Prototype chain

```js
Object.setPrototypeOf(car, vehicle);
Object.setPrototypeOf(tesla, car);
```

Chain: `tesla → car → vehicle → Object.prototype → null`

Can `tesla` call `move()`? Yes — `move` is in its prototypical chain via `vehicle`.

---

## Task 4 — In my own words

**What is `[[Prototype]]` in one line?**

Every JS object has a hidden property `[[Prototype]]` which refers to another object in the chain. Whenever we try to access a property that does not exist on the current object, JS looks in the chain until it reaches null.

**What does `new` keyword do internally — 4 steps:**

1. Creates empty object `{}`
2. Sets `[[Prototype]]` to constructor's `prototype`
3. Calls constructor with `this` = new object
4. Returns the new object

**Difference between `__proto__` and `prototype` in one line:**

`prototype` is used with functions — where shared methods live. `__proto__` is used with objects — the actual link to the prototype. Both are equal: `Constructor.prototype === instance.__proto__`

---

**Commit message:**

```
Day 005 | JS: Prototypes & Prototypal Inheritance
```
