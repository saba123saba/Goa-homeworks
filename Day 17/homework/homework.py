#Write a function that takes a list of numbers as input and returns the sum of all the numbers in the list.

def sum_of_numbers(numbers):
    result = 0
    for i in numbers:
        result = result + i
    return result
    
numbers = [1, 2, 3, 4, 5]

print(sum_of_numbers(numbers))