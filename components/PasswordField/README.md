# PasswordField Component: (**_WIP_**)

PasswordField Atomic Component renders a custom password input field component with an inline button to show/hide password entered. It ignores spaced by default. PasswordField accepts various props as mentioned below.

## Available Props

* **classname**: *PropTypes.oneOfType([PropTypes.string, PropTypes.object])* 

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

* **bordercolor**: *PropTypes.string*

```border color of the field.```

* **borderwidth**: *PropTypes.string*

```width of the border of field in pixels.```

* **borderradius**: *PropTypes.string* 

```border radius of field in pixels.```

* **activebordercolor**: *PropTypes.string* 

```border color when field is in focus.```

* **activeborderwidth**: *PropTypes.string*

```border width of the field when in focus.```

* **fontWeight**: *PropTypes.string*

```font weight of the text in field.```

* **inlinebuttontexthide**: *PropTypes.string*

  ```Text to display on inline button when the password is being displayed.```


* **inlinebuttontextshow**: *PropTypes.string*

  ```Text to display on inline button when the password is hidden.```

* **buttontextcolor**: *PropTypes.string*

  ```Color string for the text on inline button```

* **buttontextfont**: *PropTypes.string*

  ```Font size for the text on inline button```

* **buttontextweight**: *PropTypes.string*

  ```Font weight for the text on inline button```

* **inlinebuttonclass**: *PropTypes.string*

  ```style class for inline show/hide button```
  
* **buttonBg**: *PropTypes.string*

  ```background color of inline button, transparent by default.```

* **name**: *PropTypes.string.isRequired*

```name attribute of the field.```

* **id**: *PropTypes.string.isRequired*

```id attribute of the field.```

## Example Usage

### Firstly, Import PasswordField from Atomic Components.

### Then,

``` jsx
{ var someStyleClass = '';}
<PasswordField 
  disabled={false} 
  className={someStyleClass}
  placeholder="Enter Password" 
  width="30rem" 
  height="2.5rem" 
  fontSize="1.5rem" 
  bordercolor="#64FCAB" 
  borderwidth="0.5rem" 
  borderradius="6px" 
  activebordercolor="red" 
  activeborderwidth="3px" 
  fontWeight="500" 
  inlinebuttontexthide="Hide"
  inlinebuttontextshow="Show"
  buttontextcolor="#0055a6"
  buttontextfont="1rem"
  buttontextweight="300"
  inlinebuttonclass={someStyleClass}
/>
```

* Most of the props have some default values which get rendered if no value is provided. 

### In case of use with Redux Form

**Example Redux Form Wrapper Component**

``` jsx static
import React from 'react';
import PropTypes from 'prop-types';
import Password from '@academysports/fusion-components/dist/PasswordField';
import { labelStyle, formControl } from './../../style';

const renderPasswordField = ({
                       input,
                       label,
                       type,
                       meta: { touched, error, warning }
                     }) => (
                       <div>
                         <label className={`${labelStyle} o-copy__14bold p-quarter`}>{label}</label>
                         <div>
                           <Password
                             {...input}
                             width="36.3125rem"
                             height="2.5rem"
                             borderradius="4px"
                             bordercolor="rgba(0, 0, 0, 0.3)"
                             borderwidth="1px"
                             classname={`${formControl} w-100`}
                             placeholder={label}
                             type={type}
                             name={name}
                             id={id}
                           />
                           {touched &&
      ((error && <span className="body-12-regular text-danger">{error}</span>) ||
        (warning && <span className="body-12-regular text-danger">{warning}</span>))}
                         </div>
                       </div>
);
renderPasswordField.propTypes = {
  input: PropTypes.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
export default renderPasswordField;

```
### Recent Updates
* Addition of padding props.
* Updated Prop names to avoid conflicts with default react props.

##### For further details, clone ```ui-atomic-components``` from bitbucket and look under the hood. 