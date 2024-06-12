#Simple, given a string of words, return the length of the shortest word(s).

#String will never be empty and you do not need to account for different data types.

def find_short(s):
    words_list = s.split(" ")
    
    min_length = len(words_list[0])
    
    for word in words_list:
        if min_length > len(word):
            min_length = len(word)
            
    return min_length