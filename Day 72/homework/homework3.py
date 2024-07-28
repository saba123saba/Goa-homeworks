def pig_it(text):
    symbol = ['!', '?']
    My_split = text.split(' ')
    result = []
    
    for word in My_split:
        if word not in symbol:
            result.append(word[1:] + word[0] + 'ay')
        else:
            result.append(word)
            
    return " ".join(result)
    