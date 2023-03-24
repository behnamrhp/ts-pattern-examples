## Memento

## Intro

this pattern is a behavioral pattern that let you change an Object behavior when its internal state changes.

in this pattern we have two main parts; `state` and `context`:<br/>
`state`: the State is an object that encapsulates the behavior of the object in a certain scenario.<br/>
`contenxt`: the Context is an object that holds a reference to the current state and delegates the requests to the state object

> note: this pattern is similare to [Strategy](./../Strategy) pattern but difference is in state pattern all of states objects know about other states that they exist but in strategy is not in the same

## Where you can use it

You can use the State pattern in situations where an object's behavior is dependent on its state. you can encapsulate the behavior of each state into a separate object, making the code easier to maintain and modify.

## Example

In this example, we have a game and a button to start the game. However, when a user clicks this button for the first time, we want the game to start from the beginning, and when the user already played the game in the past, we want it to continue when the user clicks this button again.

- `GameStateContext` as `context`: this Object has referenece to current state and has method to change to another state and can handle request to the current state
- `GameState` as `base state`: this object is a base Object for all of other states and can be a backreference for them. this object provide the method to set context of state for all of the states

- `NewGameState | ContinueGameState` as `state`: these are our states that encapsulate and responsible for behavior of requests in specific scenarios of the state.
