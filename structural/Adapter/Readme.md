## Adapter

## Intro

The Adapter pattern is a structural pattern that allows two incompatible interfaces to work together by creating a bridge between them. It acts as a translator, converting the interface of one class into another interface that clients expect. This pattern is useful when you have existing code or classes that cannot be directly modified but need to work with other code that has a different interface. The adapter pattern helps in achieving interoperability between these incompatible interfaces.

with this pattern you can keep your concerns separated and follow single responsibility and open/close principle for future changes and adding features to your app.

## Where you can use it

you can use this pattern in such following scenarios:

1. **3rd Party libraries or APIs**: when you want to work with 3rd party libraries with different interfaces that needs many refactoring based on their interfaces on your main logics

2. **Integrating legacy systems**: When you have existing code or systems that use an older or incompatible interface, you can create adapters to make them work with newer systems or frameworks.

3. **Testing**: Adapters can be useful in testing scenarios where you need to simulate or mock certain behaviors or interfaces to ensure proper testing coverage.

4. **Reusing existing classes**: If you have classes that provide similar functionality but have different interfaces, you can use adapters to make them compatible and interchangeable.

## Example

**gloal**: in this example we tried to make an completely real world exmaple for this popular pattern , in this example we want to return some articles based on an article slug so our main logic of app needs to use an Api that has completely different interface to be connected.

**structure**: in this example we have three classes:

1. _Datasource_: that is responsibe for connecting to the api and returning the data ( in this example we used mocked data for the user data ).

   this class is our adaptee class that our main code wants to connect with it.

2. _Repository_: this class is our adapter class that is responsibe to recieve an article slug and based on that slug, connect to datasource and provide dependencies that datasource needed to get the data and turn that data in a way that our main logic needed to work with it.

3. _Usecase_: this class is our main logic that is responsibe to get the articles based on article slug

so with this process we could separate our main code and for future updates like adding features or more connecitons between datasource and our main logics, we can handle all of them by our adapter which with this view it follows **Open/close** principle of **SOLID**.

and we could follow **Single responsibility** principle in solid with keeping our concerns completely separated.

> **note**: this example is main part of bussiness logic that is happening in **Clean Architecture** concept. in Clean Architecture repository is acting as an adapter pattern.
