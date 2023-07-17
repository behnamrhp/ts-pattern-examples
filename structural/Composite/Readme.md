## Composite

## Intro

A composite pattern allows you to treat individual objects uniformly. Composes objects into tree structures to handle specific operations with them as if they were individual objects

This pattern consists of three parts:

1. Composite interface: An interface that allows the client to work with all of its methods in a complex tree of objects (a composite container) or a simple tree of objects

2. Composite container: A composite container contains all of the sub-elements of a tree or leaf. A tree element can be removed or added.<br/>
   additionally, it will implement composite interfaces.

3. Simple leave: Simplest and most basic element of the tree that can implement composite interfaces for calculating or handling specific operations. Real work will be handled and other elements won't be delegated.

## Where you can use it

you can use this pattern in such following scenarios:

1. **Tree-like Object**: When you have a tree-like object structure and you want to handle some specific operation on them or on collection of them you can use this pattern.

2. **Uniform treatment**: When you have a part-whole hierarchy and you want to handle some operations in simple elements as same as collection of elements.

## Example

**gloal**: In this example we want to calculate all of file sizes inside of a directory. our most basic object in this example is a file.

**structure**: in this example we have two types of classes and one interface:

1. _IFileSystemComponent_: This interface is responsible to specif the basic operations that we want to handle in simple file and directory as well. our goal operation in this scenario is `getFileSize`.

2. _Directory_: This Class is our Composite container that keeps all of basic leaves and can remove or add leaves inside of it.<br/>
   this class implements same interface for `getFileSize` and calculate all of basic leaves that subscribed inside of it and return sum of them.

3. _FileLeaf_: This is the most basic element in the tree of objects that calculate and get just one file size.
