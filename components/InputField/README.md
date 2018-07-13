# InputField Component: (**_WIP_**)

InputField Atomic Component renders a custom input field component with various props as mentioned below.

## Available Props

* **className**: *PropTypes.string* 

```Custom CSS Class can be passed which holds greater precedence over default styles.```

* **type**: *PropTypes.string*

```type describes the type of input field.```

* **disabled**: *PropTypes.bool*

```boolean value to render the field enabled or disabled.```

* **onChange**: *PropTypes.func*

```function to be executed when any change in field occurs.```

* **placeholder**: *PropTypes.string*

```placeholder text for the field.```

* **value**: *PropTypes.string*

```value to be prefilled in the field.```

* **width**: *PropTypes.string*

```width of the field.```

* **height**: *PropTypes.string*

```height of the field.```

* **fontSize**: *PropTypes.string*

```fontSize of the text in field.```

* **borderColor**: *PropTypes.string*

```border color of the field.```

* **borderWidth**: *PropTypes.string*

```width of the border of field in pixels.```

* **borderRadius**: *PropTypes.string* 

```border radius of field in pixels.```

* **activeBorderColor**: *PropTypes.string* 

```border color when field is in focus.```

* **activeBorderWidth**: *PropTypes.string*

```border width of the field when in focus.```

* **fontWeight**: *PropTypes.string*

```font weight of the text in field.```

## Example Usage

### Firstly, Import InputField from Atomic Components.

### Then,

``` jsx
<InputField 
  type="text" 
  disabled={false} 
  className={someStyleClass}
  placeholder="Enter some text" 
  width="30rem" 
  height="2.5rem" 
  fontSize="1.5rem" 
  borderColor="#64FCAB" 
  borderWidth="0.5rem" 
  borderRadius="6px" 
  activeBorderColor="red" 
  activeBorderWidth="3px" 
  fontWeight="500" 
/>
```

* Most of the props have some default values which get rendered if no value is provided. 