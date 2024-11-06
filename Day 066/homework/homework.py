def double_char(s):
    result = ''
    
    for char in s:
        count = char * 2
        result += count
        
    return result

print(double_char('bladadadalad adadadaa'))