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

Primary Button Variant 2

```jsx
<Button auid="button-4" btnvariant="secondary">
  Variant B
</Button>
```
Primary Button Variant 2 disabled

```jsx
<Button auid="button-5" btnvariant="secondary" disabled={true}>
  Disabled
</Button>
```
Primary Button Variant 3

```jsx
<div style={{"background-color":"#4c4c4c","min-height":"120px", "padding-top":"50px", "padding-left": "10px"}}><Button auid="button-6" btnvariant="tertiary">
  Variant C
</Button>
</div>
```
Primary Button Variant 3 disabled

```jsx
<div style={{"background-color":"#4c4c4c","min-height":"120px", "padding-top":"50px", "padding-left": "10px"}}>
<Button auid="button-7" btnvariant="tertiary" disabled={true}>
  disabled
</Button>
</div>
```
Secondary Button

```jsx
<Button auid="button-8" btntype="secondary">
  Secondary
</Button>
```

Secondary Button - Disabled

```jsx
<Button auid="button-9" btntype="secondary" disabled={true}>
  Secondary
</Button>
```
Secondary Button variant 2

```jsx
<Button auid="button-10" btntype="secondary" btnvariant="secondary">
  Secondary
</Button>
```

Secondary Button variant 2- Disabled

```jsx
<Button auid="button-11" btntype="secondary" btnvariant="secondary" disabled={true}>
  Secondary
</Button>
```
Secondary Button variant 3

```jsx
<div style={{"background-color":"#4c4c4c","min-height":"120px", "padding-top":"50px", "padding-left": "10px"}}>
<Button auid="button-12" btntype="secondary" btnvariant="tertiary">
  Secondary
</Button>
</div>
```

Secondary Button variant 3 - Disabled

```jsx
<div style={{"background-color":"#4c4c4c","min-height":"120px", "padding-top":"50px", "padding-left": "10px"}}>
<Button auid="button-13" btntype="secondary" btnvariant="tertiary" disabled={true}>
  Secondary
</Button>
</div>
```
###### Notes

* `min-width` on the buttons will be removed once size variants are introduced
