# RadioButton Component: (**_WIP_**)

Radio Button Atomic Component renders a custom radio button component with various props as mentioned below.

## Available Props

* **initialState**: *PropTypes.string* 

``` Pass the default value of radio button to be checked. ```

* **disabled**: *PropTypes.bool*

```boolean value to render the RadioButton enabled or disabled.```

* **onChange**: *PropTypes.func*

```Function to be executed when any option in dropdown is clicked upon.eturns the state of radio button```

* **name**: *PropTypes.string* *Required*

```name of the radio button.```

* **id**: *PropTypes.string* *Required*

```id of the radio button.```

* **wrapperClassName**: *PropTypes.string*

```className applied to component's wrapping <span/> tag```


## Example Usage

### Firstly, Import RadioButton from Atomic Components.

### Then,

``` jsx
<RadioButton 
  initialState={true}
  disabled={false} 
  onChange={this.functionToBeExecutedWhenRadioButtonChanges}
  name="test-radio"
  id="test-radio"
/>
```

* Most of the props have some default values which get rendered if no value is provided. 

##### For further details, clone ```ui-atomic-components``` from bitbucket and look under the hood. 

### To Do -
* compatibility with Redux Form yet to be tested.