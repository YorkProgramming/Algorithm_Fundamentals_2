// #1.

/* Countdown
Create a function that accepts a number as an input. 
Return a new array that counts down by one, 
from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). 
How long is this array? */

function countdown(num) {
    var arr = [];
    for (var i = num; i >= 0; i--) {
        arr.push(i);
    }
    console.log(arr.length);
    return arr;
}

console.log(countdown(5));

/* We set arr to an empty array,
The FOR loop starts at 'num' and subtracts 1 until it reaches 0
At each iteration, the current value of 'i' is added to the end of the 'arr' array 
using the .push() method
After that, to find the length of the array, we just use arr.length */

//#################################################

// #2.

/* Print and Return
Your function will receive an array with two numbers.
Print the first value, and return the second. */

function printReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

console.log(printReturn([1, 2]));

/* We use console.log to print the first value of the array
Then we return the second value of the array */

//#################################################

// #3.

/* First Plus Length
Given an array, return the sum of the first value in the array,
plus the array’s length. What happens if the array’s first value is not a number,
but a string (like "what?") or a boolean (like false). */

function firstPlusLength(arr) {
    return arr[0] + arr.length;
}

console.log(firstPlusLength([1, 2, 3, 4, 5]));
console.log(firstPlusLength(["Hello", 2, 3, 4, 5]));

/* We return the first value of the array plus the length of the array
If the first value of the array is not a number, but a string or boolean,
then the function will return the first value of the array plus the length of the array */

//#################################################

// #4.

/* Values Greater than Second
For [1,3,5,7,9,13], print values that are greater than its 2nd value.
Return how many values this is. */

function greaterThanSecond(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}

console.log(greaterThanSecond([1, 3, 5, 7, 9, 13]));

/* We set count to 0
The FOR loop starts at 0 and iterates through the array
If the current value of the array is greater than the second value of the array,
then we print the current value of the array
Then we increment count by 1
After the FOR loop, we return count to know how many there were */

//#################################################

// #5.

/* Values Greater than Second, Generalized
Write a function that accepts any array, and returns a new array with the array values
that are greater than its 2nd value. Print how many values this is.
What will you do if the array is only one element long? */

function greaterThanSecondGeneralized(arr) {
    var count = 0;
    var newArr = [];
    if (arr.length == 1) {
        console.log("The array is only one element long.");
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[1]) {
                newArr.push(arr[i]);
                count++;
            }
        }
        console.log(count);
    }
    return newArr;
}

console.log(greaterThanSecondGeneralized([1, 3, 5, 7, 9, 13]));
console.log(greaterThanSecondGeneralized([13]));

/* We set count to 0 and newArr to an empty array
If the array is only one element long, then we print that the array is only one element long
If the array is longer than one element, then we iterate through the array
If the current value of the array is greater than the second value of the array,
then we push the current value of the array to the newArr array
Then we increment count by 1
After the FOR loop, we print count and return newArr */

//#################################################

// #6.

/* This Length, That Value
Given two numbers, return array of length num1 with each value num2.    
Print "Jinx!" if they are same. */

function thisLengthThatValue(num1, num2) {
    var arr = [];
    if (num1 == num2) {
        console.log("Jinx!");
    } else {
        for (var i = 0; i < num1; i++) {
            arr.push(num2);
        }
    }
    return arr;
}

console.log(thisLengthThatValue(3, 3));
console.log(thisLengthThatValue(3, 4));
console.log(thisLengthThatValue(6, 2));
console.log(thisLengthThatValue(8, 3));

/* We set arr to an empty array
If num1 is equal to num2, then we print "Jinx!"
If num1 is not equal to num2, then we iterate through the array
At each iteration, we push num2 to the end of the array
After the FOR loop, we return arr */

//#################################################

// #7.

/* Fit the First Value
Your function should accept an array.
If value at [0] is greater than array’s length, print "Too big!";
if value at [0] is less than array’s length, print "Too small!";
otherwise print "Just right!". */

function fitTheFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!");
    } else if (arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}

fitTheFirstValue([7, 2, 3, 4, 5]);
fitTheFirstValue([4, 2, 3, 1]);
fitTheFirstValue([1, 2, 3]);

/* If the first value of the array is greater than the length of the array,
then we print "Too big!"
If the first value of the array is less than the length of the array,
then we print "Too small!"
If the first value of the array is equal to the length of the array,
then we print "Just right!" */

//#################################################

// #8.

/* Fahrenheit to Celsius
Kelvin wants to convert between temperature scales.
Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit,
and returns the equivalent temperature as expressed in Celsius degrees.
For review, Fahrenheit = (9/5 * Celsius) + 32. */

function fahrenheitToCelsius(fDegrees) {
    return (fDegrees - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(78));
console.log(fahrenheitToCelsius(102));
console.log(fahrenheitToCelsius(33));
console.log(fahrenheitToCelsius(122));

/* We return the formula for converting Fahrenheit to Celsius */

//#################################################

// #9.

/* Celsius to Fahrenheit
Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius,
and returns the equivalent temperature expressed in Fahrenheit degrees.
(°C × 9/5) + 32 = °F */

function celsiusToFahrenheit(cDegrees) {
    return cDegrees * 9 / 5 + 32;
}

console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(37));
console.log(celsiusToFahrenheit(0));

/* We return the formula for converting Celsius to Fahrenheit */

//#################################################

// #10.

/* (Optional): Do Fahrenheit and Celsius values equate at a certain number?
The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values
starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value. */

function fahrenheitToCelsius(fDegrees) {
    return (fDegrees - 32) * 5 / 9;
}

function celsiusToFahrenheit(cDegrees) {
    return cDegrees * 9 / 5 + 32;
}

function fahrenheitAndCelsius() {
    for (var i = 200; i >= -100; i--) {
        if (i == fahrenheitToCelsius(i)) {
            console.log(i);
        }
    }
}

fahrenheitAndCelsius();

/* We create two functions, one for converting Fahrenheit to Celsius and one for converting Celsius to Fahrenheit
We create a function that iterates through the numbers 200 to -100
If the current value of the iteration is equal to the value of the Fahrenheit to Celsius function,
then we print the current value of the iteration */

//#################################################

/* Printing out all Fahrenheit to Celsius values in a list to read it better */

function fahrenheitToCelsius(fDegrees) {
    return (fDegrees - 32) * 5 / 9;
}

function celsiusToFahrenheit(cDegrees) {
    return cDegrees * 9 / 5 + 32;
}

function fahrenheitAndCelsius() {
    for (var i = 200; i >= -100; i--) {
        var celsius = fahrenheitToCelsius(i);
        var fahrenheit = celsiusToFahrenheit(celsius);
        if (Math.abs(i - fahrenheit) < 0.0001) {
        console.log(i + "°F = " + celsius + "°C");
    }
    }
}

fahrenheitAndCelsius();

/* We create two functions, one for converting Fahrenheit to Celsius and one for converting Celsius to Fahrenheit
We create a function that iterates through the numbers 200 to -100
We create a variable called celsius that is equal to the value of the Fahrenheit to Celsius function
We create a variable called fahrenheit that is equal to the value of the Celsius to Fahrenheit function
If the absolute value of the difference between the current value of the iteration and fahrenheit is less than 0.0001,
then we print the current value of the iteration and the value of celsius */

//#################################################