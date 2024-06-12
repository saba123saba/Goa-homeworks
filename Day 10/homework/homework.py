#1)ამ ფოტოს მიხედვით გააკეთეთ პროგრამა. (მოხმარებელს შემოატანინეთ პაროლი იქამდე სანამ არ დაემტხვევა რეგისტრირებულ პაროლს, 
#while ციკლის და  if else _ის გამოყენებით)


authorized = False
password = "saba123"

while authorized != True:
    user_input = input("Please enter your password: ")
    if user_input == password:
        print("Access Granted")
        authorized = True