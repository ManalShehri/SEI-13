[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Python Class Modeling

## Prerequisites

- [ga-wdi-boston/python-classes](https://git.generalassemb.ly/ga-wdi-boston/python-classes)

## Objectives

By the end of this, developers should be able to:

- Identify and implement inheritance
- Describe what a child class inherits from its parent class

## Preparation

1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create and checkout to a new branch, `training`, for your work.
1. Run `pipenv shell` to get into virtual environment
1. Install dependencies with `pipenv install -e .`
   1. Note: This will install everything defined in `Pipfile` as well as any
      local modules.
1. Open the repository in Atom with `atom .`.

## Class Inheritance

Inheritance allows us to build new classes out of old classes. It allows us to
extend functionality defined in a parent class and create children classes that
use, compartmentalize, and expand on different pieces of that functionality.

Inheritance models natural hierarchies and relationships that we're used to
thinking about in the world. We can define one general class to model something
like a `Car` and then inherit the methods and data attributes of the class to make
new classes out of the first class, like `Truck` and `Sedan`.

When we say sub-classes, or child classes, inherit methods and data attributes from
a parent class we mean the child class has access to all of the functionality
of it's parent, and it can define it's own functionality on top of that.

## Demo: Basic Inheritance

Let's look at an example of our `Car`/`Truck` inheritance modeling:

```py
class Car:
  gas = 0
  seats = 4
  def __init__(self, color, tank_size):
    self.color = color
    self.tank_size = tank_size

  def drive(self, distance):
    if self.gas > 0:
      self.gas -= distance
    else:
      print('Empty tank! Fill me up!')

  def fill_tank(self):
    self.gas = self.tank_size

class Truck(Car):
  seats = 2
  def __init__(self, color, tank_size, bed_size):
    super().__init__(color, tank_size)
    self.bed_size = bed_size

big_red_truck = Truck('red', 50, 12)
big_red_truck.fill_tank()
big_red_truck.drive(5)
print(big_red_truck.gas)
# 45
print(big_red_truck.seats)
# 2
```

There's two new pieces of syntax used in the code above.

1. Class definitions can accept a parameter specifying what class they inherit
  from: `class Truck(Car)`
2. Child classes can invoke a method called `super()` to gain access to methods
  defined in the parent class and execute them: `super().__init__(color, tank_size)`

Classes can also inherit from multiple parents by accepting multiple class
parameters in their definition:

```py
class ChildOfMany(ParentOne, ParentTwo, ParentThree):
  ...
```

## Side Note: Importing

We often want to organize our code so that a certain file only contains one
class. You don't always need to do this, but it can make finding the code
you're looking for much easier!

In order to do this, we need to utilize Python's import functionality. We can
use the `import` keyword to gain access to modules like the built-in `math`
module.

```py
import math
print(f"pi is {math.pi}")
```

For our own files, we need to tell Python they are modules in order to import
them. We use a special, empty file named `__init__.py` to do this. If you look
in the `bin` folder, you'll see we've included one there.

This will tell Python that `bin` is a *package* and the files in bin are modules! That way, any variables inside of
`bin` will be importable into other files like `from bin.rectangle import Rectangle`.
That line will look at the module `bin`, find the `rectangle` module (file), and
import the `Rectangle` class from there.

## Lab: Modeling Shapes with Classes

A `Square` is a `Rectangle`.

Create a `Rectangle` class in `bin/rectangle.py`. You will need to define an `__init__`
method inside `Rectangle` to take two sides of different lengths.

Requirements for `Rectangle`s:

- A Rectangle created with `Rectangle(3, 4)` should create a rectangle with a length of 3 and a width of 4.
- Instances of `Rectangle` should respond to the `calculate_area` method and
  give the correct result.

Next, create a `Square` class in `bin/square.py` that *inherits* from the
`Rectangle` class.

Requirements for `Square`s:

- A Square created with `Square(4)` should create a square with all sides equal to 4.
- Instances of Square should respond to the `calculate_area` method and give
  the correct result.
- Do not override anything that doesn't need to be overridden.

## Additional Resources

### Try More

- [Inheritance Practice Problems](https://www.codecademy.com/courses/learn-python-3/lessons/inheritance-and-polymorphism/exercises/inheritance)
- [Inheritance with examples from Programiz](https://www.programiz.com/python-programming/inheritance)

### Dive Deeper

- [Design Patterns: The Composition over Inheritance Principle](https://python-patterns.guide/gang-of-four/composition-over-inheritance/#:~:text=In%20Python%20as%20in%20other,of%20Object%20Based%20programming%20instead.&text=Favor%20object%20composition%20over%20class%20inheritance.)
- [Making Python classes more modular using mixins](https://www.residentmar.io/2019/07/07/python-mixins.html)
- [Python Docs: Inheritance & Multiple Inheritance](https://docs.python.org/3/tutorial/classes.html#inheritance)

## [License](LICENSE.md)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
