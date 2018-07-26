#### Link example:

**_WIP_**

Primary Link:

```js
<Link auid="Link-1">Primary</Link>
```

Anchor Link:

```js
<Link auid="Link-1" linkstyle="anchor">Anchor</Link>

Disabled buton:

```jsx
<Link auid="Link-2" disabled={true}>
  Disabled
</Link>
```

Link with onclick functionality

```jsx
<Link auid="Link-3" onClick={() => console.log("hello world!!")}>
  Check Console
</Link>
```

Primary Link Variant 2

```jsx
<Link auid="Link-4" btnvariant="secondary">
  Variant B
</Link>
```
Primary Link Variant 2 disabled

```jsx
<Link auid="Link-5" btnvariant="secondary" disabled={true}>
  Disabled
</Link>
```
Primary Link Variant 3

```jsx
<div style={{"background-color":"#4c4c4c","min-height":"120px", "padding-top":"50px", "padding-left": "10px"}}><Link auid="Link-6" btnvariant="tertiary">
  Variant C
</Link>
</div>
```
Primary Link Variant 3 disabled

```jsx
<div style={{"background-color":"#4c4c4c","min-height":"120px", "padding-top":"50px", "padding-left": "10px"}}>
<Link auid="Link-7" btnvariant="tertiary" disabled={true}>
  disabled
</Link>
</div>
```
Secondary Link

```jsx
<Link auid="Link-8" btntype="secondary">
  Secondary
</Link>
```

Secondary Link - Disabled

```jsx
<Link auid="Link-9" btntype="secondary" disabled={true}>
  Secondary
</Link>
```
Secondary Link variant 2

```jsx
<Link auid="Link-10" btntype="secondary" btnvariant="secondary">
  Secondary
</Link>
```

Secondary Link variant 2- Disabled

```jsx
<Link auid="Link-11" btntype="secondary" btnvariant="secondary" disabled={true}>
  Secondary
</Link>
```
Secondary Link variant 3

```jsx
<div style={{"background-color":"#4c4c4c","min-height":"120px", "padding-top":"50px", "padding-left": "10px"}}>
<Link auid="Link-6" btntype="secondary" btnvariant="tertiary">
  Variant C
</Link>
</div>
```
Secondary Link variant 3 -disabled
```jsx
<div style={{"background-color":"#4c4c4c","min-height":"120px", "padding-top":"50px", "padding-left": "10px"}}>
<Link auid="Link-7" btntype="secondary" btnvariant="tertiary" disabled={true}>
  disabled
</Link>
</div>
```

Primary Link - Image Icon

```jsx
<Link auid="Link-6" btntype="primary" imgUrl="https://imageurl.jpg" imgHeight="20px" imgWidth="35px">
  Primary Link
</Link>
```

Secondary Link - Image Icon

```jsx
<Link auid="Link-7" btntype="secondary" imgUrl="https://imageurl.jpg" imgHeight="20px" imgWidth="35px">
  Secondary
</Link>
```

XSmall Link

```jsx
<Link auid="Link-8" size="XS" >
  XSmall
</Link>
```

Small Link

```jsx
<Link auid="Link-9" size="S" >
  Small
</Link>
```

Medium Link

```jsx
<Link auid="Link-10" size="M" >
  Medium
</Link>
```

Large Link

```jsx
<Link auid="Link-11" size="L" >
  Large
</Link>
```

```jsx
<div style={{"background-color":"#4c4c4c","min-height":"120px", "padding-top":"50px", "padding-left": "10px"}}>
<Link auid="Link-12" btntype="secondary" btnvariant="tertiary">
  Secondary
</Link>
</div>
```

Secondary Link variant 3 - Disabled

```jsx
<div style={{"background-color":"#4c4c4c","min-height":"120px", "padding-top":"50px", "padding-left": "10px"}}>
<Link auid="Link-13" btntype="secondary" btnvariant="tertiary" disabled={true}>
  Secondary
</Link>
</div>
```
###### Notes

* `min-width` on the Links will be removed once size variants are introduced
* Default height and width will be set if imgHeight and imgWidth is not passed with ImgUrl
