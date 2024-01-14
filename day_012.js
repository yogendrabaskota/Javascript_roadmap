const prompt = require('prompt-sync')();

// Practice set

// 1) Write the program to print the marks of a student in an object using for loop.
console.log("using for loop ")
let marks = {
    ram : 90,
    shyam: 60,
    johns: 39,
    lovlina: 75
}
for(let i=0; i<Object.keys(marks).length;i++) {
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// 2) write a program in Q1 using for in loop
console.log("Using for in loop ")
for(let j in marks) {
    console.log("the marka of ", j ," is " + marks[j]);
}

// Q3) Write a program to print "try again" until the user enters the correct number:
let cn = 6;
let i;
while(i!=cn) {
    console.log("try again");
    i = prompt(" enter a correct number")
    

}
console.log("You have entered a correct number");

// Q3) write a function to find mean of 5 numbers

const mean = (a,b,c,d) => {
    return (a+b+c+d) / 4;


}
console.log(mean(4,5,6,7))