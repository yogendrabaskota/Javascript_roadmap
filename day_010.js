const prompt = require('prompt-sync')();
// while and do-while loopin js
// while loop = loops a block based on a specific condition
// do-while loop = while loop variant which runs atleast once
/* while loop:
syntax:
while (condition) {
    //code
}
note: if the condition never becomes false, the loop will never end and this might crash the runtime 
*/
let n = prompt("enter the value of n");
n = Number.parseInt(n);
let i = 0;
while(i<n){
    console.log(i);
    i++;
}
// do while loop  
let m = prompt("enter value of m ");
n = Number.parseInt(m);
let j = 0;
do {
    console.log(j);
    j++
} while(j<m);
// even the condition is false, do while loop print at least one, which is not possible in while loop. 
