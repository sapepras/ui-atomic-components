# PasswordField Component: (**_WIP_**)

PasswordField Atomic Component renders a custom password input field component with an inline button to show/hide password entered. It ignores spaced by default. PasswordField accepts various props as mentioned below.

## Available Props

* **className**: *PropTypes.string* 

```Custom CSS Class can be passed which holds greater precedence over default styles.```

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

* **inlineButtonTextHide**: *PropTypes.string*

  ```Text to display on inline button when the password is being displayed.```


* **inlineButtonTextShow**: *PropTypes.string*

  ```Text to display on inline button when the password is hidden.```

* **buttonTextColor**: *PropTypes.string*

  ```Color string for the text on inline button```

* **buttonTextFont**: *PropTypes.string*

  ```Font size for the text on inline button```

* **buttonTextWeight**: *PropTypes.string*

  ```Font weight for the text on inline button```

## Example Usage

### Firstly, Import PasswordField from Atomic Components.

### Then,

``` jsx
<PasswordField 
  disabled={false} 
  className={someStyleClass}
  placeholder="Enter Password" 
  width="30rem" 
  height="2.5rem" 
  fontSize="1.5rem" 
  borderColor="#64FCAB" 
  borderWidth="0.5rem" 
  borderRadius="6px" 
  activeBorderColor="red" 
  activeBorderWidth="3px" 
  fontWeight="500" 
  inlineButtonTextHide="Hide"
  inlineButtonTextShow="Show"
  buttonTextColor="#0055a6"
  buttonTextFont="1rem"
  buttonTextWeight="300"
/>
```

* Most of the props have some default values which get rendered if no value is provided. 