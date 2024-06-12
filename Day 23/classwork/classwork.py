def my_raplace(word, replace_word, input_word):
    changed_word = ""


    for char in word:
        if char == replace_word:
            changed_word = changed_word + input_word
        else:
            changed_word = changed_word + char

    return changed_word

print(my_raplace("luka", "u" , "k"))
