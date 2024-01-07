const prompt = require('prompt-sync')();
// conditional statement

// there are 3 conditional statement in javascript: 
// 1] if statement 
// 2] if...else statement 
// 3] if..else if..else statement 

let a = prompt("hey! whats your age? ");
console.log("type of a is ",typeof a);  // always strings
console.log(a);
a = Number.parseInt(a);  //converting string to number
console.log("type of a become ",typeof a);

if(a>0){
   console.log("valid age");
}
else {
    console.log("invalid age");
}



if(a<0) {
    console.log("invalid age")
}
else if(a<18) {
    console.log("underage")
}
else if(a<60) {
    console.log("active age")
}
else {
    console.log("Old person")
}
console.log("Done!!")

// ternary operator
console.log("you can", (a<18? "not drive" : "drive"))
// (condition? "if_true" : "if_false")
