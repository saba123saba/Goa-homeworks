#4)Write a program that asks the user to enter a password. If the password is "abc123", print "Access granted"; otherwise, print "Access denied".

password = "abc123"
authorized = False

while authorized != True:
    user_input = input("Please enter password: ")
    if user_input == password:
        print("Access granted")
        authorized = tuple
        break
    else:
        print("Access denied")
        authorized = False
   
    