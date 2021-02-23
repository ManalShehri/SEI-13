class User:
    # This is the place where you define variables common to ALL objects from this class
    created_users = []
    name_of_datbase = "my-database"
    name_of_company = "GA"

    def __init__(self, name):
        # Insithe the __init__ constructor is the place where you define variables unique to EACH object
        self.name = name
        self.created_users.append(name)

    def greet(self, someone):
        print(f"Hello {someone} from {self.name}")


class Instructor(User):
    __private_property_cappuccino = "Don't drink my cappucino!"
    # Let's make two different __init__ constructors for the two types of Users
    def __init__(self, name, courses_taught):
        # I must call supr().__init__ explicitely because I must specify what is the parameter I want to pass to the paent cosntructor
        super().__init__(name)

    def __private_method(self):
        print("Nono, this is private...")
        pass


class Student(User):
    # Let's make two different __init__ constructors for the two types of Users
    def __init__(self, name, courses_attended, bio):
        # I must call supr().__init__ explicitely because I must specify what is the parameter I want to pass to the paent cosntructor
        super().__init__(name)

    def tellMeAboutYourself(self):
        print(f"Hello I am {self.name}")


Marco = Instructor("Marco", "SEIR-13")
Yasir = Instructor("Yasir", "SEIR-13")
Muath = Student("Muath", "SEIR-13", "I am a code wisperer")

Marco.greet("SEIR-13")
Muath.tellMeAboutYourself()

try:
    # This will generate an error!!
    Yasir.__private_method()
    # This will generate an error!!
    print(Yasir.__private_property_cappuccino)
except:
    print("There was an error")
else:
    # Tis will run if NO error is generated
    pass
finally:
    # Tis will ALWAYS run and is good for cleanup or reset
    print("I am running EVRY time!")


try:
    Yasir.greet("SEIR-13")
except:
    print("There was an error")
else:
    print("Everything is OK")
finally:
    pass
