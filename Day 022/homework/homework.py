#ივარჯიშეთ ფუნქციებზე, შეასრულეთ თქვენთვის სასურველი 5 8კიუ და 5 7კიუ ამოცანა, ჩასვით პითონის ფაილში და ატვირთეთ გითჰაბზე

#Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

#Examples:
#Input: 42145 Output: 54421

#Input: 145263 Output: 654321

#Input: 123456789 Output: 987654321


def descending_order(num):
    res_str = ""
    num_str = str(num)
    reversed_str = ""
    res_arr = []
    for char in range(len(num_str)-1, -1, -1):
        reversed_str += num_str[char]
    for char in reversed_str:
        res_arr.append(char)
    res_arr.sort(reverse  = True)
    return int("".join(res_arr))