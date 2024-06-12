from turtle import *

#we want to paint a house

#step 1: draw a square

penup()
goto(-100,  -100)
pendown()
speed(30)
width(7)
color("green")


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
forward(70)
color("yellow")
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)


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
exitonclick()


