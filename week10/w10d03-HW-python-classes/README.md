# Python Gladiator Arena

The Emperor has commissioned you to build a Gladiator Arena. You will do so
using your knowledge of object-oriented programming in python.

All of your python code will be written in `gladiator.py`. You can test
your code by opening `python gladiator.py` in the console.

## Part 1: The Gladiator

Create a `Gladiator` class that has the following properties...

- a `name`
- a `weapon` (one of Spear, Club, Trident)

Once defined, you should be able to do the following...

```python
max = Gladiator("Maximus", "Trident")
print(max.name); // "Maximus"
print(max.weapon); // "Trident"
```

### Bonus

Make it so that you cannot assign a Gladiator an invalid weapon (i.e., anything
aside from Spear, Club or Trident. That means running code like
`Gladiator("Jesse", "Taco")` would throw an error

**_Note:_** Complete Part 2 before starting the Bonus

## Part 2: The Arena

Create an `Arena` class that meets the following criteria...

### An arena has a name

```python
colosseum = Arena("Colosseum")
print(colosseum.name) # => Colosseum
```

### The name should be capitalized

```python
megalopolis = Arena("megalopolis")
print(megalopolis.name) # => Megalopolis
```

### An arena can have gladiators

```python
colosseum = Arena("Colosseum")
print(colosseum.gladiators) # => []
```

### You can add a gladiator to the arena

```python
max = Gladiator("Maximus", "Trident")
colosseum = Arena("Colosseum")
colosseum.addGladiator(max)
print(colosseum.gladiators) # => [Gladiator]
```

### The arena should never have more than 2 gladiators in it at a time

```python
max = Gladiator("Maximus", "Trident")
titus = new Gladiator("Titus", "Club")
andronicus = new Gladiator("Andronicus", "Spear")
colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
print(colosseum.gladiators.length) # => 2
```

### If there are two gladiators in the arena, you can call a `fight` method that results in the elimination of one of the gladiators from the arena.

Winning conditions

- Trident beats Spear
- Spear beats Club
- Club beats Trident
- If the two gladiators have the same weapon, they are both eliminated.

```python
max = Gladiator("Maximus", "Trident")
titus = Gladiator("Titus", "Spear")
colosseum = new Arena("Colosseum")
colosseum.addGladiator(max)
colosseum.addGladiator(titus)
colosseum.fight()
print(colosseum.gladiators) # => [max]
```

### Bonus

- Add a method to remove gladiators from the arena by name
- Update your winning conditions so that if the gladiator named "Maximus" is in
  the fight, he wins.
- Add a method to check to see if the crowd is entertained. The crowd is only
  entertained if Maximus is in the arena.
- Before a losing gladiator is eliminated, the user should be prompted to put
  their thumbs up or down. If user votes down, the losing gladiator is removed.
  If the user votes up, the gladiator stays in the arena and his opponent is
  removed. (Life isn't fair). 
