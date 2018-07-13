# Checkbox Component: (**_WIP_**)

Checkbox Atomic Component renders a custom checkbox component with various props as mentioned below.

## Available Props

* **initialState**: *PropTypes.bool* 

```Passes the initial state of the checkbox as true or false. Determines whether the checkbox has to be rendered checked or not```

* **formLabel**: *PropTypes.string*

```The value of 'htmlFor' attribute for the label for accessibility purposes. ```


* **labelPosition**: *PropTypes.string*

```A string containing position of label text to be either left or right of the checkbox, default set to right```

* **labelText**: *PropTypes.object*

```Provides the text to the label component of the checkbox. Default set to blank string.```

* **disabled**: *PropTypes.bool*

```boolean value to render the checkbox enabled or disabled.```

* **onChange**: *PropTypes.func*

```Function to be executed when any option in dropdown is clicked upon.```


## Example Usage

### Firstly, Import Checkbox from Atomic Components.

### Then,

``` jsx
<Checkbox 
  initialState={true} // to render a checked checkbox
  disabled={false} 
  formLabel="testing-checkbox"
  labelText="Some Checkbox Text"
  labelPosition="left" // either left or right
  onChange={this.functionToBeExecutedWhenCheckboxChanges}
/>
```

* Most of the props have some default values which get rendered if no value is provided. 
