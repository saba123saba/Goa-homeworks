authorized = False
registered_password = "saba123"

while authorized != True:
    user_input = input("Please enter your password: ")
    if user_input == registered_password:
        print("Access Granted")
        authorized = True
    else: 
        print("incorect password!")