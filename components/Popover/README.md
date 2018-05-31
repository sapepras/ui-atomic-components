This component is stateless.  If you use this component you will manually have to pipe open close functionality.

| attribute | type   | default | required | description                               |
|-----------|--------|---------|----------|-------------------------------------------|
| direction | string | na      | yes      | possible values: left, right, top, bottom |
| open      | bool   | false   | false    | determines if popover is open or not      |

```jsx
<Popover.Wrapper>
    <button>stateless</button>
    <Popover.Modal direction="right" open={true}>
        <div style={{width: '200px'}}>There is context</div>
    </Popover.Modal>
</Popover.Wrapper>
```