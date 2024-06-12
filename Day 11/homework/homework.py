# 1) Write a program that takes an input from the user and checks if it's a positive, negative, or zero number using if-else.

number = float(input("Please enter number: "))

if number < 0:
    print(number, "is negative")
elif number > 0:
    print(number, "is positive")
else:
    print(number, "is zero")