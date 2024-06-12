
# number = int(input("please enter number: "))

# result = 0

# while number >= 0:
#     result = result + number
#     number = number - 1

# print(result)



#მომხმარებელს შემოატანინეთ ორი რიცხვი, ხოლო შემოტანის შემდეგ for ციკლის გამოყენებით გამოუტანეთ რიცხვები, ორი შემოტანილი რიცხვის დიაპაზონში
#მაგალითად, თუ მომხმარებელმა შემოიტანა 4 და 8 გამოუტანეთ რიცხვები 4,5,6,7,8

user_input = int(input("Please enter first number: "))
user_input2 = int(input("Please enter Second number: "))

for char in range(user_input, user_input2 + 1):
    print(char)