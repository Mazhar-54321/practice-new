# My Understanding — Day 003: Interfaces & Type vs Interface

Interface and type aliases are both used for creating types.

Interfaces are restricted to object shapes while types support anything — unions, tuples, functions, primitives.

Interface uses `extends` to inherit another interface while types use `&` operator for intersection. `&` works across interfaces and types freely — TS only cares about shape.

Interfaces support declaration merging — two interfaces with the same name are automatically merged into one. Type alias throws duplicate error.

Interface `extends` catches conflicting properties immediately at definition time. Type `&` silently creates `never` for conflicting props — dangerous hidden bug.

Default rule: use interface for objects and API responses. Use type for unions, tuples and function types.
