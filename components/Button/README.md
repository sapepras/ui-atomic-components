#### Button example:

Primary Button:

```js
<Button>Primary</Button>
```

Disabled buton:

```jsx
<Button disabled={true}>Disabled</Button>
```

Button with onclick functionality

```jsx
<Button onClick={() => console.log("hello world!!")}>Check Console</Button>
```

Secondary Button

```jsx
<Button btntype="secondary">Secondary</Button>
```

Secondary Button - Disabled

```jsx
<Button btntype="secondary" disabled={true}>
  Secondary
</Button>
```

###### Notes

* `min-width` on the buttons will be removed once size variants are introduced
