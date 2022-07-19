#############################################
#############################################
############### Barista.py ##################
#############################################
#############################################

import itertools
import threading
import time
import sys

done = False
#here is the animation
def animate():
    for c in itertools.cycle(['|', '/', '-', '\\']):
        if done:
            break
        sys.stdout.write('\rloading ' + c)
        sys.stdout.flush()
        time.sleep(0.1)
    sys.stdout.write('')

t = threading.Thread(target=animate)

print('''\
        ..
      ..  ..
            ..
             ..
            ..
           ..
         ..
##       ..    ####
##.............##  ##
##.............##   ##
##.............## ##
##.............###
 ##...........##
  #############
  #############
#################
''')

# Name check
name = input("Hello there, what is your name? ")

print("\nHello " + name + ", \nHere is our menu for today!")

print('''\
  ___________________
 |           |       |
 |Cappaccino | $1.50 |
 |Iced Moca  | $5.70 |
 |Black      | $2.20 |
 |Espresso   | $4.50 |
 |Moca       | $4.90 |
 |___________|_______|
''')


coffee = input("What would you like today? ")

print("\nAwesome, one " + coffee + " coming right up!!!")
t.start()
time.sleep(5)
done = True
print("\nHere is your " + coffee + " " + name + ", enjoy!!!")
