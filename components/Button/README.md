#### Button example:

**_WIP_**

Primary Button:

```js
<Button auid="button-1">Primary</Button>
```

Disabled buton:

```jsx
<Button auid="button-2" disabled={true}>
  Disabled
</Button>
```

Button with onclick functionality

```jsx
<Button auid="button-3" onClick={() => console.log("hello world!!")}>
  Check Console
</Button>
```

Secondary Button

```jsx
<Button auid="button-4" btntype="secondary">
  Secondary
</Button>
```

Secondary Button - Disabled

```jsx
<Button auid="button-5" btntype="secondary" disabled={true}>
  Secondary
</Button>
```

###### Notes

* `min-width` on the buttons will be removed once size variants are introduced
