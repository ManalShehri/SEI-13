#  Work through each of the prompts below.

# أ:
#
# Create a list called months with all 12 months as strings in it (i.e.
# "January", "February", "March", etc). In a single line, delete "September",
# "October", and "November".







#=============================================================================
# ب:
#
# Create a list called months with all 12 months as strings in it (i.e.
# "January", "February", "March", etc). Create a loop that prints out each
# month from the list on a separate line.







#=============================================================================
#
# ج:
#
# Create an empty list called randomNumbers. Write a for loop that will add
# 4 random numbers to the randomNumbers list using random.randInt() and push.











##=============================================================================
# د:
#
# Create a list named foods and add 10 foods to it. Create another list
# called favoriteFoods but leave it empty. Create a list that loops through
# the foods list and adds the current item to the favoriteFoods list if the
# string is longer than 6 characters (i.e. string.length > 6).















###=============================================================================
# هـ:
#
# Create an empty dictionary called computer and save it to a variable.
#
# On the next line, add a make property and set it equal to 'Apple'.
# On the next line, add a model property and set it equal to 'MacBook'.
# On the next line, add a year property and set it equal to 2017.
# On the next line, add a `warranty-type` (spelled exactly) property and set it
# equal to 'limited'.










###=============================================================================
# و:
#
# Crazy dictionary! Use the dictionary below to log out each the following:
#
#   - "omg my mouth is burning"
#   - "Pretty pretty prettayyyyy good"
#   - "Swearing at Larry and Jeff"
#   - "Chicken Teriyaki Boyyyyyy"
#   - The dictionary the contains the name funkhauser
#   - Add the quote "I'm trying to elevate small talk to medium talk" to Larry's
#     quote array. Confirm that it was added.
#
crazydictionary = {
  "taco": [
    {
      "meat": 'steak',
      "cheese": ['panela', 'queso', 'chihuahua']
    },
    {
      "meat": 'chicken',
      "salsa": [
        'pico',
        'hot',
        'hotter',
        'really hot',
        'really really hot',
        'omg my mouth is burning'
      ]
    }
  ],
  "larry": {
    "nicknames": ['LD', 'Chicken Teriyaki Boyyyyyy'],
    "quotes": [
      'Pretty pretty prettayyyyy good',
      "Is that a parkinson's thing?",
      'women love a self confident bald man',
      "I'm a walking talking enigma"
    ],
    "characters": [
      {
        "name": 'Jeff',
        "occupation": 'manager'
      },
      {
        "name": 'funkhauser',
        "occupation": 'tv dude'
      },
      {
        "name": 'susie',
        "occupation": 'jeffs wife',
        "favourtieHobby": 'Swearing at Larry and Jeff'
      }
    ]
  }
};












##=============================================================================
# ز:
#
# Change the value of limbo to null in the following dictionary:
#
inception = {
  "reality": {
    "dreamLayer1": {
      "dreamLayer2": {
        "dreamLayer3": {
          "dreamLayer4": {
            "dreamLayer5": {
              "dreamLayer6": {
                "limbo": 'Joseph Gordon Levitt'
              }
            }
          }
        }
      }
    }
  }
};
last_one = inception.copy()['reality']
for i in range(1, 7):
    last_one = last_one[f"dreamLayer{i}"]
print(last_one)



##=============================================================================
# ح:
#
# Create a loop that prints each number from 10 to 0.




#==============================================================================
# ط:
#
# Create a loop that prints out the odd numbers between 50 and 0




#==============================================================================

# ي:
#
# Write a for loop that prints the numbers in the following array in order
twoDArray1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];




#==============================================================================
#
# ك:
#
# Write a for loop that prints the numbers in the following array in order
twoDArray = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];




# array = [0 ,1, 2]
# array2 = array.copy()
# array2[1] = 9
# print(array)


