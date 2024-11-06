#The goal of this exercise is to convert a string to a new string where each character in the new string is 
# "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
# Ignore capitalization when determining if a character is a duplicate.

def duplicate_encode(word):
    word = word.lower()
    
    char_count = {}
    
    for char in word:
        char_count[char] = char_count.get(char, 0) + 1
    
    new_string = ""
    for char in word:
        if char_count[char] > 1:
            new_string += ")"
        else:
            new_string += "("
    
    return new_string
