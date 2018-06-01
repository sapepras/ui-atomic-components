This component is stateless.  If you use this component you will manually have to pipe open close functionality.

| attribute | type   | default | required | description                               |
|-----------|--------|---------|----------|-------------------------------------------|
| direction | string | na      | yes      | possible values: left, right, top, bottom |
| open      | bool   | false   | false    | determines if popover is open or not      |

```jsx
<PopoverStateless.Wrapper>
    <button>stateless</button>
    <PopoverStateless.Modal direction="right" open={true}>
        <div style={{width: '200px', margin: '25px 35px'}}>
            Use margins to increase white space between
            popover modal border and popover modal content.
        </div>
    </PopoverStateless.Modal>
</PopoverStateless.Wrapper>
```