# Visitory pattern

this is behavioral pattern that lets you add new behaviors to your code without altering any of existing code.</br>
this pattern can be used for extending third party libraries functionality.
this pattern is less common to use because of its complexity and narrow applicability.

# Example Review

in this example we have a class for emploee with getSalary and setSalary method.
we want to add a new method for extending salary without changing setSalray method. so we can add an accept method with passing class to comming new method as an argument and call that will come from outside of class and call it.