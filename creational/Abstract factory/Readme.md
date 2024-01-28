## Abstract Factory pattern

This pattern Produces families of Products without mentioning their concrete classes.
Abstract factory is commonly used for things like dependency injection/strategy, when you want to be able to create a whole family of objects that need to be of "the same kind", and have some common base classes you can use this pattern. 

### Example
Problem:

We are developing an app that is multiplatform for both mobile and Windows. But for working with camera to record and save it in platform we have multiple libraries for each platform. Maybe we can reach to a situation that we want add mac support in future and it has another library as well.(like in some frameworks like flutter) how we can handle this situation?

Goal:

Main application logic should not care about the platform that we're working on and should care about just the main business logic.

Solution:

Here the abstract factory comes into play. As we have two families of objects for record and save and we'll have different variants like mobile, windows, mac, and in each one of them record and save will be different. So we have families for record and save.

This pattern consists of multiple parts:
1. **Abstract factory interface:** It serves as a blueprint for making families of variant of     objects or products, without mentioning their concrete classes.<br/>
 At the end of the day, clients will work
  With this interface and family object interface.
 Here we have two family objects for 
  IRecord and ISaveVideo, which with two methods
  of `recordInstance` and `saveInstance` we can have
  multiple factories belongs to same variants of 
  multiples families by implementing this interface.

2. **Family Product or Family object:**   It is an interface which specify a family of objects or product. Abstract factory interface and client knows how to work with these families by this interface

3. **Concrete factory**: It is a class that implements `Abstract factory interface` and produces families of one variants for example one concrete factory for windows and another concrete foctory for mobile in our example.

4. **Concrete Procduct** or **Concrete Object**: It'll implement Family product will created by related concrete factory.
  In our example we can consider `WindowsRecordLib` as a family member of `IRecord` object family

5. **Client**: client will just use abstract factory interface and family product interface to work with products and factories. 