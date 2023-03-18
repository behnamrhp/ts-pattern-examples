## Memento

## Intro

this pattern is a behavioral pattern that let you save and restore the specific state of an object without violating encapsulation or revealing the details of object itself.

By using the Memento pattern, you can keep the state of an object private and prevent other objects from modifying it.

In the Memento pattern, three objects are involved: the originator, the caretaker, and the memento. The originator is the object whose state needs to be saved and restored. The caretaker is responsible for storing and retrieving the mementos, and the memento is an object that stores the state of the originator.

## Where you can use it

you can use this pattern in some scenarios that you want to have an object and you want to save its state and undo it in some situations to its previous state.

## Example

in this example we have:

- `CanvasLines` as `originator`: that is our object which we want to save and restore its state
- `ICanvasLinesMemento` as `memento`: that is responsible for handling saving state data and methods
- `CanvasLineMementoCaretaker` as `caretaker`: that is responsible for storing and retrieving the mementos and handle mementos history
