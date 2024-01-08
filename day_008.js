const prompt = require('prompt-sync')();
// Practice Set-2
// 1) use logical operators to find whether the age of a person lies between 10 and 20
let age = prompt("what is your age?");
if(age>10 && age<20) {
    console.log("your age lies between 10 and 20");
}
else {
    console.log("your age doesn't lies in given range");
}

// 2) demonstrate the user switch case statement in js

let age2 = prompt("what is your age1?");
age2 = Number.parseInt(age2);
switch(age2) {
    case 12:
        console.log("your age is 12");
    break;
    case 10:
        console.log("your age is 10");
    break;
    case 20:
        console.log("your age is 20");
    break;
    default:
        console.log("your age is not special");
    break;
}

// 3) write a javascript program to find whether a number is divisible by either 2 or 3?

let num = prompt("enter number to check");
num = Number.parseInt(num);
if(num%2 == 0 || num%3 == 0) {
    console.log("given number is divisible by 2 or 3");
}
else {
    console.log("given number is not divisible by 2 or 3");
}

// 4) write a javascript program to find whether a number is divisible by 2 and 3

if(num%2 == 0 && num%3 == 0) {
    console.log("number is divisible by 2 and 3")
} 
else {
    console.log("number is not divisible by 2 and 3")
}

// 6) print "you can drive" or "you can't drive " based on age greter than 18 using ternary operator

if(age > 18) {
    console.log("your age is ", age ," so you can drive");
}
else {
    console.log("your age is ",age ," so you can't drive")
}
