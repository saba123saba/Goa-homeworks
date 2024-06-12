#შექმენით პროგრამა, სადაც გექნებათ მოცემული სია და დაითვლით ამ სიაში მოცემულ ლუწ ელემენტებს

def my_count(my_list):
    count = 0

    for char in my_list:
        if char % 2 == 0:
            count += char
    return count