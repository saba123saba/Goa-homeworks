#3)Write a program that simulates a basic ATM. It should ask the user for their PIN, and if it's correct, display a text withdrawal, 
#deposit, and balance.


pin = False
bank_pin = 2008


while pin != True:
    user_input = int(input("Enter your bank_pink: "))
    if user_input == bank_pin:
        print("withdrawal, deposit, and balance.")
        pin = True
    

