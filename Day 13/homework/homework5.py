#5)Write a program that prints numbers from 1 to 10, but stops if the number is 5 using a while loop and the break statement. break

number = 1
result = 0

while number <= 10:
    print(number)
    result = result + number
    number = number + 1
    if number == 5:
        break
    