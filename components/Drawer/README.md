#### Drawer Component:(**_WIP_**)

Provides a simple toggle-able drawer component which holds a collection of other React or HTML elements within.

* Empty Drawer:

```jsx
<Drawer title="Section" />
```

* Drawer with some Content

```jsx
<Drawer title="ClickMe">
  <div>
    <p>Hello World!</p>
  </div>
</Drawer>
```

* Drawer with specific Background Color

```jsx
<Drawer title="ClickMe" backgroundColor="#FFFFFF">
  <div>
    <p>Hello World!</p>
  </div>
</Drawer>
```

* Drawer with html elements in title

```jsx

renderTitle() {
  <div>
    <h1> Title </h1>
  </div>
}

<Drawer title={this.renderTitle()} backgroundColor="#FFFFFF">
  <div>
    <p>Hello World!</p>
  </div>
</Drawer>
```

* Drawer non collapsible [Always Open]

```jsx
<Drawer title="Title" isCollapsible={false} >
  <div>
    <p>Hello World!</p>
  </div>
</Drawer>
```

###### Notes

###### Todo

* Insert font icons.
* Convert to pure stateless component with JS class toggle.
* Move to pure scss
