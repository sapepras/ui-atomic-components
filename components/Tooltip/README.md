# Tooltip Component: (**_WIP_**)

Tooltip Atomic Component renders a custom tooltip component on hover with various props as mentioned below.

## Available Props

* **auid**: *PropTypes.string* 

```describes the auid of the Tooltip Component.```

* **content**: *PropTypes.any*

```the content of the tooltip to be displayed. Can be JSX tags or text also.```

* **direction**: *PropTypes.oneOf([directionstring,{mobile: directionString, desktop: directionString}])*

```the direction property describes the direction of the Tooltip which can be 'directionString' with values 'left' or 'right' or 'top' or 'bottom' for both desktop and mobile or an object eg. {mobile: 'top', desktop: 'left'}.```

* **className**: *PropTypes.string*

```the className property can be used to set the class of the tooltip content which can be used to set styles for the inner text content of the tooltip.```

* **align**: *PropTypes.oneOf(['L', 'R', 'C'])*

```the align property describes the position of the Tooltip which can be 'L' for left edge, 'R' for right edge and 'C' for center rendering. Default is 'C' for centred tooltip.```

* **lineHeightFix**: *PropTypes.number*

```the lineHeightFix property describes the line-height of the tooltip content.```


* **closeBtn**: *PropTypes.bool*

```Displays a close button on top right of tooltip, default is false```


## Example Usage

### Firstly, Import Tooltip from Atomic Components.

### Then,

``` jsx
<Tooltip auid="sample tooltip" direction={{mobile: 'top', desktop: 'right'}} align="R" className='tooltipContent' lineHeightFix={1.5}
          content={
            <div style={{width: '200px', margin: '0px'}}>
          Use margins to increase white space between
          tooltip modal border and tooltip modal content and className prop to do font- styling.
            </div>
          }>
          <span>Some content</span>
</Tooltip>

<br/><br/><br/>
<hr/>
<br/><br/><br/>

<Tooltip auid="sample tooltip" direction="right" align="C" lineHeightFix={1.5} className='tooltipContent'
          content={
            <div style={{width: '200px', margin: '0px'}}>
          Use margins to increase white space between
          tooltip modal border and tooltip modal content and className prop to do font- styling..
            </div>
          }>
          <span>Same for mobile/desktop</span>
</Tooltip>

<br/><br/><br/>
<hr/>
<br/><br/><br/>

<Tooltip showOnClick={true} auid="sample tooltip" direction="right" align="C" lineHeightFix={1.5} className='tooltipContent'
          content={
            <div style={{width: '200px', margin: '0px'}}>
          Use margins to increase white space between
          tooltip modal border and tooltip modal content and className prop to do font- styling..
            </div>
          }>
          <span>Show on click</span>
</Tooltip>

<br/><br/><br/>
```

* Most of the props have some default values which get rendered if no value is provided. 