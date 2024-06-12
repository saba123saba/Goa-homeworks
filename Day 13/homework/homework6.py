#6)Write a program that asks the user to enter a number between 1 and 5. If the number is less than 1 or greater than 5, print "Invalid input". 
#If the number is between 1 and 5, print "Valid input".

user_input = float(input("Please enter a number between 1 and 5: "))

number1 = 1
number2 = 5
number3 = 0

if user_input < number1 or user_input > number2:
    print("invalid input")
if number3 <= number2 or number3 >= number1:
    print("valid input")
