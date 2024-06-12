#4)Write a program that simulates a simple login system. Ask the user for a username and password, and if they enter "admin" and "password123", 
#respectively, print "Login successful" using if-else.

authorized = False
name = "admin"
password = "password123"

while authorized != True:
    user_input1 = input("Please enter your name: ")
    user_input2 = input("Please enter your password: ")
    if user_input1 == name:
        if user_input2 == password:
            print("Login successful")
            authorized = True
        