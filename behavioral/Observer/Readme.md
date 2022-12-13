## Observer
this is a behavioral pattern that provide us subscription mechanism to notify or run some objects or functions about any events that happened to the object they're observing

this pattern is useful when we need a mechanism to update or run some functionalities when some object or variables changes.

## Example 
in this example we have a counter object and we have two objects with names of ObserverNum1 and ObserverNum2, these two objects are our observers. we want these two observers call their run method when our counter changed.
we do it by Subject object that is responsible for subscription of observers and calling them