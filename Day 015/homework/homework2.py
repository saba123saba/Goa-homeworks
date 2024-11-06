#Create a while loop that asks the user to enter a password. Keep asking until they enter the correct password "Goa best".


password = 'Goa best'
authorized = False

while authorized != True:
    user_input = input("Please enter password: ")
    if user_input == password:
        print("correct password")
        authorized = True
    else: 
        print("incorrect password: ")
        