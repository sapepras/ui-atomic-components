# InputField Component: (**_WIP_**)

InputField Atomic Component renders a custom input field component with various props as mentioned below. For ```email, password``` - try respective atomic components, available separately.

## Available Props

* **classname**: *PropTypes.oneOfType([PropTypes.string, PropTypes.object])* 

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

* **name**: *PropTypes.string.isRequired*

```name attribute of the field.```

* **id**: *PropTypes.string.isRequired*

```id attribute of the field.```


## Example Usage

### Firstly, Import InputField from Atomic Components.

### Then,

``` jsx
{ var someStyleClass = '';}
<InputField 
  type="text" 
  disabled={false} 
  classname={someStyleClass}
  placeholder="Enter some text" 
  width="30rem" 
  height="2.5rem" 
  fontSize="1.5rem" 
  bordercolor="#64FCAB" 
  borderwidth="0.5rem" 
  borderradius="6px" 
  activebordercolor="red" 
  activeborderwidth="3px" 
  fontWeight="500" 
  name="test"
/>
```

* Most of the props have some default values which get rendered if no value is provided. 

### In case of use with Redux Form

**Example Redux Form Wrapper Component**

``` jsx static
import React from 'react';
import PropTypes from 'prop-types';
import Input from '@academysports/fusion-components/dist/InputField';
import { labelStyle, formControl } from './../../style';

const renderField = ({
                       input,
                       label,
                       type,
                       meta: { touched, error, warning }
                     }) => (
                       <div>
                         <label className={`${labelStyle} o-copy__14bold p-quarter`}>{label}</label>
                         <div>
                           <Input
                             {...input}
                             width="36.3125rem"
                             height="2.5rem"
                             borderradius="4px"
                             bordercolor="rgba(0, 0, 0, 0.3)"
                             borderwidth="1px"
                             classname={`${formControl} w-100`}
                             placeholder={label}
                             type={type}
                           />
                           {touched &&
      ((error && <span className="body-12-regular text-danger">{error}</span>) ||
        (warning && <span className="body-12-regular text-danger">{warning}</span>))}
                         </div>
                       </div>
);
renderField.propTypes = {
  input: PropTypes.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};
export default renderField;

```
### Recent Updates
* Addition of padding props.
* Updated Prop names to avoid conflicts with default react props.
* Added ```...rest``` to the input field to enable redux form.
* Added ```name``` prop to identify individual fields. 

##### For further details, clone ```ui-atomic-components``` from bitbucket and look under the hood. 