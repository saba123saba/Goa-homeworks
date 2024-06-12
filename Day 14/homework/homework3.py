#3)Ask user for two inputs and store them as variables, their type has to be int. Then use for loop, use lower number from this two 
#variables as start, Higher number as end, you do not need step. After that, you'll have to use if statement to only print multiples of five.


user_input = int(input("Please enter integer number: "))
user_input2 = int(input("Please enter second integer number: "))

for i in range(user_input, user_input2 + 1):
    if i % 5 == 0:
        print(i)
