# Takeaway — Day 003: Interfaces & Type vs Interface

- **Interface = objects only. Type = anything — unions, tuples, functions, primitives**

- **Declaration merging = interface superpower — type can't do this**

- **Interface conflict = error at definition = good. Type intersection conflict = silent `never` = dangerous**

- **`never` = impossible type — no value can ever be assigned to it**

- **`&` works across interface and type freely — TS only cares about shape not what you called it**

- **Conflicting props in intersection = rename or use union — never let `never` sneak in silently**
