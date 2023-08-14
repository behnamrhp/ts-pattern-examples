## Decorator

## Intro

The Decorator pattern is a structural pattern that allows you to add behavior to your class at runtime without changing the original functionality or interface.

This pattern consists of three main components:

1. Main Logic Interface: This is an interface that your main logics utilize. It serves as a contract for the main classes that implement it, and you can add additional behavior to these main classes without altering their original implementations.

2. Main Logics: These are your main classes that implement the interface mentioned in part 1. The goal is to add extra functionality to these classes without modifying their existing code.

3. Decorator: This acts as a wrapper around the main logic and holds a reference to the main class. It also implements the interface mentioned in part 1, allowing it to add supplementary functionality to the main logic.

By using the Decorator pattern, you can dynamically enhance the behavior of objects by attaching decorators to them, providing additional features without directly modifying the original classes.

## Where you can use it

you can use this pattern in such following scenarios:

1. **Extending functionality**: You can use the Decorator pattern when you want to add new features or behavior to an existing class without modifying its code. This allows for flexible extension of functionality without impacting other parts of the codebase.

2. **Composing objects with different behaviors**: The Decorator pattern allows you to combine multiple decorators to create objects with different combinations of behaviors. This is useful when you have a set of base behaviors and want to add or remove specific features as needed.

3. **Open-closed principle**: The Decorator pattern aligns with the open-closed principle, which states that classes should be open for extension but closed for modification. By using decorators, you can extend the functionality of objects without modifying their original implementation.

4. **Runtime configuration**: Decorators can be applied and removed at runtime, providing flexibility in configuring the behavior of objects based on specific conditions or requirements.

## Example

**gloal**: In this example, we have two base logger classes that we want to enhance with a feature to save their logs to a CSV file after logging.

**Structure**: In this example, we have two types of classes and one interface:

1. _ILoggers_: This interface specifies the basic operations that we want to handle, such as the logging operation.

2. _ConsoleLogger_: This class represents one of our main logger classes for simple logging. Please note that we will also have a _ConsoleErrorLogger_ class, which is another main class implementing the same interface.

3. _SaveToFileLoggersDecorator_: This is the main decorator wrapper that implements the base functionality and wraps the logic to obtain a reference from the main logger class while also implementing the interface.

4. _SaveToCSVFileLoggerDecorator_: This is one of our decorators that extends the base decorator wrapper and adds functionality to the main logger classes. In this example, the added functionality is saving the logs to a CSV file.
