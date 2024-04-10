Maybe this is more an issue with my understanding of TypeScript than Solid but I'm not understanding how to type lazy loaded components.

```jsx
function NotFound1(): JSX.Element {
  return (
    <div class="card child">
      <h2>NotFound1</h2>
    </div>
  );
}
```

---

**import error**
Type 'Promise<typeof import("/home/carl/Documents/solid.proj/solid-existing-tutorial.proj/run-code-ts/src/pages/NotFound2")>' is not assignable to type 'Promise<{ default: Component<any>; }>'.
  Type 'typeof import("/home/carl/Documents/solid.proj/solid-existing-tutorial.proj/run-code-ts/src/pages/NotFound2")' is not assignable to type '{ default: Component<any>; }'.
    The types returned by 'default(...)' are incompatible between these types.
      Type 'Component' is not assignable to type 'Element'.

**component error**
- Type 'Element' is not assignable to type 'Component'

```jsx
function NotFound2(): Component {
  return (
    <div class="card child">
      <h2>NotFound2</h2>
    </div>
  );
}
```

---

**import error**
Type 'Promise<typeof import("/home/carl/Documents/solid.proj/solid-existing-tutorial.proj/run-code-ts/src/pages/NotFound3")>' is not assignable to type 'Promise<{ default: Component<any>; }>'.
  Type 'typeof import("/home/carl/Documents/solid.proj/solid-existing-tutorial.proj/run-code-ts/src/pages/NotFound3")' is not assignable to type '{ default: Component<any>; }'.
    The types returned by 'default(...)' are incompatible between these types.
      Type 'Component' is not assignable to type 'Element'.ts(2322)

**component error**
- Type 'Element' is not assignable to type 'Component'.

```jsx
const NotFound3 = (): Component => {
  return (
    <div class="card child">
      <h2>NotFound3</h2>
    </div>
  );
}
```

---


```jsx
const NotFound4 = (): JSX.Element => {
  return (
    <div class="card child">
      <h2>NotFound4</h2>
    </div>
  );
}
```

---


```jsx
function NotFound5(): JSX.Element {
  return (
    <div class="card child">
      <h2>NotFound5</h2>
    </div>
  );
}
```

---

**import error**
- Type 'Promise<typeof import("/.../NotFound")>' is not assignable to type 'Promise<{ default: Component<any>; }>'.

- Type 'typeof import("/.../NotFound6")' is not assignable to type '{ default: Component<any>; }'.

- The types returned by 'default(...)' are incompatible between these types.
      Type 'Component' is not assignable to type 'Element'.

**component error**
- Type 'Element' is not assignable to type 'Component'.
- Type 'number' is not assignable to type 'Component'.

```jsx
function NotFound6(): Component {
  return (
    <div class="card child">
      <h2>NotFound6</h2>
    </div>
  );
}
```

## Summary

**2, 3 and 6 import error** 

```
- Type 'Promise<typeof import("/.../NotFound")>' is not assignable to type 'Promise<{ default: Component<any>; }>'.
```
- You can't assign the return type of NotFound to `import(() => lazy{...})`.


```
- Type 'typeof import("/.../NotFound")' is not assignable to type '{ default: Component<any>; }'.
```

- Same as above but this time is not a `Promise`.

```
- The types returned by 'default(...)' are incompatible between these types.
      Type 'Component' is not assignable to type 'Element'.
```

- What is `default(...)'


**2 and 3 component error**
```
Type 'Element' is not assignable to type 'Component'
```
- Actual type returned: `Element`
- Expected type: `Component`.


**6 component error**

```
- Type 'Element' is not assignable to type 'Component'.
- Type 'number' is not assignable to type 'Component'.
```

### Investigations

- NEXT: make repo and open in StackBlitz
  - See if you get the same errors, especially for `NotFound2` and `NotFound6`

- `NotFound2` and `NotFound6` are the same but have different error messages.
  - on error mentions `number` but the other does not.

- NotFound2 and NotFound6 are the same but have different component errors. Why?

- Narrow down the variations if possible.

- What is `Default`?
