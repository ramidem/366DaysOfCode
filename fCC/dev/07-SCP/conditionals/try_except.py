rawstr = input('Enter a number: ')

try:
    ival = int(rawstr)
except:
    ival = -1

if ival > 0:
    print('\nNice work!\nYour number:', rawstr)
else:
    print('Not a number!')
