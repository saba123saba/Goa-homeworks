#2. Manual Max Function: Define a function named manual_max that iterates through list, updating a variable with the maximum value, 
# then returns the maximum value found. Use for loop for this task.

def manual_max(number_list):
    max_value = number_list[0]

    for char in number_list:
        if max_value < char:
            max_value = char

    return max_value

print(manual_max([1, 2, 3, 4, ]))
