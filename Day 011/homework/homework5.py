#5) Write a program that asks the user for their age and prints a message based on the age range (e.g., "Child", "Teenager", "Adult") using if-elif-else.

age = int(input("Please enter age: "))

if age < 13:
    print("child")
elif age < 18 and age > 13:
    print("Teenager")
elif age > 18:
    print("Adult")
else:
    print(age)



