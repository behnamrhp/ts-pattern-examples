# Simple Factory Pattern

## Intro

this pattern is a creational pattern and it lets you to move your object creations in a centralized location so it'll improve readability and maintanance of your codes.

this pattern is one of the most popular pattern.
This pattern can be a good step before Factory Method pattern.
Note: Actually Factory method pattern is a simple factory pattern that it is too big so it has extracted to separeted parts.

## Where you can use it
This pattern is useful when the process involved in object creation is relatively simple, and the client code does not need to be aware of the specific classes being instantiated.

But here are some common scenarios where you can use the Simple Factory Pattern:
### Creating Different Types of Objects:
If your application involves creating multiple types of objects, and the exact type of the object is determined by certain conditions or parameters, a simple factory can encapsulate the object creation logic. For example, you might have a ShapeFactory that creates different types of shapes (e.g., circles, squares, triangles) based on user input.

### Decoupling Client Code:
The Simple Factory Pattern helps decouple the client code from the concrete classes it uses. The client code only interacts with the factory interface and is not concerned with the details of object creation. This makes it easier to change or extend the types of objects created without modifying the client code.

### Common Initialization Logic:
If your objects require common initialization logic, and you want to centralize that logic in one place, a simple factory can handle the object creation and initialization. This promotes code reuse and reduces redundancy. For example in entities of each domain.

### Encapsulating Object Creation:
The Simple Factory Pattern is useful when you want to encapsulate the process of object creation in a separate component. This can be beneficial for maintainability and readability, especially when the creation logic is complex or subject to change.

### Testing and Dependency Injection:
Using a simple factory makes it easier to substitute mock objects or dependencies during testing. You can create a factory interface, and then provide different implementations (e.g., real implementation, mock implementation) depending on the context.

## Example
in this example we considered that we have truck object for transportation but after some times we need to add another transportation mechanism that it is ship transportation.<br/>
in this situation we can have an object to decide what object we should have in specific situation which we call it a **factory**.
in this example our factory object is LogisticFactory with a method for create object