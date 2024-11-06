#შექმენით ფუნქცია, რომელსაც გადასცემთ მომხმარებლის გვარს. გვარის თითოეული ასო გადაიტანეთ ახალ სიაში. შემდეგ for ციკლის გამოყენებით 
# იმუშავეთ ამ სიაზე.


def even_indexes(lastname):
    char_list = []

    for char in lastname:
        char_list.append(char)

    print(char_list)


lastname = input("Please enter your lastname")

even_indexes(lastname)