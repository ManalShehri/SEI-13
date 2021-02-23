print("I am python")
name = "yasir"
age = 21 
city = "zulfi"
# print(name , age, city)
print(f'my name is {name} and i am {age} old , and i am from {city}')


pyth_list = [1 , 5 , "ali" , "haneen" , "Khalid"]

pyth_list.append("Marco") # add to end of the list
pyth_list.insert(0 , "Yasir") # add by the postion and value 
print(pyth_list)
pyth_list.pop() # delete the last element 
pyth_list.remove(5) # delete the by value 
pyth_list.remove(1) # delete the by value 
print(pyth_list)
pyth_list.sort()
pyth_list2 = pyth_list.copy() #copy the list 
print(pyth_list2)
pyth_list.clear()
print(pyth_list) 

numbers = [1 , 2 ,3]
numbers2 = [5 , 6,7]

number3 = numbers2 + numbers # add tow list in one 
print(number3)
number3 =number3 + list("88888") # extra 
print(number3)

print('############################')
# false stete
# "" , [] , 0 , {}  , None

condition = None

if condition :
    print("it is true")
    pass
else: 
    print('it is false')

print("after if")

print(list(range(10))) # => [0 , 1, 2, ..., 9]

for i in range(2,5): #=> [0 , 1 , 2 , 3, 4]
    print(f'i is eaqule : {i}')
print("########################")
student = { 'name' : "Khalid" , 'age' :30 , 'courses' : ["Math" , "ENG"] , 'is_ready_to_study' : True}
print(student['name'])
student['city'] = 'jeddah' # add to dic
print(student) 
print(student.get('city')) # get the value of key 

student.pop('is_ready_to_study')  # delete key and value in the dic
print(list(student.keys()))  # get all the keys of dic
print(list(student.values())) # get all the values of dic
print(list(student.items())) # get all the key and value 

for key ,value in list(student.items()):
    print(f'key : {key} value : {value}')
    pass
 

# is  == != <  > not 
# and or not  => && || ! 
user = "Admin"
is_logged_in = False 



if user == "Admin" and not is_logged_in:
    print("admin page")
else:
    print("404")
print('#################################')
# as 
import copy
user = [{'name' : "Yasir" , 'age' : 26},{'name' : "ranen" , 'age' : 24} ]
user2 = copy.deepcopy(user)
user2[1]['age'] = 30

print(user)
print(user2)
# print(id(user))
# print(id(user2))



if user is user2:
    print("it is true")
else:
    print('is false')





