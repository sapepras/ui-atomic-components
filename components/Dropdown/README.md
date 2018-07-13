# Dropdown Component: (**_WIP_**)

Dropdown Atomic Component renders a custom dropdown component with various props as mentioned below.

## Available Props

* **className**: *PropTypes.string* 

```Custom CSS Class can be passed which holds greater precedence over default styles.```

* **DropdownOptions**: *PropTypes.array*

```Array of objects with each object being the option to be rendered in the Dropdown. The object must have a certain structure as follows - ```

``` jsx
{
  title: Title of option, first line to be displayed,
  subtitle: Second line to be displayed in the option (optional)
}
```

* **multi**: *PropTypes.bool*

```Boolean value to represent the type of dropdown,i.e single level or multi level. Passing 'True' signifies a two level dropdown with each option having a title and subtitle```

* **titleClass**: *PropTypes.object*

```Custom CSS Class can be passed which holds greater precedence over default styles for title field of the options```

* **subtitleClass**: *PropTypes.object*

```Custom CSS Class can be passed which holds greater precedence over default styles for subtitle field of the options```

* **disabled**: *PropTypes.bool*

```boolean value to render the dropdown enabled or disabled.```

* **onSelect**: *PropTypes.func*

```Function to be executed when any option in dropdown is clicked upon.```

* **initiallySelectedOption**: *PropTypes.number*

```Index of option to be rendered selected when the dropdown is rendered.```

* **width**: *PropTypes.string*

```width of the dropdown```

* **height**: *PropTypes.string*

```height of the dropdown```

* **borderColor**: *PropTypes.string*

```border color of the Dropdown.```

* **borderWidth**: *PropTypes.string*

```width of the border of Dropdown.```

* **borderRadius**: *PropTypes.string* 

```border radius of Dropdown.```

* **listBorderRadius**: *PropTypes.string*

```border radius value for the list options, defaults to 5px.```


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
  disabled={false} 
  width="30rem" 
  height="3.5rem" 
  borderColor="#64FCAB" 
  borderWidth="1px" 
  borderRadius="4px" 
  titleClass={titleStyleClass}
  subtitleClass={subtitleStyleClass}
  listBorderRadius="5px"
/>
```

* Most of the props have some default values which get rendered if no value is provided. 