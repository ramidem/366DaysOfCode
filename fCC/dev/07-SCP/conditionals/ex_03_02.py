string_hours = input("Enter Hours: ")
string_rate = input("Enter Rate: ")

try:
    floating_point_hours = float(string_hours)
    floating_point_rate = float(string_rate)
except:
    print('Error, please enter a number')
    quit()

if floating_point_hours > 40:
    regular_pay = floating_point_rate * floating_point_hours
    overtime_pay = (floating_point_hours - 40.0) * (floating_point_rate * 0.5)
    pay = regular_pay + overtime_pay
else:
    pay = floating_point_hours * floating_point_rate


print("Pay:", pay)
