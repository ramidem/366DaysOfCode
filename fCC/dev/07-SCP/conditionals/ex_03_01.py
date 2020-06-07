string_hours = input("Enter Hours: ")
string_rate = input("Enter Rate: ")

floating_point_hours = float(string_hours)
floating_point_rate = float(string_rate)
# print(floating_point_hours, floating_point_rate)

if floating_point_hours > 40:
    # print("Overtime!")

    regular_pay = floating_point_rate * floating_point_hours
    overtime_pay = (floating_point_hours - 40.0) * (floating_point_rate * 0.5)
    # print(regular_pay, overtime_pay)

    pay = regular_pay + overtime_pay
else:
    # print("Regular")
    pay = floating_point_hours * floating_point_rate


print("Pay:", pay)
