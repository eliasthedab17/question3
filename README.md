# Zero Counter in an Array

## Description

This program counts how many zeros are present in a given array. It iterates through the array, checking each element, and increments a counter whenever a zero is found. The result is then printed to the console.

### Features:
- Initializes an array with predefined numbers.
- Counts the number of zeros in the array using a loop and a conditional expression.
- Outputs the total count of zeros in the array.

### Example:
For the array [12, 0, 5, 4, 0, 3]:
- There are 2 zeros in the array.
- The program outputs: The amount of numbers that are 0 in the array are: 2.

## Programmers

- *אליאס דבאג*
- *נור עמאר*

## Code

```javascript
let array = [12, 0, 5, 4, 0, 3];
let count = 0;

// Loop through the array and count zeros using a conditional expression.
for (let i = 0; i < array.length; i++) {
  array[i] == 0 ? count++ : count + 0;
}
console.log("The amount of numbers that are 0 in the array are: " + count);
