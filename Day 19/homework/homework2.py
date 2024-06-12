#გამოიტანეთ ელემენტები ამ სიიდან 3 ინდექსის გამოტოვებით

list = []

for char in range(0, 50 + 1):
    list.append(char)
    
print(list[0:25 + 1: 3])