# RadioButton Component: (**_WIP_**)

Radio Button Atomic Component renders a custom radio button component with various props as mentioned below.

## Available Props

* **initialState**: *PropTypes.bool* 

```Passes the initial state of the RadioButton as true or false. Determines whether the RadioButton has to be rendered checked or not```

* **formLabel**: *PropTypes.string* **required**

```The value of 'htmlFor' attribute for the label for accessibility purposes, also works as Id. ```


* **labelPosition**: *PropTypes.string*

```A string containing position of label text to be either left or right of the RadioButton, default set to right```

* **labelText**: *PropTypes.object*

```Provides the text to the label component of the RadioButton. Default set to blank string.```

* **disabled**: *PropTypes.bool*

```boolean value to render the RadioButton enabled or disabled.```

* **onChange**: *PropTypes.func*

```Function to be executed when any option in dropdown is clicked upon.eturns the state of radio button```

* **labelClass**: *PropTypes.object*

```Style class to applied to label text of the radio button```



## Example Usage

### Firstly, Import RadioButton from Atomic Components.

### Then,

``` jsx
<RadioButton 
  initialState={true} // to render a checked RadioButton
  disabled={false} 
  formLabel="testing-RadioButton"
  labelText="Some RadioButton Text"
  labelPosition="left" // either left or right
  onChange={this.functionToBeExecutedWhenRadioButtonChanges}
/>
```

* Most of the props have some default values which get rendered if no value is provided. 
