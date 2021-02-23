def say_hello():
    
    return "Khalid"

name = say_hello()

print(name)

my_name = lambda: "Ali" # one line function

name2 = my_name()

print(name2)
sum_tow_number = lambda x,y : x + y # one line function with arg

print(sum_tow_number(7,2))

condition = True

name3 = "haneen" if condition else "Yasir" # if in one line 

print(name3)

list_py = [1,2,3,4,5] # x
list_py2 = [5,6,7,8,9] # y 


def sum_fun(x):


    return x +3

list_map = list(map(lambda ele : ele +3,list_py))

print('map' , list_map)

list_filter = list(filter(lambda ele : ele > 3 , list_py))

print('filter' , list_filter)



list_map2 = list(map(lambda x ,y : x +y , list_py , list_py2))

print('map tow list ' , list_map2)