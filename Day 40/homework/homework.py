#Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output 
# should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
# The next words should be always capitalized.

#Examples
#"the-stealth-warrior" gets converted to "theStealthWarrior"

#"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

#"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

def to_camel_case(text):
    if text == "":
        return ""
    text = text.replace("-", "_")
    words = text.split("_")
    final_str = ""
    if text[0].isupper():
        for i in words:
            final_str += i.capitalize()
    else:
        final_str = words[0]
        for index in range(1,len(words)):
            final_str += words[index].capitalize()
