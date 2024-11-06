#3. Manual Min Function: Define a function named manual_min that iterates through list, updating a variable with the minimum value, 
# then returns the minimum value found. Use for loop for this task

def manual_min(number_list):
    min_value = number_list[0]

    for char in number_list:
        if min_value > char:
            min_value = char

    return min_value

print(manual_min([1, 2, 3, 4, ]))
