const prompt = require('prompt-sync')();
// for loop in javascript
// for loop = loop a block of code no of times
// for in loop = loop through the keys of object
// for of loop = loops through the values of the object

// while loop = loops a block based on a specific condition
// do-while loop = while loop variant which runs atleast once

// For loop
/*
for(let i =0; i<14; i++) {
    console.log(i);
}  // print 0 to 13
*/

// program to add first 10 natural number
let sum = 0;
let n = prompt("Enter the value of n : ");
n=Number.parseInt(n);
for(let i = 0; i < n; i++) {
    sum +=i+1;
}
console.log("sum of first " + n + " natural numbers is " + sum);
// console.lop(i)  => it gives error because i is defined only for a block.(if we use var , it gives o/p 4 because once we declare var, it works for whole program but let is only for block)
// for in 

let obj = {
    ram: 10,
    shyam: 20,
    johns: 89,
    krish: 65
}
for (let a in obj){
    console.log("Marks of "+a+" is "+obj[a])

}

// for of
for(let b of "johns") {
    console.log(b);
}