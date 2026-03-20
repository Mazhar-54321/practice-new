# Takeaway — Day 002: Event Loop

- **`setTimeout` never touches Microtask Queue — it always goes Web API → Callback Queue**

- **Microtask Queue drains completely before Callback Queue gets a turn**

- **`setTimeout(fn, 0)` does not mean instant — it means as soon as Call Stack and Microtask Queue are empty**

- **Infinite `.then` chains cause microtask starvation — Callback Queue never gets a turn**
