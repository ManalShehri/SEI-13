import random

from capitals import states

states_with_scores = [state.copy() for state in states]

for state in states_with_scores:
    state.update({"correct": 0, "incorrect": 0})

print("Hello, let's play a game!\nGuess the capital city of the region...\n")
random.shuffle(states_with_scores)

play = True
right = 0
wrong = 0

while play:
    for state in sorted(states_with_scores, key=lambda state: state["incorrect"], reverse=True):
        answer = input(
            "Your score: +{}, -{}\nWhat is the capital of {} ? >>> ".format(
                right, wrong, state["name"]
            )
        )
        if answer == state["capital"]:
            print("Great!\n")
            state["correct"] += 1
            right += 1
        else:
            print("Wrong...\n")
            state["incorrect"] += 1
            wrong += 1
    palyAgain = input("Do you want to play again ? (yes, no) >>> ")
    if palyAgain == "no":
        play = False

print("Thank you for playing!")
print(states, right, wrong)