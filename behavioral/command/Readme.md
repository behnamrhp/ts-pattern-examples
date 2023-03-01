## Command

## Intro

this pattern is a behavioral pattern that let you turn a request to a single object with all information about the request and can execute it later. with this pattern help you track and manage you requests and seperating more you concerns.

## Where you can use it

this pattern lets you decouple the requests from the object that perform the operation.
also this approach helps to queueing the requests, tracking the requests history and undo it.

## Example

this pattern contains three part: 1. Receiver, 2. Command, 3. invoker

1. in this example we want a request to changing salary that we call it here a Receiver,
   > we want to decouple the client code from this Receiver.
2. with a command class an single interface we handled request and usage of this Recevier as an dependency.
   > you are able to don't have any undo method if you don't want to undo your actions
3. and finally we have an invoker for tracking, customizing the commands and even connect them together with a history property.
   > you are able to don't have any history property if you don't want to undo your actions
