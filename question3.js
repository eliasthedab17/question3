//programers names:    אליאס דבאג      נור עמאר

//question 3: print the number of 0 in the array
let array = [12, 0, 5, 4, 0, 3];
let count = 0;
for (let i = 0; i < array.length; i++) array[i] == 0 ? count++ : count + 0;
console.log("the amount of numbers that are 0 in the array are: " + count);
