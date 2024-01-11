// functions in javascript

let a = 2;
let b = 3;
let c = 7;

console.log("Average of a and b is ", (a+b)/2);
console.log("done");
console.log("Average of B and C is", (b+c)/2)
console.log("done");
console.log("Average of A and C is ", (a+c)/2)
console.log("done");

// above code using function

function avg(x,y) {
    console.log("done");
    return (x+y)/2;

}
console.log("Average of a and b using function", avg(a,b));
console.log("average of b and c using function ", avg(b,c) );
console.log("average of a and c is ", avg(a,c));


const hello = () => {
    console.log("Hey! how are you?");
}
hello();

