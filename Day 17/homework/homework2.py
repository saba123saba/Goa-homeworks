#Write a function that takes a list of strings as input and returns a new list containing only the strings that have a length greater than 5.

def filter(strings_list):
    filtered_list = []
    
    for word in strings_list:
        if len(word) > 5:
            filtered_list.append(word)
    return filtered_list

name = ["nika", "saba", "luka", "giorgi", 'dato']

print(filter(name))