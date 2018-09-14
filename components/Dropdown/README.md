# Dropdown Component: (**_WIP_**)

Dropdown Atomic Component renders a custom dropdown component with various props as mentioned below.

## Available Props

* **className**: *PropTypes.string* 

```Custom CSS Class can be passed which holds greater precedence over default styles.```

* **DropdownOptions**: *PropTypes.array* **Required**

```Array of objects with each object being the option to be rendered in the Dropdown. The object must have a certain structure as follows - ```

``` jsx
{
  title: Title of option, first line to be displayed,
  subtitle: Second line to be displayed in the option (optional),
  value: value of a component (optional)
}
```

* **multi**: *PropTypes.bool*

```Boolean value to represent the type of dropdown,i.e single level or multi level. Passing 'True' signifies a two level dropdown with each option having a title and subtitle```

* **titleClass**: *PropTypes.oneOfType([PropTypes.string, PropTypes.object])* 

```Custom CSS Class can be passed which holds greater precedence over default styles for title field of the options```

* **subtitleClass**: *PropTypes.oneOfType([PropTypes.string, PropTypes.object])*

```Custom CSS Class can be passed which holds greater precedence over default styles for subtitle field of the options```

* **disabled**: *PropTypes.bool*

```boolean value to render the dropdown enabled or disabled.```

* **onSelectOption**: *PropTypes.func*

```Function to be executed when any option in dropdown is clicked upon. Returns index and title value of option selected. ```

* **initiallySelectedOption**: *PropTypes.number*

```Index of option to be rendered selected when the dropdown is rendered.```

* **width**: *PropTypes.string*

```width of the dropdown```

* **height**: *PropTypes.string*

```height of the dropdown```

* **bordercolor**: *PropTypes.string*

```border color of the Dropdown.```

* **borderwidth**: *PropTypes.string*

```width of the border of Dropdown.```

* **borderradius**: *PropTypes.string* 

```border radius of Dropdown.```

* **listborderradius**: *PropTypes.string*

```border radius value for the list options, defaults to 5px.```

* **maxHeight**: *PropTypes.string*

```max height of the dropdown list, default set to 10rem.```

* **placeholderOption**: *PropTypes.object*
``` placeholder option for the dropdown, defaults to the first dropdown option.``

* **name**: *PropTypes.string.isRequired*

```name attribute of the field.```

* **id**: *PropTypes.string.isRequired*

```id attribute of the field.```

## Example Usage

### Firstly, Import Dropdown from Atomic Components.

### Then,

``` jsx
<Dropdown 
  multi={true}
  DropdownOptions={[
    {title: 'Jack', subtitle: 'New York, US'},
    {title: 'Gabriel', subtitle: 'Barcelona, Spain'},
    {title: 'Tejas', subtitle: 'Karnataka, India'}]}
  
  initiallySelectedOption = {2}
  id="id"
  name="name"
  disabled={false} 
  width="30rem" 
  height="3.5rem" 
  bordercolor="#64FCAB" 
  borderwidth="1px" 
  borderradius="4px" 
  titleClass={titleStyleClass}
  subtitleClass={subtitleStyleClass}
  listborderradius="5px"
  onSelectOption={someFunction} // in usage: onSelectOption = {index => someFunction(index)} i.e returns index of option selected. 
/>
```

* Most of the props have some default values which get rendered if no value is provided. 

### Recent Updates -
* Now Dropdown Opens onFocus.
* Synthetic Accessibility features like traversing using keyboard keys, searching using first letter and more have been addressed.
* Added auto height and responsive indicator icon.
* Updated Prop names to avoid conflicts with default react props.
* Addressed styling issues where indicator arrow was going out of button. 
* Added ```padding``` for button and ```listItemPadding``` as prop to dropdown.
* Added a feature where if your dropdown implementation doesn't require 'select' to be the first    option, you can remove it from dropdown options using new ```placeholderOption``` object prop containing title/subtitle. 
* Added fix where clicking outside the dropdown wasn't closing It. 
* Fixed ```onSelectOption``` to return index, title of selected element.
* Added highlighting to previously selected option.
* Fixed issues where the width of options was getting a lot more or less than the width of button.

##### For further details, clone ```ui-atomic-components``` from bitbucket and look under the hood. 