## Abstract Factory pattern

Abstract factory is normally used for things like dependency injection/strategy, when you want to be able to create a whole family of objects that need to be of "the same kind", and have some common base classes. 

### Example
Here's a vaguely fruit-related example. The use case here is that we want to make sure that we don't accidentally use an OrangePicker on an Apple. As long as we get our Fruit and Picker from the same factory, they will match.