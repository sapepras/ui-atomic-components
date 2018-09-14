# Checkbox Component: (**_WIP_**)

Checkbox Atomic Component renders a custom checkbox component with various props as mentioned below.

## Available Props

* **initialState**: *PropTypes.bool* 

```Passes the initial state of the checkbox as true or false. Determines whether the checkbox has to be rendered checked or not```

* **disabled**: *PropTypes.bool*

```boolean value to render the checkbox enabled or disabled.```

* **onChange**: *PropTypes.func*

```Function to be executed when any option in dropdown is clicked upon. Returns the state of checkbox```

* **name**: *PropTypes.string* *Required*

```name of the checkbox.```

* **id**: *PropTypes.string* *Required*

```id of the checkbox.```


## Example Usage

### Firstly, Import Checkbox from Atomic Components.

### Then,

``` jsx
{ var someStylingClass = '';}
<Checkbox 
  initialState={true} // to render a checked checkbox
  disabled={false} 
  onChange={this.functionToBeExecutedWhenCheckboxChanges}
  name="test-checkbox"
  id="test-checkbox"
/>
```

* Most of the props have some default values which get rendered if no value is provided. 

### In case of use with Redux Form

**Example Redux Form Wrapper Component**

``` jsx
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@academysports/fusion-components/dist/Checkbox';

const renderCheckbox = ({
  input: { value, onChange, ...input },
  label,
  name,
  id,
  labelClass,
  meta: { touched, error, warning },
  ...rest
}) => (
  <div>
    <label className={`${labelClass} d-flex`}>
      <Checkbox
        {...input}
        name={name}
        id={id}
        checked={value}
        onChange={val => onChange(val)}
        {...rest}
      />
      <div>{label}</div>
    </label>
    <div>
      {touched &&
((error && <span className="text-danger">{error}</span>) ||
(warning && <span className="text-danger">{warning}</span>))}
    </div>
  </div>
);

renderCheckbox.propTypes = {
  input: PropTypes.isRequired,
  label: PropTypes.string,
  labelClass: PropTypes.oneOf(['object', 'string']),
  meta: PropTypes.object,
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string
};
export default renderCheckbox;

```
### Recent Updates
* Updated Prop names to avoid conflicts with default react props.

##### For further details, clone ```ui-atomic-components``` from bitbucket and look under the hood. 