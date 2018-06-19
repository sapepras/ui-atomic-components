This component is stateless.  If you use this component you will manually have to pipe open close functionality.

| attribute | type   | default | required | description                                         | example                          |
|-----------|--------|---------|----------|-----------------------------------------------------|----------------------------------|
| direction | string | na      | yes      | values: left, right, top, bottom                    | 'left'                           |
| direction | object | na      | yes      | {mobile: directionString, desktop: directionString} | {mobile: 'top', desktop: 'left'} |
| open      | bool   | false   | false    | determines if popover is open or not                | true                             |

```jsx
<br/><br/><br/>

<PopoverStateless.Wrapper>
    <button>Change Mobile/Desktop</button>
    <PopoverStateless.Modal direction={{mobile: 'top', desktop: 'right'}} open={true} lineHeightFix={1.5}>
        <div style={{width: '200px', margin: '25px 35px'}}>
            Use margins to increase white space between
            popover modal border and popover modal content.
        </div>
    </PopoverStateless.Modal>
</PopoverStateless.Wrapper>

<br/><br/><br/>
<hr/>
<br/><br/><br/>

<PopoverStateless.Wrapper>
    <button>Same for Mobile/Desktop</button>
    <PopoverStateless.Modal direction="right" open={true} lineHeightFix={1.5}>
        <div style={{width: '200px', margin: '25px 35px'}}>
            Use margins to increase white space between
            popover modal border and popover modal content.
        </div>
    </PopoverStateless.Modal>
</PopoverStateless.Wrapper>

<br/><br/><br/>
```