#მომხმარებელს შეეკითხეთ საწყისი და საბოლოო რიცხვები. ეს რიცხვები გადაეცით ფუნქციას, for ციკლით სიაში შეინახეთ მათ შორის არსებული რიცხვები. 
#შემდეგ მოახდინეთ გაფილტვრა, ისევ for ციკლით განიხილეთ თითოეული რიცხვი - თუ რიცხვი ლუწი იქნება, ახალ სიაში დაამატეთ მისი მეორე ხარისხი,
#ხოლო თუ კენტი იქნება სიაში დაამატეთ მისი კვადრატული ფესვი (0.5 ხარისხი).


def filter_arr(start_num, end_num):
    numbers = []
    filtered_list = []

    for i in range(start_num, end_num):
        numbers.append(i)
    
    for i in numbers:
        if i % 2 == 0:
            filtered_list.append(i ** 2)
        else:
            filtered_list.append(i ** 0.5)

    return filtered_list

start_num = int(input("Please enter first number: "))
end_num = int(input("Please enter second number: "))

result_list = filter_arr(start_num, end_num)

print(result_list)