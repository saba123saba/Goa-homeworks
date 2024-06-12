def my_range(start, end, step):
    my_list = []

    while end > start:
        my_list.append(start)
        start += step

    return my_list

print(my_range(2, 20, 1))