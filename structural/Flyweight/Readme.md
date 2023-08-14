## Flyweight

## Intro

The Flyweight pattern is a structural pattern that allows you to reduce the memory usage and improve performance of applications by sharing common data between multiple objects. It's particularly useful when dealing with a large number of objects that share similar properties but can vary in some aspects.

The key idea behind the Flyweight pattern is to separate intrinsic (shared) state from extrinsic (context-specific) state. Intrinsic state is the information that can be shared among multiple objects, while extrinsic state is specific to each individual object.

By isolating the intrinsic state and sharing it among multiple objects, the Flyweight pattern minimizes memory consumption and can lead to improved performance.

The pattern typically involves the following components:

1. Flyweight: Represents the shared state that can be shared among multiple objects. This class is usually immutable.

2. FlyweightFactory: Manages the creation, sharing, and management of flyweight objects. It ensures that flyweight objects are reused when possible, rather than creating new instances.

3. Client: Uses the flyweight objects to represent and manipulate the context-specific (extrinsic) state. The client may manage the extrinsic state that is not shared.

## Where you can use it

you can use this pattern in such following scenarios:

**Text Processing**: In text editors, word processors, or document processing applications, individual characters or fonts can be represented using the Flyweight pattern. Each character's formatting (font, size, color) can be shared among multiple instances, saving memory.

**Graphics and Game Development**: In graphical applications and games, sprites, textures, and other graphical elements often share common attributes like position, rotation, and scaling. The Flyweight pattern can be used to store these shared properties.

**Caching**: Caching is a common scenario where the Flyweight pattern can be employed. Objects that are expensive to create but are used frequently can be cached and reused, reducing the creation overhead.

**Database Access**: When dealing with database records, certain fields might be shared among multiple records. For example, an employee database could share department information for employees within the same department.

**Networking and Connection Pools**: In applications that deal with network connections or database connections, creating new connections can be resource-intensive. By using the Flyweight pattern, you can manage a pool of connections to reuse them efficiently.

**User Interfaces**: In GUI applications, UI elements like buttons, labels, and icons can share common attributes such as position, size, and appearance.

**Symbol Tables in Compilers**: When parsing and compiling source code, symbol tables need to store information about identifiers (variables, functions, etc.). Using the Flyweight pattern can reduce memory usage when dealing with a large number of identifiers with similar attributes.

And Etc.

## Example

In this example, we aim to render content for a text editing component in our UI app.<br/>
Each piece of content to be rendered requires text, style, color, and fonts. <br/>
Among these attributes, style, color, and fonts can be shared across multiple content pieces, classifying them as intrinsic. On the other hand, text is considered extrinsic data as it cannot be shared.<br/>
To optimize memory usage, we can employ the Flyweight pattern for our intrinsic values.
