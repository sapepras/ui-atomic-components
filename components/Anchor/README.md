## Anchor Tag

Normal Link:

```js
<Anchor auid="anchor-1" href="http://www.google.com">
  Google
</Anchor>
```

Disabled Link:

```jsx
<Anchor auid="anchor-2" disabled={true} href="http://www.yahoo.com">
  Yahoo
</Anchor>
```

Icon Text Link:

```jsx
<Anchor auid="anchor-3" atype="icontext" href="https://www.academy.com">
  Academy
</Anchor>
```

###### Notes

* `<Link>` from `react-router` to be used for client side routing
* Anchor tag has a different way of styling, we are using `CSS modules` as a trial, it will be replaced with emotionJS
