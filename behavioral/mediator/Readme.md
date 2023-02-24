# Mediator Pattern

this pattern is using when we have multiple objects that they should talk to each other and we don't want them to communicate to each others directly. so for reducing coupling between these objects we use a `mediator object`.

# Example

in this example we have multiple memeber objects that should communicate with each others to send and receive messages together that it'll improve complexity to our code and it'll couple these objects with each other.
so in this scenario we added a ChatroomMediator object to handle communication between members objects
