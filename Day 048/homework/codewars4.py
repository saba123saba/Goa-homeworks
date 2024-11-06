#Several people are standing in a row divided into two teams.
#The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

#Task
#Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where 
# the first one is the total weight of team 1, and the second one is the total weight of team 2.



def row_weights(array):
    even_sum = 0 
    odd_sum = 0
    
    for index in range(len(array)):
        if index % 2 == 0:
            even_sum = even_sum + array[index]
        else:
            odd_sum = odd_sum + array[index]
            
    return [even_sum, odd_sum]