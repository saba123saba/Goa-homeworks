
from turtle import *


penup()
goto(-100,  -100)
pendown()
speed(30)
width(3)
color("black")


forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)


forward(200)
left(90)
#end of square
#drawing a door
begin_fill()
forward(70)
color("brown")
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(100,100)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()



# drawing a rectangle
color("black")
right(70)
forward(200)
left(100)
forward(180)
left(75)
forward(205)

#a one window
penup()
goto(-120, 40)
pendown()
left(185)
forward(60)
left(100)
forward(50)
left(76)
forward(60)
left(104)
forward(54)
penup()
goto(-180, 25)
pendown()
right(102)
forward(60)
penup()
goto(-150, 45)
pendown()
right(78)
forward(53)


# two  window
penup()
goto(-280, 70)
pendown()
forward(50)
right(284)
forward(50)
left(103)
forward(55)
left(81)
forward(50)
penup()
goto(-255, 68)
pendown()
left(100)
forward(55)
penup()
goto(-280, 43)
pendown()
left(79)
forward(51)


#drawing a roof
color("red")

penup()
goto(-295, 136)
pendown()
left(72)
forward(180)
right(66)
forward(209)



penup()
goto(-275, 170)
pendown()
left(95)
forward(60)
right(90)
forward(34)


exitonclick()
