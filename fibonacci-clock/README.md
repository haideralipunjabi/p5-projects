# Fibonacci Clock  

## How to tell time?  
The Fibonacci sequence is a sequence of numbers created by the Italian mathematician Fibonacci in the 13th century. This is a sequence starting with 1 and 1, where each subsequent number is the sum of the previous two. For the clock I used the first 5 terms: 1, 1, 2, 3 and 5.

The clock is made up of five squares whose side lengths match the first five Fibonacci numbers: 1, 1, 2, 3 and 5. The hours are displayed using red and the minutes using green. When a square is used to display both the hours and minutes it turns blue. White squares are ignored.

To tell time on the Fibonacci clock you need to do some math. To read the hour, simply add up the corresponding values of the red and blue squares. To read the minutes, do the same with the green and blue squares. The minutes are displayed in 5 minute increments (0 to 12) so you have to multiply your result by 5 to get the actual number.

Often, there are multiple ways to display a single time. To add to the challenge, the combinations are picked randomly from all the different ways a number can be displayed.


## A simulation of [Fibonacci Clock by Philippe Chrétien](https://github.com/pchretien/fibo)
