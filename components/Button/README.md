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

Primary Button - Image Icon

```jsx
<Button auid="button-6" btntype="primary" imgUrl="https://imageurl.jpg" imgHeight="20px" imgWidth="35px">
  Primary Button
</Button>
```

Secondary Button - Image Icon

```jsx
<Button auid="button-7" btntype="secondary" imgUrl="https://imageurl.jpg" imgHeight="20px" imgWidth="35px">
  Secondary
</Button>
```

XSmall Button

```jsx
<Button auid="button-8" size="XS" >
  XSmall
</Button>
```

Small Button

```jsx
<Button auid="button-9" size="S" >
  Small
</Button>
```

Medium Button

```jsx
<Button auid="button-10" size="M" >
  Medium
</Button>
```

Large Button

```jsx
<Button auid="button-11" size="L" >
  Large
</Button>
```

###### Notes

* `min-width` on the buttons will be removed once size variants are introduced
* Default height and width will be set if imgHeight and imgWidth is not passed with ImgUrl
