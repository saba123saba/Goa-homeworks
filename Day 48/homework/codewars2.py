#Given a Divisor and a Bound , Find the largest integer N , Such That ,

#Conditions :
#N is divisible by divisor

#N is less than or equal to bound

#N is greater than 0.

#Notes
#The parameters (divisor, bound) passed to the function are only positive values .
#it's guaranteed that a divisor is Found .
#Input >> Output Examples
#divisor = 2, bound = 7 ==> return (6)


def max_multiple(divisor, bound):
    if bound % divisor == 0:
        return bound
    
    multiples = []
    
    for char in range(divisor, bound):
        if char % divisor == 0:
            multiples.append(char)
            
    return max(multiples)
            
print(max_multiple(2, 9))