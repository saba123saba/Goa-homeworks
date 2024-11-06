#1. Manual Sum Function: Create a function called manual_sum that iterates over list and adds their sum in a variable, then returns variable.
#  Use for loop for this task.


def manual_sum(numbers):
    court = 0
    

    for char in numbers:
        court += char
        
    return court

print(manual_sum([1,2,3,4,5,6]))
