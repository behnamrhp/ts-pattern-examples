## Factory Method

## Intro

The Factory Method Pattern is a creational design pattern that provides an interface for creating objects but allows subclasses to alter the type of objects that will be created.

This pattern usually contains these parts:

**Creator**: The class that declares the factory method, which returns an object of a type Creator knows but leaves the actual creation to its subclasses.<br/>
**ConcreteCreator**: Subclasses of Creator that implement the factory method to create specific types of products.<br/>
**Product**: The interface or abstract class that represents the objects being created.<br/>
**ConcreteProduct**: Classes that implement the Product interface.<br/> (In our example it has handled by concrete creator)

## Difference between Factory method and Simple factory pattern
**Responsibility**:

- *Factory Method Pattern*: The responsibility of creating objects is delegated to its subclasses, which implement the factory method.<br/>
*Simple Factory Pattern*: The responsibility of creating objects is centralized in a single class (often called the factory class), which contains a method to create objects based on certain parameters.
Flexibility:

- *Factory Method Pattern*: It provides more flexibility as each subclass can provide its own implementation of the factory method to create objects.<br/>
*Simple Factory Pattern*: It is less flexible because all object creation logic is contained in a single class, and changing the factory logic requires modifying this class.
Class Hierarchy:

- *Factory Method Pattern*: Typically involves an interface or abstract class for the product and a hierarchy of creator classes.<br/>
*Simple Factory* Pattern: Involves a single factory class that creates different types of products.

## Where you can use it
Here are some situations where the Factory Method pattern is commonly used:

1. **Creating Objects with Common Interface**:

    When you have a family of related classes that share a common interface, but the concrete classes need to be instantiated dynamically.
2. **Encapsulating Object Creation**:

    When you want to encapsulate the object creation code, allowing the client code to depend on the abstract interface rather than the concrete implementation.
3. **Subclass-Specific Instances:**

    When subclasses need to alter the class of objects that will be created, and you want to let each subclass specify the type of objects it creates.
4. **Configurable Component Creation**:

    When you need to provide a hook for subclasses to provide their own implementation of a component, allowing them to configure the system.
5. **Reducing Duplication**:

    When there is common object creation code that you want to centralize in one place to avoid duplication in your codebase.
6. **Framework Extensions**:

    In frameworks, where the framework provides a generic architecture, but the client application needs to extend or customize certain aspects without modifying the framework code.

7. **Testing**:

     When you want to facilitate unit testing by allowing subclasses to replace real objects with mock objects or stubs.

## Example


In this example, we have applied the first scenario for the usage of the Factory Method pattern, specifically "Creating Objects with Common Interface."

Let's consider a real-world scenario where we have a component library or an application requiring the creation of theme objects based on the ITheme interface. The creation of these theme objects can be achieved in various ways, either by the user's choice or using a default theme. The primary goal for the client code is to obtain the latest theme object and persist it. In such a situation, the Factory Method pattern proves beneficial.

By employing the Factory Method pattern, we create a base creator class responsible for obtaining the theme object and handling the saving process. This allows for flexibility in how the theme objects are instantiated and chosen, providing a common interface (ITheme) while encapsulating the details of object creation. The client code can then focus on obtaining and managing the theme object without being concerned with the specific implementation details.