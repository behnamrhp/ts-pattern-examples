## Chain of responsibility

## Intro

this pattern is a behavioral pattern that let you seperate the functionalities that every one of these handlers should decide to handle the process by themselves or pass it to the next handler.

## Where you can use it

you can use this pattern in some scenarios that you have multiple functionalities through a process that these functionalities can have same method and interface to handle requests and maybe you want from them to work in specific different situations or replace to each others.

## Example

in this example we tried to use the most basic and simple one.
we have multiple types of emploees that we want calculate their salaries by their positions.

so we have multiple salary calcualtor that they decide to calculate the salary if request has specific emploee type or send it to the next salary calculator as next handler.
