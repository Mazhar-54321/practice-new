# My Understanding — Day 002: Event Loop

Event Loop is a process which repeatedly watches Call Stack and Callback Queue / Microtask Queue.

Whenever JS sees an instruction it pushes that to Call Stack but in JS we have some tasks that cant be executed at the moment and require some time — they are called asynchronous tasks.

Timers are not part of JS — they are browser features (Web APIs). So the browser itself handles the timer and when it finishes, Web API pushes the callback to the Callback Queue. JS engine had no idea it was even running.

Once the Call Stack is empty, Event Loop looks for Microtask Queue first. Once Microtask Queue is empty it looks for Callback Queue. This process runs repeatedly till all layers are empty.

Order: Call Stack → Microtask Queue → Callback Queue

Sometimes we may not reach Callback Queue at all — infinite `.then` chains will starve the Microtask Queue and Callback Queue never gets a turn. This is called microtask starvation.
