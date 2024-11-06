#Write a program that takes asks user for number (use input). If number is even, print that number is even. Else print that number is not even, 

user_input = int(input("Please enter a number: "))

if user_input % 2 == 0:
    print(user_input, "even")
else:
    print(user_input, "not even")
    