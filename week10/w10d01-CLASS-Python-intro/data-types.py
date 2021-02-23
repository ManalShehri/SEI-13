# Starting with the following list...
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
print("1: ", planeteers)
# Access the second value in `planeteers`
print("2: ", planeteers[1])


# Add "Heart" to the end of `planeteers`
planeteers.append("Heart")
print("3: ", planeteers)


# Remove "Captain Planet" from the list
planeteers.remove("Captain Planet")
print("4: ", planeteers)

# Combine `planeteers` with `rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]` and save the result in a variable called `heroes`
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heros = list(planeteers)
heros.extend(rangers)
print("5: ", heros)


# Alphabetize the contents of `heroes` using a function
heros.sort()
print("6: ", heros)

import random

# Sort in random order the contents of `heroes` using a function.
# The Python documentation might help: https://docs.python.org/2/library/random.html
random.shuffle(heros)
print("7: ", heros)


# Bonus: Select a random element from `heroes` using a function
# The Python documentation might help: https://docs.python.org/2/library/random.html
print("8: ", heros[random.randint(0, len(heros) - 1)])

# Initialize a dictionary called `ninja_turtle` with the properties `name`, `weapon` and `radical`
# They should have values of "Michelangelo", "Nunchuks" and a true boolean, respectively
ninja_turtle = {"name": "Michelangelo", "weapon": "Nunchuks", "radical": True}
print("9: ", ninja_turtle)

# Add a key `age` to `ninja_turtle`. Set it to whatever numerical value you'd like
ninja_turtle["age"] = 15
print("10: ", ninja_turtle)

# Remove the `radical` key-value pair from `ninja_turtle`
del ninja_turtle["radical"]
print("11: ", ninja_turtle)


# Add a key `pizza_toppings` to `ninja_turtle`. Set it to an list of strings (e.g., `["cheese", "pepperoni", "peppers"]`)
ninja_turtle["pizza_toppings"] = ["cheese", "pepperoni", "peppers"]
print("12: ", ninja_turtle)


# Access the first element of `pizza_toppings`
print("13: ", ninja_turtle["pizza_toppings"][0])


# Produce an list containing all of `ninja_turtle`'s keys using a function.
# The Python documentation might help: https://docs.python.org/3/tutorial/datastructures.html
print("14: ", ninja_turtle.keys())


# Produce a list containing all of `ninja_turtle`'s values using a function
print("15: ", ninja_turtle.values())


# Bonus: Write a function that prints out each key-value pair in the following format - "KEY is equal to VALUE"
#  The Python documentation might help: https://docs.python.org/3/tutorial/datastructures.html
print(
    *["{} is equal to {}".format(key, value) for key, value in ninja_turtle.items()],
    sep="\n"
)
