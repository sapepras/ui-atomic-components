<img width="100%" alt="atomic design" src="https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png">

# Atomic Design

Atomic design is methodology for creating design systems. There are five distinct levels in atomic design:

* Atoms
* Molecules
* Organisms
* Templates
* Pages

#### Atoms

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.
The atoms should be written without margins and positions , _position_-ing of these atoms should be done by a molecule or organism that uses the atom.

This entire repository drives the atomic components that is used across our ecommerce application .
Each atom should be a self sufficient entity , in that it should be unit testable, styled via CSS in JS ,consumable and extendable via props.

_Below items are not part of this repository , but hey some theoritcal knowledge_ :)

#### Molecules

Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

For example, a form label, input or button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.

#### Organisms

Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.

Eg: Header,Footer, storelocator can use a combination of molecules and atoms to create a standalone module of a page.

#### Templates

Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.

_We will not be creating any templates in our front-end code as the page layout is to a certain extent determined by AEM_

#### Pages

Pages are specific instances of templates that show what a UI looks like with real representative content in place

_That is about it here,. now go out there and build something :)_

###### Notes

* Futher Reading L Atomic Design by Brad Frost : http://atomicdesign.bradfrost.com/table-of-contents/

* All of our atoms will be moved to npm `org` repository of Academy `npm`
