#შექმენით მასივი for ციკლის მეშვეობით. მასივში დაამატეთ 0 - 50 ის ჩათვლით რიცხვები. შემდეგ 0 - 25 მდე ინდექსის ჩათვლით გამოიტანეთ რიცხვები.


list = []

for char in range(0, 50 + 1):
    list.append(char)
print(list[0:25 + 1])