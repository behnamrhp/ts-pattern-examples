## Bridge

## Intro

Bridge pattern is a Structural pattern that contains from two parts: 1. Implementation and 2. Abstraction

1. Implementation: this is the lower-level details and functionality that abstraction layer relies on.
2. Abstraction: this layer is not that abstraction concept that we know in our coding languages it is higher-level of logics that client code interact with it. in this layer we hide all of complexities and details of our implementation from the client code by this layer<br/>
   The purpose of abstraction layer in the Bridge pattern is to decouple the abstraction from its implementation. <br/>
   This pattern allows parts of our code be more decoupled<br/>
   with this pattern we can follow more single responsibility and open/close principle in our codes.

## Where you can use it

you can use this pattern in such following scenarios:

1. **Decoupling parts**: when you have a code that on part of it can have multiple logics (implementation layer) and you want to use them or switch between them at runtime

2. **Extendabe**: when one part of your code's logic can be extended through time and you want to handle it without modifing your existing client codes.

## Example

**gloal**: in this example we tried to use a real world exmaple for this pattern, in this example we used a button logic in an app. <br/>
our button has two parts, one of them is the logics that ui part need it, and one part is responsible for showing the button, the part that is responsible for just UI can be used in multiple places(abstraction layer) and it can have multiple UI logics (implementation layer)

**structure**: in this example we have two classes and one interface:

1. _ButtonView_: this class is our abstraction layer that responsible for high-level logics that it is in touch with client code.

   this class is responsible for just showing the ui and get onClick callback function to pass it to button to handle on click feature

2. _ChangeColorViewmodel_: this class is one of our implementation layer and it will handle detail logic of on click handler callback logic to decide what will happen when user clicked on this button.

3. _IButtonViewmodel_: this interface is our **bridge** between abstraction and implmentation. abstraction layer doesn't care what implementation layer does in details. it just knows this bridge to handle UI logics

> **note**: this example is the main part of view and viewmodel layer that exists in mvvm architecture that we described it in general way by focusing this pattern.
