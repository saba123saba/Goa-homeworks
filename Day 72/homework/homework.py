def better_than_average(class_points, your_points):
    average_score = sum(class_points) / len(class_points)
    return your_points > average_score
