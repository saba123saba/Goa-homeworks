#4. Manual Len Function: Develop a function named manual_len that iterates through list, counting each element, and returns the count as the 
# length of the list. Use for loop for this task.

def manual_len(collection):
    count = 0

    for _ in collection:
        count += 1

    return count

print(manual_len([1, 2, 3, 4, 5 ,6 ]))
print(manual_len("luka"))
print(manual_len(range(10)))