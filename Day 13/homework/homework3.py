#3)Write a program that asks the user to enter a number and then prints whether the number is positive, 
#negative, or zero using an if-else statement.



user_input = float(input("Please enter number: "))


if user_input > 0:
    print(user_input, "positive")
elif user_input < 0:
    print(user_input, "negative")
else:
    print(user_input, "zero")

