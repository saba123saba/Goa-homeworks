#შექმენით ფუნქცია სახელად manual_reverse, რომელიც მიიღებს დალაგებულ კოლექციას. თქვენი დავალებაა, რომ შეაბრუნოთ ეს კოლექცია და 
# დააბრუნოთ ამ სახით.


#1. [1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1]


def manual_reverse(sorted_list):

    result = []

    for char in reversed(sorted_list):
        result.append(char)

    return result

sorted_list = [1, 2, 3, 4, 5 ]

print(manual_reverse(sorted_list))
