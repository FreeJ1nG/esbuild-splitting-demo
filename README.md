Open the [`dist`](./dist) folder to see the bundle result of [`src`](./src/index.ts)

TL;DR

The following code shouldn't result in seperate chunks, since the imports aren't actually being executed, but seperate chunks are generated for each object value anyway

Look at [`dist`](./dist) to understand what I mean

```ts
// dynamic-imports.ts
export default {
  a: () => import("./what/a.ts"),
  b: () => import("./what/b.ts"),
  c: () => import("./what/c.ts"),
  d: () => import("./what/d.ts"),
  e: () => import("./what/e.ts"),
};
```
